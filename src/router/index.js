import Vue from 'vue'
import Router from 'vue-router'
import hello from '../components/hello.vue'
import second from '../components/second.vue'
import chil from '../components/chil.vue'
import home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    { path:'/hello', name:'hello', component:hello},
    { path:'/home', name:'home', component:home,
    children:[
      { path:'/second', name:'second', component:second},
      { path:'/chil', name:'chil', component:chil}
    ]
  }
  ]
})
