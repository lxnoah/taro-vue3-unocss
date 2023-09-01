
<template>
  <view class="spread-page w-full h-full p-12px bg-[#F5F4F2]">
    <NavBar class=" text-center">
     这是一个标题
    </NavBar>
    <view>
      <view class="card w-full h-360 border-rd-24px bg-white mb-20px pos-relative" v-for="i in 4" :key="i">
        <div class=" w-full h-280 border-rd-24px bg-[#fff]">
        </div>
        <view class="w-full h-102 text-center pos-absolute bottom-0 line-height-120px font-400
        font-size-28" @click="() => show = true">xxxxxxx</view>
      </view>
    </view>
    <nut-popup round v-model:visible="show">
      <view class="cotent w-582 h-380 border-rd-24px bg-[#fff]  py-48px px-56px" hover-class="none"
        hover-stop-propagation="false">
        <h1 class="text-center font-size-34px font-500 mt-20px">title</h1>
        <view class="color-[#666666] py-48px font-size-28px" hover-class="none" hover-stop-propagation="false">
          content
        </view>
        <div class=" flex flex-justify-between text-center line-height-[80px]">
          <nut-button class="important-w-224 important-h-80" @click="() => show = false">取消</nut-button>
          <nut-button color="#FF7A00" class="important-w-224 important-h-80" @click="() => show = false">确认</nut-button>
        </div>
      </view>
    </nut-popup>
  </view>
</template>
  
<script setup>

import NavBar from "../../components/NavBar.vue"
import {ref} from 'vue' 


const show = ref(false)



</script>

  