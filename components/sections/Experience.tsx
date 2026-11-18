'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const EXPERIENCES = [
  {
    num: '01', side: 'right', company: 'Freelance', logo: '/portfolio_assets/code.png', // Add a generic freelance icon or your profile pic
    role: 'Full Stack Web Developer', date: 'July 2026 – PRESENT',
    bullets: [
      'Designed and developed responsive, user-centric web applications for various clients using Next.js, React, and Node.js.',
      'Collaborated directly with clients to gather requirements, manage project timelines, and deliver scalable solutions.',
      'Optimized web performance, ensuring SEO best practices and seamless cross-device compatibility.',
    ],
  },
  {
    num: '02', side: 'left', company: 'Techno International NewTown', logo: '/portfolio_assets/tict_logo_new_2019.png', // Add your college logo
    role: 'B.Tech in Computer Science', date: '2022 – 2026',
    bullets: [
      'Graduated in 2026 with a B.Tech in Computer Science. Core coursework in Data Structures & Algorithms, DBMS, Operating Systems, OOP, and Web Technologies.',
      'Maintaining a strong academic record while actively participating in technical fests and coding competitions.',
      'Relevant Coursework: Operating Systems, Object-Oriented Programming, Web Technologies.',
    ],
  },
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timelineSection = timelineRef.current
    const timelineProgress = progressRef.current

    if (timelineProgress && timelineSection) {
      const handleScroll = () => {
        const sectionRect = timelineSection.getBoundingClientRect()
        const startOffset = window.innerHeight / 2
        let scrollDistance = startOffset - sectionRect.top
        let progressPercentage = (scrollDistance / sectionRect.height) * 100
        progressPercentage = Math.max(0, Math.min(100, progressPercentage))
        timelineProgress.style.height = `${progressPercentage}%`
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const items = document.querySelectorAll('.timeline-item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects-section" id="experience">
      {/* Changed the title to better fit your journey */}
      <h2 className="section-title">My Journey - <span className="purple-text">Education & Experience!</span></h2>
      <br />
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line">
          <div className="timeline-progress" ref={progressRef}></div>
        </div>

        {EXPERIENCES.map(exp => (
          <div key={exp.num} className={`timeline-item ${exp.side}`}>
            <div className="timeline-number">{exp.num}</div>
            <div className="timeline-content">
              <div className="project-tag">{exp.company}</div>
              <Image src={exp.logo} alt={exp.company} className="company-logo" width={60} height={60} />
              <h3>{exp.role}</h3>
              <p style={{ textAlign: 'left', padding: '10px 0' }}>
                {exp.bullets.map((b, i) => (
                  <span key={i}>• {b}{i < exp.bullets.length - 1 && <><br /><br /></>}</span>
                ))}
              </p>
            </div>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}