<template>
  <div class="projects-page">
    <section class="section projects">
      <div class="container">
        <h2 class="section__title">Todos os Projetos</h2>

        <div class="projects__grid">
          <article class="project__card" v-for="project in projects" :key="project.id">
            <div class="project__header">
              <h3>{{ project.title }}</h3>
              <div class="project__meta">
                <span class="tech-tag">{{ project.language || 'Misc' }}</span>
                <span v-if="project.stars" class="stars-tag">⭐ {{ project.stars }}</span>
              </div>
            </div>
            <p class="project__description">{{ project.description }}</p>
            <div class="project__links">
              <a v-if="project.demo" :href="project.demo" class="project__link project__link--demo" target="_blank" rel="noopener noreferrer">
                <span>Ver Demo</span>
                <i class="pi pi-external-link"></i>
              </a>
              <a :href="project.repo" class="project__link project__link--repo" target="_blank" rel="noopener noreferrer">
                <span>Código</span>
                <i class="pi pi-github"></i>
              </a>
            </div>
          </article>
        </div>

        <div class="projects__more">
          <router-link to="/" class="project__more-btn">Voltar para Início</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { allProjects } from '@/data/projects'

const projects = allProjects
</script>

<style scoped>
.projects {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -30%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%);
  animation: float 30s ease-in-out infinite;
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
  color: rgba(220, 38, 38, 0.9);
  margin-bottom: 3rem;
  text-align: center;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project__card {
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.project__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.6));
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.project__card:hover::before {
  transform: scaleX(1);
}

.project__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: rgba(220, 38, 38, 0.3);
}

.project__header {
  margin-bottom: 1.5rem;
}

.project__header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: rgba(220, 38, 38, 0.9);
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
}

.project__meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
  border-radius: 20px;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.stars-tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border-radius: 20px;
  font-weight: 500;
}

.project__description {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project__links {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

.project__link i {
  font-size: 0.9rem;
}

.project__link--demo {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(239, 68, 68, 0.8));
  color: white;
}

.project__link--demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.project__link--repo {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.project__link--repo:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(220, 38, 38, 0.4);
  color: rgba(220, 38, 38, 0.9);
}

.projects__more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.project__more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(239, 68, 68, 0.8));
  color: white;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project__more-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.5s ease;
}

.project__more-btn:hover::before {
  left: 100%;
}

.project__more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
}

@media (max-width: 768px) {
  .section__title {
    font-size: 1.8rem;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .project__card {
    padding: 1.5rem;
  }

  .project__header {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .project__description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .project__links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project__link {
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
  }

  .project__more-btn {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0;
    scroll-margin-top: 70px;
  }

  .container {
    padding: 0 0.75rem;
  }

  .section__title {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project__card {
    padding: 1.2rem;
    border-radius: 0.4rem;
    border-top-width: 3px;
  }

  .project__card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  .project__header {
    font-size: 1rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
  }

  .project__description {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.9rem;
  }

  .project__link {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .projects__more {
    margin-top: 1.5rem;
  }

  .project__more-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }

  .project__more-btn:hover {
    transform: translateY(-2px);
  }
}
</style>
