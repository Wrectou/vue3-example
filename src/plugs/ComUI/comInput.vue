<template>
  <input class="com-input" type="text" :placeholder="placeholderText">
</template>

<script>
export default {
  name: 'com-input',
  props: {
    placeholderText: {
      type: String,
      default: 'this is input'
    }
  }
}
</script>

<style>
.com-input {
  padding: 4px 8px;
  border: solid 1px #ff6600;
  outline: none;
  border-radius: 4px;
}
</style>