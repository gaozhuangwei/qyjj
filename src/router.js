import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Brand from './views/Brand.vue'
import Contact from './views/Contact.vue'
import  ProductList from './components/ProductList.vue'

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
      component: Product,
    },
    {
      path: '/product/:id',
      name: 'productList',
      component:ProductList
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
