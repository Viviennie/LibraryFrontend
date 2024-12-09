<template>
    <div :class="['sidebar', { 'sidebar-hidden': isHidden }]">
        <!-- 左右箭头按钮 -->
        <div class="sidebar-toggle" :class="{ active: isHidden }" @click="toggleSidebar">
            <i :class="isHidden ? 'fas fa-arrow-right' : 'fas fa-arrow-left'"></i>
        </div>

        <div class="sidebar-content">
            <router-link to="/" class="sidebar-link">图书主页</router-link>
            <router-link to="/myBook" class="sidebar-link">我的图书</router-link>
            <router-link to="/bookRank" class="sidebar-link">图书排行</router-link>
            <router-link to="/upload" class="sidebar-link">发布图书</router-link>
            <router-link to="/help" class="sidebar-link">帮助</router-link>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            RouterLink
        },
        data() {
            return {
                isHidden: false
            };
        },
        methods: {
            toggleSidebar() {
                this.isHidden = !this.isHidden;
            }
        }
    };
</script>

<style scoped>
    .sidebar {
        width: 230px;
        height: 100vh;
        background-color: #F0F8FF;
        color: #F0F8FF;
        position: fixed;
        left: 0;
        top: 0;
        transition: transform 0.3s ease;
        transform: translateX(0);
    }

    .sidebar-hidden {
        transform: translateX(-100%);
    }

    .sidebar-toggle {
        position: absolute;
        top: 50%;
        right: -30px; /* 按钮位置调整 */
        cursor: pointer;
        transform: translateY(-50%); /* 保证按钮在垂直中间 */
    }

        .sidebar-toggle i {
            font-size: 24px; /* 调整箭头大小 */
            color: #0288D1; /* 默认箭头颜色 */
        }

    .sidebar-content {
        padding: 30px;
        overflow-y: auto;
        height: 100%;
    }

    .sidebar-link {
        display: block;
        padding: 15px;
        margin: 10px 0;
        color: #01579B; /* 文字颜色 */
        text-decoration: none;
        border-radius: 5px;
        font-size: 15px; /* 设置字体大小 */
        font-family: 'Arial', sans-serif; /* 设置字体类型 */
    }

        .sidebar-link:hover {
            background-color: #81D4FA; /* 鼠标悬浮时的背景色 */
            color: #01579B; /* 鼠标悬浮时的文字颜色 */
        }

    /* 使用 Vue Router 的 router-link-active 类来改变激活链接的颜色 */
    .router-link-active {
        background-color: #81D4FA; /* 激活时的背景颜色 */
        color: #01579B; /* 激活时的文字颜色 */
    }
</style>
