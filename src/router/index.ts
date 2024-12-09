import { createRouter, createWebHistory } from 'vue-router';
import RankContainer from '../components/RankContainer.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RankContainer, // 把 RankContainer 作为首页
  },
  // 你可以在这里添加其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;