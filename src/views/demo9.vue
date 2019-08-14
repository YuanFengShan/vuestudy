<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>侦听器</h1>
    <hr>
    <h2>当值发生改变时触发的侦听器事件</h2>
    <input v-model="content">
    <br>
    <span>新的参数{{newContent}}</span>
    <br>
    <span>旧的参数{{oldContent}}</span>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      content: '',
      newContent: '',
      oldContent: ''
    }
  },
  watch: {
    content: function (newContent, oldContent) {
      this.newContent = newContent
      this.oldContent = oldContent
    }
  }

}
</script>

<style>
h1 {
  text-align: center;
}
</style>
