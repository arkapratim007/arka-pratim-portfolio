'use client'
import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    date: 'NOV-2K26', tag: 'Auth Starter Template', title: 'nextauth-starter',
    desc: 'A from-scratch authentication starter for Next.js 16 (App Router) and TypeScript, with JWTs in HTTP-only cookies, bcrypt hashing, email verification, middleware route protection. Built without the NextAuth library.',
    live: 'https://nextauth-starter-lilac.vercel.app/', github: 'https://github.com/arkapratim007/nextauth-starter',
  },
  {
    date: 'NOV-2K26', tag: 'Cafe-Food Ordering Web App', title: 'Cafe Food Order',
    desc: 'A food ordering web app frontend for a cafe, built for browsing the menu and booking reservations and placing orders. Backend integration is in progress.',
    live: 'https://cafe-food-order-web.vercel.app/', github: '#',
  },
  {
    date: 'JUL-2K26', tag: 'deep-learning-framework', title: 'Automated Brain Tumor Segmentation w XAI',
    desc: 'A Hybrid CNN-Transformer Framework for Automated Brain Tumor Segmentation with Explainable AI (XAI).',
    live: null, github: 'https://github.com/arkapratim007/deep-learning-framework-brain-tumor-segmentation',
  },
  {
    date: 'OCT-2K26', tag: 'Backend Project', title: 'TaskMint-platform',
    desc: 'A project management backend built with Express and MongoDB.Implemented secure authentication workflows using JWT. Built role-based access control (RBAC) across Admin, Project Admin, and Member roles to enforce access at the API level.',
    live: null, github: 'https://github.com/arkapratim007/taskmint-platform',
  },
]

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.experience-card')
    if (!cards) return

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent
      const target = mouseEvent.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--mouse-x', `${mouseEvent.clientX - rect.left}px`)
    target.style.setProperty('--mouse-y', `${mouseEvent.clientY - rect.top}px`)
    }

    cards.forEach(card => card.addEventListener('mousemove', handleMouseMove))
    return () => cards.forEach(card => card.removeEventListener('mousemove', handleMouseMove))
  }, [])

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects Showcase - <span className="purple-text">What I've Built!</span></h2>
      <br />
      <div className="experience-grid" ref={gridRef}>
        {PROJECTS.map(p => (
          <div key={p.title} className="experience-card">
            <div className="experience-date">{p.date}</div>
            <div className="project-tag" style={{ display: 'inline-block', width: 'max-content' }}>{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-links-wrapper">
              {p.live ? (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-btn primary-btn"><i className="fa-regular fa-eye"></i> View Live</a>
              ) : (
                <a href="javascript:void(0)" className="project-btn primary-btn inactive-btn"><i className="fa-regular fa-eye"></i> View Live</a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="project-btn primary-btn"><i className="fa-brands fa-github"></i> GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}