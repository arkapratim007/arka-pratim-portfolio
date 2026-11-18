'use client'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const particlesContainer = document.getElementById('preloaderParticles')
    if (particlesContainer) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'preloader-particle'
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = `-10px`
        particle.style.animationDuration = `${Math.random() * 2 + 2}s`
        particle.style.animationDelay = `${Math.random() * 2}s`
        particlesContainer.appendChild(particle)
      }
    }

    const startTime = Date.now()
    const duration = 2000

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const p = Math.min((elapsed / duration) * 100, 100)
      
      const fill = document.getElementById('preloaderSleekFill')
      if (fill) fill.style.width = `${p}%`

      if (p >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setLoaded(true)
          document.body.classList.add('page-loaded')
          window.dispatchEvent(new Event('preloaderComplete'))
        }, 200)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`} id="preloader">
      <div className="preloader-particles" id="preloaderParticles"></div>

      <div className="preloader-brand">
        <div className="preloader-brand-main">
          <span className="preloader-brand-name">Arka</span><span className="preloader-brand-accent">Pratim</span>
        </div>
        <div className="preloader-brand-subtitle">
          <span className="subtitle-line"></span>
          <span>Personal Portfolio</span>
          <span className="subtitle-line"></span>
        </div>
      </div>

      <div className="preloader-sleek-track">
        <div className="preloader-sleek-fill" id="preloaderSleekFill"></div>
      </div>

      <div className="preloader-tagline">
        <span className="tagline-word" style={{ '--w': 0 } as React.CSSProperties}>Ideate.</span>
        <span className="tagline-word" style={{ '--w': 1 } as React.CSSProperties}>Design.</span>
        <span className="tagline-word" style={{ '--w': 2 } as React.CSSProperties}>Develop.</span>
        <span className="tagline-word" style={{ '--w': 3 } as React.CSSProperties}>Innovate.</span>
      </div>
    </div>
  )
}