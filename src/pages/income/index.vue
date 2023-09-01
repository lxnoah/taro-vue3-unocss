<template>
  <view class="income-page h-screen overflow-auto bg-[#F5F4F2] p-12px">
    <NavBar :bg="'yellow'" />
    <nut-cell :showIcon="true" title="选择单个日期" :desc="date ? `${date} ${dateWeek}` : '请选择'"
      @click="openSwitch('isVisible')">
    </nut-cell>
    <nut-calendar v-model:visible="isVisible" :default-value="date" @close="closeSwitch('isVisible')"
      @choose="setChooseValue" :start-date="`2022-01-11`" :end-date="`2022-11-30`">
    </nut-calendar>
  </view>
</template>
<script lang="ts">
import NavBar from "../../components/NavBar.vue"
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      isVisible: false,
      date: '',
      dateWeek: ''
    });
    const openSwitch = (param) => {
      state[`${param}`] = true;
    };
    const closeSwitch = (param) => {
      state[`${param}`] = false;
    };
    const setChooseValue = (param) => {
      state.date = param[3];
      state.dateWeek = param[4];
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue
    };
  }, 
  components: {
    NavBar
  }
};

</script>
