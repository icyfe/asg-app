(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/change-phone"],{"2b52":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("6c1c")),i=o(n("095c")),s=n("7168");function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{phone:"",pphone:"",code:"",isSend:!1,yzm:"发送验证码"}},components:{navBar:a.default,dividLine:i.default},onLoad:function(){this._getUser()},methods:{back:function(){t.navigateBack({delta:1})},_getUser:function(){try{var e=t.getStorageSync("user");this.phone=e.phone;var n=this.phone.substring(0,3),a=this.phone.substring(8,12);this.pphone="".concat(n,"*****").concat(a),console.log("user",this.phone)}catch(i){console.log("ERROR",i.message)}},send:function(){var e=this;this.isSend||(0,s.changePhoneyzm)(this.phone).then(function(n){if(200==n.code){t.showToast({title:"验证码已发送"});var a=null,i=60;e.isSend=!0,a=setInterval(function(){e.yzm=--i+"S",0==i&&(clearInterval(a),e.yzm="发送验证码",e.isSend=!1)},1e3)}})},submit:function(){(0,s.changePhone)(this.phone,this.code).then(function(e){100!=e.code?(t.showToast({title:"验证成功"}),setTimeout(function(){t.navigateTo({url:"/pages/index/new-phone"})},500)):t.showToast({title:e.msg,icon:"none"})})}}};e.default=c}).call(this,n("649d")["default"])},"3b89":function(t,e,n){},4254:function(t,e,n){"use strict";n("c5d2");var a=s(n("b0ce")),i=s(n("9127"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"798a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("nav-bar",{attrs:{title:"改绑手机",eventid:"4a105eb6-0",mpcomid:"4a105eb6-0"},on:{back:t.back}}),n("view",{staticClass:"wrap"},[n("divid-line",{attrs:{height:"5",mpcomid:"4a105eb6-1"}}),n("view",{staticClass:"input-wrap"},[n("view",{staticClass:"origin"},[t._v("原始手机号")]),n("view",{staticClass:"txt-input"},[t._v(t._s(t.pphone))])]),n("view",{staticClass:"yzm-wrap"},[n("view",{staticClass:"yzm-txt"},[t._v("验证码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"txt-input",attrs:{placeholder:"请输入验证码",eventid:"4a105eb6-1"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("view",{staticClass:"bt",class:["bt",{disable:t.isSend}],attrs:{eventid:"4a105eb6-2"},on:{click:t.send}},[t._v(t._s(t.yzm))])]),n("view",{staticClass:"bt-wrap",attrs:{eventid:"4a105eb6-3"},on:{tap:t.submit}},[t._v("验证后绑定新手机")])],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},9127:function(t,e,n){"use strict";n.r(e);var a=n("798a"),i=n("d661");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("b5b0");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"ed8b617c",null);e["default"]=c.exports},b5b0:function(t,e,n){"use strict";var a=n("3b89"),i=n.n(a);i.a},d661:function(t,e,n){"use strict";n.r(e);var a=n("2b52"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}},[["4254","common/runtime","common/vendor"]]]);