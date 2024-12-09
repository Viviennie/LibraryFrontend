<template>
    <div class="layout">
        <!-- 侧边栏 -->
        <Sidebar></Sidebar>

        <!-- 右侧内容区域 -->
        <div class="content">
            <router-view></router-view> <!-- 显示路由的页面内容 -->
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue';

    export default {
        components: {
            Sidebar
        }
    };
</script>

<style scoped>
    /* 父容器布局 */
    .layout {
        display: flex; /* 使用 Flexbox 布局 */
        height: 100vh;
        width: 100vw; /* 确保父容器宽度始终不超出屏幕 */
        position: relative;
        overflow: hidden; /* 防止页面横向滚动 */
    }

    /* 右侧内容区域 */
    .content {
        padding: 20px;
        transition: margin-left 0.3s ease; /* 右侧内容区域变化时有过渡效果 */
        overflow-x: hidden; /* 防止内容超出宽度 */
        margin-left: 250px; /* 默认时右侧内容有侧边栏宽度的左边距 */
        width: calc(100vw - 250px); /* 动态计算右侧区域的宽度，减去侧边栏宽度 */
        z-index: 1; /* 确保右侧内容在前面 */
    }

    /* 当侧边栏隐藏时，右侧内容区域填满整个屏幕 */
    .sidebar-hidden ~ .content {
        margin-left: 0; /* 隐藏侧边栏时，右侧内容区域填充满屏幕 */
        width: 100vw; /* 填充整个视口宽度 */
    }

    .sidebar {
        width: 250px;
        background-color: #B3E5FC;
        color: #0288D1;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        transition: transform 0.3s ease;
        z-index: 2; /* 确保侧边栏在内容区域之上 */
    }

    .sidebar-hidden {
        transform: translateX(-100%);
    }

    /* 侧边栏按钮 */
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

    /* 侧边栏内容 */
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
        font-size: 20px;
        font-weight: bold;
    }

        .sidebar-link:hover {
            background-color: #81D4FA;
            color: #01579B;
        }

    /* 防止页面超出横向滚动 */
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden; /* 禁止横向滚动条 */
    }
</style>
