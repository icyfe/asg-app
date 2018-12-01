<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<view-tabbar :tabs="tabs"></view-tabbar>
	</view>
</template>

<script>
	import {schollMixin} from '../../common/js/mixin.js'
	export default {
		mixins:[schollMixin],
		data() {
			return {
				title: '学院'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
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
