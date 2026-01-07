export interface Project {
  id: number
  title: string
  description: string
  repo: string
  language: string
  stars?: number
  updatedAt: string
  featured?: boolean
  demo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'PDVNow',
    description: 'Sistema de ponto de venda moderno desenvolvido com Vue.js, oferecendo interface intuitiva e funcionalidades completas para gestão comercial.',
    repo: 'https://github.com/maranzatto/PDVNow',
    language: 'Vue',
    updatedAt: '16 horas atrás',
    featured: true
  },
  {
    id: 2,
    title: 'finance',
    description: 'Aplicação de controle financeiro pessoal com JavaScript, ajudando no gerenciamento de despesas e receitas de forma simples e eficiente.',
    repo: 'https://github.com/maranzatto/finance',
    demo: 'https://maranzatto.github.io/finance/#/login',
    language: 'JavaScript',
    stars: 1,
    updatedAt: '3 semanas atrás',
    featured: true
  },
  {
    id: 3,
    title: 'calculadoraJS',
    description: 'Calculadora funcional desenvolvida com HTML, CSS e JavaScript puro, demonstrando conceitos fundamentais de programação web.',
    repo: 'https://github.com/maranzatto/calculadoraJS',
    demo: 'https://maranzatto.github.io/calculadoraJS/',
    language: 'HTML',
    updatedAt: '3 semanas atrás'
  },
  {
    id: 5,
    title: 'Git-Commands',
    description: 'Guia completo de comandos Git essenciais para desenvolvedores, com exemplos práticos e boas práticas de versionamento.',
    repo: 'https://github.com/maranzatto/Git-Commands',
    language: '',
    stars: 1,
    updatedAt: '31 de outubro de 2022'
  }
]

export const featuredProjects = projects.filter(project => project.featured)
export const allProjects = projects
