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
    .layout {
        display: flex;
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow: hidden;
    }
    
    .content {
        padding: 20px;
        transition: margin-left 0.3s ease;
        overflow-x: hidden;
        margin-left: 250px;
        width: calc(100vw - 250px);
        z-index: 1;
    }

   
    .sidebar-hidden ~ .content {
        margin-left: 0;
        width: 100vw;
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
        z-index: 2;
    }

    .sidebar-hidden {
        transform: translateX(-100%);
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
        font-size: 20px;
        font-weight: bold;
    }

        .sidebar-link:hover {
            background-color: #81D4FA;
            color: #01579B;
        }

    
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
</style>
