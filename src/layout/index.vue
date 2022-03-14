<template>
    <el-container class="layout">
        <el-aside width="auto" class="aside">
            <menu-bar />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Header from './Header/header.vue'
import menuBar from './Menu/menuBar.vue'
name: 'layoutIndex'

</script>

<style lang="scss" scoped>
.layout {
    .aside {
        background: $aside-background;
    }
    .header {
        height: $header-height;
        border-bottom: 1px solid #e5e5e5;
    }
    .main {
        
    }
}
</style>