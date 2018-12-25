require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],Array(22).concat([function(t,e,i){"use strict";var o=n(i(1)),s=n(i(23));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(s.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(25),s=i.n(o),n=i(47);var a=function(t){i(24)},r=i(0)(s.a,n.a,a,"data-v-d31acb48",null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(26)),s=r(i(5)),n=r(i(32)),a=i(6);function r(t){return t&&t.__esModule?t:{default:t}}function c(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function o(s,n){try{var a=e[s](n),r=a.value}catch(t){return void i(t)}if(!a.done)return Promise.resolve(r).then(function(t){o("next",t)},function(t){o("throw",t)});t(r)}("next")})}}e.default={components:{dividLine:s.default,scrollIndex:n.default},data:function(){return{uni:"",swiper:"",tab:"",scrolltop:0,productList:[],loadingType:0,imagelist:[{title:1,src:"https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp"},{title:2,src:"https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"},{title:3,src:"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"}],duration:300,loadingText:{contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,istapChange:!1,tabIndex:0,productMap:new Map,count:0,tabBars:[{name:"全部",id:"zb"},{name:"百货",id:"bh"},{name:"女装",id:"nz"},{name:"食品",id:"sp"},{name:"母婴",id:"my"},{name:"美妆",id:"mz"},{name:"洗护",id:"xh"},{name:"内衣",id:"ny"},{name:"数码",id:"sm"},{name:"家电",id:"jd"}]}},onLoad:function(t){this._getData()},methods:{qrcode:function(){console.log("二维码"),t.scanCode({success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),t.navigateTo({url:"/pages/common/web-view"}),console.log("this.qrsrc",this.qrsrc)}})},_getData:function(){var e=this;t.showLoading({title:"加载中..",mask:!0}),Promise.all([(0,a.getRecommend)(),(0,a.getHotListGood)(),(0,a.getGoodsList)({page:0,type:"",screen:"",jg:""})]).then(function(i){if(console.log("aa",i),t.hideLoading(),i.length){var o=!0,s=!1,n=void 0;try{for(var a,r=i[Symbol.iterator]();!(o=(a=r.next()).done);o=!0){if(200!=a.value.code)return void e._showError()}}catch(t){s=!0,n=t}finally{try{!o&&r.return&&r.return()}finally{if(s)throw n}}e.productList.push({hotGood:i[1].result,banner:e.imagelist,msg:i[0].result,product:i[2].result}),t.setStorageSync(e.tabIndex.toString(),e.productList[e.tabIndex]),console.log("第一次加载数据",e.productList)}})},godetail:function(e){t.navigateTo({url:"/pages/common/goods-detail?id="+e+"&table=yhq_goods"}),this.globScrollTop=this.nowScroll},_showError:function(){t.showToast({title:"出错了...",icon:"none",mask:!0})},_getGoodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t.showLoading({title:"加载中.."}),(0,a.getGoodsList)({page:e,type:i,screen:s,jg:n}).then(function(e){t.hideLoading(),200==e.code?(o.productList.push({banner:o.imagelist,msg:"",product:e.result}),t.setStorageSync(o.tabIndex.toString(),o.productList[o.tabIndex])):o._showError()})},jump:function(e){if("search"!=e){var i=(new Map).set("jhs","聚划算").set("by","9.9包邮").set("tqg","淘抢购").set("tj","每日精选").set("tmjx","天猫精选");t.navigateTo({url:"/pages/common/good-item?type="+e+"&title="+i.get(e)})}else t.navigateTo({url:"/pages/common/search"})},changeTab:function(e){var i=this;return c(o.default.mark(function s(){var n,a,r,c,l,d,u,p,m,g;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n=e.target.current,0==n?"":i.tabBars[n].name,!i.istapChange){o.next=6;break}return i.tabIndex=n,i.istapChange=!1,o.abrupt("return");case 6:return o.next=8,i.getElSize("tab-bar");case 8:a=o.sent,r=a.scrollLeft,c=0,l=0;case 12:if(!(l<n)){o.next=20;break}return o.next=15,i.getElSize(i.tabBars[l].id);case 15:d=o.sent,c+=d.width;case 17:l++,o.next=12;break;case 20:return u=t.getSystemInfoSync().windowWidth,o.next=23,i.getElSize(i.tabBars[n].id);case 23:if(p=o.sent,m=p.width,c+m-r>u&&(i.scrollLeft=c+m-u),c<r&&(i.scrollLeft=c),i.istapChange=!1,i.tabIndex=n,i.loadingType=0,g=null,!i.productList[i.tabIndex])try{(g=t.getStorageSync(i.tabIndex.toString()))?i.productList.push(g):i._getGoodsList("",i.tabBars[i.tabIndex].name,"",""),console.log("good",g,"index",i.tabIndex.toString())}catch(t){console.log("getData",t.message)}case 32:case"end":return o.stop()}},s,i)}))()},getElSize:function(e){return new Promise(function(i,o){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){i(t)}).exec()})},tapTab:function(t){var e=this;return c(o.default.mark(function i(){var s,n,a;return o.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(console.log("tabbar",t),e.tabIndex!==t.target.dataset.current){i.next=5;break}return i.abrupt("return",!1);case 5:return s=t.target.dataset.current,console.log(s,e.tabBars[s]),0==s?"":e.tabBars[s].name,i.next=10,e.getElSize("tab-bar");case 10:n=i.sent,a=n.scrollLeft,e.scrollLeft=a,e.istapChange=!0,e.tabIndex=t.target.dataset.current,e.loadingType=0;case 16:case"end":return i.stop()}},i,e)}))()}}}}).call(e,i(2).default)},,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(34),s=i.n(o),n=i(46);var a=function(t){i(33)},r=i(0)(s.a,n.a,a,"data-v-704a8efd",null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=c(i(9)),s=c(i(5)),n=c(i(38)),a=c(i(42)),r=i(6);function c(t){return t&&t.__esModule?t:{default:t}}e.default={props:{productgood:{type:Object},current:{type:[Number,String],default:0},type:{type:String}},data:function(){return{scrolltop:0,page:1,scrollEv:null,nowScroll:0,isScroll:!1,isAndroid:!1,timer:null,isShow:!1,globScrollTop:0,uni:"",swiper:"",tab:"",active:0,isup:3,count:0,screen:null,isfixed:!1,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},duration:300,loadingText:{contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},components:{uniLoadMore:o.default,dividLine:s.default,goodList:n.default,goTop:a.default},computed:{up:function(){return 0==this.isup?"#ff0000":"#ccc"},down:function(){return 1==this.isup?"#ff0000":"#ccc"}},created:function(){console.log("!!",this.productgood)},methods:{screentap:function(t){if(this.page=1,3==t)return this.active=t,this.isup=this.count%2==0?this.isup=0:this.isup=1,this.count++,console.log("this.isip",this.isup),void this._getGoodsList({page:0,screen:t,jg:this.isup});this._getGoodsList({page:0,screen:t}),this.active=t,this.isup=3},_getGoodsList:function(e){var i=this,o=e.page,s=void 0===o?0:o,n=e.screen,a=void 0===n?"":n,c=e.jg,l=void 0===c?"":c;t.showLoading({title:"加载中.."}),(0,r.getGoodsList)({page:s,type:this.type,screen:a,jg:l}).then(function(e){t.hideLoading(),200==e.code?(i.productgood.product=e.result,console.log(i.productgood.product)):i._showError()})},_screensticky:function(t){var e=t.target||t.srcElement;this.nowScroll=e.scrollTop,this.nowScroll>790?(this.isAndroid&&(this.isfixed=!0),this.isfixed=!0,this.isShow=!0):(this.isfixed=!1,this.isShow=!1)},jump:function(e){if("search"!=e){var i=(new Map).set("jhs","聚划算").set("by","9.9包邮").set("tqg_goods","淘抢购").set("tj","每日默认").set("tmjx","天猫默认");t.navigateTo({url:"/pages/common/good-item?type="+e+"&title="+i.get(e)})}else t.navigateTo({url:"/pages/common/search"})},goTop:function(){this.globScrollTop=this.nowScroll,this.$nextTick(function(){this.globScrollTop=0,this.isfixed=!1,this.isShow=!1,console.log(this.isfixed,this.isShow)})},godetail:function(e){t.navigateTo({url:"/pages/common/goods-detail?id="+e}),this.globScrollTop=this.nowScroll},onloadmore:function(){var t=this;0===this.loadingType&&(this.loadingType=1,(0,r.getGoodsList)({page:this.page,screen:"",jg:"",type:this.type}).then(function(e){if(200==e.code){if(0==e.result.length)return void(t.loadingType=3);t.productgood.product=t.productgood.product.concat(e.result),t.page++,t.loadingType=0}else t._showError()}))}}}}).call(e,i(2).default)},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(40),s=i.n(o),n=i(41);var a=function(t){i(39)},r=i(0)(s.a,n.a,a,"data-v-0bcbcc93",null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{good:Object},computed:{fontSize:function(){return this.size+"px"},logo:function(){return 0==this.good.user_type?"../../static/tb.png":"../../static/tm.png"},yj:function(){return(this.good.youhuiquan*parseFloat(this.good.commission_rate/100)).toFixed(2)}},methods:{onTap:function(){this.$emit("onTap")}}}},function(t,e,i){"use strict";var o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"goods-wrap",attrs:{eventid:"Npn-0"},on:{click:t.onTap}},[i("view",{staticClass:"goods-img"},[i("image",{staticClass:"img",attrs:{mode:"aspectFit","lazy-load":"",src:t.good.pict_url}})]),i("view",{staticClass:"desc"},[i("view",{staticClass:"shop-title"},[i("image",{staticClass:"logo",attrs:{mode:"aspectFit",src:t.logo}}),i("view",{staticClass:"txt"},[t._v(t._s(t.good.title))])]),i("view",{staticClass:"shop-desc"},[i("view",{staticClass:"price-wrap"},[i("view",{staticClass:"price"},[i("view",{staticClass:"original"},[t._v("原价￥"+t._s(t.good.zk_final_price))]),i("view",{staticClass:"present"},[t._v("￥"+t._s(t.good.quanhoujia))])]),i("view",{staticClass:"yj"},[t._v("预估佣金￥"+t._s(t.yj))])]),i("view",{staticClass:"coupon-wrap"},[i("view",{staticClass:"num"},[t._v(t._s(t.good.volume)+"人已购")]),i("view",{staticClass:"value"},[t._v(t._s(t.good.youhuiquan)+"元券")])])])])])},staticRenderFns:[]};e.a=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(44),s=i.n(o),n=i(45);var a=function(t){i(43)},r=i(0)(s.a,n.a,a,"data-v-fc63994a",null);e.default=r.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},data:function(){return{}},methods:{goTop:function(){this.$emit("goTop")}}}},function(t,e,i){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"gotop",attrs:{eventid:"0H2-0"},on:{click:this.goTop}},[e("uni-icon",{attrs:{type:"gotop",size:"30",color:"#FF4040",mpcomid:"gIe-0"}})],1)},staticRenderFns:[]};e.a=o},function(t,e,i){"use strict";var o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.productgood?i("scroll-view",{staticClass:"list",attrs:{"scroll-y":"","lower-threshold":"100","scroll-top":t.globScrollTop,eventid:"heL-17"},on:{scroll:t._screensticky,scrolltolower:t.onloadmore}},[i("swiper",{staticClass:"swiper-box",attrs:{circular:"",autoplay:"","indicator-active-color":"#fff","indicator-dots":"",interval:"5000",duration:t.duration}},t._l(t.productgood.banner,function(e,o){return t.productgood.banner.length>0?i("swiper-item",{key:o,staticClass:"item",attrs:{mpcomid:"pB6-0-"+o}},[i("image",{staticClass:"swiper-img",attrs:{src:e.src}})]):t._e()})),0==t.current?i("view",{staticClass:"classification-container"},[i("view",{staticClass:"item"},[i("view",{attrs:{eventid:"WIP-0"},on:{tap:function(e){t.jump("jhs")}}},[i("uni-icon",{attrs:{type:"jhs",size:"35",color:"#f7002f",mpcomid:"dGq-1"}}),i("text",{staticClass:"txt"},[t._v("聚划算")])],1),i("view",{attrs:{eventid:"p2Q-1"},on:{tap:function(e){t.jump("by")}}},[i("uni-icon",{attrs:{type:"by",size:"35",color:"#f83061",mpcomid:"GPF-2"}}),i("text",[t._v("9.9包邮")])],1),i("view",{attrs:{eventid:"Xqk-2"},on:{tap:function(e){t.jump("tmjx")}}},[i("uni-icon",{attrs:{type:"tianmao",size:"35",color:"#ff0000",mpcomid:"94l-3"}}),i("text",[t._v("天猫精选")])],1),i("view",{attrs:{eventid:"SwH-3"},on:{tap:function(e){t.jump("tqg_goods")}}},[i("uni-icon",{attrs:{type:"tqg",size:"35",color:"#f98901",mpcomid:"or5-4"}}),i("text",[t._v("淘枪购")])],1),i("view",{attrs:{eventid:"xIt-4"},on:{tap:function(e){t.jump("tj")}}},[i("uni-icon",{attrs:{type:"jian",size:"35",color:"#ffdd50",mpcomid:"FNv-5"}}),i("text",[t._v("每日推荐")])],1)])]):t._e(),0==t.current?i("view",{staticClass:"uni-swiper-msg"},[i("view",{staticClass:"uni-swiper-msg-icon"},[i("image",{attrs:{src:"../../static/logo.png",mode:"widthFix"}})]),i("swiper",{attrs:{vertical:"true",autoplay:"true",circular:"true",interval:"3000"}},t._l(t.productgood.msg,function(e,o){return i("swiper-item",{key:o,attrs:{mpcomid:"Dz1-6-"+o}},[i("view",{attrs:{eventid:"RgM-5-"+o},on:{tap:function(i){t.godetail(e.id)}}},[t._v(t._s(e.title))])])}))],1):t._e(),i("divid-line",{attrs:{height:"5",mpcomid:"MBe-7"}}),0==t.current?i("view",{staticClass:"hot-txt"},[t._v("今日"),i("text",{staticClass:"hot"},[t._v("热销")]),t._v("榜单")]):t._e(),0==t.current?i("scroll-view",{staticClass:"hot-scroll-wrap border-1px",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},[i("view",{staticClass:"wrap"},t._l(t.productgood.hotGood,function(e,o){return i("view",{key:o,staticClass:"uni-product",attrs:{eventid:"009-6-"+o},on:{tap:function(i){t.godetail(e.num_iid)}}},[i("view",{staticClass:"image-view"},[i("image",{staticClass:"uni-product-image",attrs:{src:e.pict_url}})]),i("view",{staticClass:"uni-product-title"},[t._v(t._s(e.title))]),i("view",{staticClass:"uni-product-price"},[i("text",{staticClass:"uni-product-price-favour"},[t._v("￥"+t._s(e.zk_final_price))]),i("text",{staticClass:"uni-product-price-original"},[t._v("￥"+t._s(e.quanhoujia))])]),i("view",{staticClass:"uni-product-price"},[i("text",{staticClass:"small-gray"},[t._v(t._s(e.volume)+"人已购")]),i("text",{staticClass:"uni-product-tip"},[t._v(t._s(e.youhuiquan)+"元券")])])])}))]):t._e(),i("divid-line",{attrs:{height:"10",mpcomid:"VTm-8"}}),i("view",{staticClass:"recommend"},[t._v("—— 为你推荐 ——")]),i("divid-line",{attrs:{height:"2",mpcomid:"AS3-9"}}),t.isfixed?i("view",{staticClass:"screen-wrap _fiexd",attrs:{id:"screen"}},[i("view",{class:{on:0==t.active},attrs:{eventid:"RHS-7"},on:{tap:function(e){t.screentap("0")}}},[t._v("默认")]),i("view",{class:{on:1==t.active},attrs:{eventid:"8H7-8"},on:{tap:function(e){t.screentap("1")}}},[t._v("销量")]),i("view",{class:{on:2==t.active},attrs:{eventid:"e3E-9"},on:{tap:function(e){t.screentap("2")}}},[t._v("最新")]),i("view",{staticClass:"jg-wrap",attrs:{eventid:"DGC-10"},on:{tap:function(e){t.screentap("3")}}},[i("text",{class:{on:3==t.active}},[t._v("价格")]),i("view",{staticClass:"jgicon"},[i("uni-icon",{attrs:{type:"uparrow",size:"12",color:t.up,mpcomid:"CzX-10"}}),i("uni-icon",{attrs:{type:"downarrow",size:"12",color:t.down,mpcomid:"wFH-11"}})],1)])]):t._e(),i("view",{class:["screen-wrap",{_sticky:!t.isAndroid}]},[i("view",{class:{on:0==t.active},attrs:{eventid:"QTq-11"},on:{tap:function(e){t.screentap("0")}}},[t._v("默认")]),i("view",{class:{on:1==t.active},attrs:{eventid:"zHl-12"},on:{tap:function(e){t.screentap("1")}}},[t._v("销量")]),i("view",{class:{on:2==t.active},attrs:{eventid:"Eud-13"},on:{tap:function(e){t.screentap("2")}}},[t._v("最新")]),i("view",{staticClass:"jg-wrap",attrs:{eventid:"bxX-14"},on:{tap:function(e){t.screentap("3")}}},[i("text",{class:{on:3==t.active}},[t._v("价格")]),i("view",{staticClass:"jgicon"},[i("uni-icon",{attrs:{type:"uparrow",size:"12",color:t.up,mpcomid:"2ky-12"}}),i("uni-icon",{attrs:{type:"downarrow",size:"12",color:t.down,mpcomid:"SEv-13"}})],1)])]),i("view",{staticClass:"goods-container"},[t._l(t.productgood.product,function(e,o){return i("block",{key:o},[i("good-list",{attrs:{good:e,eventid:"D54-15-"+o,mpcomid:"L14-14-"+o},on:{onTap:function(i){t.godetail(e.num_iid)}}})],1)}),i("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"4NN-15"}})],2),t.isShow?i("go-top",{attrs:{eventid:"Jxk-16",mpcomid:"D5h-16"},on:{goTop:t.goTop}}):t._e()],1):t._e()},staticRenderFns:[]};e.a=o},function(t,e,i){"use strict";var o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index-content"},[i("view",{staticClass:"search-container"},[i("view",{staticClass:"qrcode",attrs:{eventid:"hel-0"},on:{tap:t.qrcode}},[i("uni-icon",{attrs:{type:"qrcode",size:"16",color:"#bababa",mpcomid:"s3U-0"}})],1),i("view",{staticClass:"search",attrs:{eventid:"HjG-1"},on:{tap:function(e){t.jump("search")}}},[i("uni-icon",{attrs:{type:"search",size:"15",color:"#bababa",mpcomid:"pBu-1"}}),t._v("\n\t\t\t立即查找独家优惠券\n\t\t")],1),i("view",{staticClass:"msg"},[i("uni-icon",{attrs:{type:"message",size:"16",color:"#bababa",mpcomid:"sDm-2"}})],1)]),i("view",{staticClass:"uni-tab-bar uni-swiper-tab"},[i("scroll-view",{staticClass:"_isfixed ",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,o){return i("view",{key:e.id,class:["swiper-tab-list",t.tabIndex==o?"active":""],attrs:{id:e.id,"data-current":o,eventid:"m3B-2-"+o},on:{tap:t.tapTab}},[t._v(t._s(e.name))])})),i("swiper",{staticClass:"index-swiper",attrs:{current:t.tabIndex,circular:"",eventid:"Un9-3"},on:{change:t.changeTab}},[t.productList[0]?i("swiper-item",{attrs:{mpcomid:"DKR-4"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[0],current:"0",type:t.tabBars[0].name,mpcomid:"pgC-3"}})],1)],1):t._e(),i("swiper-item",{attrs:{mpcomid:"p2w-6"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[1],current:"1",type:t.tabBars[1].name,mpcomid:"8an-5"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"Hkt-8"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[2],current:"2",type:t.tabBars[2].name,mpcomid:"9DH-7"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"Syb-10"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[3],current:"3",type:t.tabBars[3].name,mpcomid:"j5b-9"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"keW-12"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[4],current:"45",type:t.tabBars[4].name,mpcomid:"Sih-11"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"7T7-14"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[5],current:"5",type:t.tabBars[5].name,mpcomid:"mpr-13"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"NGF-16"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[6],current:"6",type:t.tabBars[6].name,mpcomid:"Pvn-15"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"9cC-18"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[7],current:"7",type:t.tabBars[7].name,mpcomid:"p2F-17"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"CFH-20"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[8],current:"8",type:t.tabBars[8].name,mpcomid:"ipT-19"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"HWW-22"}},[i("block",[i("scroll-index",{attrs:{productgood:t.productList[9],current:"9",type:t.tabBars[9].name,mpcomid:"FCJ-21"}})],1)],1)],1)],1)])},staticRenderFns:[]};e.a=o}]),[22]);