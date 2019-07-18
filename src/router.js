import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Brand from './views/Brand.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Product
    },
    {
      path:'/brand',
      name:'brand',
      component:Brand
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact
    }
  ]
})
