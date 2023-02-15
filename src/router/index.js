import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import Signup from '@/views/Signup'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  { 
    path:'/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
