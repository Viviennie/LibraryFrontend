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
    z-index: 100; /* 确保侧边栏在内容之上 */
}

.sidebar-hidden {
    transform: translateX(-100%); /* 隐藏侧边栏 */
}

.sidebar-toggle {
    position: absolute;
    top: 50%;
    right: -30px;
    cursor: pointer;
    transform: translateY(-50%);
}

.sidebar-toggle i {
    font-size: 24px;
    color: #0288D1;
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
    color: #01579B;
    text-decoration: none;
    border-radius: 5px;
    font-size: 15px;
    font-family: 'Arial', sans-serif;
}

.sidebar-link:hover {
    background-color: #81D4FA;
    color: #01579B;
}

.router-link-active {
    background-color: #81D4FA;
    color: #01579B;
}
</style>
