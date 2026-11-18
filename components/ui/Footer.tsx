'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Arka <span className="purple-text">Pratim</span></h2>
          <p className="footer-tagline">Innovation at the Intersection of Code and Design!</p>
        </div>

        <ul className="footer-nav-links">
          {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'profiles', 'contact'].map(id => (
            <li key={id}><a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
          ))}
        </ul>

        <div className="footer-socials">
          <a href="https://linkedin.com/in/arka-pratim-biswas" target="_blank" rel="noreferrer" className="social-link linkedin" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/arkapratim007" target="_blank" rel="noreferrer" className="social-link github" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:connectwitharkp@gmail.com" target="_blank" rel="noreferrer" className="social-link email" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Arka Pratim. All rights reserved.</p>
        <button id="backToTop" className="back-to-top" aria-label="Back to Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  )
}