import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'
import CourseCatalogue from './views/CourseCatalogue'
import Demo3 from './views/Demo3'
import Demo4 from './views/Demo4'
import Demo5 from './views/demo5/Demo5'
import Demo6 from './views/demo6/Demo6'
import Demo7 from './views/demo7'
import Demo8 from './views/demo8'
import Demo9 from './views/demo9'
import Demo10 from './views/demo10/demo10'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CourseCatalogue',
      name: 'CourseCatalogue',
      component: CourseCatalogue
    },
    {
      path: '/Demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/Demo4',
      name: 'Demo4',
      component: Demo4
    },
    {
      path: '/Demo5',
      name: 'Demo5',
      component: Demo5
    },
    {
      path: '/Demo6',
      name: 'Demo6',
      component: Demo6
    },
    {
      path: '/Demo7',
      name: 'Demo7',
      component: Demo7
    },
    {
      path: '/Demo8',
      name: 'Demo8',
      component: Demo8
    },
    {
      path: '/Demo9',
      name: 'Demo9',
      component: Demo9
    },
    {
      path: '/Demo10',
      name: 'Demo10',
      component: Demo10
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/CourseCatalogue',
      name: 'CourseCatalogue',
      component: CourseCatalogue
    }
  ]
})
