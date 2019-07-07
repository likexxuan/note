import Vue from 'vue'
import Router from 'vue-router'
import hello from '../components/hello.vue'
import second from '../components/second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/hello', name:'hello', component:hello},
    { path:'/second', name:'second', component:second},
  ]
})
