<template>
  <div class="test-composition-api">
    <h4>test-composition-api</h4>
    <div>count: {{count}}</div>
    <com-button @click="plus">+</com-button>&emsp;
    <com-button @click="minus">-</com-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCompute } from './useCompute'

/* const useCompute = (count) => {
  const plus = () => {
    count.value ++
  }
  const minus = () => {
    count.value --
  }
  return {
    plus,
    minus,
  }
} */

export default {
  name: 'Test-composition-api', 
  setup() {
    const count = ref(0)
    const { plus, minus } = useCompute(count)
    return {
      count,
      plus,
      minus,
    }
  }
  /* // vue2 示例
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count ++
    },
    minus() {
      this.count --
    },
  } */
}

</script>

<style>

</style>