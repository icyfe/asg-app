(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"098e":function(t,e,a){"use strict";a.r(e);var c=a("4e37"),o=a("9773");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("dd0c");var n=a("2877"),r=Object(n["a"])(o["default"],c["a"],c["b"],!1,null,"1fd09d24",null);r.options.__file="index.vue",e["default"]=r.exports},2582:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=r(a("a34a")),o=r(a("0642")),i=r(a("b775")),n=a("e4e4");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,c,o,i,n){try{var r=t[i](n),s=r.value}catch(d){return void a(d)}r.done?e(s):Promise.resolve(s).then(c,o)}function d(t){return function(){var e=this,a=arguments;return new Promise(function(c,o){var i=t.apply(e,a);function n(t){s(i,c,o,n,r,"next",t)}function r(t){s(i,c,o,n,r,"throw",t)}n(void 0)})}}var l={components:{dividLine:o.default,scrollIndex:i.default},data:function(){return{uni:"",swiper:"",tab:"",scrolltop:0,productList:new Array(10),loadingType:0,imagelist:[{title:1,src:"https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp"},{title:2,src:"https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"}],duration:300,loadingText:{contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,istapChange:!1,tabIndex:0,productMap:new Map,count:0,tabBars:[{name:"全部",id:"zb"},{name:"百货",id:"bh"},{name:"女装",id:"nz"},{name:"食品",id:"sp"},{name:"母婴",id:"my"},{name:"美妆",id:"mz"},{name:"洗护",id:"xh"},{name:"内衣",id:"ny"},{name:"数码",id:"sm"},{name:"家电",id:"jd"}]}},onLoad:function(t){this._getData()},methods:{qrcode:function(){console.log("二维码"),t.scanCode({success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),t.navigateTo({url:"/pages/common/web-view?src=".concat(e.result)})}})},_getData:function(){var e=this;t.showLoading({title:"加载中..",mask:!0});var a=Promise.all([(0,n.getRecommend)(),(0,n.getHotListGood)(),(0,n.getGoodsList)({page:0,type:"",screen:"",jg:""})]);a.then(function(a){if(console.log("aa",a),t.hideLoading(),a.length){var c=!0,o=!1,i=void 0;try{for(var n,r=a[Symbol.iterator]();!(c=(n=r.next()).done);c=!0){var s=n.value;if(200!=s.code)return void e._showError()}}catch(d){o=!0,i=d}finally{try{c||null==r.return||r.return()}finally{if(o)throw i}}e.productList.splice(e.tabIndex,1,{hotGood:a[1].result,banner:e.imagelist,msg:a[0].result,product:a[2].result}),t.setStorageSync(e.tabIndex.toString(),e.productList[e.tabIndex]),console.log("第一次加载数据",e.productList)}})},godetail:function(e){t.navigateTo({url:"/pages/common/goods-detail?id=".concat(e,"&table=yhq_goods")}),this.globScrollTop=this.nowScroll},_showError:function(){t.showToast({title:"出错了...",icon:"none",mask:!0})},_getGoodsList:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t.showLoading({title:"加载中.."}),(0,n.getGoodsList)({page:a,type:c,screen:o,jg:i}).then(function(a){t.hideLoading(),200==a.code?(console.log("没有数据所以获取",e.tabIndex),e.productList.splice(e.tabIndex,1,{banner:e.imagelist,msg:"",product:a.result}),console.log("没有数据所以获取完了",e.productList[e.tabIndex]),t.setStorageSync(e.tabIndex.toString(),e.productList[e.tabIndex])):e._showError()})},jump:function(e){if(this.globScrollTop=this.nowScroll,"search"!=e){var a=(new Map).set("jhs","聚划算").set("by","9.9包邮").set("tqg","淘抢购").set("tj","每日精选").set("tmjx","天猫精选");t.navigateTo({url:"/pages/common/good-item?type=".concat(e,"&title=").concat(a.get(e))})}else t.switchTab({url:"/pages/common/search"})},changeTab:function(){var e=d(c.default.mark(function e(a){var o,i,n,r,s,d,l,u,p,m;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(o=a.target.current,console.log("切换tab",o),0==o?"":this.tabBars[o].name,!this.istapChange){e.next=7;break}return this.tabIndex=o,this.istapChange=!1,e.abrupt("return");case 7:return e.next=9,this.getElSize("tab-bar");case 9:i=e.sent,n=i.scrollLeft,r=0,s=0;case 13:if(!(s<o)){e.next=21;break}return e.next=16,this.getElSize(this.tabBars[s].id);case 16:d=e.sent,r+=d.width;case 18:s++,e.next=13;break;case 21:return l=t.getSystemInfoSync().windowWidth,e.next=24,this.getElSize(this.tabBars[o].id);case 24:if(u=e.sent,p=u.width,r+p-n>l&&(this.scrollLeft=r+p-l),r<n&&(this.scrollLeft=r),this.istapChange=!1,this.tabIndex=o,this.loadingType=0,m=null,console.log("当前tab是否有数据",this.productList[this.tabIndex]),!this.productList[this.tabIndex])try{m=t.getStorageSync(this.tabIndex.toString()),console.log("从缓存获取数据",this.tabIndex,m),m?this.productList.splice(this.tabIndex,1,m):this._getGoodsList("",this.tabBars[this.tabIndex].name,"","")}catch(a){console.log("getData",a.message)}case 34:case"end":return e.stop()}},e,this)}));function a(t){return e.apply(this,arguments)}return a}(),getElSize:function(e){return new Promise(function(a,c){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){a(t)}).exec()})},tapTab:function(){var t=d(c.default.mark(function t(e){var a,o,i;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("tabbar",e),this.tabIndex!==e.target.dataset.current){t.next=5;break}return t.abrupt("return",!1);case 5:return a=e.target.dataset.current,console.log(a,this.tabBars[a]),0==a?"":this.tabBars[a].name,t.next=10,this.getElSize("tab-bar");case 10:o=t.sent,i=o.scrollLeft,this.scrollLeft=i,this.istapChange=!0,this.tabIndex=e.target.dataset.current,this.loadingType=0;case 16:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=l}).call(this,a("649d")["default"])},"4e37":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index-content"},[a("view",{staticClass:"search-container"},[a("view",{staticClass:"qrcode",attrs:{eventid:"1069cbc3-0"},on:{tap:t.qrcode}},[a("uni-icon",{attrs:{type:"qrcode",size:"16",color:"#bababa",mpcomid:"1069cbc3-0"}})],1),a("view",{staticClass:"search",attrs:{eventid:"1069cbc3-1"},on:{tap:function(e){t.jump("search")}}},[a("uni-icon",{attrs:{type:"search",size:"15",color:"#bababa",mpcomid:"1069cbc3-1"}}),t._v("\n\t\t\t立即查找独家优惠券\n\t\t")],1),a("view",{staticClass:"msg"},[a("uni-icon",{attrs:{type:"message",size:"16",color:"#bababa",mpcomid:"1069cbc3-2"}})],1)]),a("view",{staticClass:"uni-tab-bar uni-swiper-tab"},[a("scroll-view",{staticClass:"_isfixed ",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,c){return a("view",{key:e.id,class:["swiper-tab-list",t.tabIndex==c?"active":""],attrs:{id:e.id,"data-current":c,eventid:"1069cbc3-2-"+c},on:{tap:t.tapTab}},[t._v(t._s(e.name))])})),a("swiper",{staticClass:"index-swiper",attrs:{current:t.tabIndex,circular:"",eventid:"1069cbc3-3"},on:{change:t.changeTab}},[a("swiper-item",{attrs:{mpcomid:"1069cbc3-4"}},[a("block",[t.productList[0]?a("scroll-index",{attrs:{productgood:t.productList[0],current:"0",type:t.tabBars[0].name,mpcomid:"1069cbc3-3"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-6"}},[a("block",[t.productList[1]?a("scroll-index",{attrs:{productgood:t.productList[1],current:"1",type:t.tabBars[1].name,mpcomid:"1069cbc3-5"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-8"}},[a("block",[t.productList[2]?a("scroll-index",{attrs:{productgood:t.productList[2],current:"2",type:t.tabBars[2].name,mpcomid:"1069cbc3-7"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-10"}},[a("block",[t.productList[3]?a("scroll-index",{attrs:{productgood:t.productList[3],current:"3",type:t.tabBars[3].name,mpcomid:"1069cbc3-9"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-12"}},[a("block",[t.productList[4]?a("scroll-index",{attrs:{productgood:t.productList[4],current:"45",type:t.tabBars[4].name,mpcomid:"1069cbc3-11"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-14"}},[a("block",[t.productList[5]?a("scroll-index",{attrs:{productgood:t.productList[5],current:"5",type:t.tabBars[5].name,mpcomid:"1069cbc3-13"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-16"}},[a("block",[t.productList[6]?a("scroll-index",{attrs:{productgood:t.productList[6],current:"6",type:t.tabBars[6].name,mpcomid:"1069cbc3-15"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-18"}},[a("block",[t.productList[7]?a("scroll-index",{attrs:{productgood:t.productList[7],current:"7",type:t.tabBars[7].name,mpcomid:"1069cbc3-17"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-20"}},[a("block",[t.productList[8]?a("scroll-index",{attrs:{productgood:t.productList[8],current:"8",type:t.tabBars[8].name,mpcomid:"1069cbc3-19"}}):t._e()],1)],1),a("swiper-item",{attrs:{mpcomid:"1069cbc3-22"}},[a("block",[a("scroll-index",{attrs:{productgood:t.productList[9],current:"9",type:t.tabBars[9].name,mpcomid:"1069cbc3-21"}})],1)],1)],1)],1)])},o=[];a.d(e,"a",function(){return c}),a.d(e,"b",function(){return o})},9773:function(t,e,a){"use strict";a.r(e);var c=a("2582"),o=a.n(c);for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);e["default"]=o.a},"9c4f":function(t,e,a){},d585:function(t,e,a){"use strict";a("95b2");var c=i(a("b0ce")),o=i(a("098e"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(o.default))},dd0c:function(t,e,a){"use strict";var c=a("9c4f"),o=a.n(c);o.a}},[["d585","common/runtime","common/vendor"]]]);