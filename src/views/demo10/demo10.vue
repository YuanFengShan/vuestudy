<template>
  <div>
    <router-link class="pageBreak"
                 to="/CourseCatalogue">返回</router-link>
    <h1>动态绑定类与样式</h1>
    <hr>
    <h2>动态绑定类</h2>
    <button v-on:click="active_demo1">改变值</button>
    <div v-bind:class="{ active: isActive }"></div>

    <hr>
    <h2>与普通的类共存</h2>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: true
    }
  },
  methods: {
    active_demo1: function () {
      this.isActive = !this.isActive
    }
  }

}
</script>

<style>
h1,
h2 {
  text-align: center;
}
.active {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
