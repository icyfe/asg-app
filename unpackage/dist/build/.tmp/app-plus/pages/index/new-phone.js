(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/new-phone"],{"08db":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"container"},[n("nav-bar",{attrs:{title:"改绑手机",eventid:"9209f51c-0",mpcomid:"9209f51c-0"},on:{back:e.back}}),n("view",{staticClass:"wrap"},[n("divid-line",{attrs:{height:"5",mpcomid:"9209f51c-1"}}),n("view",{staticClass:"input-wrap"},[n("view",{staticClass:"origin"},[e._v("原始手机号")]),n("view",{staticClass:"txt-input"},[e._v(e._s(e.pphone))])]),n("view",{staticClass:"input-wrap"},[n("view",{staticClass:"origin"},[e._v("新的手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newphone,expression:"newphone"}],staticClass:"txt-input",attrs:{placeholder:"请输入手机号码",eventid:"9209f51c-1"},domProps:{value:e.newphone},on:{blur:e.checkphone,input:function(t){t.target.composing||(e.newphone=t.target.value)}}}),e.isShow?n("uni-icon",{attrs:{type:"clear",color:"#b5b5b5",size:"18",eventid:"9209f51c-2",mpcomid:"9209f51c-2"},on:{click:e.clear}}):e._e()],1),n("view",{staticClass:"yzm-wrap"},[n("view",{staticClass:"yzm-txt"},[e._v("验证码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"txt-input",attrs:{placeholder:"请输入验证码",eventid:"9209f51c-3"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("view",{staticClass:"bt",class:["bt",{disable:e.isSend}],attrs:{eventid:"9209f51c-4"},on:{click:e.send}},[e._v(e._s(e.yzm))])]),n("view",{staticClass:"bt-wrap",attrs:{eventid:"9209f51c-5"},on:{tap:e.submit}},[e._v("确认改绑")])],1)],1)},s=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},"1fca":function(e,t,n){"use strict";n("95b2");var i=o(n("b0ce")),s=o(n("8bd4"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))},"3c8d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("4a61")),s=a(n("0642")),o=n("fedf");function a(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{phone:"",pphone:"",code:"",isSend:!1,yzm:"发送验证码",newphone:"",isShow:!1}},components:{navBar:i.default,dividLine:s.default},onLoad:function(){this._getUser()},methods:{back:function(){e.navigateBack({delta:1})},clear:function(){this.newphone=""},_getUser:function(){try{var t=e.getStorageSync("user");this.phone=t.phone;var n=this.phone.substring(0,3),i=this.phone.substring(8,12);this.pphone="".concat(n,"*****").concat(i),console.log("user",this.phone)}catch(s){console.log("ERROR",s.message)}},checkphone:function(e){return this.newphone=e.detail.value,this.newphone?/^[1][3,4,5,7,8][0-9]{9}$/.test(this.newphone)?(this.isabled=!1,void(this.isSend=!1)):(this._showToast("请输入正确的手机号码格式","none"),this.isabled=!0,void(this.isSend=!0)):(this._showToast("手机号码不能为空","none"),this.isabled=!0,void(this.isSend=!0))},send:function(){var t=this;!this.isSend&&this.phone&&(0,o.newPhoneyzm)(this.newphone).then(function(n){if(100!=n.code){e.showToast({title:"验证码已发送"});var i=null,s=60;t.isSend=!0,i=setInterval(function(){t.yzm=--s+"S",0==s&&(clearInterval(i),t.yzm="发送验证码",t.isSend=!1)},1e3)}else e.showToast({title:n.msg,icon:"none"})})},submit:function(){var t=this;this.isSend||(0,o.newPhone)(this.newphone,this.code).then(function(n){if(200==n.code){e.showToast({title:"修改成功"});try{var i=e.getStorageSync("user");i.phone=t.newphone,e.setStorageSync("user",i)}catch(s){}setTimeout(function(){e.reLaunch({url:"/pages/index/setting"})},500)}})}},watch:{newphone:function(){this.newphone?this.isShow=!0:this.isShow=!1}}};t.default=c}).call(this,n("649d")["default"])},"892d":function(e,t,n){},"8bd4":function(e,t,n){"use strict";n.r(t);var i=n("08db"),s=n("cc72");for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);n("dbb2");var a=n("2877"),c=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,"3a091a7c",null);c.options.__file="new-phone.vue",t["default"]=c.exports},cc72:function(e,t,n){"use strict";n.r(t);var i=n("3c8d"),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=s.a},dbb2:function(e,t,n){"use strict";var i=n("892d"),s=n.n(i);s.a}},[["1fca","common/runtime","common/vendor"]]]);