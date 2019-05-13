import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../pages/blog.vue'
import Home from '../pages/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
})
