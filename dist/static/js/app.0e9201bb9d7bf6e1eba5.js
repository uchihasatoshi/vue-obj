webpackJsonp([1],{"+TM4":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"preview"}},[s("section",[s("h1",{staticClass:"name"},[t._v(t._s(t.resume.profile.name||"彭聪"))]),t._v(" "),s("ul",{staticClass:"info"},[s("li",[t._v(t._s(t.resume.profile.city||"陕西西安"))]),t._v(" "),s("li",[t._v(t._s(t.resume.profile.birth||"1993-12-21"))]),t._v(" "),s("li",[t._v(t._s(t.resume.profile.position||"前端工程师"))])])]),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-gongzuo"}})])]),t._v(" "),s("h3",{staticClass:"text"},[t._v("工作经历")])]),t._v(" "),t.filter(t.resume.workHistory).length>0?s("section",{staticClass:"workbox"},[s("ul",t._l(t.filter(t.resume.workHistory),function(e){return s("li",[s("div",{staticClass:"work"},[s("div",{staticClass:"company"},[t._v(t._s(e.company))]),t._v(" "),s("div",{staticClass:"post"},[t._v(t._s(e.post))])]),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(e.content))])])}))]):t._e(),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-shu_1"}})])]),t._v(" "),s("h3",{staticClass:"text"},[t._v("学习经历")])]),t._v(" "),t.filter(t.resume.studyHistory).length>0?s("section",{staticClass:"studybox"},[s("ul",t._l(t.filter(t.resume.studyHistory),function(e){return s("li",[s("div",{staticClass:"study"},[s("div",[t._v(t._s(e.school))]),t._v(" "),s("div",[t._v(t._s(e.time))]),t._v(" "),s("div",[t._v(t._s(e.degree))])])])}))]):t._e(),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-huojiangmingdan"}})])]),t._v(" "),s("h3",{staticClass:"text"},[t._v("获奖情况")])]),t._v(" "),t.filter(t.resume.awardHistory).length>0?s("section",{staticClass:"studybox"},[s("ul",t._l(t.filter(t.resume.awardHistory),function(e){return s("li",[s("div",{staticClass:"study"},[s("div",[t._v(t._s(e.awardName))]),t._v(" "),s("div",[t._v(t._s(e.awardTime))])])])}))]):t._e(),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-daima"}})])]),t._v(" "),s("h3",{staticClass:"text"},[t._v("项目经历")])]),t._v(" "),t.filter(t.resume.projects).length>0?s("section",{staticClass:"workbox"},[s("ul",t._l(t.filter(t.resume.projects),function(e){return s("li",[s("div",{staticClass:"work"},[s("div",{staticClass:"company"},[t._v(t._s(e.projectName))]),t._v(" "),s("div",{staticClass:"post"},[t._v(t._s(e.projectTime))])]),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(e.describe))])])}))]):t._e(),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"box"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-dianhua-1"}})])]),t._v(" "),s("h3",{staticClass:"text"},[t._v("联系方式")])]),t._v(" "),s("section",{staticClass:"contactWay"},[s("div",{staticClass:"contact"},[s("div",[t._v("手机："+t._s(t.resume.contactWay.cellphone))]),t._v(" "),s("div",[t._v("邮箱："+t._s(t.resume.contactWay.mailbox))]),t._v(" "),s("div",[t._v("博客："+t._s(t.resume.contactWay.blog))])])])])},a=[],r={render:i,staticRenderFns:a};e.a=r},"1pa7":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("项目经历")]),t._v(" "),s("el-form",[t._l(t.projects,function(e,i){return s("div",{staticClass:"container"},[s("el-form-item",{attrs:{label:"项目名称"}},[s("el-input",{attrs:{placeholder:"项目名称"},model:{value:e.projectName,callback:function(t){e.projectName=t},expression:"items.projectName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"项目时间"}},[s("el-input",{attrs:{placeholder:"格式：2017-11 ~ 2017-12"},model:{value:e.projectTime,callback:function(t){e.projectTime=t},expression:"items.projectTime"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"项目描述"}},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入项目描述"},model:{value:e.describe,callback:function(t){e.describe=t},expression:"items.describe"}})],1),t._v(" "),s("i",{staticClass:"el-icon-circle-cross",on:{click:function(e){t.removelist(i)}}}),t._v(" "),s("hr")],1)}),t._v(" "),s("el-button",{staticClass:"addWorkHistory",attrs:{type:"primary"},on:{click:t.addlist}},[t._v("添加")])],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},F4KX:function(t,e,s){"use strict";e.a={props:["awardHistory"],methods:{addlist:function(){this.awardHistory.push({awardName:"",awardTime:""})},removelist:function(t){this.awardHistory.splice(t,1)}}}},FGpa:function(t,e){},Hj26:function(t,e){},Hloa:function(t,e,s){"use strict";e.a={props:["workHistory"],methods:{addWorkHistory:function(){this.workHistory.push({company:"",content:"",post:""})},removeWorkHistory:function(t){this.workHistory.splice(t,1)}}}},KvDf:function(t,e,s){"use strict";function i(t){s("aAV1")}var a=s("fV88"),r=s("+TM4"),o=s("VU/8"),n=i,l=o(a.a,r.a,n,null,null);e.a=l.exports},KvUk:function(t,e){},M93x:function(t,e,s){"use strict";function i(t){s("KvUk")}var a=s("xJD8"),r=s("tuwF"),o=s("VU/8"),n=i,l=o(a.a,r.a,n,null,null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("M93x"),r=s("uMhA"),o=(s.n(r),s("NcP2")),n=(s.n(o),s("zL8q")),l=s.n(n),c=s("q8zI");s.n(c);i.default.use(l.a),i.default.config.productionTip=!1,new i.default({el:"#app",template:"<App />",components:{App:a.a}})},NcP2:function(t,e){},PcHo:function(t,e,s){"use strict";e.a={props:["projects"],methods:{addlist:function(){this.projects.push({projectName:"",projectTime:"",describe:""})},removelist:function(t){this.projects.splice(t,1)}}}},QOB2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("工作经历")]),t._v(" "),s("el-form",[t._l(t.workHistory,function(e,i){return s("div",{staticClass:"container"},[s("el-form-item",{attrs:{label:"公司名称"}},[s("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.company,callback:function(t){e.company=t},expression:"work.company"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"职位"}},[s("el-input",{attrs:{placeholder:"请输入职位"},model:{value:e.post,callback:function(t){e.post=t},expression:"work.post"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"工作内容"}},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:e.content,callback:function(t){e.content=t},expression:"work.content"}})],1),t._v(" "),s("i",{staticClass:"el-icon-circle-cross",on:{click:function(e){t.removeWorkHistory(i)}}}),t._v(" "),s("hr")],1)}),t._v(" "),s("el-button",{staticClass:"addWorkHistory",attrs:{type:"primary"},on:{click:t.addWorkHistory}},[t._v("添加")])],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},R88r:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"topbar"}},[s("div",{staticClass:"logo"},[t._v("\n    VueResumer\n  ")]),t._v(" "),s("div",{staticClass:"actions"},[s("el-button",{attrs:{type:"primary"},on:{click:t.preview}},[t._v("预览")])],1)])},a=[],r={render:i,staticRenderFns:a};e.a=r},RKpF:function(t,e,s){"use strict";var i=s("F4KX"),a=s("sk9j"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},Tfp0:function(t,e,s){"use strict";var i=s("flix"),a=s("VbgW"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},VbgW:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("学习经历")]),t._v(" "),s("el-form",[t._l(t.studyHistory,function(e,i){return s("div",{staticClass:"container"},[s("el-form-item",{attrs:{label:"毕业学校"}},[s("el-input",{attrs:{placeholder:"学校名称"},model:{value:e.school,callback:function(t){e.school=t},expression:"items.school"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"毕业时间"}},[s("el-input",{attrs:{placeholder:"毕业时间"},model:{value:e.time,callback:function(t){e.time=t},expression:"items.time"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"学历"}},[s("el-input",{attrs:{placeholder:"请输入学历"},model:{value:e.degree,callback:function(t){e.degree=t},expression:"items.degree"}})],1),t._v(" "),s("i",{staticClass:"el-icon-circle-cross",on:{click:function(e){t.removelist(i)}}}),t._v(" "),s("hr")],1)}),t._v(" "),s("el-button",{staticClass:"addWorkHistory",attrs:{type:"primary"},on:{click:t.addlist}},[t._v("添加")])],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},Y8e6:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("个人信息")]),t._v(" "),s("el-form",[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.profile.name,callback:function(e){t.profile.name=e},expression:"profile.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"所在城市"}},[s("el-input",{attrs:{placeholder:"所在城市"},model:{value:t.profile.city,callback:function(e){t.profile.city=e},expression:"profile.city"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"出生年月"}},[s("el-input",{attrs:{placeholder:"格式：2017-8-31"},model:{value:t.profile.birth,callback:function(e){t.profile.birth=e},expression:"profile.birth"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"求职意向"}},[s("el-input",{attrs:{placeholder:"求职意向"},model:{value:t.profile.position,callback:function(e){t.profile.position=e},expression:"profile.position"}})],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},aAV1:function(t,e){},"aek+":function(t,e,s){"use strict";function i(t){s("FGpa")}var a=s("pIzI"),r=s("q+Kp"),o=s("VU/8"),n=i,l=o(a.a,r.a,n,null,null);e.a=l.exports},ateq:function(t,e,s){"use strict";e.a={props:["contactWay"]}},eCgV:function(t,e,s){"use strict";e.a={methods:{preview:function(){this.$emit("preview")}}}},fV88:function(t,e,s){"use strict";e.a={props:["resume"],methods:{filter:function(t){var e=this;return t.filter(function(t){return!e.isEmpty(t)})},isEmpty:function(t){var e=!0;for(var s in t)if(t[s]){e=!1;break}return e}}}},flix:function(t,e,s){"use strict";e.a={props:["studyHistory"],methods:{addlist:function(){this.studyHistory.push({school:"",time:"",degree:""})},removelist:function(t){this.studyHistory.splice(t,1)}}}},lRMd:function(t,e,s){"use strict";var i=s("ateq"),a=s("ogtt"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},nwxI:function(t,e,s){"use strict";var i=s("Hloa"),a=s("QOB2"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},o9cx:function(t,e,s){"use strict";var i=s("yoF/"),a=s("Y8e6"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},ogtt:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("联系方式")]),t._v(" "),s("el-form",[s("el-form-item",{attrs:{label:"手机"}},[s("el-input",{attrs:{placeholder:"手机号码"},model:{value:t.contactWay.cellphone,callback:function(e){t.contactWay.cellphone=e},expression:"contactWay.cellphone"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"邮箱"}},[s("el-input",{attrs:{placeholder:"邮箱地址"},model:{value:t.contactWay.mailbox,callback:function(e){t.contactWay.mailbox=e},expression:"contactWay.mailbox"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"个人博客"}},[s("el-input",{attrs:{placeholder:"个人博客"},model:{value:t.contactWay.blog,callback:function(e){t.contactWay.blog=e},expression:"contactWay.blog"}})],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},pIzI:function(t,e,s){"use strict";var i=s("o9cx"),a=s("nwxI"),r=s("Tfp0"),o=s("RKpF"),n=s("uwSr"),l=s("lRMd");e.a={components:{Profile:i.a,WorkHistory:a.a,Study:r.a,AwardHistory:o.a,Projects:n.a,ContactWay:l.a},props:["resume"],data:function(){return{currentTab:0,icons:["gerenxinxi","gongzuo","shu_1","huojiangmingdan","daima","dianhua-1"]}}}},"q+Kp":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"editor"}},[s("nav",[s("ol",t._l([0,1,2,3,4,5],function(e){return s("li",{class:{active:t.currentTab===e},on:{click:function(s){t.currentTab=e}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-"+t.icons[e]}})])])}))]),t._v(" "),s("ol",{staticClass:"panes"},[s("li",{class:{active:0===t.currentTab}},[s("Profile",{attrs:{profile:t.resume.profile}})],1),t._v(" "),s("li",{class:{active:1===t.currentTab}},[s("WorkHistory",{attrs:{workHistory:t.resume.workHistory}})],1),t._v(" "),s("li",{class:{active:2===t.currentTab}},[s("Study",{attrs:{studyHistory:t.resume.studyHistory}})],1),t._v(" "),s("li",{class:{active:3===t.currentTab}},[s("AwardHistory",{attrs:{awardHistory:t.resume.awardHistory}})],1),t._v(" "),s("li",{class:{active:4===t.currentTab}},[s("Projects",{attrs:{projects:t.resume.projects}})],1),t._v(" "),s("li",{class:{active:5===t.currentTab}},[s("ContactWay",{attrs:{contactWay:t.resume.contactWay}})],1)])])},a=[],r={render:i,staticRenderFns:a};e.a=r},q8zI:function(t,e){},sk9j:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("获奖情况")]),t._v(" "),s("el-form",[t._l(t.awardHistory,function(e,i){return s("div",{staticClass:"container"},[s("el-form-item",{attrs:{label:"获奖证书"}},[s("el-input",{attrs:{placeholder:"英语四级"},model:{value:e.awardName,callback:function(t){e.awardName=t},expression:"items.awardName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"获奖时间"}},[s("el-input",{attrs:{placeholder:"2016-12"},model:{value:e.awardTime,callback:function(t){e.awardTime=t},expression:"items.awardTime"}})],1),t._v(" "),s("i",{staticClass:"el-icon-circle-cross",on:{click:function(e){t.removelist(i)}}}),t._v(" "),s("hr")],1)}),t._v(" "),s("el-button",{staticClass:"addWorkHistory",attrs:{type:"primary"},on:{click:t.addlist}},[t._v("添加")])],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},tuwF:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{previewMode:t.previewMode},attrs:{id:"app"}},[s("Topbar",{staticClass:"topbar",on:{preview:t.preview}}),t._v(" "),s("main",[s("Editor",{staticClass:"editor",attrs:{resume:t.resume}}),t._v(" "),s("Preview",{staticClass:"preview",attrs:{resume:t.resume}})],1),t._v(" "),s("el-button",{attrs:{id:"exitPreview",type:"primary"},on:{click:t.exitPreview}},[t._v("退出预览")])],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},uMhA:function(t,e){},uwSr:function(t,e,s){"use strict";var i=s("PcHo"),a=s("1pa7"),r=s("VU/8"),o=r(i.a,a.a,null,null,null);e.a=o.exports},v4YQ:function(t,e,s){"use strict";function i(t){s("Hj26")}var a=s("eCgV"),r=s("R88r"),o=s("VU/8"),n=i,l=o(a.a,r.a,n,null,null);e.a=l.exports},xJD8:function(t,e,s){"use strict";var i=s("v4YQ"),a=s("aek+"),r=s("KvDf");e.a={components:{Topbar:i.a,Editor:a.a,Preview:r.a},methods:{preview:function(){this.previewMode=!0},exitPreview:function(){this.previewMode=!1}},data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:"",position:""},workHistory:[{company:"",content:"",post:""}],studyHistory:[{school:"",time:"",degree:""}],awardHistory:[{awardName:"",awardTime:""}],projects:[{projectName:"",projectTime:"",describe:""}],contactWay:{cellphone:"",mailbox:"",blog:""}}}}}},"yoF/":function(t,e,s){"use strict";e.a={props:["profile"]}}},["NHnr"]);
//# sourceMappingURL=app.0e9201bb9d7bf6e1eba5.js.map