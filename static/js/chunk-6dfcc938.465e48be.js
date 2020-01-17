(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfcc938"],{"0f80":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"选择数据名",clearable:""},on:{change:e.dataNameChangeHandler},model:{value:e.form.dataName,callback:function(t){e.$set(e.form,"dataName",t)},expression:"form.dataName"}},e._l(e.dataNameList,(function(e){return a("el-option",{key:e.data_name,attrs:{label:e.display_name,value:e.data_name}})})),1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"选择排序",clearable:""},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}},[a("el-option",{attrs:{label:"时间倒序",value:"desc"}}),e._v(" "),a("el-option",{attrs:{label:"时间正序",value:"asc"}})],1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"统计间隔",clearable:""},model:{value:e.form.intervalInSeconds,callback:function(t){e.$set(e.form,"intervalInSeconds",t)},expression:"form.intervalInSeconds"}},[a("el-option",{attrs:{label:"自动",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"1小时",value:"3600"}}),e._v(" "),a("el-option",{attrs:{label:"1天",value:"86400"}})],1),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right","default-time":["00:00:00","23:59:59"]},on:{change:e.dateChangeHandler},model:{value:e.datePickValue,callback:function(t){e.datePickValue=t},expression:"datePickValue"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"700px"},attrs:{clearable:"",placeholder:"输入查询语句。如: Team: dealer.arch"},model:{value:e.form.esQuery,callback:function(t){e.$set(e.form,"esQuery",t)},expression:"form.esQuery"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("查询")])],1),e._v(" "),a("figure",[a("v-chart",{attrs:{options:e.charOptions,theme:"ovilia-green",autoresize:""},on:{click:e.handleClick}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},e._l(e.fields,(function(r){return a("el-form-item",{key:r,attrs:{label:r}},[a("span",[e._v(e._s(t.row[r]))])])})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:e.timestampField,label:"时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("timeFormat")(t.row[e.timestampField])))])]}}])}),e._v(" "),e._l(e.headFields,(function(e){return a("el-table-column",{key:e,attrs:{label:e,prop:e}})}))],2),e._v(" "),a("el-row",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.loadMore}},[e._v("加载更多>>")])],1)],1)},o=[],l=(a("ac6a"),a("386d"),a("4600")),i="/api/monitor-api/query",s={elasticsearchData:function(e){return l["a"].get(i+"/elasticsearchData",e)}},n=s,c=a("7e1e"),d=a("9158"),m=a("c1df"),u=a.n(m),h=a("9ca8e"),f=(a("94b1"),a("007d"),a("d28f"),a("627c"),a("a524"),a("82fb"));h["a"].registerTheme("ovilia-green",f);var p={filters:{timeFormat:function(e){return e?Object(d["a"])(e,"yyyy-MM-dd hh:mm:ss"):null}},components:{"v-chart":h["a"]},data:function(){return{pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){var t=u()().startOf("day"),a=u()().endOf("day");e.$emit("pick",[t.toDate(),a.toDate()])}},{text:"昨天",onClick:function(e){var t=u()().startOf("day").toDate(),a=u()().startOf("day").subtract(1,"day").toDate();e.$emit("pick",[a,t])}},{text:"前天",onClick:function(e){var t=u()().startOf("day").subtract(1,"day").toDate(),a=u()().startOf("day").subtract(2,"day").toDate();e.$emit("pick",[a,t])}},{text:"最近三天",onClick:function(e){var t=u()().endOf("day").toDate(),a=u()().startOf("day").subtract(3,"day").toDate();e.$emit("pick",[a,t])}},{text:"最近七天",onClick:function(e){var t=u()().endOf("day").toDate(),a=u()().startOf("day").subtract(7,"day").toDate();e.$emit("pick",[a,t])}},{text:"最近一月",onClick:function(e){var t=u()().endOf("day").toDate(),a=u()().startOf("day").subtract(30,"day").toDate();e.$emit("pick",[a,t])}}]},list:[],total:0,listLoading:!1,fields:[],headFields:[],timestampField:null,form:{scrollId:null,dataName:null,startTime:null,endTime:null,esQuery:null,sortOrder:"desc",intervalInSeconds:"0"},datePickValue:[],dataNameList:[],charOptions:{title:{left:"center",text:"总数:0"},tooltip:{trigger:"axis"},xAxis:{data:["00:00:00","01:00:00","02:00:00","03:00:00","04:00:00","05:00:00","06:00:00","07:00:00","08:00:00","09:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00","18:00:00","19:00:00","20:00:00","21:00:00","22:00:00","23:00:00"]},yAxis:{},series:[{name:"总数",type:"bar",data:[]}]}}},created:function(){var e=this,t=u()().startOf("day"),a=u()().endOf("day");this.datePickValue[0]=t.toDate(),this.datePickValue[1]=a.toDate(),this.form.startTime=t.toDate(),this.form.endTime=a.toDate(),c["a"].findDataNameByType("elasticsearch").then((function(t){e.dataNameList=t.result})),this.$route.query.esQuery&&(this.form.esQuery=this.$route.query.esQuery,this.form.dataName=this.$route.query.dataName,this.form.startTime=u()(this.$route.query.startTime).toDate(),this.form.endTime=u()(this.$route.query.endTime).toDate(),this.datePickValue[0]=this.form.startTime,this.datePickValue[1]=this.form.endTime,this.search())},methods:{handleClick:function(){console.log("click from echars")},handleZrClick:function(){console.log("click from zrender")},dateChangeHandler:function(e){this.form.startTime=e[0],this.form.endTime=e[1]},search:function(){var e=this;this.listLoading=!0,this.form.scrollId=null,this.list=[],n.elasticsearchData(this.form).then((function(t){e.list=t.result.logs,e.timestampField=t.result.timestampField,e.headFields=t.result.headFields,e.fields=t.result.fields,e.form.scrollId=t.result.scrollId,e.listLoading=!1,e.total=t.result.total,e.charData(t.result.statItem)}))},charData:function(e){var t=Object(d["a"])(e.keys[0],"yyyy-MM-dd hh:mm:ss"),a=Object(d["a"])(e.keys[e.keys.length-1],"yyyy-MM-dd hh:mm:ss"),r="yyyy-MM-dd";t.substr(0,10)===a.substr(0,10)?r="hh:mm":t.substr(0,7)===a.substr(0,7)&&(r="MM-dd hh:mm"),this.charOptions.xAxis.data=e.keys.map((function(e){return Object(d["a"])(e,r)})),this.charOptions.title.text="".concat(Object(d["a"])(this.form.startTime,"yyyy-MM-dd hh:mm:ss")," - ").concat(Object(d["a"])(this.form.endTime,"yyyy-MM-dd hh:mm:ss"),"  总数:").concat(this.total),this.charOptions.series=[{name:"次数",type:"bar",data:e.values}]},dataNameChangeHandler:function(){},loadMore:function(){var e=this;this.listLoading=!0,n.elasticsearchData(this.form).then((function(t){for(var a=0;a<t.result.logs.length;a++)e.list.push(t.result.logs[a]);e.form.scrollId=t.result.scrollId,e.listLoading=!1}))}}},y=p,b=(a("bfea"),a("2877")),g=Object(b["a"])(y,r,o,!1,null,null,null);t["default"]=g.exports},4600:function(e,t,a){"use strict";var r=a("b775"),o=a("4328"),l=a.n(o),i={MediaType:{application_form_urlencoded:{"Content-Type":"application/x-www-form-urlencoded"},application_json:{"Content-Type":"application/json"},multipart_form_data:{"Content-Type":"multipart/form-data"}},appId:"frostmourne",query:function(e){return e.params||(e.params={}),e.params._appId=e.params._appId||this.appId,e.params._t=(new Date).getTime(),Object(r["a"])(e)},get:function(e,t){return this.query({method:"get",url:e,params:t})},post:function(e,t){return this.query({method:"post",url:e,data:l.a.stringify(t),headers:this.MediaType.application_form_urlencoded})},json:function(e,t){return this.query({method:"post",url:e,data:t,headers:this.MediaType.application_json})}};t["a"]=i},"7e1e":function(e,t,a){"use strict";var r=a("4600"),o="/api/monitor-api/data",l={saveDataSource:function(e){return r["a"].json(o+"/saveDataSource",e)},removeDataSource:function(e){return r["a"].post(o+"/removeDataSource",{id:e})},findDataSource:function(e,t,a){return r["a"].get(o+"/findDataSource",{pageIndex:e,pageSize:t,datasourceType:a})},findDataSourceByType:function(e){return r["a"].get(o+"/findDataSourceByType",{datasourceType:e})},saveDataName:function(e){return r["a"].json(o+"/saveDataName",e)},removeDataName:function(e){return r["a"].post(o+"/removeDataName",{id:e})},findDataName:function(e,t,a,l){return r["a"].get(o+"/findDataName",{pageIndex:e,pageSize:t,datasourceType:a,datasourceId:l})},findDataNameByType:function(e){return r["a"].get(o+"/findDataNameByType",{datasourceType:e})},dataOptions:function(){return r["a"].get(o+"/dataOptions")}};t["a"]=l},"82fb":function(e){e.exports={color:["#4ea397","#22c3aa","#7bd9a5"],backgroundColor:"rgba(0,0,0,0)",textStyle:{},title:{textStyle:{color:"#666666"},subtextStyle:{color:"#999999"}},line:{itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"3"}},symbolSize:"10",symbol:"emptyCircle",smooth:!0},radar:{itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"3"}},symbolSize:"10",symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{normal:{barBorderWidth:"0",barBorderColor:"#444444"},emphasis:{barBorderWidth:"0",barBorderColor:"#444444"}}},pie:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},scatter:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},boxplot:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},parallel:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},sankey:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},funnel:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},gauge:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},candlestick:{itemStyle:{normal:{color:"#d0648a",color0:"#ffffff",borderColor:"#d0648a",borderColor0:"#22c3aa",borderWidth:1}}},graph:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"}},lineStyle:{normal:{width:1,color:"#aaa"}},symbolSize:"10",symbol:"emptyCircle",smooth:!0,color:["#4ea397","#22c3aa","#7bd9a5"],label:{normal:{textStyle:{color:"#ffffff"}}}},map:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#999999",borderWidth:"0.5"},emphasis:{areaColor:"rgba(34,195,170,0.25)",borderColor:"#22c3aa",borderWidth:"0.5"}},label:{normal:{textStyle:{color:"#28544e"}},emphasis:{textStyle:{color:"rgb(52,158,142)"}}}},geo:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#999999",borderWidth:"0.5"},emphasis:{areaColor:"rgba(34,195,170,0.25)",borderColor:"#22c3aa",borderWidth:"0.5"}},label:{normal:{textStyle:{color:"#28544e"}},emphasis:{textStyle:{color:"rgb(52,158,142)"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{normal:{borderColor:"#aaaaaa"},emphasis:{borderColor:"#666"}}},legend:{textStyle:{color:"#999999"}},tooltip:{axisPointer:{lineStyle:{color:"#ccc",width:1},crossStyle:{color:"#ccc",width:1}}},timeline:{lineStyle:{color:"#349e8e",width:1},itemStyle:{normal:{color:"#349e8e",borderWidth:"1"},emphasis:{color:"#57e8d2"}},controlStyle:{normal:{color:"#349e8e",borderColor:"#349e8e",borderWidth:"0"}},checkpointStyle:{color:"#22c3aa",borderColor:"rgba(34,195,170,0.25)"},label:{normal:{textStyle:{color:"#349e8e"}}}},visualMap:{color:["#d0648a","#22c3aa","rgba(123,217,165,0.2)"]},dataZoom:{backgroundColor:"#fff",dataBackgroundColor:"#dedede",fillerColor:"rgba(34,195,170,0.25)",handleColor:"#dddddd",handleSize:"100%",textStyle:{color:"#999"}},markPoint:{label:{normal:{textStyle:{color:"#ffffff"}},emphasis:{textStyle:{color:"#ffffff"}}}}}},9158:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("4917"),a("3b2b"),a("a481");var r=function(e,t){var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return t},o=function(e){if("string"!==typeof e)return null;if(e.indexOf("T")>0||e.indexOf("-")>=0)return l(e);var t=Date.parse(e);return new Date(t)},l=function(e){return e=e.replace("T"," "),e.indexOf(".")>0&&(e=e.replace(/\.\d+/,"")),new Date(e.replace(/-/g,"/"))},i=function(e,t){return"string"===typeof e&&(e=o(e)),r(e,t)}},aaa5:function(e,t,a){},bfea:function(e,t,a){"use strict";var r=a("aaa5"),o=a.n(r);o.a}}]);