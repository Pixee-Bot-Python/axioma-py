#!/bin/bash
# shellcheck disable=SC2155 # Ignore combined declaration and assignment

# curl related functions

__corecurl_SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

[[ -z "${LOGGING_INCLUDED}" ]] && source "${__corecurl_SCRIPT_DIR}/core-logging.sh"
[[ -z "${VALIDATION_INCLUDED}" ]] && source "${__corecurl_SCRIPT_DIR}/core-utilities.sh"
[[ -z "${VALIDATION_INCLUDED}" ]] && source "${__corecurl_SCRIPT_DIR}/core-validation.sh"

# Ensure functions are included only once
if [[ -z "${CURL_INCLUDED}" ]]; then
  CURL_INCLUDED=1
  CURL_DEFAULT_CONNECTION_TIMEOUT=120
  CURL_DEFAULT_MAX_REQUEST_TIMEOUT=600
  CURL_NON_RETRYABLE_STATUSES=(400 401 403 404 422) # From the Octokit rety plugin: https://github.com/octokit/plugin-retry.js/blob/9a2443746c350b3beedec35cf26e197ea318a261/src/index.ts#L14)

  # Internal implementation for curl_with_retry which will log debug messages
  __curl_with_retry() {
    local url="$1"
    local max_retries="$2"                                      # Maximum retry attempts
    local backoff="$3"                                          # Initial backoff time (seconds)
    local max_wait="$4"                                         # Maximum wait time (seconds)
    local connect_timeout=${CURL_DEFAULT_CONNECTION_TIMEOUT}    # Max time to make the connection
    local max_request_time=${CURL_DEFAULT_MAX_REQUEST_TIMEOUT}  # Max time the request can take
    local retry=0                                               # Current retry

    log_debug "__curl_with_retry $*"

    shift 4 # Remove the first four arguments

    # see if we are overriding any defaulted curl arguments
    local curl_options=()
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --connect-timeout)
                connect_timeout="$2"
                shift 2
                ;;
            --max-time|-m)
                max_request_time="$2"
                shift 2
                ;;
            *)
                curl_options+=("$1")
                shift
                ;;
        esac
    done

    local original_errexit="$(get_errexit)"
    local original_pipefail="$(get_pipefail)"
    while ((retry < max_retries + 1)); do
      log_debug "curl -w \"%{response_code}\" --connect-timeout ${connect_timeout} --max-time ${max_request_time} --silent --fail --show-error ${curl_options[*]} ${url}"
      set +eo pipefail

      # shellcheck disable=SC2068
      response=$(curl -w "%{response_code}" --connect-timeout "${connect_timeout}" --max-time "${max_request_time}" --silent --fail --show-error "${curl_options[@]}" "${url}" 2>&1)
      exit_code=$?
      response_status="${response: -3}"
      response_body="${response:0:-3}"
      response_body="${response_body//[$'\t\r\n']}"
      reset_errexit "${original_errexit}"
      reset_pipefail "${original_pipefail}"
      if [[ "${response_body}" == "" ]]; then
        response_body="<empty>"
      fi
      log_debug "curl exit code: ${exit_code}, response status: ${response_status}, raw response: ${response_body}"

      # shellcheck disable=SC2076 # I want to compare literally to CURL_NON_RETRYABLE_STATUSES
      if [[ ${exit_code} -eq 0 || ${exit_code} -eq 22 ]]; then
        if [[ ${exit_code} -eq 0 && "${response_status}" =~ ^2 ]]; then
          # Success - return the response
          echo "${response_body}"
          echo "${response_status}"
          return 0
        elif [[ " ${CURL_NON_RETRYABLE_STATUSES[*]} " =~ " ${response_status} " ]]; then
          log_warning "curl call to ${url} failed with: ${response_status} - ${response_body} (no point retrying)"
          echo "${response_body}"
          echo "${response_status}"
          return 1
        fi
        log_warning "curl call to ${url} failed with response: ${response_status} - ${response_body} (can be retried)"
      else
        log_warning "curl call to ${url} failed with exit code: ${exit_code} - ${response_body} (can be retried)"
        response_status=500 # emulate Internal Server error
      fi

      if (( backoff == 0)); then
        wait_time=0 # retry immediately
      else
        wait_time=$((backoff * (2 ** retry)))
        if (( retry > 1 )); then
          jitter=$((RANDOM % (wait_time / 2)))  # Add jitter (randomness) to the wait time
          wait_time=$((wait_time + jitter))
        fi
      fi

      # Exit if maximum wait time is exceeded
      if (( wait_time >= max_wait )); then
          echo "curl failed to obtain a valid response after ${max_wait} seconds from ${url} (exit code: ${exit_code} - ${response_status}: ${response_body}). Please check the server URL and network connection."
          echo "${response_body}"
          echo "${response_status}"
          return 1
      fi

      retry=$((retry + 1))
      if (( retry < max_retries + 1 )); then
        log_debug "Waiting for ${wait_time} seconds before retry ${retry} of ${max_retries}..."
        sleep "${wait_time}"
      fi
    done

    message="curl failed to obtain a valid response from ${url} after ${retry} attempts (Status: ${response_status}"
    if [[ "${response_body}" != "<empty>" && "${response_body}" != "" ]]; then
      message="${message}, Response: ${response_body}"
    fi
    echo "${message}). Please check the server URL and network connection."
    echo "${response_status}"
    return 1
  }

  # makes a curl request with retry and exponential backoff
  # By default this will retry 4 times (ie 5 attempts in total), starting with a 5 second delay and increasing exponentially
  # specify --retry and --retry-delay respectively to control these
  # Inputs:
  # - The url for the request - this must be the first argument
  # - Any other curl options
  # Returns:
  # The http status code and response body for success; the error message for a failure
  #
  # Example Usage:
  # GET with 2 retries with a 1 second delay before the first retry
  # response=$(curl_with_retry "http://example.com" --retry 2 --retry-delay 1)
  # return_code=$?
  # response_body=$(echo "${response}" | head -n 1)
  # response_status=$(echo "${response}" | tail -n 1)
  # if [[ ${return_code} -eq 0 ]]; then
  #   echo "Response: ${response_status} - ${response_body}"
  # else
  #   echo "Failure: ${return_code} - ${response_body}"
  # fi
  #
  # POST with retry disabled
  # curl_with_retry "https://httpbin.org/post" --request POST --data "Some body" -u "${token}" -H "Accept: application/json" --retry 0
  #
  curl_with_retry() {
    local url="$1"
    local max_retries=4 # Default number of retries
    local backoff=5     # Default initial backoff time (seconds)
    local max_wait=120  # Default Maximum retry wait time
    shift 1

    if ! (validate_mandatory_parameter "url" "${url}"); then
      exit 1
    fi

    # See if any of our default values have been overridden
    # If so, extract them and save the others to pass to curl
    local curl_options=()
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --retry)
                max_retries="$2"
                shift 2
                ;;
            --retry-delay)
                backoff="$2"
                shift 2
                ;;
            --retry-max-time)
                max_wait="$2"
                shift 2
                ;;
            *)
                curl_options+=("$1")
                shift
                ;;
        esac
    done

    local response
    local response_body
    local response_status
    local return_code
    response=$(__curl_with_retry "${url}" "${max_retries}" "${backoff}" "${max_wait}" "${curl_options[@]}")
    return_code=$?
    response_body=$(echo "${response}" | tail -n 2 | head -n 1 || true)
    response_status=$(echo "${response}" | tail -n 1)
    echo "${response_body}"
    echo "${response_status}"
    return "${return_code}"
  }

fi
