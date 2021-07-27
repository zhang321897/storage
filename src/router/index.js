import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/home/Home')
const Classify = () => import('../pages/classify/Classify')
const Cart = () => import('../pages/cart/Cart')
const Me = () => import('../pages/me/Me')

Vue.use(Router)

export default new Router({
  routes: [
   {
     path: '',
     redirect: '/home'
   },
   {
     path:'/home',
     component: Home
   },
   {
     path:'/classify',
     component: Classify
   },
   {
     path:'/cart',
     component: Cart
   },
   {
     path:'/me',
     component: Me
   }
  ],
  mode:'history'
})
