import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/CreateView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: () => import('@/views/TodoDetailView.vue'),
    },
    {
      path: '/create/:id',
      name: 'update',
      component: () => import('@/views/CreateView.vue'),
    },
  ],
})

export default router
