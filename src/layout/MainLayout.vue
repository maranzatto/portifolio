<script setup lang="ts">
import MainHeader from '@/components/MainHeader/MainHeader.vue'
</script>

<template>
  <div class="main-layout">
    <MainHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  background: var(--color-bg-primary);
}

.main-content {
  padding-top: 0;
  width: 100%;
}
</style>
