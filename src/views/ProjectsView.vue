<template>
  <div class="projects-page">
    <section class="section projects">
      <div class="container">
        <h2 class="section__title">Projetos</h2>

        <div class="projects__grid">
          <article class="project__card" v-for="project in projects" :key="project.id">
            <div class="project__header">{{ project.title }}</div>
            <p class="project__description">{{ project.description }}</p>
            <a :href="project.repo" class="project__link" target="_blank" rel="noopener noreferrer">Ver Mais →</a>
          </article>
        </div>

        <div class="projects__more">
          <router-link to="/" class="project__more-btn">Voltar para Home</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1. Um projeto incrível que demonstra minhas habilidades.', repo: 'https://github.com/seu-usuario/projeto-1' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2. Outro projeto fascinante que realizei.', repo: 'https://github.com/seu-usuario/projeto-2' },
  { id: 3, title: 'Projeto 3', description: 'Descrição do projeto 3. Um mais um dos meus trabalhos em destaque.', repo: 'https://github.com/seu-usuario/projeto-3' },
  { id: 4, title: 'Projeto 4', description: 'Exemplo adicional para testes de layout.', repo: '#' },
  { id: 5, title: 'Projeto 5', description: 'Exemplo adicional para testes de layout.', repo: '#' },
  { id: 6, title: 'Projeto 6', description: 'Exemplo adicional para testes de layout.', repo: '#' },
])
</script>

<style scoped>
.projects {
  background: var(--color-bg-primary);
}

.section {
  scroll-margin-top: 80px;
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section__title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 3rem;
  text-align: center;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project__card {
  background: var(--color-bg-secondary);
  padding: 2rem;
  border-radius: 0.5rem;
  border-top: 4px solid var(--color-primary);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.project__header {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.project__description {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project__link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.project__link:hover {
  color: var(--color-primary-dark);
}

.projects__more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.project__more-btn {
  display: inline-block;
  padding: 0.9rem 1.4rem;
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 768px) {
  .section__title {
    font-size: 1.8rem;
  }

  .projects__grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.2rem;
  }
}
</style>
