import { createRouter, createWebHistory } from "vue-router";

import MyBook from "../pages/MyBook.vue";
import BookRank from "../pages/BookRank.vue";
import Upload from "../pages/Upload.vue";
import Help from "../pages/Help.vue";
import Home from "../pages/Home.vue";

const routes = [
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
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
