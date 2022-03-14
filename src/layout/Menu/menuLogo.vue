<template>
    <div class="logo">
        <img src="@/assets/logo.png" />
        <span class="title">泽辰管理系统</span>
    </div>
</template>

<script setup lang="ts">
name: 'MenuLogo'
</script>

<style scoped lang="scss">
.logo {
    background-color: #2b2f3a;
    height: 50px;
    border: none;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    color: #fff;
    img {
        width: 32px;
        height: 32px;
        margin-right: 12px;
    }
    .title {
    }
}
</style>