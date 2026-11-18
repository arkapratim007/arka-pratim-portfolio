'use client'
import { useEffect, useState, useRef } from 'react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'fa-house' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'fa-code' },
  { id: 'skills', label: 'Skills', icon: 'fa-layer-group' },
  { id: 'certifications', label: 'Certs', icon: 'fa-award' },
  { id: 'profiles', label: 'Profiles', icon: 'fa-globe' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('home')
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('home')
      if (heroEl) setVisible(window.scrollY > heroEl.offsetHeight * 0.5)

      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
      let current = 'home'
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) current = section.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (indicatorRef.current && linkRefs.current[active]) {
      const link = linkRefs.current[active]!
      const pill = link.parentElement
      if (pill) {
        const pillRect = pill.getBoundingClientRect()
        const linkRect = link.getBoundingClientRect()
        if (visible) {
          indicatorRef.current.style.left = `${linkRect.left - pillRect.left}px`
          indicatorRef.current.style.width = `${linkRect.width}px`
          indicatorRef.current.style.opacity = '1'
        } else {
          indicatorRef.current.style.opacity = '0'
        }
      }
    }
  }, [active, visible])

  return (
    <nav className={`site-nav ${visible ? 'nav-visible' : ''}`} id="siteNav">
      <div className="nav-pill">
        <span ref={indicatorRef} className="nav-indicator" id="navIndicator" style={{ opacity: 0, transition: 'left 0.4s, width 0.4s, opacity 0.3s' }}></span>
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            ref={el => { linkRefs.current[item.id] = el }}
            className={`nav-link ${active === item.id ? 'active' : ''}`}
            data-section={item.id}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <i className={`fa-solid ${item.icon} nav-icon`}></i>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}