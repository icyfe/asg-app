<template>
    <view class="iconfont" :class="['icon-'+type]" :style="{color:color,'font-size':fontSize, 'line-height':1}" @click="onClick()"></view>
</template>

<script>
    export default {
        props: {
            /**
             * 图标类型
             */
            type: String,
            /**
             * 图标颜色
             */	
            color:{
				type:String,
				default:''
			},
            /**
             * 图标大小
             */
            size: [Number, String]
        },
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

