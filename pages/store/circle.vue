<template>
	<view class="content">
         <view-tabbar :tabs="tabs"></view-tabbar>
	</view>
</template>

<script>
	import {storeMixin} from '../../common/js/mixin.js'
	export default {
		mixins:[storeMixin],
		data() {
			return {
				title: '商圈'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped">
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
