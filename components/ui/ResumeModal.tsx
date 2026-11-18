'use client'
import { useEffect } from 'react'

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return (
    <div id="resumeModal" className={`resume-modal ${open ? 'show' : ''}`}>
      <div className="resume-modal-content glass-card">
        <span className="close-modal" id="closeResumeBtn" onClick={onClose}>&times;</span>
        <h2 style={{ marginBottom: '20px' }}>My Resume - <span className="purple-text">On Paper!</span></h2>
        <div className="resume-iframe-container">
          <iframe src="/portfolio_assets/Arka_Pratim_Resume.pdf" width="100%" height="100%" style={{ border: 'none' }}></iframe>
        </div>
      </div>
    </div>
  )
}