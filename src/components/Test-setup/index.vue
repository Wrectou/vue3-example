<template>
  <div class="test-setup">
    <h4>test-setup</h4>
    <div>count: {{count}}</div><br/>
    <com-button @click="add">+ 100</com-button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'Test-setup',
  props: {
    count: {
      type: Number
    }
  },
  setup(props, ctx) {
    
    const add = () => {
      ctx.emit('add', 100)
    }

    const instance = getCurrentInstance()

    // 此项操作相当于vue2的 this.utils.div(10, 2)
    // console.log('div: ',instance.appContext.config.globalProperties.utils.div(10,2))

    return {
      add,
    }

  }
}
</script>

<style>
.com-button {
  cursor: pointer;
}
</style>