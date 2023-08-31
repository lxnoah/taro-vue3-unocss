<template>
    <view class="w-full z-9 fixed top-0 left-0"  :style="navBarStyle()">
        <slot/>
    </view>
    <view class="w-full" :style="{height:bar_height+44+'px'}"></view>
</template>
  
<script setup lang="ts">
import Taro from "@tarojs/taro"
import {ref} from 'vue'

const bar_height=ref(Taro.getSystemInfoSync().statusBarHeight || 0+44)


const props = defineProps({
  bg:String,
  content:Object
})

const navBarStyle = () => {
    const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight || 0;
    return {
        with:'100%',
        paddingTop: `${statusBarHeight}px`,
        height: `calc(44px + ${statusBarHeight}px)`,  // 导航栏高度 + 状态栏高度
        background:props?.bg||'#fff'
    }
}
</script>
  
