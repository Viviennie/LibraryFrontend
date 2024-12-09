<template>
    <div class="layout">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
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
/* 禁止html和body的滚动 */
html, body {
    height: 100%;  /* 使html和body的高度为100% */
    margin: 0;     /* 移除默认的外边距 */
    padding: 0;    /* 移除默认的内边距 */
    overflow: hidden; /* 禁止所有滚动条 */
}

/* .layout容器样式 */
.layout {
    display: flex;
    height: 100vh;  /* 让layout容器占满整个视口的高度 */
    width: 100vw;   /* 让layout容器占满整个视口的宽度 */
    position: relative;
    overflow: hidden; /* 确保layout内不会有溢出 */
    background-image: url('./assets/background.png'); /* 背景图片 */
    background-size: 100% 100%;   /* 背景图片自适应填充 */
    background-position: center;  /* 背景居中 */
    background-attachment: fixed; /* 背景固定，不随页面滚动 */
}

/* 内容区域的样式 */
.content {
    flex-grow: 1;
    padding: 20px;
    box-sizing: border-box;
    transition: margin-left 0.3s ease, width 0.3s ease;
    overflow: hidden;  /* 禁止内容区域出现滚动条 */
    z-index: 1;
    margin-left: 230px; /* 默认侧边栏宽度 */
    width: calc(100vw - 230px); /* 内容区域的宽度是100vw减去侧边栏的宽度 */
    height: 100vh; /* 使内容区域填满视口高度 */
}

/* 当侧边栏隐藏时，内容区域占满整个宽度 */
.sidebar-hidden ~ .content {
    margin-left: 0;
    width: 100vw; /* 占满整个视口宽度 */
}

/* 防止页面中其他容器溢出 */
body, html {
    overflow: hidden;  /* 禁止页面滑动 */
}
</style>
