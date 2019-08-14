<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>highlightjs代码高亮展示插件</h1>
    <hr>
    <p>在编写中发现,有的时候步骤比较繁琐,在demo中每个步骤可能没有关联,为了防止以后即使看demo还是看不懂,有必要加入代码高亮展示的模块来更加清晰的展示使用步骤</p>
    <hr>
    <h2 class="title">安装</h2>
    <p>在项目根目录运行安装指令</p>
    <pre v-highlightjs>
      <code class="javascript">
      npm install --save vue-highlightjs
      </code>
    </pre>

    <hr>
    <h2 class="title">引入组件</h2>
    <pre v-highlightjs>
      <code class="javascript">
      import VueHighlightJS from 'vue-highlightjs'//引入组件
      import 'highlight.js/styles/an-old-hope.css'//指定样式
      Vue.use(VueHighlightJS)//注册组件
      </code>
    </pre>
    <hr>
    <h2 class="title">使用</h2>
    <pre v-highlightjs>
      <code class="html" spellcheck="false" >
        {{message}}
    </code>
    </pre>
    <hr>
    <h2 class="title">使用博客</h2>
    <a href="https://www.jianshu.com/p/d42e21d17ab0"
       target="_blank">传送门</a>
  </div>
</template>
<script>
import test from '../../assets/demo6/test2'
import hljs from 'highlight.js'

import('highlight.js/styles/an-old-hope.css')
export default {
  data () {
    return { demo1_flag: 0, demo2_flag: 0, demo3_x: 0, demo3_y: 0, message: test }
  },
  methods: {
    demo1_1: function () {
      this.demo1_flag++
    },
    demo1_2: function () {
      this.demo1_flag--
    },
    demo3_update_xy: function (event) {
      this.demo3_x = event.offsetX
      this.demo3_y = event.offsetY
    }

  },
  mounted: function () {
    // this.message = test
  },
  directives: {
    highlightjs: {
      inserted (el) {
        // 遍历元素并且使用 highlight 进行处理
        const preEl = document.querySelectorAll('pre code')
        preEl.forEach(el => {
          hljs.highlightBlock(el)
        })
      }
    }
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
#demo3_div {
  padding: 0px, 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #333;
}
</style>
