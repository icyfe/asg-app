<template>
	<view>
		<view class="container">
			<view class="question-mark">
				<uni-icon type="wh" size="18" color="#fff"></uni-icon>
			</view>
			<nav-bar title="订单详情" color="#fff" background="#ff0000" @back="back"></nav-bar>
			<view class="content">
				<view class="switch-wrap">
					<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
					 :activeColor="activeColor" width="100%"></uni-segmented-control>
				</view>
				<view v-show="current==0">
					<view class="list">
						<text class="list-text">订单号</text>
						<text class="list-text">订单时间</text>
						<text class="list-text">佣金</text>
						<text class="list-text">预估收入</text>
					</view>
					<view class="list">
						<text class="list-text">1</text>
						<text class="list-text">2019-08-08</text>
						<text class="list-text">022</text>
						<text class="list-text">0.22</text>
					</view>
				</view>
				<view v-show="current==1">
					<view class="list">
						<text class="list-text">订单号</text>
						<text class="list-text">订单时间</text>
						<text class="list-text">佣金</text>
						<text class="list-text">预估收入</text>
					</view>
					<view class="list">
						<text class="list-text">1</text>
						<text class="list-text">2019-02-08</text>
						<text class="list-text">322</text>
						<text class="list-text">322</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import navBar from '@/components/nav-bar.vue'
	import dividLine from '@/components/line.vue';
	export default {
		data() {
			return {
				current: 0,
				items: [
					'今日订单',
					'历史订单'
				],
				activeColor: '#ff0000',
				styleType: 'button',
			};
		},
		components: {
			navBar,
			uniSegmentedControl,
			dividLine
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
		}
	}
</script>

<style lang="less">
	.content {
		position: absolute;
		top: -8px;
		left: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		margin-top: 72px;
		background: #EEEEEE;
		overflow: hidden;
		z-index: 999;
	}

	.list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border:1px solid #000000;
		border-right: none;
		border-top: none;
		background: #fff;
		border-radius: 2upx;
	}

	.list-text {
		border-right: 1px solid #000000;
		text-align: center;
		flex: 1;
	}
</style>
