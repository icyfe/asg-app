<template>
	<view class="content">
		<view class="upper">
			<view class="user-wrap">
				<image class="avatar" src="../../static/avatar.jpg"></image>
				<view class="phone">15805986933</view>
				<view><text class="yq-title">邀请码：</text><text class="code-title">AD125FS</text> <text class="copy-title">复制</text></view>
				<view class="price-total">
					<view class="price-item">今日预估:<text class="price">￥15</text></view>
					<view class="price-item">本月预估:<text class="price">￥15</text></view>
					<view class="price-item">上月预估:<text class="price">￥15</text></view>
				</view>
			</view>
			<view class="money-apply">
				<view class="left">
					<view class="money-txt">
						<view class="money-color txt">余额</view>
						<view class="money-color">￥0</view>
					</view>
					<view class="dec">每月结算日为...</view>
				</view>
				<view class="right">
					立即提现
				</view>
			</view>
		</view>
		<view class="lower">
			<view class="first-menu">
				<view>
					<uni-icon type="rank" size="25" color="#b10000"></uni-icon>
					<text>收入榜单</text>
				</view>
				<view>
					<uni-icon type="help" size="25" color="#b6e371"></uni-icon>
					<text>使用帮助</text>
				</view>
				<view>
					<uni-icon type="about" size="25" color="#ff9801"></uni-icon>
					<text>关于我们</text>
				</view>
			</view>
			<view class="second-menu">
				<view class="item">
					<view class="item">
						<uni-icon type="kefu" color="#7a7e83" size="22"></uni-icon>
						<text>专属客服</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item">
					<view class="item">
						<uni-icon type="shoucang" color="#dd5145" size="22"></uni-icon>
						<text>我的收藏</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item">
					<view class="item">
						<uni-icon type="tixian" color="#f9263e" size="22"></uni-icon>
						<text>提现申请</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item">
					<view class="item">
						<uni-icon type="laxin" color="#EEE685" size="22"></uni-icon>
						<text>我要拉新</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item">
					<view class="item">
						<uni-icon type="shezhi" color="#009bdb" size="22"></uni-icon>
						<text>设置</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '个人'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.content {
		text-align: center;
		width: 100%;
		height: 100%;
	}

	.upper {
		position: relative;
		background: #F9263E;
		width: 100%;
		height: 500upx;

		.user-wrap {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			margin: 0 auto;
			color: #fff;
			width: 100%;

			.avatar {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}

			.phone {
				color: #fff;
				font-size: 16px;
			}

			.yq-title {
				color: #fff;
				font-size: 12px;
			}

			.code-title {
				color: #eee685;
				font-size: 14px;
			}

			.copy-title {
				color: #fff;
				font-size: 12px;
				margin-left: 6px;
				text-decoration: underline;
			}
			.price-total{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
			.price-item {
				font-size: 12px;
				color: #fff;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				margin-left: 10px;
				.price {
					font-size: 14px;
					color: #fff;
					font-weight: 600;
				}
			}
		}

		// 提现申请
		.money-apply {
			width: 90%;
			background: #000;
			// padding: 70upx 0;
			margin: 0 auto;
			position: absolute;
			bottom: -10px;
			left: 5%;
			border-top-left-radius: 16upx;
			border-top-right-radius: 16upx;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.left {
				padding: 20upx 0 20upx 20upx;

				.money-txt {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 32upx !important;

					.txt {
						font-size: 30upx !important;
					}
				}

				.dec {
					color: #ccc;
					font-size: 12upx;
				}
			}

			.right {
				background: #eee685;
				color: #333;
				padding: 0 20upx;
				margin-right: 20upx;
				border-radius: 14upx;
			}

			.money-color {
				color: #ccba66;
			}
		}
	}

	.lower {
		margin-top: 20px;

		.first-menu {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			color: #000;
			font-size: 14px;
		}

		.second-menu {
			padding: 0 10px;
			width: calc(100% - 20px);
			margin-top: 10px;

			.item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				height: 50px;
				border-bottom: 1px solid #f8f8f8;
			}
		}
	}
</style>
