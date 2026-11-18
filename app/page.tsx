'use client'

import dynamic from 'next/dynamic'
import Preloader from '@/components/ui/Preloader'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import CustomCursor from '@/components/ui/CustomCursor'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Profiles from '@/components/sections/Profiles'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'
import ResumeModal from '@/components/ui/ResumeModal'
import { useState } from 'react'

const Background3D = dynamic(() => import('@/components/three/Background'), { ssr: false })

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <Preloader />
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <Background3D />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}