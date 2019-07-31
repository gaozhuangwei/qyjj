import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Brand from './views/Brand.vue'
import Contact from './views/Contact.vue'

import BuyFurniture from './components/buyFurniture.vue'
import Advice from './components/advice.vue'
import Join from './components/join.vue'
import Position from './components/position.vue'
import Posi from './components/posi.vue'
import BrandDetail from "./components/brandDetail.vue"

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
      // 品牌中心
      path:'/brand',
      name:'brand',
      component:Brand,
    },
    {
      path:"/brandDetail",
      name:"brandDetail",
      component:BrandDetail
    },
    {
      // 联系我们
      path:'/contact',
      name:'contact',
      component:Contact,
    },
    {
      // 买家具
      path:'/buyfurniture',
      name:'buyfurniture',
      component:BuyFurniture,
    },
    {
      // 提建议
      path:'/advice',
      name:'advice',
      component:Advice,
    },
    {
      // 加盟
      path:'/join',
      name:'join',
      component:Join,
    },
    {
      // 申请职位
      path:'/position',
      name:'position',
      component:Position,
    },
    {
      // 申请职位
      path:'/posi/:selectVal',
      name:'posi',
      component:Posi,
    }
  ]
})
