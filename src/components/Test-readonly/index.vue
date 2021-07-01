<template>
  <div class="test-readonly">
    <h4>test-readonly</h4>
  </div>
</template>

<script>
import { reactive, readonly } from 'vue'

export default {
  name: 'Test-readonly',
  setup() {
    
    const reactiveObj = reactive({
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5
        }
      }
    })
    
    // console.log(reactiveObj);
    // reactiveObj.b = 2
    // console.log(reactiveObj);

    const readonlyObj = readonly(reactiveObj)
    console.log(readonlyObj);
    readonlyObj.b = 2
    console.log(readonlyObj);



  }
}
</script>

<style>

</style>