<template>
    <menu-logo />
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
    >
        <MenuItem :menuList="menuList" />
    </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './menuItem.vue'
import MenuLogo from './menuLogo.vue'
import { ref, reactive } from 'vue'

let menuList = reactive([
    {
        path: '/dashboard',
        component: 'Layout',
        meta: {
            title: '首页',
            icon: 'HomeFilled',
            roles: ['sys:manage']
        },
        children: []
    },
    {
        path: '/system',
        component: 'Layout',
        alwaysShow: true,
        name: 'system',
        meta: {
            title: '系统管理',
            icon: 'Grid',
            roles: ['sys:manage'],
            parentId: 0
        },
        children: [
            {
                path: '/department',
                component: '/system/department/department',
                alwaysShow: false,
                name: 'department',
                meta: {
                    title: '机构管理',
                    icon: 'HelpFilled',
                    roles: ['sys:dept'],
                    parentId: 17
                },
            },
            {
                path: '/userList',
                component: '/system/User/UserList',
                alwaysShow: false,
                name: 'userList',
                meta: {
                    title: '用户管理',
                    icon: 'Failed',
                    roles: ['sys:user'],
                    parentId: 17
                },
            },
            {
                path: '/roleList',
                component: '/system/Role/RoleList',
                alwaysShow: false,
                name: 'roleList',
                meta: {
                    title: '角色管理',
                    icon: 'ElemeFilled',
                    roles: ['sys:role'],
                    parentId: 17
                },
            },
            {
                path: '/menuList',
                component: '/system/Menu/MenuList',
                alwaysShow: false,
                name: 'menuList',
                meta: {
                    title: '权限管理',
                    icon: 'Management',
                    roles: ['sys:menu'],
                    parentId: 17
                },
            }
        ]
    }
])

name: 'layoutMenu'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
}

.el-menu {
    border-right: none !important;
    .el-sub-menu {
        :deep(.el-sub-menu__title) {
            color: #f4f4f5 !important;
        }
    }

    :deep(.el-menu-item) {
        color: #bfcbd9;
        padding-left: 15px !important;
        width: 0;
        &:hover {
            background-color: #001528 !important;
        }
    }

    .el-menu-item.is-active {
        color: #bfcbd9;
    }

    .is-opened {
        .el-menu-item {
            background-color: #1f2d3d !important;
        }
    }
}
</style>