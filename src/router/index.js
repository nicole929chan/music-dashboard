import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/HomePage'

const routes = [{ page: '/', component: HomePage }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }
