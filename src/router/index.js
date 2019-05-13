import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../pages/blog.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blog',
      component: Blog
    }
  ]
})
