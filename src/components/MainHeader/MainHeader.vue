<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isScrolled = ref(false)
const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateToSection = (sectionId: string) => {
  menuOpen.value = false
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
  menuOpen.value = false
  // Link "Projetos" sempre navega para a página dedicada /projects
  router.push('/projects')
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
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
      <router-link to="/" class="header__logo" @click="closeMenu">Portfólio</router-link>
      <button class="header__toggle" @click="toggleMenu" :class="{ 'header__toggle--active': menuOpen }"
        :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav v-if="menuOpen" :class="['header__nav', { 'header__nav--open': menuOpen }]" @click="closeMenu">
        <a href="javascript:void(0)" @click.stop="navigateToSection('hero')" class="header__link">Home</a>
        <a href="javascript:void(0)" @click.stop="navigateToSection('about')" class="header__link">Sobre</a>
        <a href="javascript:void(0)" @click.stop="navigateToSection('skills')" class="header__link">Habilidades</a>
        <a href="javascript:void(0)" @click.stop="navigateToProjects" class="header__link">Projetos</a>
        <a href="javascript:void(0)" @click.stop="navigateToSection('contact')" class="header__link">Contato</a>
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
  width: 100%;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-header-text);
  text-decoration: none;
  z-index: 1001;
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: all 0.3s ease;
  width: 32px;
  height: 26px;
  justify-content: center;
  align-items: flex-start;
}

.header__toggle span {
  width: 22px;
  height: 2.5px;
  background-color: var(--color-header-text);
  border-radius: 2px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  transform-origin: center;
  will-change: transform, opacity;
}

.header__toggle--active span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.header__toggle--active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.header__toggle--active span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

/* Estado inativo - garante que volte ao normal */
.header__toggle span:nth-child(1) {
  transform: translateY(0) rotate(0deg);
}

.header__toggle span:nth-child(2) {
  opacity: 1;
  transform: scaleX(1);
}

.header__toggle span:nth-child(3) {
  transform: translateY(0) rotate(0deg);
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
  white-space: nowrap;
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

/* Mobile responsiveness */
@media (max-width: 768px) {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .header__container {
    padding: 1rem 1rem;
    max-width: 100%;
    position: relative;
  }

  .header__logo {
    font-size: 1.2rem;
  }

  .header__toggle {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
    backdrop-filter: blur(10px);
    flex-direction: column;
    gap: 0;
    padding: 2rem 1.5rem;
    animation: slideInNav 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    max-height: calc(100vh - 56px);
    display: flex;
  }

  @keyframes slideInNav {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .header__link {
    font-size: 1rem;
    white-space: normal;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: block;
  }

  .header__link:last-child {
    border-bottom: none;
  }

  .header__link:hover {
    color: var(--color-header-link-hover);
  }

  .header--scrolled {
    background-color: var(--color-header-bg);
    backdrop-filter: blur(10px);
    margin: 0;
    border-radius: 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    left: 0;
    right: 0;
  }

  .header--scrolled .header__container {
    padding: 0.8rem 1rem;
  }
}

@media (max-width: 480px) {
  .header__container {
    padding: 0.7rem 0.8rem;
  }

  .header__logo {
    font-size: 1rem;
    font-weight: bold;
  }

  .header__toggle {
    padding: 0.4rem;
    width: 30px;
    height: 24px;
  }

  .header__toggle span {
    width: 20px;
    height: 2px;
  }

  .header__nav {
    top: 48px;
    padding: 1rem 1rem;
    gap: 0;
  }

  .header__link {
    font-size: 0.95rem;
    padding: 0.8rem 0;
  }

  .header--scrolled {
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 0;
  }

  .header--scrolled .header__container {
    padding: 0.7rem 0.8rem;
  }
}
</style>
