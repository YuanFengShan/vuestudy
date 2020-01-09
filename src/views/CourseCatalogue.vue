<template>
  <div>
    <p>
      <router-link class="pageBreak"
                   to="/">返回</router-link>

      <a id="vue_home"
         href="https://cn.vuejs.org/"
         target="_blank">vue官网</a>
      <a id="vue_api"
         href="https://cn.vuejs.org/v2/api/"
         target="_blank">vue文档</a>
      <a id="css_api"
         href="http://www.w3school.com.cn/css/index.asp"
         target="_blank">css文档</a>
      <a id="html_tag_api"
         href="http://www.w3school.com.cn/tags/index.asp"
         target="_blank">html标签字典</a>
      <a id="html_api"
         href="http://www.w3school.com.cn/html/index.asp"
         target="_blank">html文档</a>

      <a id="js_api"
         href="http://www.w3school.com.cn/js/index.asp"
         target="_blank">JavaScript文档</a>
    </p>

    <h1>{{ msg }}</h1>
    <ol>
      <li>
        <a href="https://blog.csdn.net/y645633369/article/details/95894999"
           target="_blank">VUE-router初探(博客)</a>
      </li>
      <li>
        <a href="https://blog.csdn.net/y645633369/article/details/96021585"
           target="_blank">VUE对象初始化流程初探(博客)</a>
      </li>
      <li>
        <router-link to="/Demo3">声明式插值</router-link>
      </li>
      <li>
        <router-link to="/Demo4">指令</router-link>
      </li>
      <li>
        <router-link to="/Demo5">组件</router-link>
      </li>
      <li>
        <router-link to="/Demo6">扩展(highlightjs代码高亮展示插件)</router-link>
      </li>
      <li>
        <router-link to="/Demo7">生命周期</router-link>
      </li>
      <li>
        <router-link to="/Demo8">计算属性</router-link>
      </li>
      <li>
        <router-link to="/Demo9">侦听器</router-link>
      </li>
      <li>
        <router-link to="/Demo10">动态绑定类与样式</router-link>
      </li>
      <li>
        <router-link to="/Demo11">表情</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CourseCatalogue',
  data () {
    return {
      msg: '课程目录'
    }
  },
  mounted () {
    axios
      .get('https://www.runoob.com/try/ajax/json_demo.json')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
li {
  margin-left: 50px;
}
a {
  color: #42b983;
}
p {
  text-align: left;
}
#helper {
  float: right;
  margin-right: 50px;
}
#vue_home {
  margin-left: 50px;
}
#vue_api {
  margin-left: 50px;
}
#css_api,
#js_api,
#html_api,
#html_tag_api {
  margin-left: 50px;
}
</style>
