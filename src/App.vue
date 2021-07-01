<template>
  <div class="app-box">

    <test-setup @add="add" :count="count" /><br/>
    <com-input placeholder="请输入" />

    <!-- readonly -->
    <!-- <test-readonly /> -->

    <!-- computed -->
    <!-- <test-computed /> -->

    <!-- composition-api -->
    <test-composition-api />

  </div>
</template>

<script>
import { ref } from 'vue'
import TestSetup from '@/components/Test-setup'
import TestReadonly from '@/components/Test-readonly'
import TestComputed from '@/components/Test-computed'
import TestCompositionApi from '@/components/Test-compositionApi'

export default {
  name: 'App',
  components: {
    'test-setup': TestSetup,
    'test-readonly': TestReadonly,
    'test-computed': TestComputed,
    'test-composition-api': TestCompositionApi,
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