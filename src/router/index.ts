import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 定义路由组件（使用懒加载）
const Home = () => import("../views/Home.vue");
const MyBook = () => import("../views/MyBook.vue");
const BookRank = () => import("../views/BookRank.vue");
const Upload = () => import("../views/Upload.vue");
const Help = () => import("../views/Help.vue");

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/myBook",
        component: MyBook,
        name: "MyBook"
    },
    {
        path: "/bookRank",
        component: BookRank,
        name: "BookRank"
    },
    {
        path: "/upload",
        component: Upload,
        name: "Upload"
    },
    {
        path: "/help",
        component: Help,
        name: "Help"
    }
];

// 创建并导出路由实例
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),  // 使用 HTML5 History 模式
    routes,  // 路由配置
});

export default router;
