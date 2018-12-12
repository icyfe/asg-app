<template>
	<view class="page">
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index" @click="godetail(product.id)">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.img"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.reprice}}</text>
					<text class="uni-product-price-original">￥{{product.price}}</text>
				</view>
				<view class="uni-product-price">
					<text class="small-gray">{{product.readyby}}人已购</text>
					<text class="uni-product-tip">{{product.value}}元券</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			productList: [Array,Object]
		},
		data() {
			return {
				renderImage: true
			};
		},
		methods: {
			godetail(id){
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}`
				})
			}
		},

	};
</script>

<style lang="less" scoped>
	/* product */
	.uni-product-list {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.uni-product {
		/* padding: 20upx; */
		display: flex;
		flex-direction: column;
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #ff0000;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	.small-gray {
		font-size: 24upx;
		color: #aeaeae;
	}
</style>
