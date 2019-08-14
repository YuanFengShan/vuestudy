<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>组件</h1>
    <hr>
    <h2 class="title">简单创建组件(文件方式的局部组件)</h2>
    <Demo5Item></Demo5Item>
    <pre v-highlightjs>
      <code class="javascript">
      注意:局部组件使用顺序:创建组件文件->编写文件->引入文件->声明本页面使用此组件->使用此组件
      </code>
    </pre>
    <hr>
    <h2 class="title">父组件向子组件传值</h2>
    <span>在父组件中的值</span><input v-model="message">
    <Demo5Item2 v-bind:content="message"></Demo5Item2>
  </div>
</template>
<script>
import Demo5Item from './Demo5Item'
import Demo5Item2 from './Demo5Item2'
export default {
  components: {
    Demo5Item,
    Demo5Item2
  },
  data () {
    return { message: '我是父组件的值' }
  },
  methods: {

  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
.title {
  text-align: center;
}
</style>
