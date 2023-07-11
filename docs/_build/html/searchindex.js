Search.setIndex({docnames:["axiomapyapi","changelog","contributing","endpoints","examples2","index","nb_examples/getting_started","nb_examples/with_axiomaapi","nb_examples/with_entitybase","nb_examples/with_sessions","odatafilterhelpers","sessions"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,nbsphinx:4,sphinx:56},filenames:["axiomapyapi.rst","changelog.rst","contributing.rst","endpoints.rst","examples2.rst","index.rst","nb_examples/getting_started.ipynb","nb_examples/with_axiomaapi.ipynb","nb_examples/with_entitybase.ipynb","nb_examples/with_sessions.ipynb","odatafilterhelpers.rst","sessions.rst"],objects:{"axiomapy.AxiomaSession":{close:[11,1,1,""],get_session:[11,1,1,""],init:[11,1,1,""],test:[11,1,1,""],use_session:[11,1,1,""]},"axiomapy.axiomaapi":{AnalysesAPI:[0,0,1,""],AnalysesPerformanceAPI:[0,0,1,""],AnalysesRiskAPI:[0,0,1,""],AnalysisDefinitionAPI:[0,0,1,""],BatchDefinitionsAPI:[0,0,1,""],BulkAPI:[0,0,1,""],EntitiesAPI:[0,0,1,""],MarketDataSourcesAPI:[0,0,1,""],MetaDataAPI:[0,0,1,""],PortfolioGroupsAPI:[0,0,1,""],PortfoliosAPI:[0,0,1,""],RiskModelDefinitionsAPI:[0,0,1,""],TemplatesAPI:[0,0,1,""]},"axiomapy.axiomaapi.AnalysesAPI":{get_analyses:[0,1,1,""],get_analyses_log:[0,1,1,""],get_analyses_status:[0,1,1,""],get_analysis_is_running:[0,1,1,""],status_is_complete:[0,1,1,""],status_is_running:[0,1,1,""]},"axiomapy.axiomaapi.AnalysesPerformanceAPI":{get_logs:[0,1,1,""],get_report_status:[0,1,1,""],get_request:[0,1,1,""],get_results_asset_factor_contributions:[0,1,1,""],get_results_asset_returns:[0,1,1,""],get_results_brinson_attribution:[0,1,1,""],get_results_brinson_attribution_time_series:[0,1,1,""],get_results_factor_attribution:[0,1,1,""],get_results_factor_attribution_time_series:[0,1,1,""],get_results_summary:[0,1,1,""],get_results_warnings_errors:[0,1,1,""],get_status:[0,1,1,""],post_missing_precomputed:[0,1,1,""],post_performance_analysis:[0,1,1,""],post_precompute:[0,1,1,""]},"axiomapy.axiomaapi.AnalysesRiskAPI":{get_batch_request:[0,1,1,""],get_batch_request_status:[0,1,1,""],get_instruments_request:[0,1,1,""],get_portfolio_request:[0,1,1,""],get_positions_request:[0,1,1,""],get_risk_model_logs:[0,1,1,""],get_risk_model_request:[0,1,1,""],get_risk_model_request_status:[0,1,1,""],get_risk_model_results:[0,1,1,""],post_batch_analyses:[0,1,1,""],post_instrument_analyses:[0,1,1,""],post_portfolio_analyses:[0,1,1,""],post_positions_analyses:[0,1,1,""],post_risk_model_request:[0,1,1,""]},"axiomapy.axiomaapi.AnalysisDefinitionAPI":{get_analysis_definition:[0,1,1,""],get_analysis_definitions:[0,1,1,""],post_analysis_definition:[0,1,1,""],post_share_analysis_definition:[0,1,1,""]},"axiomapy.axiomaapi.BatchDefinitionsAPI":{get_batch_definition:[0,1,1,""],get_batch_definitions:[0,1,1,""]},"axiomapy.axiomaapi.BulkAPI":{patch_portfolios_payload:[0,1,1,""]},"axiomapy.axiomaapi.EntitiesAPI":{delete_entity:[0,1,1,""],get_entities:[0,1,1,""],get_entity:[0,1,1,""],get_entity_links:[0,1,1,""]},"axiomapy.axiomaapi.MarketDataSourcesAPI":{get_market_data_instrument_attributes_at_date:[0,1,1,""],get_market_data_instrument_scenarios_at_date:[0,1,1,""],get_market_data_instrument_scenarios_dates:[0,1,1,""],get_market_data_source:[0,1,1,""],get_market_data_sources:[0,1,1,""],patch_market_data_instrument_attributes:[0,1,1,""],patch_market_data_instrument_scenarios_at_date:[0,1,1,""]},"axiomapy.axiomaapi.MetaDataAPI":{get_template:[0,1,1,""],get_template_schema:[0,1,1,""],get_templates:[0,1,1,""]},"axiomapy.axiomaapi.PortfolioGroupsAPI":{delete_portfolio_group:[0,1,1,""],get_portfolio_group:[0,1,1,""],get_portfolio_groups:[0,1,1,""],patch_portfolio_groups:[0,1,1,""],post_portfolio_group:[0,1,1,""],put_portfolio_group:[0,1,1,""]},"axiomapy.axiomaapi.PortfoliosAPI":{delete_portfolio:[0,1,1,""],delete_portfolio_benchmark:[0,1,1,""],delete_positions:[0,1,1,""],delete_valuation:[0,1,1,""],get_portfolio:[0,1,1,""],get_portfolio_benchmark:[0,1,1,""],get_portfolios:[0,1,1,""],get_position_dates:[0,1,1,""],get_positions_at_date:[0,1,1,""],get_valuation_at_date:[0,1,1,""],get_valuation_dates:[0,1,1,""],patch_portfolios:[0,1,1,""],patch_positions:[0,1,1,""],patch_valuations:[0,1,1,""],post_portfolio:[0,1,1,""],post_position:[0,1,1,""],post_valuation:[0,1,1,""],put_portfolio:[0,1,1,""],put_portfolio_benchmark:[0,1,1,""],put_valuation:[0,1,1,""],rollover_request:[0,1,1,""]},"axiomapy.axiomaapi.RiskModelDefinitionsAPI":{get_risk_model_definition:[0,1,1,""],get_risk_model_definitions:[0,1,1,""]},"axiomapy.axiomaapi.TemplatesAPI":{delete_entity:[0,1,1,""],get_entities:[0,1,1,""],get_entity:[0,1,1,""],get_templates:[0,1,1,""],get_templates_by_type2:[0,1,1,""],get_templates_by_type:[0,1,1,""],patch_entities:[0,1,1,""],post_entity:[0,1,1,""],put_entity:[0,1,1,""]},"axiomapy.axiomaapi.enums":{AggregateOption:[0,0,1,""],ComputeOption:[0,0,1,""],DataPartition:[0,0,1,""],FinishedStatuses:[0,0,1,""],IdentifierType:[0,0,1,""],QuantityType:[0,0,1,""],Status:[0,0,1,""]},"axiomapy.axiomaapi.enums.AggregateOption":{DoNotProcess:[0,2,1,""],OnCompletion:[0,2,1,""]},"axiomapy.axiomaapi.enums.ComputeOption":{All:[0,2,1,""],AsStored:[0,2,1,""],MissingOnly:[0,2,1,""]},"axiomapy.axiomaapi.enums.DataPartition":{Axioma:[0,2,1,""],AxiomaASIA:[0,2,1,""],AxiomaEMEA:[0,2,1,""],AxiomaTEST:[0,2,1,""],AxiomaUS:[0,2,1,""],Static:[0,2,1,""]},"axiomapy.axiomaapi.enums.FinishedStatuses":{Completed:[0,2,1,""],Failed:[0,2,1,""]},"axiomapy.axiomaapi.enums.IdentifierType":{AxiomaDataId:[0,2,1,""],CUSIP:[0,2,1,""],ClientGiven:[0,2,1,""],Currency:[0,2,1,""],ISIN:[0,2,1,""],Portfolio:[0,2,1,""],PortfolioId:[0,2,1,""],RedCodeTicker:[0,2,1,""],SEDOL:[0,2,1,""],TICKER:[0,2,1,""]},"axiomapy.axiomaapi.enums.QuantityType":{AllocationPercent:[0,2,1,""],DirtyMarketValue:[0,2,1,""],MarketValue:[0,2,1,""],NotionalValue:[0,2,1,""],NumberOfInstruments:[0,2,1,""],OriginalNotional:[0,2,1,""],UnadjustedAssetCount:[0,2,1,""],WeightAsPercent:[0,2,1,""]},"axiomapy.axiomaapi.enums.Status":{Completed:[0,2,1,""],Created:[0,2,1,""],Failed:[0,2,1,""],PostProcessingFailed:[0,2,1,""],Running:[0,2,1,""],Submitted:[0,2,1,""],Unknown:[0,2,1,""]},"axiomapy.odatahelpers":{oDataFilterHelper:[10,0,1,""]},"axiomapy.odatahelpers.oDataFilterHelper":{and_str:[10,2,1,""],contains:[10,1,1,""],ends_with:[10,1,1,""],equals:[10,1,1,""],greater_than:[10,1,1,""],greater_than_or_equal:[10,1,1,""],group:[10,1,1,""],in_:[10,1,1,""],length:[10,1,1,""],less_than:[10,1,1,""],less_than_or_equal:[10,1,1,""],not_:[10,1,1,""],not_equals:[10,1,1,""],not_str:[10,2,1,""],or_str:[10,2,1,""],starts_with:[10,1,1,""],to_lower:[10,1,1,""],to_upper:[10,1,1,""]},axiomapy:{AxiomaSession:[11,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute"},terms:{"100":8,"10t00":8,"123330":7,"123442":7,"200":0,"201":0,"2020":[6,7,8],"2021":7,"204":0,"2136463":7,"32440128549":6,"3707082":7,"514431":6,"514453":6,"5337":6,"57133":6,"5abb5d0748df4e8ea733606b9268c3e5":11,"6288458702":6,"abstract":8,"boolean":10,"case":[2,6,7,8],"class":[0,4,6,7,8,9,10,11],"default":[0,1,6,8,10,11],"enum":[0,6,8],"float":10,"function":[3,8,10,11],"import":[0,4,8],"int":[0,3,6,7,8,10],"new":[0,2,4,8,9],"null":[6,10],"return":[0,3,6,7,8,9,10,11],"static":[0,10],"super":8,"switch":[4,8],"true":[0,6,7,10],"try":[6,8],"while":[5,6,8],For:[6,8,10],The:[0,1,2,4,6,7,8,9,10,11],Then:2,There:[4,6,8],Use:9,Used:8,Using:[2,4,9],With:7,__init:8,__init__:8,_class_prop_nam:8,_date_field_d:8,_date_field_datetim:8,_date_field_str:8,_enum_field:8,_get_as_it:8,_get_prop_typ:8,_id:8,_inner_ent:8,_list_of_ent:8,_make_kei:8,_not_serialize_field:8,_template_map:8,_template_nam:8,_toc453752358:10,_translate_to_class_prop:8,aapl:6,abc:8,abil:8,abl:8,about:5,abov:[5,6,7],accept:[0,7,8],access:[0,4,5,8,9,11],accessor:4,accord:[0,10],accordingli:11,across:0,action:[0,3,7,8],activ:[0,4],add:[4,8],added:0,addit:[0,2,8],advanc:5,advantag:6,after:[0,8],again:[6,9],against:0,aggreg:[0,6],aggregationopt:6,all:[0,1,6,7,8,10],all_exampl:4,allocationperc:0,allow:[5,6,8,9,11],along:[0,7],alongsid:5,alreadi:[0,5,6],also:[2,4,6,7,8,9],altern:[7,9],alwai:[5,6],analsysisdefinit:8,analys:[0,3,6,7],analyses_paramet:[0,6,7],analyses_test:7,analysesapi:5,analysesperformanceapi:[5,7],analysesriskapi:[5,6,7],analysi:[0,3,4],analysis_def:0,analysis_def_id:0,analysis_id:6,analysisd:[6,7],analysisdefinit:[6,8],analysisdefinitionapi:[5,6],analyt:[0,3,7],and_str:10,ani:[0,2,6,8,9,10,11],anoth:8,another_sampl:8,anyth:0,apart:8,api:[0,5,6,7,8,9,11],api_typ:[6,11],api_vers:11,app:8,appl:8,appli:[0,8],applic:[5,8],application_nam:[7,11],architectur:4,arg:8,arguabl:8,argument:[1,6,8,11],art:8,as_csv:[0,6],as_of_d:[0,6],asctim:[6,7,9],asofd:[3,6,7],aspect:11,assert:9,asset:[0,3],assign:11,assist:6,associ:[6,8],asstor:0,async:11,attain:7,attempt:8,attribut:[0,3,4,8],authent:[6,9,11],automat:[2,8],avail:[0,5,6,7],avoid:6,axioma:[0,2,6,8,9],axiomaapi:[4,5,6,7,8],axiomaasia:0,axiomadataid:0,axiomaemea:0,axiomaexcept:6,axiomapi:[0,1,4,8,9,10,11],axiomarequesterror:6,axiomarequeststatuserror:6,axiomarequestvalidationerror:6,axiomarespons:7,axiomarisk:5,axiomasess:[1,5,6,7],axiomatest:0,axiomau:[0,6],axrisk:3,back:[2,9],base:[0,4,6,7,8],basecontext:11,bash:2,basic:6,basicconfig:[6,7,9],bat:2,batch:[0,3],batch_definit:[],batch_definition_id:0,batchdefinitionsapi:5,becaus:10,been:0,befor:[2,8,9,11],behav:8,behavior:0,being:[0,8],below:[6,7,8,9],benchmark:[0,3,7],benefit:8,better:8,between:[8,9],black:2,block:[8,9],bodi:[0,7],boiler:8,boilerpl:5,bool:[0,3,10],both:[6,10],branch:2,brinson:[0,3],build:[5,6,8],build_doc:2,bulk:[0,4],bulkapi:5,busi:8,bytesio:7,calcul:[0,7],call:[8,9,11],camel:[6,8,10],camel_case_sampl:8,camel_case_transl:8,camelcas:8,can:[0,2,4,6,7,8,9,11],capabl:10,captur:8,cell:2,certif:11,challeng:8,chang:[2,5,7,9],charact:10,check:[0,4,8,9],checkout:2,chees:8,choos:7,class_prop:8,class_prop_nam:8,class_prop_valu:8,class_properti:8,classmethod:11,clean:4,clear:5,clearli:6,client:[0,1,6,9,11],client_id:[6,7,9,11],clientgiven:0,clientid:[6,8],clone:[2,4,5],cloneabl:8,cloned_sampl:8,cloned_sample_2:8,close:[6,9,11],cmd:[2,4],code:[0,2,5,7,8,9],collabor:[5,8],collect:[0,4,6],column:8,come:5,command:[5,6],commit:2,common:[0,4,8],commonbas:[],commonbasetyp:8,compar:[6,10],comparison:6,complet:[0,6,7,10],composit:0,comprehes:8,comput:[0,6],computeopt:6,computingbehavior:7,config:[2,6],connect:[6,7,8,9,11],consid:8,consist:[7,8],construct:[6,8],contain:[2,6,7,8,10],content:[0,6,7,8],context:[4,8,11],contextu:8,contribut:[0,3,8],contributor:5,control:[0,6,8],conveni:5,convent:[8,10],convert:[2,8,10],convient:8,copi:[0,4,7,9],core:[6,8],coroutin:11,correctli:[6,8],correl:0,correspond:[0,6],could:8,covariancecomputationslog:0,cover:5,coverag:[2,6],creat:[0,2,4,5,8,9,11],creation:[8,11],credenti:[2,4,6],criteria:0,csv:[0,6],cumbersom:8,currenc:[0,6],current:[0,6,7,8,9,11],cusip:0,custom:[5,8],data:[0,3,4,5,6,7,8,9],datamodel:[6,8],date:[0,6,7,8],date_:0,date_arg_fmt:8,date_arg_pars:8,date_field_d:8,date_field_datetim:8,date_field_str:8,date_to_load_posit:6,datefieldd:8,datefielddatetim:8,datefieldstr:8,datefmt:[6,7,9],datetim:[6,7,8],ddt00:8,decor:8,def:[6,8],default_app:11,default_curr:6,defaultcurr:6,defaultdatapartit:6,defin:[0,2,4,8],definit:[0,3,7,8],definition_nam:6,delet:[0,3,6],delete_ent:[0,3],delete_portfolio:[0,3,6],delete_portfolio_benchmark:[0,3],delete_portfolio_group:[0,3],delete_posit:[0,3,6],delete_valu:[0,3],delimit:6,depend:[2,4,8],descript:[0,10,11],deserialis:8,design:[4,5],desir:7,detail:[0,1,5,6],determin:8,develop:[2,4,5,8],dict:[0,3,5,8,11],dictionari:[0,8],dictofcommonbas:8,differ:[8,9],direct:[6,8],directli:[4,6,7,8,9],directori:7,dirtymarketvalu:0,discuss:5,distinct:8,do_not_clon:8,do_not_seri:8,do_not_serialis:8,doc:[5,8,10],docstr:2,document:[1,5,6,8],doe:[0,6,8],doesnt:6,domain:[1,6,7,9,11],don:5,done:7,donotprocess:0,download:[0,4],dt00:8,dump:8,dure:7,dynam:0,each:[0,2,7,8],easi:[5,8],easier:6,easili:8,edit:2,either:[2,6,8],element:[0,8],els:[0,8],enabl:8,encod:0,end:[7,10],enddat:7,endpoint:11,ends_with:10,endswith:10,ensur:2,enter:[4,7,9],entit:8,entiti:[0,3,4,9],entities_remov:0,entities_upsert:0,entitiesapi:[5,6],entity2:8,entity_def:8,entitybas:4,entitycollectionbas:8,entitymap:8,entitysequ:8,entri:[0,8],enum_field:8,enumbas:4,enumer:[5,6,8],enumfield:8,enumtyp:8,environ:[4,5],equal:[6,8,10],equiti:6,errata03:10,error:[0,3,6],etc:[2,8,11],even:0,event:11,event_hook:11,everyth:2,exampl:[1,2,6,7,8,9],except:[6,8],exist:[0,6,8],experi:[5,8],explicitli:[6,8],explit:8,explor:6,expos:8,exposur:7,extern:8,extra:8,extract:7,facili:8,factor:[0,3,7],fail:[0,8],fals:[0,7,8,10],familiar:[5,6,8],featur:8,fetch:[0,6,7],few:6,field:[6,8,10],field_nam:10,file:[2,4,7,9],filter:[0,2,4,10,11],filter_:[6,10],filter_result:[0,6],find:4,finish:9,first:[0,6,10],flag:0,flake8:2,flow:6,folder:[2,4,6,7,9],folio:10,follow:[6,7,8,9],form:[0,7],format:[0,2,6,7,8,9],found:6,from:[0,1,2,4,5,7,8,9,11],from_dict:8,fulfil:0,full:[8,10],fulli:5,furhter:6,further:[6,7],gain:6,gbp:6,gener:[0,4,6,7],get:[0,3,4,8,9,11],get_analys:[0,3,6],get_analyses_log:[0,3,6],get_analyses_statu:[0,3,6],get_analysis_definit:[0,3,6],get_analysis_is_run:0,get_as_inst:8,get_batch_definit:[0,3],get_batch_request:[0,3],get_batch_request_statu:[0,3],get_ent:[0,3,6],get_entity_link:[0,3],get_enum_valu:8,get_instruments_request:[0,3],get_log:[0,3,7],get_market_data_instrument_attributes_at_d:[0,3],get_market_data_instrument_scenarios_at_d:[0,3],get_market_data_instrument_scenarios_d:[0,3],get_market_data_sourc:[0,3],get_portfolio:[0,3,6,7],get_portfolio_benchmark:[0,3],get_portfolio_group:[0,3],get_portfolio_request:[0,3],get_position_d:[0,3,6],get_positions_at_d:[0,3],get_positions_request:[0,3],get_report_statu:[0,3],get_request:[0,3],get_results_asset_factor_contribut:[0,3],get_results_asset_return:[0,3],get_results_brinson_attribut:[0,3],get_results_brinson_attribution_time_seri:[0,3],get_results_factor_attribut:[0,3],get_results_factor_attribution_time_seri:[0,3],get_results_summari:[0,3],get_results_warnings_error:[0,3],get_risk_model_definit:[0,3],get_risk_model_log:[0,3,7],get_risk_model_request:[0,3],get_risk_model_request_statu:[0,3,7],get_risk_model_result:[0,3,7],get_sess:[9,11],get_statu:[0,3,7],get_templ:[0,3],get_template_schema:[0,3],get_templates_by_typ:[0,3],get_templates_by_type2:[0,3],get_us:[6,7,9],get_valuation_at_d:[0,3],get_valuation_d:[0,3],getter:8,git:[2,4],gitattribut:2,gitconfig:2,githhub:2,github:[2,5],given:[0,7,11],global:[6,9],goal:8,googl:2,great:8,greater:[5,10],greater_than:10,greater_than_or_equ:10,group:[0,3,10],guid:[4,5,6],handl:[6,8],handler:6,has:[6,7,8],have:[0,1,4,5,6,8],head:5,header:[0,6,7],help:[2,6,7,8,10],helper:6,here:[4,6,8,11],hidden:8,hint:[2,8],hook:[2,11],how:[2,4,7,9],howev:[6,7,8],html:[5,8,10],http:[3,5,6,8,10,11],httpx:11,httpxlog:11,id_:[0,8],ident:0,identif:8,identifi:[0,6,8],ignor:8,ignore_non:8,illustr:[6,8],implement:11,import_set:0,improv:[5,8],in_:[6,10],includ:[0,2,6,8],increas:8,index:5,indic:8,info:[2,6,7,9],inform:[6,8,10],init:[8,9,11],initi:[0,1,11],initialis:[8,9],inner_ent:8,input:[0,7,10],insensit:8,insensitivti:8,insid:5,instal:[2,4],instanc:[0,2,5,6,8,11],instead:6,instruct:5,instrument:[0,3,7,8],instrument_attributes_remov:0,instrument_attributes_upsert:0,instrument_scenarios_remov:0,instrument_scenarios_upsert:0,instrumentanalyticslog:0,instrumentmap:6,instur:8,intellisens:8,intend:[6,8],interchang:8,interest:8,interfac:[5,8],interrog:8,intitialis:8,introduc:8,intuit:[5,8],ipython:4,isin:[0,6],item:[0,6,8],iter:8,iterablecommonbasetyp:8,iterableenumtyp:8,its:[0,5,8],itself:[8,10],job:[0,7],join:[6,8],json:[0,4,6,7,8],jupyt:4,just:6,kei:[6,8],kernel:4,keyword:11,kit:5,known:8,label:11,languag:8,latest:[0,6],latestpositiond:6,launch:4,layer:8,least:6,leav:9,left:10,len:8,length:10,less:[5,8,10],less_than:10,less_than_or_equ:10,level:[6,7,8,9],levelnam:[6,7,9],leverag:[6,8],librari:[6,8],like:[0,6,8],limit:0,link:0,lint:2,list:[0,3,4,6],list_of_ent:8,load:[4,6,7,9],load_credenti:[4,6,7,9],load_sample_data:4,local:[5,7],locat:[2,6,7],log:[0,3,4,5,7,11],logic:8,long_nam:6,longnam:6,look:6,lower:10,lowercas:10,mac:6,made:6,mai:[4,6,7,8],main:7,make:[2,6,8,9,11],manag:[5,6,7,8,9,11],mani:6,manual:4,map:[4,6],map_of_ent:8,mark:8,market:[0,3],market_data_source_id:0,marketdatasourcesapi:5,marketvalu:[0,6],me1:9,me1_check:9,me2:9,me2_check:9,me3:9,mean:8,meant:10,meet:0,member:8,messag:[0,6,7,9],metadata:3,metadataapi:[5,6],method:[0,6,8,9,10,11],middl:8,miss:[0,3],missingonli:[0,6,7],mode:2,model:[0,3,4,5,8],model_prop_nam:8,modifi:0,modul:[4,7],more:[0,1,5,8],most:6,move:[8,9],msft:6,much:6,multipart:7,multipl:0,must:[4,6,8,11],mutablemap:4,mutablesequ:4,my_ptf:6,name:[0,3,4,6,7,8,10],name_of_your_branch:2,namelist:7,necessari:[6,7],need:[0,4,5,6,8,9],neq:10,nest:4,nested_entity1:8,nested_entity2:8,nested_entity_dict:8,nestedent:8,new_sampl:8,next:[7,9],non:[0,8],none:[0,6,8,10,11],not_:10,not_equ:10,not_serialize_field:8,not_str:10,notabl:1,note:6,notebook:[2,4,8],notepad:4,notionalvalu:0,now:[1,5],number:[0,8,10],numberofinstru:0,oasi:10,object:[1,7,8],odata:[4,10],odatafilterhelp:[5,6],odatahelp:[6,10],offer:[5,6,8],offici:5,onc:[0,5,6,7],oncomplet:[0,6],one:[0,5,6,10],onli:[0,1,4,8,10],open:[4,9,10],oper:[0,6,10],operand:10,opportun:8,option:[0,2,4,8,11],or_str:10,order:[0,1,2,4,6],orderbi:0,org:[5,8,10],organis:6,origin:[0,2,7,9],original_respons:7,originalnot:0,other:[4,7,8],othertyp:8,otherwis:[4,8,9,10],our:[1,5],output:[2,7,8],outsid:9,over:0,overrid:8,overview:4,overwrit:0,own:2,owner:[6,8],pa_param:7,pa_task:7,packag:[2,6,7,8],page:[2,5],panda:6,param:[0,6,10],paramet:[0,6,7,10,11],parent:6,part2:10,part:[2,8],particular:[0,6],partit:[0,6],partner:5,pass:[0,2,6,8,10,11],password:[1,6,7,9,11],patch:[0,3,6],patch_ent:[0,3],patch_market_data_instrument_attribut:[0,3],patch_market_data_instrument_scenarios_at_d:[0,3],patch_portfolio:[0,3],patch_portfolio_group:[0,3],patch_portfolios_payload:[0,3],patch_posit:[0,3,6],patch_valu:[0,3],payload:0,pear:8,pep8:8,per:5,perform:[0,3,4,8],performanceattributionset:6,performanceattributionsettingsid:7,pid:6,pip:[2,4,5],place:0,plate:8,pleas:1,point:[6,11],pool:8,popul:4,port:10,portfolio:[0,3,4,8,10],portfolio_group_id:0,portfolio_id:[0,6,7],portfoliogroupsapi:[5,6],portfolioid:[0,7],portfolios_dict:0,portfolios_remov:0,portfolios_respons:7,portfolios_upsert:0,portfoliosapi:[5,6,7],posit:[0,3,4,8],position_d:6,position_dates_resp:6,positionasofd:6,positiond:6,positions_remov:[0,6],positions_upsert:[0,6],possibl:8,post:3,post_analysis_definit:[0,3],post_batch_analys:[0,3],post_batch_definit:[],post_ent:[0,3],post_instrument_analys:[0,3],post_missing_precomput:[0,3],post_performance_analysi:[0,3,7],post_portfolio:[0,3,6],post_portfolio_analys:[0,3,6],post_portfolio_group:[0,3],post_posit:[0,3],post_positions_analys:[0,3],post_precomput:[0,3,7],post_risk_model_request:[0,3,7],post_share_analysis_definit:[0,3],post_valu:[0,3],postprocessingfail:0,pprint:[7,8],pre:[0,2,7],pre_script:2,precomput:[3,7],precompute_dates_paramet:0,precompute_param:7,precompute_paramet:[0,7],predefin:0,prefer:[6,7],prepar:8,present:8,previou:1,primari:8,print:[6,7,8,9],privat:6,process:[0,8],processeachitem:0,project:[5,6],prop:8,prop_type_enum:8,properti:[0,6,8,9],provid:[0,4,5,8,9],proxi:11,ptf:6,pull:2,push:2,put:3,put_ent:[0,3],put_portfolio:[0,3],put_portfolio_benchmark:[0,3],put_portfolio_group:[0,3],put_valu:[0,3],python:[2,4,5,8],qontigo:5,qualifi:8,quantiti:[0,6],queri:[0,6,9],queue:0,rather:[0,8],raw:[0,7],raw_result:7,read:5,read_csv:6,readi:[5,11],reason:8,receiv:8,recommend:5,recomput:0,record:[1,6],redcodetick:0,reduc:[5,8],redund:8,refer:[1,4,8],referenc:4,refin:7,reflect:8,relat:6,releas:1,relev:[6,8],remaind:8,remot:[2,8],remov:[0,2,4,11],replac:[0,4,6],replic:10,repo:4,repons:7,report:[0,3],repositori:[2,5],repres:[0,6,8],represent:[5,8],req:7,request:[0,2,3,4,6,8,9,11],request_id:[0,6,7],requestid:[3,6,7],requir:[0,1,5,6,8,9,11],resolv:8,resourc:[6,8,11],respons:[0,6,7,8,11],rest:[5,6,8,11],rest_api:11,result:[0,3,4,7],retri:11,retriev:0,return_respons:[0,6,7],right:10,risk:[0,3,4],risk_model_definition_id:0,risk_model_paramet:[0,7],risk_param:6,riskmodelanalysislog:0,riskmodeldefinitionid:7,riskmodeldefinitionsapi:[5,6],rms_paramet:7,roll:0,rollov:[0,3],rollover_d:0,rollover_request:[0,3],root:6,rtype:10,rule:[8,10],run:[0,2,8,9],run_all_exampl:2,same:[7,8,11],sampl:[4,6,7,9],sample_data:4,sample_ent:8,sample_entity_dict:8,sample_from_dict:8,sample_to_seri:8,sampleent:8,sampleentitylist:8,sampleentitymap:8,sampleenum:8,sampletemplatedent:8,save:7,scale:[0,6],scenario:[0,3],schema:[0,3],scope:8,script:2,sdk:[5,8,11],seamlessli:8,search:[0,4,5],second:[4,10],secondari:8,section:[7,8],secur:0,security_cod:0,security_nam:0,sedol:0,see:[2,5,6,8,9,10],seen:6,select:4,self:8,send:8,sequenc:[6,8],seri:[0,3,7,8],serial:4,serialis:8,server:6,servic:4,servicescach:0,session1:9,session:[0,4,5,7,8],sesssion:4,set:[0,2,4,5,6,7,8,9,10,11],setter:8,share:[0,3,6],share_def:0,should:[2,8,9],show:[6,7,8],show_raw_result:[0,7],side:6,simpl:8,sinc:8,singl:[0,11],skip:[0,7,9],snake:8,snake_cas:8,snakecas:8,softwar:5,some:[4,7,8,9],some_templ:8,sort:0,sourc:[0,3,8,10,11],special:8,specif:[0,6,8],specifi:[0,6,9],speicifc:9,split:[6,7],standard:[6,8],start:[0,4,7,10,11],startdat:7,starts_with:[6,10],startswith:10,stat:8,statement:6,statfactori:8,statist:[0,7],statisticdefint:8,statu:[3,6,7],status_cod:6,status_is_complet:0,status_is_run:0,stdout:6,step:7,still:[0,6,7],store:0,str:[0,3,8,10,11],str_test:8,stream:0,string:[0,6,8,10],stringio:6,style:2,sub:[0,8],subclass:8,submit:[0,6],subset:7,substr:10,succe:0,success:0,successfulli:0,summari:[0,3],suppli:0,support:[5,8],sure:2,sync:11,syntax:[6,10],system:5,tag:2,take:6,taken:8,task:[0,2,6,7],team:[0,6,8],templat:[0,3,6,8],template_nam:0,templatedent:8,templatedentitybas:4,templatenam:[3,8],templatesapi:[5,6],test:[5,6,7,8,9,11],test_portfolio:6,test_portfolio_nam:[],text:[6,11],than:[0,8,10],thei:[6,8],them:4,therefor:8,thi:[0,1,5,6,7,8,9,10,11],third:4,those:[0,8],though:8,throttl:11,through:[7,8,9,11],ticker:[0,6],time:[0,3,5,8,9],timedelta:7,to_dict:8,to_list:6,to_low:10,to_upp:10,todai:8,token:11,tolow:10,top:[0,6,7],topic:6,toupper:10,translat:8,treat:8,trigger:[7,8],tupl:8,tutori:[5,8],two:[4,8],type:[0,2,5,6,7,8,10,11],typename1:[0,3,6],typename2:[0,3],unadjustedassetcount:0,unchang:8,under:[8,9],underli:[0,6,11],understand:8,unicod:10,uninitialis:[9,11],union:[8,10],uniqu:[6,8],unit:6,unknown:[0,8],unless:8,unnecessari:8,unzip:4,updat:[0,4,6,7,9],upper:8,uppercas:10,upsert:0,url:[7,10,11],us0378331005:6,us5949181045:6,usag:8,usd:6,use:[0,2,4,5,6,8,9,11],use_sess:[6,7,9,11],used:[0,2,4,6,7,8,9,11],usenobenchmark:7,user1:[4,6,7,9],user1_sess:9,user2:9,user2_sess:9,user3:9,user:[0,4,5,6,7,8,9],userlogin:9,usernam:[1,6,7,9,11],uses:[4,11],using:[0,4,5,7,8,9],util:[5,8],valid:8,valu:[0,6,8,9,10,11],valuat:[0,3],valuations_remov:0,valuations_upsert:0,value1:8,value2:8,valueerror:8,variou:[0,6,8],venv:[4,5],versa:8,version:[5,11],via:[6,8],vice:8,view:[0,4,8],virtual:[4,5],virtualenv:5,wai:8,warn:[0,3],web:2,weightasperc:0,when:[0,2,4,6,7,8,9],where:[0,5,6,8],whether:0,which:[0,4,6,7,8],window:[2,4],wish:[4,6],with_axiomaapi:8,with_entitybas:2,with_sess:[4,8],within:[6,8],without:[6,8],work:[2,4,5,6,7,9],workflow:2,would:[0,8],wrap:11,wrapper:[5,8],yaml:[2,9],you:[0,4,5,6,7,11],your:[2,4,5,6],yyyi:8,zip:[4,7],zipfil:7},titles:["AxiomaAPI Package","Change Log","Contributing","Axiomarisk endpoints covered by axioma-py","Examples","Welcome to axioma-py","Getting Started with axiomapy","AxiomaPy Direct Access","CommonBase, EntityBase, TemplatedEntityBase, Enumbase and Collections","Axiomasessions","oDataFilterHelpers","Sessions Package"],titleterms:{"case":5,"import":[6,7,9],"switch":9,Use:5,Using:8,access:[6,7],accessor:8,activ:[7,9],add:6,aggregateopt:0,analysesapi:0,analysesperformanceapi:0,analysesriskapi:0,analysi:6,analysisdefinitionapi:0,architectur:8,attribut:7,axioma:[3,5],axiomaapi:0,axiomapi:[6,7],axiomarisk:3,axiomasess:[9,11],batchdefinitionsapi:0,build:2,bulk:6,bulkapi:0,chang:1,check:6,clean:6,clone:8,collect:8,common:6,commonbas:8,computeopt:0,content:5,context:9,contribut:[2,5],contributor:2,cover:3,creat:[6,7],credenti:[7,9],datapartit:0,defin:6,design:8,detail:2,direct:7,doc:2,endpoint:[3,5],entiti:[6,8],entitiesapi:0,entitybas:8,enumbas:8,enumer:0,exampl:[4,5],featur:5,filter:6,find:6,finishedstatus:0,from:6,gener:8,get:[5,6,7],how:8,identifiertyp:0,indic:5,instal:5,instruct:[2,4],kei:5,librari:5,list:[7,8],log:[1,6,9],manual:9,map:8,marketdatasourcesapi:0,metadataapi:0,model:7,mutablemap:8,mutablesequ:8,nest:8,odata:6,odatafilterhelp:10,option:9,other:[5,6],overview:8,packag:[0,5,11],perform:7,popul:8,portfolio:[6,7],portfoliogroupsapi:0,portfoliosapi:0,posit:6,project:2,quantitytyp:0,replac:8,request:7,result:6,risk:[6,7],riskmodeldefinitionsapi:0,run:[4,6],sampl:8,search:6,serial:8,servic:7,session:[6,9,11],sesssion:7,some:6,start:[5,6],statu:0,tabl:5,templatedentitybas:8,templatesapi:0,test:2,them:6,updat:8,using:6,view:6,welcom:5,work:8}})