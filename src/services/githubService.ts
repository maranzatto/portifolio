export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
  fork: boolean
  homepage: string | null
  has_pages: boolean
}

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

const EXCLUDED_REPOS = [
  'portifolio',
  'maranzatto',
]

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'maranzatto'

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Erro ao buscar repositórios: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    const filteredRepos = repos.filter(repo =>
      !repo.fork &&
      !EXCLUDED_REPOS.includes(repo.name)
    )

    return filteredRepos
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error)
    return []
  }
}

export function gitHubRepoToProject(repo: GitHubRepo): Project {
  return {
    id: repo.id,
    title: formatRepoName(repo.name),
    description: repo.description || generateDescription(repo.name, repo.language),
    repo: repo.html_url,
    language: repo.language || 'Misc',
    stars: repo.stargazers_count,
    updatedAt: formatDate(repo.updated_at),
    demo: getGitHubPagesDemo(repo) || (repo.homepage && isValidUrl(repo.homepage) ? repo.homepage : undefined),
    featured: false
  }
}

function getGitHubPagesDemo(repo: GitHubRepo): string | null {
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'maranzatto'

  if (!repo.has_pages) {
    return null
  }

  const possibleUrls = [
    `https://${username}.github.io/${repo.name}/`,
    `https://${username}.github.io/${repo.name}`,
    `https://${username}.github.io/${repo.name.toLowerCase()}/`,
    `https://${username}.github.io/${repo.name.toLowerCase()}`
  ]

  return possibleUrls[0] || null
}

function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\bAPI\b/gi, 'API')
    .replace(/\bJS\b/gi, 'JavaScript')
}

function generateDescription(name: string, language: string | null): string {
  const nameLower = name.toLowerCase()

  if (nameLower.includes('api')) {
    return `API desenvolvida com ${language || 'tecnologia moderna'} para backend robusto e escalável.`
  }

  if (nameLower.includes('fitpass') || nameLower.includes('fit')) {
    return `Aplicação fitness para gestão de treinos e acompanhamento de progresso.`
  }

  if (nameLower.includes('seguros') || nameLower.includes('insurance')) {
    return `Sistema de gestão de seguros com funcionalidades completas para corretoras.`
  }

  if (nameLower.includes('pdv') || nameLower.includes('venda')) {
    return `Sistema de ponto de venda moderno com interface intuitiva e funcionalidades completas.`
  }

  if (nameLower.includes('finance') || nameLower.includes('financeiro')) {
    return `Aplicação de controle financeiro pessoal para gestão de despesas e receitas.`
  }

  if (nameLower.includes('calculadora') || nameLower.includes('calculator')) {
    return `Calculadora funcional desenvolvida com ${language || 'tecnologias web'}`
  }

  if (nameLower.includes('timer') || nameLower.includes('tic')) {
    return `Aplicativo de timer multi-função com contador, cronômetro e contagem regressiva.`
  }

  if (nameLower.includes('git') || nameLower.includes('command')) {
    return `Guia completo de comandos e boas práticas para desenvolvedores.`
  }

  if (language) {
    return `Projeto desenvolvido com ${language} demonstrando conceitos e boas práticas.`
  }

  return `Repositório com código fonte e documentação do projeto.`
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return '1 dia atrás'
  if (diffDays < 7) return `${diffDays} dias atrás`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} semanas atrás`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} meses atrás`
  return `${Math.floor(diffDays / 365)} anos atrás`
}

function isValidUrl(string: string): boolean {
  try {
    const url = new URL(string)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export async function fetchProjects(): Promise<Project[]> {
  const repos = await fetchGitHubRepos()
  return repos.map((repo) => gitHubRepoToProject(repo))
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const projects = await fetchProjects()

  const projectsWithDemo = projects.filter(p => p.demo)

  const sortByPopularity = (a: Project, b: Project) => {
    const scoreA = (a.stars || 0) * 10 + (new Date(a.updatedAt).getTime() / 1000000000)
    const scoreB = (b.stars || 0) * 10 + (new Date(b.updatedAt).getTime() / 1000000000)
    return scoreB - scoreA
  }

  projectsWithDemo.sort(sortByPopularity)

  const featured = projectsWithDemo
    .slice(0, 3)
    .map(project => ({ ...project, featured: true }))

  return featured
}
