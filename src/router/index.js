import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import BrandsView from '../views/BrandsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsView
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
