<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section id="hero" class="section hero">
      <div class="hero__content">
        <h1 class="hero__title">Full Stack Developer | .NET & Vue.js</h1>
        <p class="hero__subtitle">Construindo aplicações web escaláveis com arquitetura limpa, APIs RESTful e microserviços, sempre priorizando performance e qualidade de código</p>
        <a href="#projects" class="hero__cta">Explorar Meu Trabalho</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section__title">Minha Jornada</h2>
        <div class="about__content">
          <p>
            Olá! Sou <strong>Amitael Maranzatto</strong>, um <strong>Desenvolvedor Full Stack</strong> com
            <strong>forte expertise em front-end</strong> utilizando Vue.js e TypeScript e
            <strong>experiência sólida em back-end</strong> com .NET.
          </p>

          <p>
            Atuo no <strong>design e desenvolvimento de aplicações web escaláveis</strong>,
            APIs RESTful e soluções baseadas em microserviços, aplicando princípios como
            <strong>Clean Architecture</strong>, <strong>DDD</strong> e <strong>SOLID</strong>.
          </p>

          <p>
            <strong>Stack principal:</strong> .NET (C#), EF Core, REST APIs, Microserviços,
            PostgreSQL/SQL Server, Vue.js, TypeScript, JavaScript, HTML, CSS, TailwindCSS, Git.
          </p>

          <p>
            Foco na construção de <strong>sistemas mantíveis</strong>, <strong>interfaces reutilizáveis</strong>
            e <strong>serviços back-end bem estruturados</strong>, sempre priorizando
            <strong>performance</strong>, <strong>qualidade de código</strong> e
            <strong>escalabilidade a longo prazo</strong>.
          </p>

          <p>
            Aberto a oportunidades como <strong>Full Stack Developer</strong>,
            <strong>Software Engineer</strong> ou papéis de Full Stack com foco em
            <strong>Backend/Frontend</strong>.
          </p>
        </div>
      </div>
    </section>
    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section__title">Experiência Profissional</h2>

        <div class="experience__timeline">
          <article class="experience__item">
            <div class="experience__period">
              <span class="period__date">2025 - Presente</span>
              <span class="period__duration">6 meses</span>
            </div>
            <div class="experience__content">
              <h3 class="experience__title">Desenvolvedor Front-End Autônomo</h3>
              <p class="experience__company">Amitael Maranzatto</p>
              <ul class="experience__achievements">
                <li>Desenvolvimento e manutenção de aplicações web SPA utilizando Vue.js 3, TypeScript e JavaScript</li>
                <li>Criação de componentes reutilizáveis, responsivos e escaláveis, seguindo boas práticas de componentização e organização de código</li>
                <li>Integração com APIs REST, consumo de dados em tempo real e tratamento de estados da aplicação</li>
                <li>Colaboração com times de design e back-end para garantir performance, usabilidade e consistência da interface</li>
              </ul>
            </div>
          </article>

          <div style="height: 3rem;"></div>

          <article class="experience__item">
            <div class="experience__period">
              <span class="period__date">2024 - 2025</span>
              <span class="period__duration">1 ano e 6 meses</span>
            </div>
            <div class="experience__content">
              <h3 class="experience__title">Desenvolvedor Front-End</h3>
              <p class="experience__company">Moovefy</p>
              <ul class="experience__achievements">
                <li>Desenvolvimento e manutenção de aplicações web utilizando Blazor, React.js, C# e JavaScript</li>
                <li>Criação de componentes reutilizáveis e interfaces responsivas, com foco em usabilidade e padronização visual</li>
                <li>Integração com APIs REST e otimização de desempenho das aplicações</li>
                <li>Colaboração com equipes de design e back-end no desenvolvimento de soluções web</li>
              </ul>
            </div>
          </article>

          <div style="height: 3rem;"></div>

          <article class="experience__item">
            <div class="experience__period">
              <span class="period__date">2022 - 2023</span>
              <span class="period__duration">10 meses</span>
            </div>
            <div class="experience__content">
              <h3 class="experience__title">Desenvolvedor Web Front-End</h3>
              <p class="experience__company">OnFriday Technologies</p>
              <ul class="experience__achievements">
                <li>Desenvolvimento e manutenção de aplicações web utilizando Blazor, React.js, C# e JavaScript</li>
                <li>Criação de componentes reutilizáveis e interfaces responsivas, com foco em usabilidade e padronização visual</li>
                <li>Integração com APIs REST e otimização de desempenho das aplicações</li>
                <li>Colaboração com equipes de design e back-end no desenvolvimento de soluções web</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section skills">
      <div class="container">
        <h2 class="section__title">Stack Tecnológico</h2>

        <div class="skills-grid">
          <!-- Vue Spotlight -->
          <article class="vue-card">
            <div class="vue-card__logo" aria-hidden="true">
              <IconVue class="icon--vue" width="96" height="96" />
            </div>
            <h3 class="vue-card__title">Vue.js</h3>
            <p class="vue-card__desc">Construção de UIs reativas com componentes modulares, Composition API,
              SFCs,
              roteamento e gerenciamento de estado com Pinia.</p>

            <div class="skill__bar skill--large" data-value="92">
              <div class="skill__progress"
                style="width:92%; background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.6));">
              </div>
            </div>
            <div class="vue-card__meta">
              <span class="meta-pill"><i class="pi pi-check"></i>Composition API</span>
              <span class="meta-pill"><i class="pi pi-check"></i>Pinia</span>
              <span class="meta-pill"><i class="pi pi-check"></i>Vite</span>
            </div>
          </article>

          <!-- Core Techs -->
          <div class="tech-cards">
            <div class="tech-card">
              <div class="tech-card__head">
                <IconHtml class="tech-logo" aria-hidden="true" />
                <div class="tech-card__info">
                  <div class="tech-card__name">HTML</div>
                  <div class="tech-card__sub">Semântica & Acessibilidade</div>
                </div>
              </div>
              <div class="skill__bar skill--small">
                <div class="skill__progress"
                  style="width:95%; background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.6));">
                </div>
              </div>
            </div>

            <div class="tech-card">
              <div class="tech-card__head">
                <IconCss class="tech-logo" aria-hidden="true" />
                <div class="tech-card__info">
                  <div class="tech-card__name">CSS</div>
                  <div class="tech-card__sub">Layout responsivo, Grid & Flex</div>
                </div>
              </div>
              <div class="skill__bar skill--small">
                <div class="skill__progress"
                  style="width:93%; background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.6));">
                </div>
              </div>
            </div>

            <div class="tech-card m-">
              <div class="tech-card__head">
                <IconTypescript class="tech-logo" aria-hidden="true" />
                <div class="tech-card__info">
                  <div class="tech-card__name">TypeScript</div>
                  <div class="tech-card__sub">Tipos & Integração com Vue</div>
                </div>
              </div>
              <div class="skill__bar skill--small">
                <div class="skill__progress"
                  style="width:88%; background: linear-gradient(90deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.6));">
                </div>
              </div>
            </div>
          </div>

          <div class="skills-tools">
            <span class="tool">
              <IconAngular class="tech-logo" aria-hidden="true" /> Angular
            </span>
            <span class="tool">
              <IconReact class="tech-logo" aria-hidden="true" /> React
            </span>
            <span class="tool">
              <IconNext class="tech-logo" aria-hidden="true" /> Next.js
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
      <div class="container">
        <h2 class="section__title">Projetos em Destaque</h2>
        <div class="projects__grid">
          <div v-if="loading" class="loading-state">
            <div class="loading-spinner"></div>
            <p>Carregando projetos em destaque...</p>
          </div>
          <article v-else-if="featuredProjects.length > 0" class="project__card" v-for="project in featuredProjects" :key="project.id">
            <div class="project__header">
              <h3>{{ project.title }}</h3>
              <div class="project__meta">
                <span class="tech-tag">{{ project.language }}</span>
                <span v-if="project.stars" class="stars-tag">⭐ {{ project.stars }}</span>
              </div>
            </div>
            <p class="project__description">{{ project.description }}</p>
            <div class="project__links">
              <a v-if="project.demo" :href="project.demo" class="project__link project__link--demo" target="_blank"
                rel="noopener noreferrer">
                <span>Ver Demo</span>
                <i class="pi pi-external-link"></i>
              </a>
              <a :href="project.repo" class="project__link project__link--repo" target="_blank"
                rel="noopener noreferrer">
                <span>Código</span>
                <i class="pi pi-github"></i>
              </a>
            </div>
          </article>
          <div v-else-if="!loading" class="empty-state">
            <i class="pi pi-folder-open" style="font-size: 3rem; opacity: 0.5;"></i>
            <p>Nenhum projeto em destaque encontrado.</p>
          </div>
        </div>
        <div class="projects__more">
          <router-link to="/projects" class="project__more-btn">Ver Todos os Projetos</router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section__title">Vamos Conversar?</h2>
        <p class="contact__subtitle">Aberto a novas oportunidades e colaborações emocionantes!</p>

        <div class="contact__content">
          <div class="contact__email">
            <p class="contact__email-label">Me envie um email:</p>
            <a href="mailto:amitael.jau@gmail.com" class="contact__email-link">amitael.jau@gmail.com</a>
          </div>

          <div class="contact__divider">ou</div>

          <div class="contact__social">
            <p class="contact__social-label">Conecte-se comigo:</p>
            <div class="social__links">
              <a href="https://github.com/maranzatto" target="_blank" rel="noopener noreferrer"
                class="social__link github">
                <i class="pi pi-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/amitaelmaranzatto/" target="_blank" rel="noopener noreferrer"
                class="social__link linkedin">
                <i class="pi pi-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="./AmitaelMaranzattoDev.pdf" download="AmitaelMaranzattoDev.pdf" class="social__link curriculum">
                <i class="pi pi-download"></i>
                <span>Currículo</span>
              </a>
            </div>
          </div>
        </div>

        <p class="contact__footer">Obrigado pela visita! Fico à disposição para criar algo incrível juntos.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IconAngular from '@/assets/icons/IconAngular.vue';
import IconCss from '@/assets/icons/IconCss.vue';
import IconHtml from '@/assets/icons/IconHtml.vue';
import IconNext from '@/assets/icons/IconNext.vue';
import IconReact from '@/assets/icons/IconReact.vue';
import IconTypescript from '@/assets/icons/IconTypescript.vue';
import IconVue from '@/assets/icons/IconVue.vue';
import { getFeaturedProjects, type Project } from '@/data/projects'

const featuredProjects = ref<Project[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    featuredProjects.value = await getFeaturedProjects()
  } catch (error) {
    console.error('Erro ao carregar projetos em destaque:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.portfolio {
  width: 100%;
}

.section {
  scroll-margin-top: 80px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--gradient-primary), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }

  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

.hero__content {
  max-width: 720px;
  color: var(--color-text-inverse);
  position: relative;
  z-index: 2;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-text-inverse);
}

.hero__subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: var(--color-text-inverse);
}

.hero__cta {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(239, 68, 68, 0.7));
  backdrop-filter: blur(10px);
  color: var(--color-text-inverse);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  position: relative;
  overflow: hidden;
}

.hero__cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.4s ease;
}

.hero__cta:hover::before {
  left: 100%;
}

.hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.85), rgba(239, 68, 68, 0.75));
}

/* Section Styles */
.section {
  scroll-margin-top: 80px;
  position: relative;
  padding: 4rem 0;
}

.section__title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(239, 68, 68, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
  text-align: center;
}

/* About Section */
.about {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(120, 119, 198, 0.05) 0%, transparent 70%);
  animation: float-reverse 25s ease-in-out infinite;
}

@keyframes float-reverse {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  33% {
    transform: translate(-20px, 30px) rotate(-120deg);
  }

  66% {
    transform: translate(30px, -20px) rotate(-240deg);
  }
}

.about__content p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Experience Section */
.experience {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.02), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(12px);
  border-radius: 24px;
  margin: 2rem;
  border: 1px solid rgba(220, 38, 38, 0.15);
  position: relative;
  overflow: hidden;
}

.experience::before {
  content: '';
  position: absolute;
  top: -40%;
  left: -40%;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%);
  animation: float-reverse 28s ease-in-out infinite;
}

.experience__timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.experience__timeline::before {
  content: '';
  position: absolute;
  left: 120px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, rgba(220, 38, 38, 0.8), transparent);
  border-radius: 1px;
}

.experience__item {
  display: flex;
  gap: 2rem;
  position: relative;
}

.experience__period {
  flex-shrink: 0;
  width: 120px;
  text-align: right;
  padding-top: 0.5rem;

  padding-right: 0.3rem;
}

.period__date {
  display: block;
  font-weight: 600;
  color: rgba(220, 38, 38, 0.85);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.period__duration {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  opacity: 0.8;
}

.experience__content {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

.experience__content::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 2rem;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(239, 68, 68, 0.8));
  border-radius: 50%;
  border: 3px solid var(--color-bg-secondary);
  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.2);
}

.experience__title {
  font-size: 1.3rem;
  font-weight: 700;
  color: rgba(220, 38, 38, 0.9);
  margin: 0 0 0.5rem 0;
}

.experience__company {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0 0 1.5rem 0;
  font-weight: 500;
}

.experience__achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience__achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.experience__achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: rgba(220, 38, 38, 0.8);
  font-weight: bold;
}

.experience__achievements li:last-child {
  margin-bottom: 0;
}

/* Skills Section - clean, focused on front-end (Vue spotlight) */
.skills {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  padding: 3.5rem 0 4rem;
  border-radius: 24px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.skills::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -30%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(120, 219, 255, 0.05) 0%, transparent 70%);
  animation: pulse 15s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.skills__subtitle {
  text-align: center;
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
}

.skills-card {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2.5rem;
  align-items: start;
  margin-top: 2rem;
}

.vue-spotlight {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
  padding: 1.6rem;
  border-radius: 12px;
  border: 1px solid rgba(15, 15, 15, 0.03);
}

.vue-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.vue-logo svg {
  border-radius: 6px;
}

.vue-meta h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-gray-900);
}

.vue-sub {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.vue-desc {
  color: var(--color-text-secondary);
  margin: 0.75rem 0 1rem;
}

.vue-skill-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.skill__bar--label {
  font-weight: 700;
  color: var(--color-gray-800);
  width: 110px;
}

.skill__bar.large {
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--color-gray-100), var(--color-gray-50));
  overflow: hidden;
  flex: 1;
}

.skill__bar.small {
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--color-gray-100), var(--color-gray-50));
  overflow: hidden;
}

.skill__progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: 999px;
  transition: width 0.9s ease;
}

.skill__value {
  width: 48px;
  text-align: right;
  font-weight: 700;
  color: var(--color-text-secondary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.tech-card {
  background: var(--color-bg-primary);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(15, 15, 15, 0.03);
}

.tech-name {
  font-weight: 700;
  color: var(--color-gray-900);
}

.tech-sub {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.tools-row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.9rem;
}

.tool {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  font-weight: 600;
  color: var(--color-text-secondary);
  border: 1px solid rgba(15, 15, 15, 0.03);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

/* PrimeIcons tweaks */
.tech-icon {
  font-size: 1.05rem;
  color: var(--color-primary);
  margin-left: 0.6rem
}

.meta-pill i {
  margin-right: 0.4rem
}

@media (max-width: 1100px) {
  .skills-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .skill__bar--label {
    display: none;
  }

  .skill__value {
    display: none;
  }

  .vue-skill-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* Projects Section */
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
  background: radial-gradient(circle, rgba(255, 119, 198, 0.05) 0%, transparent 70%);
  animation: float 30s ease-in-out infinite;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.project__card {
  background: var(--color-bg-secondary);
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
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(220, 38, 38, 0.3);
}

.project__header {
  margin-bottom: 1.5rem;
}

.project__header h3 {
  font-size: 1.4rem;
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
  font-size: 0.95rem;
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

/* Contact Section */
.contact {
  background: linear-gradient(135deg, var(--gradient-primary), rgba(120, 119, 198, 0.8));
  text-align: center;
  padding: 8rem 0;
  border-radius: 24px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  animation: float-reverse 35s ease-in-out infinite;
}

.contact .section__title {
  color: var(--color-text-inverse);
  margin-bottom: 1rem;
}

.contact__subtitle {
  font-size: 1.3rem;
  color: var(--color-text-inverse);
  margin-bottom: 4rem;
  opacity: 0.95;
}

.contact__content {
  max-width: 600px;
  margin: 0 auto 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact__email {
  margin-bottom: 2.5rem;
}

.contact__email-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact__email-link {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-inverse);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.contact__email-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.contact__divider {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 2.5rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.contact__social {
  margin-top: 2.5rem;
}

.contact__social-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.social__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social__link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  color: var(--color-text-inverse);
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.social__link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.social__link svg {
  width: 20px;
  height: 20px;
}

.contact__footer {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2rem;
  font-style: italic;
}

/* Skills styles */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

.vue-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 1.6rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.35);
}

.vue-card__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  margin-bottom: 0.6rem;
}

.vue-card__logo img {
  width: 96px;
  height: 96px;
  display: block;
}

.tech-card__head img {
  width: 36px;
  height: 36px;
  display: block;
}

.tech-logo {
  font-size: 32px;
  flex-shrink: 0;
}

.icon--vue {
  color: var(--color-primary);
}

.vue-card__title {
  margin: 0.2rem 0 0.4rem;
  font-size: 1.2rem;
}

.vue-card__desc {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.vue-card__meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}

.meta-pill {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

.tech-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  padding: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.tech-card__head {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 0.6rem;
}

.tech-card__info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tech-card__name {
  font-weight: 700;
  font-size: 0.95rem;
}

.tech-card__sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.skill__bar {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 0.4rem;
}

.skill--large {
  height: 14px;
}

.skill--small {
  height: 10px;
}

.skill__progress {
  height: 100%;
  width: 0;
  transition: width 900ms cubic-bezier(.2, .9, .2, 1);
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  box-shadow: inset 0 -4px 10px rgba(0, 0, 0, 0.25);
}

.skills-tools {
  margin-top: 1rem;
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.tool {
  font-size: 0.85rem;
  padding: 0.4rem 0.7rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

/* Desktop skills layout */
@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
}


/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
    scroll-margin-top: 70px;
  }

  .container {
    padding: 0 1rem;
  }

  .hero {
    min-height: 80vh;
    padding: 1rem;
  }

  .hero__title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .hero__subtitle {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .hero__cta {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  .section__title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .about,
  .skills,
  .projects,
  .experience,
  .contact {
    margin: 1rem;
    border-radius: 16px;
  }

  .about__content p {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }

  .experience__timeline {
    gap: 2rem;

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .vue-card {
      padding: 1.2rem;
    }

    .vue-card__logo {
      width: 64px;
      height: 64px;
      margin-bottom: 0.4rem;
    }

    .vue-card__title {
      font-size: 1.1rem;
    }

    .vue-card__desc {
      font-size: 0.9rem;
      margin-bottom: 0.6rem;
    }

    .meta-pill {
      font-size: 0.75rem;
      padding: 0.2rem 0.4rem;
    }

    .tech-cards {
      gap: 0.8rem;
    }

    .tech-card {
      padding: 0.7rem;
    }

    .tech-logo {
      font-size: 24px;
    }

    .tech-card__name {
      font-size: 0.95rem;
    }

    .tech-card__sub {
      font-size: 0.8rem;
    }

    .skill__bar.large {
      height: 10px;
    }

    gap: 0.5rem;
  }

  .project__link {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .contact {
    padding: 4rem 0;
  }

  .contact__content {
    padding: 2rem 1rem;
  }

  .contact__email-link {
    font-size: 1.1rem;
  }

  .social__links {
    flex-direction: column;
    gap: 0.8rem;
  }

  .social__link {
    width: 100%;
    justify-content: center;
  }

  .skills-tools {
    gap: 0.5rem;
  }

  .contact__email-link {
    font-size: 1.2rem;
  }

  .social__links {
    gap: 0.8rem;
  }

  .tool {
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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

  .project__link {
    font-size: 0.95rem;
  }

  .contact__content {
    padding: 2rem 1.5rem;
    margin: 0 auto 2rem;
  }

  .contact__email-link {
    font-size: 1.2rem;
  }

  .social__links {
    gap: 0.8rem;
  }

  .social__link {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    gap: 0.4rem;
  }

  .social__link svg {
    width: 16px;
    height: 16px;
  }

  .contact__footer {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0;
    scroll-margin-top: 60px;
  }

  .container {
    padding: 0 0.75rem;
  }

  .hero {
    min-height: 70vh;
    padding: 1rem;
  }

  .hero__title {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }

  .hero__subtitle {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .hero__cta {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }

  .section__title {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .about,
  .skills,
  .projects,
  .experience,
  .contact {
    margin: 1rem;
    border-radius: 12px;
  }

  .about__content p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .experience__timeline {
    gap: 1.5rem;
  }

  .experience__timeline::before {
    left: 60px;
  }

  .experience__period {
    width: 60px;
    font-size: 0.8rem;
  }

  .experience__content {
    padding: 1rem;
  }

  .experience__content::before {
    left: -7px;
    width: 12px;
    height: 12px;
  }

  .experience__title {
    font-size: 1rem;
  }

  .experience__company {
    font-size: 0.9rem;
  }

  .experience__achievements li {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project__card {
    padding: 1.2rem;
  }

  .project__header h3 {
    font-size: 1rem;
  }

  .project__description {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .project__links {
    flex-direction: column;
    gap: 0.4rem;
  }

  .project__link {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }

  .contact {
    padding: 3rem 0;
  }

  .contact__content {
    padding: 1.5rem 0.8rem;
  }

  .contact__email-link {
    font-size: 1rem;
  }

  .social__links {
    flex-direction: column;
    gap: 0.6rem;
  }

  .social__link {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 1rem;
  }

  .social__link span {
    display: none;
  }

  .social__link svg {
    width: 20px;
    height: 20px;
  }
}

.loading-state,
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-text-secondary);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(220, 38, 38, 0.2);
  border-top: 3px solid rgba(220, 38, 38, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
