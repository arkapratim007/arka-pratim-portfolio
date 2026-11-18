'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('expanded')
        else entry.target.classList.remove('expanded')
      })
    }, { threshold: 0.3 })

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about">
      <div ref={cardRef} className="glass-card scroll-reveal">
        <h2>About Me - <span className="purple-text">Behind The Code!</span></h2>
        <p>
          I'm a Computer Science graduate and developer driven by curiosity, creativity,
           and the desire to build things that make a difference. I enjoy exploring the 
           intersection of software engineering and artificial intelligence, turning complex 
           ideas into practical, meaningful solutions.
          <br /><br />
          Beyond the code, I'm someone who values continuous learning, creative problem-solving,
           and embracing new challenges. Whether it's exploring a new technology, refining an idea,
            or building something from scratch, I'm always looking for the next opportunity to grow.
        </p>
      </div>
    </section>
  )
}