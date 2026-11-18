'use client'
import { useState } from 'react'

const SKILLS = [
  { icon: 'fa-brands fa-python', label: 'Python', cat: 'languages', style: { color: '#3776AB' } },
  { icon: 'devicon-pytorch-plain colored', label: 'PyTorch', cat: 'machine-learning' },
  { icon: 'devicon-java-plain colored', label: 'Java', cat: 'languages' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript', cat: 'languages' },
  { icon: 'devicon-typescript-plain colored', label: 'TypeScript', cat: 'languages' },
  { icon: 'devicon-html5-plain colored', label: 'HTML', cat: 'frontend' },
  { icon: 'devicon-css3-plain colored', label: 'CSS', cat: 'frontend' },
  { icon: 'devicon-react-original colored', label: 'React.js', cat: 'frontend' },
  { icon: 'devicon-nextjs-plain', label: 'Next.js', cat: 'frontend' },
  { icon: 'devicon-tailwindcss-original colored', label: 'Tailwind CSS', cat: 'frontend' },
  { icon: 'devicon-threejs-original', label: 'Three.js', cat: 'frontend' },
  { icon: 'devicon-nodejs-plain-wordmark colored', label: 'Node.js', cat: 'backend' },
  { icon: 'devicon-express-original', label: 'Express.js', cat: 'backend' },
  { icon: 'devicon-fastapi-plain colored', label: 'FastAPI', cat: 'backend' },
  { icon: 'devicon-mongodb-plain colored', label: 'MongoDB', cat: 'databases' },
  { icon: 'devicon-mysql-plain colored', label: 'MySQL', cat: 'databases' },
  { icon: 'devicon-postgresql-plain colored', label: 'PostgreSQL', cat: 'databases' },
  { icon: 'devicon-supabase-plain colored', label: 'Supabase', cat: 'databases' },
  { icon: 'devicon-sqlite-plain colored', label: 'SQLite', cat: 'databases' },
  { icon: 'devicon-git-plain colored', label: 'Git', cat: 'tools' },
  { icon: 'devicon-github-original', label: 'GitHub', cat: 'tools' },
  { icon: 'devicon-postman-plain colored', label: 'Postman', cat: 'tools' },
  { icon: 'devicon-vercel-original', label: 'Vercel', cat: 'tools' },
  { icon: 'devicon-railway-original', label: 'Railway', cat: 'tools' },
  { icon: 'devicon-githubactions-plain colored', label: 'GitHub Actions', cat: 'tools' },
]

const FILTERS = ['all', 'languages', 'frontend', 'backend', 'databases', 'tools']

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technical Skills - <span className="purple-text">Core Expertise!</span></h2>

      <div className="skill-filters" id="skillFilters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            data-filter={f}
            onClick={() => setActiveFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="skill-grid" id="skillGrid">
        {SKILLS.map(skill => {
          const isVisible = activeFilter === 'all' || skill.cat === activeFilter
          return (
            <div
              key={skill.label}
              className={`skill-card ${!isVisible ? 'd-none' : ''}`}
              data-category={skill.cat}
              style={!isVisible ? { display: 'none' } : {}}
            >
              <i className={skill.icon} style={skill.style}></i>
              <span>{skill.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}