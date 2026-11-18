'use client'
import { useEffect, useState } from 'react'

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const words = ["DEVELOPER", "DESIGNER", "PROGRAMMER", "DATA SCIENTIST", "EDITOR"]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentWord = words[wordIndex]
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1))
        charIndex--
      } else {  
        setTypedText(currentWord.substring(0, charIndex + 1))
        charIndex++
      }

      let speed = isDeleting ? 60 : 100

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        speed = 500
      }
      timeout = setTimeout(type, speed)
    }

    const startTyping = () => { timeout = setTimeout(type, 200) }

    if (document.body.classList.contains('page-loaded')) startTyping()
    else window.addEventListener('preloaderComplete', startTyping, { once: true })

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="floating-icon icon-top-left"><i className="fa-solid fa-code"></i></div>
      <div className="floating-icon icon-top-right"><i className="fa-solid fa-brain"></i></div>
      <div className="floating-icon icon-bottom-left"><i className="fa-solid fa-trophy"></i></div>
      <div className="floating-icon icon-bottom-right"><i className="fa-regular fa-lightbulb"></i></div>

      <div className="content-wrapper">
        <h2 className="sub-title">Woah! You Landed on the Portfolio Website of</h2>
        <br /><br />
        <h1 className="sr-only">Arka Pratim - Software Developer Portfolio</h1>
        <h2 className="main-title"><span className="purple-text" id="typing-text">{typedText}</span></h2>
        <br /><br />
        <h5 className="year">Arka Pratim | Full Stack Developer</h5>
        <br />
        <div className="hero-buttons">
          <a href="https://linkedin.com/in/arka-pratim-biswas" target="_blank" rel="noreferrer" className="btn-resume">Let's Connect</a>
          <button onClick={onOpenResume} className="btn-resume" style={{ background: 'transparent' }}>View Resume</button>
        </div>
      </div>
    </section>
  )
}