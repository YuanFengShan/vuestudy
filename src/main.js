import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入代码高亮展示插件
import VueHighlightJS from 'highlightjs'
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
