<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isScrolled = ref(false)
const router = useRouter()
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateToSection = (sectionId: string) => {
  // Se estiver em /projects, volta para home e depois faz scroll
  if (route.path === '/projects') {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
  } else {
    // Se já está em home, faz scroll direto
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateToProjects = () => {
  // Link "Projetos" sempre navega para a página dedicada /projects
  router.push('/projects')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="header__container">
      <router-link to="/" class="header__logo">Portfólio</router-link>
      <nav class="header__nav">
        <a href="javascript:void(0)" @click="navigateToSection('hero')" class="header__link">Home</a>
        <a href="javascript:void(0)" @click="navigateToSection('about')" class="header__link">Sobre</a>
        <a href="javascript:void(0)" @click="navigateToSection('skills')" class="header__link">Habilidades</a>
        <a href="javascript:void(0)" @click="navigateToProjects" class="header__link">Projetos</a>
        <a href="javascript:void(0)" @click="navigateToSection('contact')" class="header__link">Contato</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: transparent;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-header-text);
}

.header__nav {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.header__link {
  color: var(--color-header-text);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.header__link:hover {
  color: var(--color-header-link-hover);
}

/* Estado scrollado - header com background flutuante */
.header--scrolled {
  background-color: var(--color-header-bg);
  backdrop-filter: blur(10px);
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  left: 1rem;
  right: 1rem;
}

.header--scrolled .header__container {
  padding: 1rem 2rem;
}
</style>
