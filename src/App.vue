<script setup lang="ts">
import { RouterView } from 'vue-router'
import UHeader from '@/components/layout/UHeader.vue'
</script>

<template>
  <UHeader />
  <div class="m-auto w-9/12 flex justify-center content">
      <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.content {
    background-color: $vt-c-text-dark-2;
}
</style>
