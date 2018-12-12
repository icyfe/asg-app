<template>
	<view v-if="good">
		<!-- nav nar -->
		<view class="mnav-bar">
			<view class="wrap">
				<view class="back" @click="back">
					<uni-icon type="arrow-left" size="18" color="#fff"></uni-icon>
				</view>
				<view class="nav-title" v-show="navisShow">
					<view @click="go" :class="['txt',{ avtive:isactive}]">宝贝</view>
					<view @click="go" :class="['txt',{ avtive:!isactive}]">详情</view>
				</view>
			</view>
		</view>

		<scroll-view ref='scroll' :scroll-top="scrolltop" scroll-y class="detail-container" @scroll='_onscroll'>
			<!-- 轮播图 -->
			<swiper class="swiper-box" circular indicator-dots autoplay indicator-active-color="#fff" duration="500">
				<swiper-item class="item" v-if="good.sm_banner.length > 0" v-for="(item, banerindex)  in good.sm_banner" :key="banerindex">
					<image class="swiper-img" :src="item"></image>
					<!-- lazy-load mode="aspectFit" -->
				</swiper-item>
			</swiper>
			<!-- 宝贝介绍 -->
			<view class="container">
				<view class="price-container">
					<view class="price-wrap">
						<view class="price-one">
							<view class="jh">券后</view>
							<view class="price">￥{{good.price}}</view>
						</view>
						<view class="describe">
							预估佣金 {{good.yj}} 元
						</view>
					</view>
					<view class="describe">{{good.title}}</view>
					<view class="ready-buy">
						<view class="small-gray">原价￥{{good.reprice}}</view>
						<view class="small-gray">{{good.readyby}}人已购买</view>
					</view>
				</view>
				<!-- 分享栏 -->
				<view class="big-title" @click="share">
					<view class='shoptitle'>
						<image class="logo" mode="aspectFit" src="../../static/tm.png"></image>
						<view class="title">{{good.title}}</view>
					</view>
					<view class="share">
						<uni-icon type="share" color="#8a8a8a"></uni-icon>
						<text class="small-gray">分享</text>
					</view>
				</view>
				<!-- 优惠券 -->
				<view class="quan-container" @click="jump(good.coupon_click_url)">
					<image class="quan-bg" src="../../static/bgquan.png"></image>
					<view class="wrap">
						<view class="yhq">
							<view class="yhq-txt">优惠券</view>
							<view class="yhq-price">￥{{good.value}}</view>
						</view>
						<view class="yhq">
							<view class="data-txt">使用期限</view>
							<view class="data">{{good.startdate}}~{{good.enddate}}</view>
						</view>
					</view>
					<view class="take"> 立即领券</view>
				</view>
				<!-- 推荐语 -->
				<view class="recommend">
					<view class="title">推荐语</view>
					<view class="small-gray marginL">{{good.desc}}</view>
				</view>
				<!-- 店铺评分 -->
				<view class="store-introduction">
					<view class="item">
						<uni-icon size="16" type="tmlogo" color="#fe1a34"></uni-icon>
						<view class="txt">{{good.title}}</view>
					</view>
					<view class="rank">
						<view class="txt">店铺评分</view>
						<view class="item">
							<view class="score">描述4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
						<view class="item">
							<view class="score">服务4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
						<view class="item">
							<view class="score">发货4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
					</view>
				</view>
				<!-- 商品详情 -->
				<view class="line-title">———— 商品详情 ————</view>
				<view>
					<rich-text id="shop-detail-wrap" :nodes="good.detail"></rich-text>
				</view>
				<!-- 为您推荐 -->
				<view class="line-title">———— 为您推荐 ————</view>
				<product-list :productList="recommend"></product-list>
				<view class="line-title" style="margin-bottom: 120upx;">—— 到底了 ——</view>
			</view>
		</scroll-view>
		<!--底部固定栏 -->
		<view class="footer-container">
			<view class="back" @click="back">
				返回
			</view>
			<view class="colle" @click="collection">
				<view class="wrap">
					<uni-icon type="shoucang" :color="collentionColor"></uni-icon>
					<view :style="{color:collentionColor}">收藏</view>
				</view>
			</view>
			<view class="share" @click="share">
				<view class="wrap">
					<uni-icon type="share" color="#8a8a8a"></uni-icon>
					<view>分享</view>
				</view>
			</view>
			<view class="copy" @click="copykey">
				复制淘口令
			</view>
			<view class="join" @click="jump(good.coupon_click_url)">
				<view>
					<view class="sm-txt">立省￥{{good.value}}</view>
					<view>领券购买</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import productList from '@/components/product-list.vue'
	import {
		getGoodDetail,
		getGoodsList
	} from '@/api/goods.js'
	export default {
		computed: {
			collentionColor() {
				return this.isCollection ? "#ff0000" : "#fff"
			}
		},
		data() {
			return {
				isCollection: false,
				parentScrollTop: 0,
				scrolltop: 0,
				navisShow: true,
				isactive: true,
				reprice: 15,
				good: null,
				recommend: {}
			}
		},
		onLoad(option) {
			let id = option.id || ''
			this.parentScrollTop = option.scrollTop
			console.log('scrollTop', this.parentScrollTop);
			console.log('id', id);
			this._getGoodDetail(id);
			this._getRecommend();
		},
		components: {
			productList,
		},
		methods: {
			//复制淘口令
			copykey() {
				let _this = this
				uni.setClipboardData({
					data: this.good.tkl,
					success: function() {
						uni.showToast({
							title:'已复制'
						})
					}
				});
			},
			// 收藏
			collection() {
				if (this.isCollection) {
					this.isCollection = false;
					uni.showToast({
						title: '已取消'
					})
				} else {
					this.isCollection = true;
					uni.showToast({
						title: '已收藏'
					})
				}
			},
			//分享
			share() {
				console.log('share')
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: this.good.coupon_click_url,
					title: `我正在领取淘宝购物超级优惠券`,
					summary: `${this.good.title}该店正在做优惠哦!`,
					imageUrl: this.good.sm_banner[0],
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			jump(url) {
				console.log(url)
				let str = url.slice(8);
				plus.runtime.openURL(`taobao://${str}`);
			},
			_getGoodDetail(id) {
				let ret = getGoodDetail(id)
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.good = res.result
						console.log('sp', this.good)
					} else {
						uni.showToast({
							title: '查无此商品',
							icon: 'none'
						})
					}
				})
			},
			_getRecommend() {
				let ret = getGoodsList({
					page: 0,
					type: '',
					screen: "",
					jg: ""
				});
				ret.then(res => {
					if (res.code == 200) {
						this.recommend = res.result;
						// console.log('recommend', this.recommend);
					}
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			_onscroll(e) {
				let even = e.target || e.srcElement;
				this.scrolltop = even.scrollTop;
				// this.scrolltop = scrollTop; //实时同步位置
				// console.log('11111', even.scrollTop)
				if (even.scrollTop > 555 && this.isactive) {
					this.isactive = false
				} else if (even.scrollTop < 555 && !this.isactive) {
					this.isactive = true
				}
			},
			go(ev) {
				let e = ev || window.event;
				let target = ev.target || ev.srcElement;
				console.log(target.offsetLeft)
				if (target.offsetLeft < 190 && target.offsetLeft > 150) {
					console.log('1', this.scrolltop)
					this.scrolltop = 0;
					this.isactive = true;
				} else if (target.offsetLeft < 240 && target.offsetLeft > 190) {
					console.log('2', this.scrolltop)
					this.scrolltop = 555;
					this.isactive = false;
				}
			},
		}
	}
</script>
<style scoped lang="less">
	.detail-container {
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	.container {
		width: calc(100% - 40upx);
		padding: 20upx 20upx;
		background: #fff;
	}

	.avtive {
		position: relative !important;

		&::after {
			position: absolute;
			content: "";
			width: 30upx;
			height: 2px;
			background: #ff1a1a;
			bottom: -5upx;
			left: 25%;
		}
	}

	// nav
	.mnav-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 80px;
		padding: 40upx 0;
		background: rgba(255, 255, 255, 0.5);
		z-index: 999;
		// color: #fff;

		.wrap {
			.back {
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				background: rgba(0, 0, 0, .3);
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				margin-left: 20upx;

			}

			.nav-title {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				text-align: center !important;

				.txt {
					margin-right: 20upx !important;
					padding-bottom: 4upx !important;
					font-size: 35upx !important;
					font-weight: 600 !important;
				}
			}
		}
	}

	// 轮播图
	.swiper-box {
		height: 600upx;
		width: 100%;

		.swiper-img {
			width: 100%;
			height: 600upx;
		}
	}

	// 宝贝详情一栏
	.price-container {
		width: 100%;
		padding: 20upx 0;
		background: #fff;

		.jh {
			padding: 0upx 12upx;
			border-radius: 8upx;
			background: #ffe9ec;
			font-size: 12upx;
			color: #ff1213;
			text-align: center;
		}

		.describe {
			font-size: 24upx;
			color: #ff1213;
			font-weight: 500;
		}

		.price-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.price-one {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
			}

			.price {
				font-size: 38upx;
				color: #ff1213;
				font-weight: 600;
			}
		}

		.ready-buy {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	// 分享栏目
	.big-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

		.shoptitle {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}

		.logo {
			width: 30upx;
			height: 30upx;
			margin-right: 10upx;
		}

		.share {
			text-align: center;
		}

		.title {
			font-size: 28upx;
			font-weight: 600;
			color: #000;
			// margin-left: 10upx;
		}
	}

	// 优惠券
	.quan-container {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 150upx;

		.quan-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.wrap {
			padding: 0 60upx;
			position: relative;
			z-index: 999;

			.yhq {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				.yhq-txt {
					color: #fe1a34;
					font-size: 20upx;
				}

				.yhq-price {
					color: #fe1a34;
					font-size: 30upx;
					font-weight: 600;
					margin: 0 0 20upx 30upx;
				}

				.data-txt {
					font-size: 24upx;
					color: #fe1a34;
					/* margin-left: 20upx; */
				}

				.data {
					font-size: 24upx;
					color: #fe1a34;
					margin-left: 20upx;
				}
			}
		}

		.take {
			z-index: 999;
			padding-right: 20upx;
			color: #fe1a34;
			font-size: 30upx;
			font-weight: 600;
		}
	}

	// 推荐语
	.recommend {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 0 10px;
		width: 100%;
		position: relative;

		.title {
			position: absolute;
			top: 0;
			flex-basis: 15%;
			font-size: 28upx;
			color: #000;
			font-weight: 600;
			padding-right: 10upx;
		}

		.marginL {
			margin-left: 15%;
		}
	}

	// 店铺评分
	.store-introduction {
		padding: 20upx 10upx;

		.rank {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}

		.txt {
			font-size: 28upx;
			color: #333;
			font-weight: 600;
		}

		.score {
			font-size: 18upx;
			color: #8a8a8a;
			font-weight: 500;
		}

		.micon {
			vertical-align: middle;
		}
	}

	// 商品详情
	.line-title {
		font-size: 32upx;
		font-weight: 600;
		color: #000;
		text-align: center;
	}

	// 底部固定栏
	.footer-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		height: 120upx;

		.back {
			padding: 0 20upx;
			// font-size: 28upx;
			font-weight: 600;
		}

		.share {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;

			.wrap {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

			}
		}

		.colle {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			background: linear-gradient(to right, #e8592f, #fac835);
			color: #fff;

			.wrap {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}

		.copy {
			background: linear-gradient(to right, #fb2d5d, #fe050c);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			color: #fff;
		}

		.join {
			background: #000;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			color: #fff;

			.sm-txt {
				font-size: 12upx;
			}
		}
	}

	// 商品详情容器
	#shop-detail-wrap {
		img {
			max-width: 100% !important;
		}
	}

	// 公共样式
	.small-gray {
		font-size: 24upx;
		color: #aeaeae;
	}
</style>
