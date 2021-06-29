<template>
  <button class="com-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'com-button',
}
</script>

<style>
.com-button {
  padding: 4px 8px;
  color: #ffffff;
  background: #ff6600;
  border: solid 1px #ff6600;
  border-radius: 4px;
}
</style>