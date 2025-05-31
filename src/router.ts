import {createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router'

export const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
