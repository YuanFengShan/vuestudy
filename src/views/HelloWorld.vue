<template>
  <div class="hello">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <!-- <a href="https://vuejs.org" target="_blank">现在开始学习</a> -->
    <router-link to="/CourseCatalogue">现在开始进入课程目录</router-link>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎进入我的VUE学习笔记'
    }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 60px;
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
