<template>
  <div class="test-computed">
    <h4>test-computed</h4>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Test-computed',
  setup() {

    const num = ref(0)

    const myNum = computed(() => num.value += 2)

    // console.log(myNum.value);

    const newNum = computed({
      get() {
        return num.value * 3
      },
      set(val) {
        console.log('set val是：', val);
      }
    })

    console.log(newNum.value);
    newNum.value = 666



  }
}

</script>

<style>

</style>