import Vue from 'vue'
import VueRouter from 'vue-router'
import IseeSum from '../views/IseeSum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IseeSum',
    component: IseeSum
  },
  {
    path: '/iseepay',
    name: 'IseePay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IseePay.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
