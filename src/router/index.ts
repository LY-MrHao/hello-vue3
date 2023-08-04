import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestView.vue')
  },
  {
    path: '/container',
    name: 'container',
    component: () => import('@/views/Container.vue')
  },
  {
    path: '/border',
    name: 'border',
    component: () => import('@/views/Border.vue')
  },
  {
    path: '/scrollbar',
    name: 'scrollbar',
    component: () => import('@/views/Scrollbar.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/Student.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
