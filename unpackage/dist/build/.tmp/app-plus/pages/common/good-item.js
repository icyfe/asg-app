(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good-item"],{35187:function(t,e,n){"use strict";n.r(e);var i=n("6506"),o=n("add4");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("779f");var s=n("2877"),a=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"114e9f54",null);a.options.__file="good-item.vue",e["default"]=a.exports},6506:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("nav-bar",{attrs:{title:t.title,eventid:"53cf0951-0",mpcomid:"53cf0951-0"},on:{back:t.back}}),n("view",{staticClass:"container"},[n("view",{staticClass:"screen-wrap"},[n("view",{class:{on:0==t.active},attrs:{eventid:"53cf0951-1"},on:{click:function(e){t.screentap("0")}}},[t._v("精选")]),n("view",{class:{on:1==t.active},attrs:{eventid:"53cf0951-2"},on:{click:function(e){t.screentap("1")}}},[t._v("销量")]),n("view",{class:{on:2==t.active},attrs:{eventid:"53cf0951-3"},on:{click:function(e){t.screentap("2")}}},[t._v("最新")]),n("view",{staticClass:"jg-wrap",attrs:{eventid:"53cf0951-4"},on:{click:function(e){t.screentap("3")}}},[n("text",{class:{on:3==t.active}},[t._v("价格")]),n("view",{staticClass:"jgicon"},[n("uni-icon",{attrs:{type:"uparrow",size:"12",color:t.up,mpcomid:"53cf0951-1"}}),n("uni-icon",{attrs:{type:"downarrow",size:"12",color:t.down,mpcomid:"53cf0951-2"}})],1)])]),n("view",{staticClass:"good-wrap"},[n("product-list",{attrs:{productList:t.recommend,table:t.type,mpcomid:"53cf0951-3"}}),n("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"53cf0951-4"}})],1)])],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"779f":function(t,e,n){"use strict";var i=n("7907"),o=n.n(i);o.a},7907:function(t,e,n){},"8a8c":function(t,e,n){"use strict";n("95b2");var i=c(n("b0ce")),o=c(n("35187"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},add4:function(t,e,n){"use strict";n.r(e);var i=n("c639"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a},c639:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4a61")),o=a(n("e603")),c=a(n("0c98")),s=n("e4e4");function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{type:"",screen:"",jg:"",page:1,active:0,isup:3,count:0,recommend:null,title:"",loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},components:{navBar:i.default,productList:o.default,uniLoadMore:c.default},computed:{up:function(){var t=0==this.isup?"#ff0000":"#ccc";return t},down:function(){var t=1==this.isup?"#ff0000":"#ccc";return t}},onLoad:function(t){this.type=t.type||"",this.title=t.title||"爱省购",this._getGoodsList({type:this.type})},onReachBottom:function(){var t=this;if(0===this.loadingType){this.loadingType=1;var e=(0,s.getOtherGood)({page:this.page,type:this.type,screen:this.screen,jg:this.jg});e.then(function(e){if(200==e.code){if(0==e.result.length)return void(t.loadingType=3);t.recommend=t.recommend.concat(e.result),t.page++,t.loadingType=0}else t._showError()})}},methods:{back:function(){t.switchTab({url:"/pages/index/index"})},_showError:function(){t.showToast({title:"出错了...",icon:"none",mask:!0})},screentap:function(t){if(this.screen=t,3==t)return this.active=t,this.isup=this.count%2==0?this.isup=0:this.isup=1,this.count++,console.log("this.isip",this.isup),this.jg=this.isup,void this._getGoodsList({screen:t,jg:this.isup});this._getGoodsList({screen:t}),this.active=t,this.isup=3},_getGoodsList:function(e){var n=this,i=e.page,o=void 0===i?0:i,c=(e.type,e.screen),a=void 0===c?"":c,r=e.jg,u=void 0===r?"":r;t.showLoading({title:"加载中.."});var d=(0,s.getOtherGood)({page:o,type:this.type,screen:a,jg:u});d.then(function(e){t.hideLoading(),200==e.code?(n.recommend=e.result,console.log(n.recommend)):n._showError()})}}};e.default=r}).call(this,n("649d")["default"])}},[["8a8c","common/runtime","common/vendor"]]]);