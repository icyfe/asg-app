<template>
	<view class="goods-wrap">
		<view class="goods-img">
			<image class="img" mode="aspectFit" src="https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg"></image>
		</view>
		<view class="desc">
			<view class="shop-title">
				<image class="logo" mode="aspectFit" src="../../static/tm.png"></image>
				<view class="txt">大码女装限时发售大码女装限时发售大码女装限时发售大码女装限时发售</view>
			</view>
			<view class="shop-desc">
				<view class="price-wrap">
					<view class="present">￥15</view>
					<view class="original">原价￥16</view>
				</view>
				<view class="coupon-wrap">
					<view class="num">521523人已购</view>
					<view class="value">5元券</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			fontSize() {
				return `${this.size}px`
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
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
			border-radius: 10upx;

			.img {
				width: 280upx;
				height: 280upx;
				padding: 10upx;
				border-radius: 10upx;
			}
		}

		.desc {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: calc(300upx - 20upx);
			padding: 10upx 0;

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

					.present {
						font-size: 30upx;
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