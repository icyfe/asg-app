<template>
	<view class="index-content" v-if="productList">
		<!-- 查找栏 -->
		<view class="search-container">
			<view class="qrcode">
				<uni-icon type="qrcode" size="16" color="#bababa"></uni-icon>
			</view>
			<view class="search">
				<uni-icon type="search" size="15" color="#bababa">
				</uni-icon>
				立即查找独家优惠券
			</view>
			<view class="msg">
				<uni-icon type="message" size="16" color="#bababa"></uni-icon>
			</view>
		</view>
		<!-- 主布局区域 -->
		<view class="uni-tab-bar">
			<scroll-view id="tab-bar" :class="[uni-swiper-tab,{'_isfixed':isfixed}] " scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
				 :data-current="index" @tap="tapTab">{{tab.name}}</view>
			</scroll-view>

			<swiper :current="tabIndex" class="index-swiper" :duration="duration" @change="changeTab">
				<swiper-item v-for="item in itemList" :key="item">
					<!-- 整页布局滚动 -->
					<scroll-view scroll-y @scroll="_screensticky" :scroll-top="globScrollTop" class="list" @scrolltolower='onloadmore'>
						<!-- 轮播图 -->
						<swiper @change="changeswiper" class="swiper-box" circular autoplay indicator-active-color="#fff" indicator-dots
						 interval="5000" :duration="duration">
							<swiper-item class="item" v-for="(item, index2)  in imagelist" :key="index2">
								<image class="swiper-img" :src="item.src"></image>
								<!-- lazy-load mode="aspectFit" -->
							</swiper-item>
						</swiper>
						<!-- 首页20个大类分区 -->
						<view class="classification-container" v-show="tabIndex == 0">
							<view class="item">
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text class="txt">聚划算</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>9.9包邮</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>天猫精选</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>淘淘乐</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>每日推荐</text>
								</view>
							</view>
							<!-- <view class="item">
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text class="txt">大牌秒杀</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>大牌秒杀</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>大牌秒杀</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>大牌秒杀</text>
								</view>
								<view>
									<uni-icon type="on-lightning" size="35" color="#e5241f"></uni-icon>
									<text>大牌秒杀</text>
								</view>
							</view> -->
						</view>
						<!-- 滚动公告栏首页 -->
						<view class="uni-swiper-msg" v-show="tabIndex == 0">
							<view class="uni-swiper-msg-icon">
								<image src="../../static/logo.png" mode="widthFix"></image>
							</view>
							<swiper vertical="true" autoplay="true" circular="true" interval="3000">
								<swiper-item v-if="msg.length > 1" v-for="(item, boardindex) in msg" :key="boardindex">
									<view @click="godetail(item.id)">{{item.title}}</view>
								</swiper-item>
							</swiper>
						</view>
						<divid-line height="5"></divid-line>
						<!-- 精选滑动页面 -->
						<view class="hot-txt" v-show="tabIndex == 0">今日<text class="hot">热销</text>榜单</view>
						<scroll-view class="hot-scroll-wrap border-1px" scroll-x style="width: 100%;" v-show="tabIndex == 0">
							<view class="wrap">
								<view class="uni-product" v-for="(product,hotproductindex) in hotProductList" :key="hotproductindex" @click="godetail(product.id)">
									<view class="image-view">
										<image class="uni-product-image" :src="product.img"></image>
									</view>
									<view class="uni-product-title">{{product.title}}</view>
									<view class="uni-product-price">
										<text class="uni-product-price-favour">￥{{product.originp}}</text>
										<text class="uni-product-price-original">￥{{product.price}}</text>
										<text class="uni-product-tip">{{product.type}}</text>
									</view>
								</view>
							</view>
						</scroll-view>
						<!-- 条件筛选 -->
						<divid-line height="10"></divid-line>
						<view class="recommend">—— 为你推荐 ——</view>
						<divid-line height="2"></divid-line>
						<!-- <view :class="['_fiexd hidden screen-wrap', {'visiale':isfixed}]"> -->
						<view class="screen-wrap _fiexd" v-if="isfixed">
							<view :class="{on :active==0}" @click="screentap('0')">精选</view>
							<view :class="{on :active==1}" @click="screentap('1')">销量</view>
							<view :class="{on :active==2}" @click="screentap('2')">最新</view>
							<view class='jg-wrap' @click="screentap('3')">
								<text :class="{on :active==3}">价格</text>
								<view class="jgicon">
									<uni-icon type="uparrow" size="12" :color="up">
									</uni-icon>
									<uni-icon type="downarrow" size="12" :color="down">
									</uni-icon>
								</view>
							</view>
						</view>
						<!-- <view  :class="['screen-wrap', {'_sticky':!isAndroid}]"> -->
						<view :class="['screen-wrap', {'_sticky':!isAndroid}]">
							<view :class="{on :active==0}" @click="screentap('0')">精选</view>
							<view :class="{on :active==1}" @click="screentap('1')">销量</view>
							<view :class="{on :active==2}" @click="screentap('2')">最新</view>
							<view class='jg-wrap' @click="screentap('3')">
								<text :class="{on :active==3}">价格</text>
								<view class="jgicon">
									<uni-icon type="uparrow" size="12" :color="up">
									</uni-icon>
									<uni-icon type="downarrow" size="12" :color="down">
									</uni-icon>
								</view>
							</view>
						</view>
						<view class="goods-container">
							<block v-for="(item,productindex) in productList" :key="productindex">
								<good-list :goodimg="item.img" :goodtitle="item.title" :goodprice="item.price" :goodorprice="item.reprice"
								 :goodbuynum="item.readyby" :goodvalue="item.value" :goodyj="item.yj" :goodid="item.id" @onTap="godetail(item.id)"></good-list>
							</block>
							<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<go-top v-if="isShow" @goTop="goTop"></go-top>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	import dividLine from '@/components/line.vue';
	import goodList from '@/components/good-list.vue';
	import goTop from '@/components/go-top.vue'
	import {
		getGoodsList,
		getRecommend,
		getHotListGood
	} from '@/api/goods.js'
	export default {
		components: {
			uniLoadMore,
			dividLine,
			goodList,
			goTop
		},
		computed: {
			up() {
				let color = this.isup == 0 ? '#ff0000' : '#ccc'
				return color
			},
			down() {
				let color = this.isup == 1 ? '#ff0000' : '#ccc';
				return color;
			}
		},
		data() {
			return {
				page: 1,
				scrollEv: null,
				nowScroll: 0,
				isScroll: false,
				isAndroid: false,
				timer: null,
				isShow: false,
				globScrollTop: 0,
				uni: "",
				swiper: "",
				tab: "",
				active: 0,
				isup: 3,
				count: 0,
				screen: null,
				isfixed: false,
				productList: null,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				hotProductList: [],
				msg: [],
				imagelist: [{
						title: 1,
						src: "https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp"
					},
					{
						title: 2,
						src: "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					}
				],
				itemList: [
					'itemadfasdf1',
					'itemasdfasdf2',
					'itemdfasdfasdfsa3'
				],
				duration: 300,
				loadingText: {
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				tabBars: [{
						name: '全部',
						id: 'guanzhu'
					},
					{
						name: '男装',
						id: 'tuijian'
					},
					{
						name: '女装',
						id: 'tiyu'
					},
					{
						name: '数码',
						id: 'redian'
					},
					{
						name: '家具',
						id: 'caijing'
					}
				],

			}
		},
		onLoad(option) {
			// 			this.nowScroll = option.scrollTop || 0;
			// 			this.globScrollTop = this.nowScroll;
			// 			console.log('现在的值nowScroll', this.nowScroll);
			// 			if (plus.os.name == 'Android') {
			// 				this.isAndroid = true
			// 			} else if (plus.os.name == 'iOS') {
			// 				this.isAndroid = false
			// 			}
			// console.log('cc');
			this._getData();
		},
		methods: {
			onloadmore() {
				if (this.loadingType !== 0) {
					return;
				}
				this.loadingType = 1;

				let ret = getGoodsList({
					page: this.page,
					type: this.tabIndex == 0 ? '' : this.tabBars[this.tabIndex].name,
					screen: '',
					jg: ''
				});
				ret.then(res => {

					if (res.code == 200) {
						if (res.result.length == 0) {
							this.loadingType = 3;
							return
						}
						this.productList = this.productList.concat(res.result);
						this.page++;
						this.loadingType = 0;
					} else {
						this._showError()
					}
				})
			},
			_getData() {
				uni.showLoading({
					title: '加载中..',
					mask: true
				})
				// getHotListGood(),
				let ret = Promise.all([getRecommend(),getHotListGood(), getGoodsList({
					page: 0,
					type: '',
					screen: '',
					jg: ''
				})]);
				ret.then(res => {
					console.log('aa', res)
					uni.hideLoading();
					if (res.length) {
						for (let item of res) {
							if (item.code!=200) {
								this._showError()
								return
							}
						}
						this.msg = res[0].result
						this.hotProductList = res[1].result;
						this.productList = res[2].result;
						console.log(this.hotProductList);
					}
				})
			},
			godetail(id) {

				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}&scrollTop=${this.nowScroll}`
				})
				this.globScrollTop = this.nowScroll;
			},
			_showError() {
				uni.showToast({
					title: "出错了...",
					icon: 'none',
					mask: true
				})
			},
			_getGoodsList(page = 0, type = '', screen = '', jg = '') {
				uni.showLoading({
					title: '加载中..'
				})
				let ret = getGoodsList({
					page,
					type,
					screen,
					jg
				});
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.productList = res.result;
					} else {
						this._showError()
					}
				})
			},
			goTop() {
				this.globScrollTop = 0;
				this.isScroll = false;
			},
			//条件筛选滑动事件监听 (this._delayfun)

			_screensticky(ev) {
				let target = ev.target || ev.srcElement;
				this.nowScroll = target.scrollTop
				// console.log(target.scrollTop);
				if (!this.isScroll) {
					this.globScrollTop = 1;
					this.isScroll = true;
				}
				if (this.nowScroll > 620) {
					// console.log('>670')
					if (this.isAndroid) {
						this.isfixed = true;
					}
					this.isfixed = true;
					this.isShow = true; // 显示一键返回顶部的箭头按钮
				} else {
					// console.log('<670')
					this.isfixed = false;
					this.isShow = false;
				}
			},
			jump(id) {
				console.log(id);
				// 				uni.navigateTo({
				// 					url: '/pages/common/goods-detail'
				// 					// url: '/pages/common/good'
				// 				});
			},
			//条件筛选
			screentap(index) {
				if (index == 3) {
					this.active = index;
					this.isup = this.count % 2 == 0 ? this.isup = 0 : this.isup = 1;
					this.count++;
					console.log("this.isip", this.isup)
					this._getGoodsList(0, '', index, this.isup);
					return
				}
				this._getGoodsList(0, '', index);
				this.active = index
				this.isup = 3;
			},
			changeswiper(e) {
				e.stopPropagation();
				e.preventDefault();
			},
			//滑动swiper 改变内容
			async changeTab(e) {
				let index = e.target.current;
				let type = index == 0 ? '' : this.tabBars[index].name
				this._getGoodsList('', type); // 切换时刷新数据
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = e.target.dataset.current
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.index-content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;

		.goods-container {
			padding-bottom: 140upx;
		}

		.visiale {
			visibility: visible !important;
		}

		.hidden {
			visibility: hidden;
		}

		._fiexd {
			position: fixed;
			top: 0;
		}

		._sticky {
			position: sticky;
			top: 0;
		}

		// 热销
		.hot-txt {
			margin-left: 50upx;
			color: #333;

			.hot {
				color: #FF0000;
			}
		}

		// 为你推荐

		.recommend {
			padding: 25upx 0;
			width: 100%;
			font-size: 32upx;
			text-align: center;
			color: #FF0000;
			font-weight: 500;
		}

		// 选中状态
		.on {
			color: red !important;
		}

		.list {
			width: 100%;
			height: 100%;
		}

		// 条件筛选
		.screen-wrap {
			height: 30upx;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 20upx 0;
			background: #fff;

			.jg-wrap {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}

		// 精选商品
		.hot-scroll-wrap {
			height: auto;
			width: 100%;
			white-space: nowrap;

			.wrap {
				display: flex;
				flex-direction: row;
			}
		}

		.uni-product {
			padding: 20upx;
			display: flex;
			flex-direction: column;
			width: 330upx;
		}

		.image-view {
			height: 330upx;
			width: 330upx;
			margin: 12upx 0;
		}

		.uni-product-image {
			height: 330upx;
			width: 330upx;
		}

		.uni-product-title {
			width: 300upx;
			word-break: break-all;
			display: -webkit-box;
			overflow: hidden;
			line-height: 1.5;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}

		.uni-product-price {
			margin-top: 10upx;
			font-size: 28upx;
			line-height: 1.5;
			position: relative;
		}

		.uni-product-price-original {
			color: #e80080;
		}

		.uni-product-price-favour {
			color: #888888;
			text-decoration: line-through;
			margin-left: 10upx;
		}

		.uni-product-tip {
			position: absolute;
			right: 10upx;
			background-color: #ff3333;
			color: #ffffff;
			padding: 0 10upx;
			border-radius: 5upx;
		}

		// 公告栏
		// 		.bulletin-board {
		// 			width: calc(100% -20upx);
		// 			padding: 0 10upx;
		// 		}

		// 查找
		.search-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f8f8f8;
			width: calc(100% - 40upx) 100%;
			line-height: 30upx;
			background: #fff;
			padding: 30upx 20upx 20upx 20upx;
			margin-top: 40upx;

			.qrcode {
				width: 8.333333%;

			}

			.search {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 83.33333%;
				line-height: 60upx;
				text-align: center;
				height: 60upx;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 3upx;
				border: 1rpx solid #f8f8f8;
				box-shadow: 0 0 10upx 2upx #eeeeee;
				color: #bababa;
				font-size: 14upx;
			}

			.msg {
				width: 8.333333%;
				text-align: right;
			}

		}

		.swiper-box {
			// display: none;
			width: calc(100% - 20upx);
			padding: 10upx 10upx;
			border-radius: 10upx;

			// min-height: 200upx;
			.item {
				border-radius: 10upx;
			}

			.swiper-img {
				width: 100%;
				border-radius: 10upx;
			}
		}

		.index-swiper {
			flex: 1;
			width: 100%;
			height: calc(100% - 100upx);
		}

		// 20大类样式
		.classification-container {

			width: calc(100% - 20upx);
			padding: 10upx;

			.item {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: row;
				text-align: center;
				font-size: 20upx;
			}

		}
	}

	// 框架样式复写
	.uni-swiper-tab {
		border-bottom: 1upx solid #f8f8f8;
	}
</style>
