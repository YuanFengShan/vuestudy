<template>
  <div id="div_root">
    <p>我是子组件{{timeString}}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      timeString: '' + new Date().toLocaleString()
    }
  }
}
</script>
<style scoped>
#div_root {
  border: 1px solid #333;
  background-color: yellow;
}
</style>
