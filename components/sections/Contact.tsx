'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch - <span className="purple-text">Ask Me Anything!</span></h2>
        <h4 className="contact-note">
          Ready to collaborate or have a project in mind?<br /> I'm always open to new opportunities and interesting conversations.
        </h4>
        <div className="contact-card">
          <form ref={formRef} id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="from_name" required placeholder=" " autoComplete="off" />
              <label htmlFor="name">Name</label>
              <i className="fa-solid fa-user input-icon"></i>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="from_email" required placeholder=" " autoComplete="off" />
              <label htmlFor="email">Email</label>
              <i className="fa-solid fa-envelope input-icon"></i>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Message</label>
              <i className="fa-solid fa-comment input-icon"></i>
            </div>
            <button type="submit" className="btn-resume btn-submit" disabled={status === 'sending'}>
              <span>
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Delivered!'}
                {status === 'error' && 'Error, Please Retry!'}
              </span>
              <i className={`fa-solid ${status === 'sending' ? 'fa-spinner fa-spin' : status === 'success' ? 'fa-check' : status === 'error' ? 'fa-triangle-exclamation' : 'fa-paper-plane'}`}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}