<template>
    <view class="index">
      <NavBar :bg="'blue'"/>
      <Counter />
    </view>
  </template>
  
  <script>
  import NavBar from "../../components/NavBar.vue"
  import Counter from '../../components/Counter.vue'
  
  export default {
    components: {
      Counter
    }
  }
  </script>