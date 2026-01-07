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
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
  position: relative;
}

.main-layout::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

.main-content {
  padding-top: 0;
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
