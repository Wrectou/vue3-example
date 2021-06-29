<template>
  <div class="app-box">
    <test-setup @add="add" :count="count" /><br/>
    <com-input placeholder="请输入" />
  </div>
</template>

<script>
import { ref } from 'vue'
import TestSetup from '@/components/Test-setup'

export default {
  name: 'App',
  components: {
    'test-setup': TestSetup,
  },
  setup() {

    const count = ref(0)

    const add = (num) => {
      count.value += num
    }

    return {
      count,
      add,
    }

  }
}
</script>

<style>
.app-box{
  text-align: center;
}
</style>