require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{204:function(t,e,n){"use strict";var o=a(n(1)),c=a(n(205));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(c.default))},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(207),c=n.n(o),a=n(208);var u=function(t){n(206)},i=n(0)(c.a,a.a,u,"data-v-58999184",null);e.default=i.exports},206:function(t,e){},207:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=u(n(4)),c=u(n(8)),a=n(6);function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{collection:[]}},onLoad:function(){this.dataInit()},components:{navBar:o.default,productList:c.default},methods:{dataInit:function(){var e=this,n=this.getUser();(0,a.getCollection)(n).then(function(n){"200"!=n.code&&t.showToast({title:"服务器开小差了~"}),e.collection.push(n.result),console.log(e.collection)})},getUser:function(){try{return t.getStorageSync("user").phone}catch(t){}}}}}).call(e,n(2).default)},208:function(t,e,n){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("nav-bar",{attrs:{title:"我的收藏",background:"#ff0000",color:"#fff",mpcomid:"7pT-0"}}),e("view",{staticClass:"content"},[e("product-list",{attrs:{productList:this.collection,mpcomid:"Y4x-1"}})],1)],1)},staticRenderFns:[]};e.a=o}},[204]);