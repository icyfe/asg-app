(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-circle"],{"44d7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("view-tabbar",{attrs:{current:"1",tabs:t.tabs}})],1)},r=[],o=n("91bc"),a={data:function(){return{title:"商圈",tabs:[{url:"index",type:"store",title:"商城",page:"store"},{url:"/pages/store/circle",type:"find",title:"商圈",page:"store"},{url:"/pages/store/customer",type:"bliaotian",title:" 客服",page:"store"},{url:"/pages/store/shopcar",type:"gouwuche",title:" 购物车",page:"store"},{url:"user",type:"user",title:" 我的",page:"index"}]}},components:{viewTabbar:o["a"]}},c=a,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null);l.options.__file="circle.vue";e["default"]=l.exports},5114:function(t,e,n){"use strict";var i=n("b160"),r=n.n(i);r.a},"91bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},t._l(t.tabs,function(e,i){return t.tabs.length>0?n("v-uni-view",{key:i,staticClass:"wrap",on:{click:function(n){n=t.$handleEvent(n),t.jump(e.page,e.url,i)}}},[n("uni-icon",{staticClass:"icon",attrs:{size:"28",color:t.current==i?"#ff0000":"#707070",type:e.type}}),n("v-uni-text",{class:t.current==i?"txt on":"txt"},[t._v(t._s(e.title))])],1):t._e()}))},r=[],o={props:{tabs:{type:Array},current:{type:String}},data:function(){return{activeindex:0}},onLoad:function(){this.activeindex=this.current,console.log("cc",this.current,this.activeindex)},methods:{jump:function(t,e,n){console.log("跳转路径",e,n,this.current),"user"!=e&&"index"!=e?uni.redirectTo({url:"./".concat(e)}):uni.reLaunch({url:"/pages/".concat(t,"/").concat(e)})}}},a=o,c=(n("5114"),n("2877")),s=Object(c["a"])(a,i,r,!1,null,"4b1c021d",null);s.options.__file="uni-tabbar.vue";e["a"]=s.exports},a49c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.content[data-v-4b1c021d]{background:#555;position:fixed!important;z-index:999!important;left:0!important;bottom:0!important;right:0!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important;-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;text-align:center!important;height:56px!important;width:100%!important;padding:%?4?% 0;border-top:%?1?% solid #ccc!important;background:#fff\n}\n.content .wrap[data-v-4b1c021d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center\n}\n.content .wrap .txt[data-v-4b1c021d]{font-size:10px;color:#707070\n}\n.content .wrap .on[data-v-4b1c021d]{color:red\n}",""])},b160:function(t,e,n){var i=n("a49c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("4a9fe935",i,!0,{sourceMap:!1,shadowMode:!1})}}]);