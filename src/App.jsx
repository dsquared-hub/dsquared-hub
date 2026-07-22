import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFigma,
} from 'react-icons/si'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'Figma', icon: SiFigma },
]

const projects = [
  {
    title: 'CloudDash',
    description: 'Панель мониторинга облачной инфраструктуры с real-time графиками и алертами.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    color: '#7c5cfc',
  },
  {
    title: 'PixelForge',
    description: 'AI-инструмент для генерации и редактирования изображений на основе промптов.',
    tags: ['Next.js', 'Python', 'Stable Diffusion', 'PostgreSQL'],
    color: '#c084fc',
  },
  {
    title: 'DevFlow',
    description: 'CLI-утилита для автоматизации dev-workflow: коммиты, деплой, уведомления.',
    tags: ['Node.js', 'TypeScript', 'GitHub API'],
    color: '#60a5fa',
  },
  {
    title: 'SpaceChat',
    description: 'Мессенджер с end-to-end шифрованием и поддержкой голосовых сообщений.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    color: '#34d399',
  },
]

function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <span className="nav-logo-dot" />
        sky.dev
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow" />
      <div className="hero-plane">
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 20h28l10-8 42 8-42 8-10-8H2"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity="0.3"
          />
          <path
            d="M40 12l50 8-50 8V12z"
            fill="var(--accent)"
            opacity="0.6"
          />
          <path
            d="M30 20l10-3v6l-10-3z"
            fill="var(--text-h)"
          />
          <path
            d="M40 12l20 8-20 0V12z"
            fill="var(--accent)"
            opacity="0.8"
          />
          <path
            d="M40 28l20-8-20 0v8z"
            fill="var(--accent)"
            opacity="0.4"
          />
          <circle cx="22" cy="20" r="2" fill="var(--text-h)" opacity="0.5" />
          <line
            x1="4"
            y1="20"
            x2="30"
            y2="20"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.15"
            strokeDasharray="2 3"
          />
        </svg>
      </div>
      <div className="hero-clouds">
        <div className="hero-cloud cloud-1" />
        <div className="hero-cloud cloud-2" />
        <div className="hero-cloud cloud-3" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">Full-Stack Developer</div>
        <h1 className="hero-title">
          Превращаю идеи
          <br />
          <span className="hero-gradient">в код</span>
        </h1>
        <p className="hero-sub">
          Создаю быстрые, красивые и доступные веб-приложения.
          <br />
          Увлечён анимациями, чистым кодом и great UX.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Смотреть проекты
          </a>
          <a href="#contact" className="btn btn-ghost">
            Связаться
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Привет! Я frontend/fullstack разработчик с фокусом на React-экосистему.
              Обожаю превращать сложные задачи в элегантные решения.
            </p>
            <p>
              За плечами — опыт работы с коммерческими проектами, open-source
              контрибьюшены и постоянное желание учиться чему-то новому.
            </p>
            <p>
              Когда не кодирую — изучаю новые технологии, читаю про дизайн-системы
              и иногда играю в шахматы.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">года опыта</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">проектов</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1k+</span>
              <span className="stat-label">коммитов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Навыки</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <skill.icon className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Проекты</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div
                className="project-card-glow"
                style={{ background: project.color }}
              />
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Контакт</h2>
        <p className="contact-sub">
          Есть идея или предложение по сотрудничеству? Напишите мне!
        </p>
        <a href="mailto:hello@example.com" className="btn btn-primary btn-lg">
          <FiSend />
          hello@example.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>sky.dev</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
      })
      gsap.from('.hero-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
      })
      gsap.from('.hero-sub', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.7,
      })
      gsap.from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.9,
      })

      gsap.fromTo(
        '.hero-plane',
        { x: '-20vw', y: '10vh', scale: 0.5, opacity: 0, rotation: -5 },
        {
          x: '80vw',
          y: '-5vh',
          scale: 1,
          opacity: 1,
          rotation: 3,
          duration: 6,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        }
      )

      gsap.utils.toArray('.section-title').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        })
      })

      gsap.utils.toArray('.skill-card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: i * 0.05,
        })
      })

      gsap.utils.toArray('.project-card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.1,
        })
      })

      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
      })

      gsap.from('.about-stats', {
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 85%',
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
