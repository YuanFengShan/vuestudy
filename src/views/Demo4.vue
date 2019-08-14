<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>指令</h1>
    <hr>
    <p class="title"> v-text 插值指令</p>
    <p>作用:<br>作用与声明式插值相同</p>

    <span>字符串类型值:</span><span v-text="name"> </span><br>
    <span>数字类型值:</span><span v-text="age"></span><br>
    <span>布尔类型值:</span><span v-text="flag"></span>

    <hr>
    <p class="title"> v-bind 绑定属性值指令</p>
    <span v-bind:title="name">鼠标悬停这里试试-----------指令titile属性</span>
    <br>
    <input type="text"
           v-bind:value="name"><span>-----------绑定value属性</span>
    <br>
    <hr>
    <p class="title"> v-on 绑定事件监听器指令</p>
    <button v-on:click="test1">测试按钮</button>
    <hr>
    <p class="title"> v-if 条件显示指令</p>
    <button v-on:click="btn1">按钮1</button>
    <button v-on:click="btn2">按钮2</button>
    <button v-on:click="btn3">按钮3</button>
    <button v-on:click="btn4">按钮4</button>
    <br>
    <br>
    <div v-if="layout1"
         class="testDiv testDiv1">
      布局1
    </div>
    <div v-if="layout2"
         class="testDiv testDiv2">
      布局2
    </div>
    <div v-if="layout3"
         class="testDiv testDiv3">
      布局3
    </div>
    <div v-if="layout4"
         class="testDiv testDiv4">
      布局4
    </div>
    <hr>

    <p class="title">v-for 循环指令</p>
    <ol>

      <li v-for="todo in todos"
          :key="todo.id">
        {{todo.text}}的ID:{{todo.id}}
      </li>

    </ol>
    <p>注意: 使用key是为了提高效率,key的属性是自己的元数据提供的,必须要保证自己提供的ID是唯一的,
      <a href="https://cn.vuejs.org/v2/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81"
         target="_blank">详见文档!</a></p>

    <hr>
    <p class="title"> v-model 表单输入与数据双向绑定指令 </p>
    <span>修改输入框内的值: </span><input v-model="message"><br>
    <span>数据值: {{message}}</span>
    <hr>
    <p class="title">v-html 渲染html原始标签</p>
    <p v-html="aTag"></p>
    <hr>
    <p class="title">单击事件</p>
    <button v-on:click="demo1_1">加1</button>
    <button @click="demo1_2">减1(简写方式绑定)</button>
    <p>当前值:{{demo1_flag}}</p>
    <hr>
    <p class="title">双击事件</p>
    <button v-on:dblclick="demo2_1">双击加1</button>
    <button @dblclick="demo2_2">双击减1(简写方式绑定)</button>
    <p>当前值:{{demo2_flag}}</p>
    <hr>
    <p class="title">鼠标移动事件</p>
    <div id="demo3_div"
         v-on:mousemove="demo3_update_xy">{{demo3_x}},{{demo3_y}}</div>

    <hr>
    <p class="title">once修饰符:点击事件只会触发一次</p>
    <button v-on:click.once="demo1_1">加1</button>
    <button @click.once="demo1_2">减1</button>
    <p>当前值:{{demo1_flag}}</p>
    <hr>

    <p class="title">stop修饰符:阻止事件传播</p>
    <div id="demo3_div"
         v-on:mousemove="demo3_update_xy">{{demo3_x}},{{demo3_y}}
      <div id="demo3_stop_div"
           v-on:mousemove.stop="">
        <span>停止</span></div>

    </div>

  </div>

</template>
<script>
export default {
  data () {
    return { name: '小菜鸟' + new Date().toLocaleString(),
      age: 18,
      sex: '男',
      flag: true,
      aTag: ' <a href="http://www.baidu.com" target="_blank">www.baidu.com(通过属性绑定指令渲染的标签)</a>',
      layout1: false,
      layout2: false,
      layout3: false,
      layout4: false,
      message: '默认值',
      demo1_flag: 0,
      demo2_flag: 0,
      demo3_x: 0,
      demo3_y: 0,
      todos: [
        { text: '学习 JavaScript', id: 1 },
        { text: '学习 Vue', id: 2 },
        { text: '整个牛项目', id: 3 }
      ] }
  },
  methods: {
    test1: function () {
      alert('测试按钮被点击了')
    },
    btn1: function () {
      if (this.layout1) {
        this.layout1 = false
      } else {
        this.layout1 = true
      }
    },
    btn2: function () {
      if (this.layout2) {
        this.layout2 = false
      } else {
        this.layout2 = true
      }
    },
    btn3: function () {
      if (this.layout3) {
        this.layout3 = false
      } else {
        this.layout3 = true
      }
    },
    btn4: function () {
      if (this.layout4) {
        this.layout4 = false
      } else {
        this.layout4 = true
      }
    },
    demo1_1: function () {
      this.demo1_flag++
    },
    demo1_2: function () {
      this.demo1_flag--
    },
    demo2_1: function () {
      this.demo2_flag++
    },
    demo2_2: function () {
      this.demo2_flag--
    },
    demo3_update_xy: function (event) {
      this.demo3_x = event.offsetX
      this.demo3_y = event.offsetY
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
  font-weight: 800;
  font-size: 20px;
}
.testDiv {
  width: 100px;
  height: 100px;
  text-align: center;
}
.testDiv1 {
  background-color: red;
  color: green;
}
.testDiv2 {
  background-color: yellow;
  color: green;
}
.testDiv3 {
  background-color: blue;
  color: yellow;
}
.testDiv4 {
  background-color: green;
  color: yellow;
}
#demo3_div {
  padding: 0px, 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #333;
}

#demo3_stop_div {
  height: 40px;
  width: 200px;
  background-color: red;
}
</style>
