<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>计算属性</h1>
    <hr>
    <h2>简单使用</h2>
    <hr>
    <p>原始值:{{message}}</p>
    <p>经过计算属性计算过后反转的值:{{reversedMessage}}</p>
    <span>修改原始值:</span> <input v-model="message">
    <pre v-highlightjs>
      <code class="javascript">
        注意:只有当依赖的原始值改变时,调用计算属性的才会重新计算,否则只会返回缓存上次计算的结果
      </code>
    </pre>
    <hr>
    <h2>getter 以及 setter</h2>
    <!-- <p>{{fullName}}</p> -->
    <span>请输入邮箱:</span><input v-model="inputText"
           type="email">
    <button v-on:click='input_over'>确定</button>
    <p>邮箱前部分[{{fristName}}]以及邮箱的后半部分[{{lastName}}]</p>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      message: 'hello',
      fristName: 'null',
      lastName: 'null',
      inputText: ''
    }
  },
  methods: {
    input_over: function () {
      this.fullName = this.inputText
    }
  },
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('') + '计算时间:' + new Date().toLocaleString()
    },

    fullName: {
      get: function () {
        return ''
      },
      set: function (newValue) {
        var index = newValue.indexOf('@')
        if (index === -1) {
          this.fristName = newValue
          this.lastName = 'null'
        } else {
          this.fristName = newValue.substring(0, index)
          this.lastName = newValue.substring(index + 1, newValue.length - 1)
        }
      }
    }
  }
}
</script>

<style>
h1,
h2 {
  text-align: center;
}
</style>
