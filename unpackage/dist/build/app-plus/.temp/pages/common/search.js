require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{165:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(166));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},166:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(168),i=a.n(s),n=a(173);var o=function(t){a(167)},c=a(0)(i.a,n.a,o,"data-v-d3db77da",null);e.default=c.exports},167:function(t,e){},168:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=n(a(4)),i=n(a(169));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{value:"",isShow:!1,hottags:["羊毛衫","防风斗篷","羊毛衫","羊毛衫","羊毛衫"],tags:["羊毛衫","防风斗篷","羊毛衫","羊毛衫","羊毛衫"]}},components:{navBar:s.default,tagItem:i.default},onLoad:function(){this.tags=t.getStorageSync("historysearch")||[]},methods:{clearsearch:function(){var e=this;0!=this.tags.length&&t.showModal({title:"温馨提示",content:"确定要删除历史搜索记录？",success:function(a){a.confirm?(e.tags=[],console.log("清楚后的tags",e.tags),t.setStorageSync("historysearch",e.tags),t.showToast({title:"删除成功",icon:"success"})):a.cancel&&console.log("用户点击取消")}})},submit:function(e){this.value=e.detail.value.trim(),this.uptags(this.value),t.navigateTo({url:"/pages/common/search-detail?keyword="+this.value})},uptags:function(e){-1==this.tags.indexOf(this.value)&&(10==this.tags.length?(this.tags.pop(),this.tags.unshift(this.value)):this.tags.unshift(this.value),t.setStorageSync("historysearch",this.tags))},_getinput:function(t){this.value=t.detail.value.trim(),this.value?this.isShow=!0:this.isShow=!1},clear:function(){console.log("清楚"),this.value="",this.isShow=!1},onTap:function(t){console.log("aaac",t),this.value=t,this.isShow=!0,this.submit({detail:{value:t}})}}}}).call(e,a(2).default)},169:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(171),i=a.n(s),n=a(172);var o=function(t){a(170)},c=a(0)(i.a,n.a,o,null,null);e.default=c.exports},170:function(t,e){},171:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tag:{type:String,default:""},color:{type:String,default:"#333"}},data:function(){return{}},methods:{onTap:function(t){console.log("c onTap",t),this.$emit("onchange",t)}}}},172:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticStyle:{"margin-top":"10px"},attrs:{eventid:"YL5-0"},on:{tap:function(e){t.onTap(t.tag)}}},[a("text",{staticClass:"search-tag",style:{color:t.color}},[t._v(t._s(t.tag))])])},staticRenderFns:[]};e.a=s},173:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("nav-bar",{attrs:{title:"搜索",color:"#ffffff",background:"#ff0000",mpcomid:"Rpq-0"}}),a("view",{staticClass:"search-box"},[a("view",{staticClass:"wrap"},[a("view",{staticClass:"placeholder"},[a("uni-icon",{attrs:{type:"search",color:"#b5b5b5",size:"18",mpcomid:"zE3-1"}}),a("input",{attrs:{placeholder:"搜索商品关键字",value:t.value,eventid:"EJ4-0"},on:{confirm:t.submit,input:t._getinput}})],1),t.isShow?a("uni-icon",{attrs:{type:"clear",color:"#b5b5b5",size:"18",eventid:"w6r-1",mpcomid:"WDV-2"},on:{click:t.clear}}):t._e()],1)]),a("view",{staticClass:"container"},[a("view",{staticClass:"search-title"},[t._v("大家都在搜")]),a("view",{staticClass:"all-search-wrap"},t._l(t.hottags,function(e,s){return a("tag-item",{key:s,attrs:{tag:e,color:"#ff0000",eventid:"hir-2-"+s,mpcomid:"6Q1-3-"+s},on:{onchange:t.onTap}})})),a("view",{staticClass:"history"},[a("view",{staticClass:"history-title"},[a("view",{staticClass:"search-title"},[t._v("搜索历史")]),a("uni-icon",{attrs:{type:"delete",size:"14",color:"#ccc",eventid:"zNz-3",mpcomid:"XSw-4"},on:{click:t.clearsearch}})],1),a("view",{staticClass:"all-search-wrap"},t._l(t.tags,function(e,s){return a("tag-item",{key:s,attrs:{tag:e,eventid:"VGD-4-"+s,mpcomid:"24B-5-"+s},on:{onchange:t.onTap}})}))])])],1)},staticRenderFns:[]};e.a=s}},[165]);