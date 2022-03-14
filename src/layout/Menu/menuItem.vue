<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <!-- <i :class="menu.meta.icon"></i> -->
                <component class="icons" :is="menu.meta.icon" />
                <span style="color: #f4f4f5">{{ menu.meta.title }}</span>
            </template>
            <menu-item :menuList="menu.children" />
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path" style="color: #f4f4f5">
            <!-- <i :class="menu.meta.icon"></i> -->
            <component class="icons" :is="menu.meta.icon" />
            <template #title>{{ menu.meta.title }}</template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">

name: 'menuItem';

defineProps(['menuList'])
</script>

<style scoped lang="scss">
:deep(.el-sub-menu__icon-arrow) {
    color: #fff !important;
}
.icons{
    width: 24px;
    height: 18px;
    margin-right: 5px;
}
</style>