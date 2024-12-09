import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const BookDetail = () => import('../components/BookDetail.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: BookDetail, // 假设主页即展示 BookDetail
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;