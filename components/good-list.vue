<template>
	<view class="goods-wrap" @click="onTap">
		<view class="goods-img">
			<image class="img" mode="aspectFit" lazy-load :src="goodimg"></image>
		</view>
		<view class="desc">
			<view class="shop-title">
				<image class="logo" mode="aspectFit" src="../../static/tm.png"></image>
				<view class="txt">{{goodtitle}}</view>
			</view>
			<view class="shop-desc">
				<view class="price-wrap">
					<view class="price">
						<view class="original">原价￥{{goodorprice}}</view>
						<view class="present">￥{{goodprice}}</view>
					</view>
					<view class="yj">佣金￥{{goodyj}}</view>
				</view>
				<view class="coupon-wrap">
					<view class="num">{{goodbuynum}}人已购</view>
					<view class="value">{{goodvalue}}元券</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			goodyj:[String,Number],
			goodimg:String,
			goodtitle:String,
			goodprice:[String, Number],
			goodorprice:[String, Number],
			goodbuynum:[String, Number],
			goodvalue:[String, Number],
			goodid:[String,Number]
		},
		computed: {
			fontSize() {
				return `${this.size}px`
			}
		},
		methods: {
			onTap() {
				this.$emit('onTap')
			}
		}
	}
</script>
 


<style lang="less" scoped>
	.goods-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: nowrap;
		width: calc(100% - 40upx);
		padding: 0 20upx;
		border-bottom: 1upx solid #f8f8f8;
		.goods-img {
			width: 300upx;
			border-radius: 20upx;

			.img {
				width: 280upx;
				height: 280upx;
				padding: 10upx;
				border-radius: 20upx;
			}
		}

		.desc {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: calc(300upx - 20upx);
			padding: 10upx 0;
			width: 100%;
			.shop-title {
				display: flex;
				flex-direction: row;

				.logo {
					width: 50upx;
					height: 50upx;
					margin-right: 10upx;
				}

				.txt {
					font-size: 25upx;
					font-weight: 600;
				}
			}

			.shop-desc {

				.price-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.price{
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
					}
					.present {
						font-size: 30upx;
						color: #FF0000;
					}
					.yj{
						font-size: 20upx;
						color: #FF0000;
					}
					.original {
						text-decoration: line-through;
						color: #555555;
						font-size: 20upx;
					}
				}

				.coupon-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.num {
						color: #555555;
						font-size: 20upx;
					}

					.value {
						background: #fc1f3f;
						border-radius: 10upx;
						border-style: dotted;
						font-size: 28upx;
						font-weight: 600;
						padding: 0upx 30upx;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>