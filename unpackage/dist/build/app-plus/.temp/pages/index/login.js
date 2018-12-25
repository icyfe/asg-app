require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{131:function(e,t,s){"use strict";var i=o(s(1)),n=o(s(132));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},132:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(134),n=s.n(i),o=s(138);var a=function(e){s(133)},c=s(0)(n.a,o.a,a,"data-v-601a3d73",null);t.default=c.exports},133:function(e,t){},134:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i,n=s(12),o=(i=n)&&i.__esModule?i:{default:i},a=s(7);t.default={data:function(){return{items:["登录","注册"],loginyzm:"发送验证码",regyzm:"发送验证码",isabled:!0,timer:null,yqm:"",code:"",current:0,activeColor:"#F9263E",styleType:"button",isSend:!0,phone:"",loginerror:"请输入手机号"}},components:{uniSegmentedControl:o.default},methods:{back:function(){e.switchTab({url:"/pages/index/index"})},register:function(){var t=this;this.code&&this.yqm?(0,a.postRegister)({phone:this.phone,yqm:this.yqm,code:this.code}).then(function(s){100!=s.code?(s.result&&(e.setStorageSync("user",s.result),e.switchTab({url:"/pages/index/user"})),t._showToast(s.msg)):t._showToast(s.msg,"none")}):this._showToast("验证码或邀请码不能为空","none")},login:function(){var t=this;this.phone&&this.code?(0,a.postLogin)(this.phone,this.code).then(function(s){console.log(t.phone,t.code),100!=s.code?s.result&&(e.setStorageSync("user",s.result),e.switchTab({url:"/pages/index/user"})):t._showToast(s.msg,"none")}):this._showToast("手机号码或验证码不能为空","none")},checkphone:function(e){return this.phone=e.detail.value,this.phone?/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)?(this.isabled=!1,void(this.isSend=!1)):(this._showToast("请输入正确的手机号码格式","none"),this.isabled=!0,void(this.isSend=!0)):(this._showToast("手机号码不能为空","none"),this.isabled=!0,void(this.isSend=!0))},send:function(e){var t=this;!this.isSend&&this.phone?(0,a.sendcode)(this.phone,e).then(function(s){if(100!=s.code){t._showToast("验证码已发送"),t.isSend=!0;var i=null,n=60;i=setInterval(function(){"login"==e?t.loginyzm=--n+"S":"register"==e&&(t.regyzm=--n+"S"),0==n&&(clearInterval(i),"login"==e?t.loginyzm="发送验证码":t.regyzm="发送验证码",t.isSend=!1)},1e3)}else t._showToast(s.msg,"none")}):this.phone||this._showToast("手机号码不能为空","none")},_showToast:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.showToast({title:t,icon:s})},onClickItem:function(e){this.current!==e&&(this.current=e)}}}}).call(t,s(2).default)},138:function(e,t,s){"use strict";var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[s("view",{staticClass:"nav"},[s("view",{staticClass:"back",attrs:{eventid:"3V4-0"},on:{tap:e.back}},[s("uni-icon",{attrs:{type:"arrow-left",size:"20",color:"#fff",mpcomid:"8Cw-0"}})],1),s("view",{staticClass:"title"},[e._v("登录/注册")])]),s("view",{staticClass:"switch-wrap"},[s("uni-segmented-control",{attrs:{current:e.current,values:e.items,styleType:e.styleType,activeColor:e.activeColor,eventid:"tAd-1",mpcomid:"kNM-1"},on:{clickItem:e.onClickItem}})],1),s("view",{staticClass:"content"},[s("view",{directives:[{name:"show",rawName:"v-show",value:0===e.current,expression:"current === 0"}]},[s("view",{staticClass:"item"},[s("uni-icon",{attrs:{type:"shouji",color:"#ccc",size:"16",mpcomid:"OM1-2"}}),s("input",{staticClass:"_input",attrs:{placeholder:e.loginerror,focus:"",eventid:"e4C-2"},on:{blur:e.checkphone}})],1),s("view",{staticClass:"item"},[s("uni-icon",{attrs:{type:"yanzhengma",color:"#ccc",size:"16",mpcomid:"xt6-3"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"请输入验证码",eventid:"LBD-3"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),s("view",{staticClass:"bt",class:["bt",{disable:e.isSend}],attrs:{eventid:"ljL-4"},on:{click:function(t){e.send("login")}}},[e._v(e._s(e.loginyzm))])],1),s("button",{class:["login-bt",{disable:e.isabled}],attrs:{disabled:e.isabled,eventid:"nKH-5"},on:{tap:e.login}},[e._v("登录")])],1),s("view",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}]},[s("view",{staticClass:"item"},[s("uni-icon",{attrs:{type:"shouji",color:"#ccc",size:"16",mpcomid:"unp-4"}}),s("input",{attrs:{placeholder:e.loginerror,focus:"",eventid:"Xq8-6"},on:{blur:e.checkphone}})],1),s("view",{staticClass:"item"},[s("uni-icon",{attrs:{type:"yanzhengma",color:"#ccc",size:"16",mpcomid:"CFL-5"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"请输入验证码",eventid:"rkv-7"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),s("view",{staticClass:"bt",class:["bt",{disable:e.isSend}],attrs:{eventid:"ahk-8"},on:{click:function(t){e.send("register")}}},[e._v(e._s(e.regyzm))])],1),s("view",{staticClass:"item"},[s("uni-icon",{attrs:{type:"yqm",color:"#ccc",size:"16",mpcomid:"7OC-6"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.yqm,expression:"yqm"}],attrs:{placeholder:"请输入邀请码",eventid:"v2c-9"},domProps:{value:e.yqm},on:{input:function(t){t.target.composing||(e.yqm=t.target.value)}}})],1),s("button",{class:["login-bt",{disable:e.isabled}],attrs:{disabled:e.isabled,eventid:"mAp-10"},on:{tap:e.register}},[e._v("注册")])],1)])])},staticRenderFns:[]};t.a=i}},[131]);