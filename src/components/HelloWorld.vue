<template>
  <div>{{ userHandleState.userName }}</div>
  <button type="button" @click="handleClick">点击</button>
  <el-button type="primary">Primary</el-button>
</template>

<script setup lang="ts">
import { userHandleStore } from '@/store/user'

const userHandleState = userHandleStore()

const handleClick = () => {
  userHandleState.setUserName('lf')
}
</script>

<style scoped lang="scss">

</style>
