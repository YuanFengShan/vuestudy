<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>数据绑定-最简单的插值</h1>
    <p>姓名: {{name}}----------插入String类型值</p>
    <p>年龄: {{age}}-----------插入number类型值</p>
    <p>是否小学毕业: {{flag}}-----------插入boolean值</p>
    <p>性别: {{getSexString()}}-----------------使用方法插值</p>

  </div>
</template>
<script>
export default {
  data () {
    return { name: '小菜鸟', age: 18, sex: 1, flag: false }
  },
  methods: {
    getSexString: function () {
      // 注意当使用方法的返回值插值的时候,需要注意在方法中不可以使用修改属性值
      // 否则会造成死循环异常(思路:当值变化时,会导致页面渲染,页面渲染了会再次调用方法,方法会导致值变化)

      if (this.sex === 1) {
        return '男'
      } else {
        return '女'
      }
    }
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
