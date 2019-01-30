<template>
	<view>
		<view class="nav">
			<view class="back" @tap="back">
				<uni-icon type='arrow-left' size="20" color="#fff"></uni-icon>
			</view>
			<view class="title">登录/注册</view>
		</view>
		<view class="switch-wrap">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<view class="item">
					<uni-icon type="shouji" color="#ccc" size="16"></uni-icon>
					<input @blur='checkphone' class="_input" :placeholder="loginerror" focus />
				</view>
				<view class="item">
					<uni-icon type="yanzhengma" color="#ccc" size="16"></uni-icon>
					<input v-model="code" placeholder="请输入验证码" />
					<view :class="['bt',{'disable':isSend}]" @click="send('login')" class="bt">{{loginyzm}}</view>
				</view>
				<button :class="['login-bt',{'disable':isabled}]" :disabled="isabled" @tap="login">登录</button>
			</view>
			<view v-show="current === 1">
				<view class="item">
					<uni-icon type="shouji" color="#ccc" size="16"></uni-icon>
					<input @blur='checkphone' :placeholder="loginerror" focus />
				</view>
				<view class="item">
					<uni-icon type="yanzhengma" color="#ccc" size="16"></uni-icon>
					<input v-model="code" placeholder="请输入验证码" />
					<view :class="['bt',{'disable':isSend}]" @click="send('register')" class="bt">{{regyzm}}</view>
				</view>
				<view class="item">
					<uni-icon type="yqm" color="#ccc" size="16"></uni-icon>
					<input v-model="yqm" placeholder="请输入邀请码" />
				</view>
				<button :class="['login-bt',{'disable':isabled}]" @tap="register" :disabled="isabled">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import {
		sendcode,
		postRegister,
		postLogin
	} from '@/api/user'
	export default {
		data() {
			return {
				items: [
					'登录',
					'注册'
				],
				loginyzm: '发送验证码',
				regyzm: '发送验证码',
				isabled: true,
				timer: null,
				yqm: '',
				code: '',
				current: 0,
				activeColor: '#F9263E',
				styleType: 'button',
				isSend: true,
				phone: '',
				loginerror: '请输入手机号',

			}
		},
		components: {
			uniSegmentedControl,
		},
		methods: {
			back(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			register() {
				if (!this.code || !this.yqm) {
					this._showToast("验证码或邀请码不能为空", 'none');
					return
				}
				postRegister({
						phone: this.phone,
						yqm: this.yqm,
						code: this.code
					})
					.then(res => {
						if (res.code == 100) {
							this._showToast(res.msg, 'none')
							return
						} else {
							if (res.result) {
								uni.setStorageSync('user', res.result);
								uni.switchTab({
									url: '/pages/index/user'
								})
							}
							this._showToast(res.msg)
						}
					})
			},
			login() {
				if (!this.phone || !this.code) {
					this._showToast("手机号码或验证码不能为空", 'none');
					return
				}
				postLogin(this.phone, this.code).then(res => {
					console.log(this.phone, this.code)
					if (res.code == 100) {
						this._showToast(res.msg, 'none')
						return
					}
					if (res.result) {
						uni.setStorageSync('user', res.result);
						uni.switchTab({
							url: '/pages/index/user'
						})
					}
				})
			},
			checkphone(e) {
				this.phone = e.detail.value;
				if (!this.phone) {
					this._showToast('手机号码不能为空', 'none')
					this.isabled = true
					this.isSend = true
					return
				} else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)) {
					this._showToast("请输入正确的手机号码格式", "none")
					this.isabled = true
					this.isSend = true
					return
				}
				this.isabled = false
				this.isSend = false
			},
			send(type) {
				if (!this.isSend && this.phone) {
					let isEx = sendcode(this.phone, type);
					isEx.then(res => {
						if (res.code == 100) {
							this._showToast(res.msg, 'none')
							return
						}
						this._showToast("验证码已发送")
						this.isSend = true
						let timer = null;
						let cut = 60;
						timer = setInterval(() => {
							if (type == "login") {
								this.loginyzm = --cut + "S"
							} else if (type == "register") {
								this.regyzm = --cut + "S"
							}
							if (cut == 0) {
								clearInterval(timer)
								if (type == "login") {
									this.loginyzm = '发送验证码'
								} else {
									this.regyzm = '发送验证码'
								}
								this.isSend = false
							}
						}, 1000)
					})
				} else if (!this.phone) {
					this._showToast('手机号码不能为空', 'none')
				}
			},
			_showToast(title, icon = "success") {
				uni.showToast({
					title,
					icon,
				})
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},

		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: calc(75% - 20upx);
		margin: 0 auto;
		box-shadow: 0 0 10rpx 2rpx #eeeeee;
		padding: 20upx 10upx;
		border-radius: 10upx;

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 10upx 0;
			border-bottom: 1px solid #f8f8f8;
		}

		.disable {
			background: #ccc !important;
		}

		.bt {
			width: 50%;
			padding: 10upx 20upx;
			background: #F9263E;
			border-radius: 10upx;
			text-align: center;
			font-size: 20upx;
			color: #FFFFFF;
		}

		._input {
			width: 90%;
			height: 28.9px !important;
			line-height: 28.9px !important;
		}

		.login-bt {
			background: #F9263E;
			border-radius: 10upx;
			width: calc(100% - 40upx);
			padding: 0upx 20upx;
			text-align: center;
			margin-top: 20upx;
			color: #fff;
		}
	}

	.switch-wrap {
		padding: 20upx 0 0 0;
	}

	.color-tag {
		width: 50upx;
		height: 50upx;
	}

	.nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		background: #F9263E;
		height: 100upx;
		padding-top: 30upx;

		.back {
			width: 30px;
			float: left;
		}

		.title {
			margin: 0 auto;
			color: #fff;
			font-size: 30upx;
			font-weight: 600;
		}
	}
</style>
