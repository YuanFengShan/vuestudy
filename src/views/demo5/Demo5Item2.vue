<template>
  <div id="div_root">
    <p>我是子组件{{timeString}}接到父组件的值:{{content}}</p>
  </div>
</template>
<script>
export default {
  props: ['content'],
  data: function () {
    return {
      timeString: '' + new Date().toLocaleString()
    }
  }
}
</script>
<style scoped>
#div_root {
  border: 1px solid rgb(133, 125, 125);
  background-color: yellow;
}
</style>
