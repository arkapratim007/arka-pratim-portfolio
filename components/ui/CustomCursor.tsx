'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursorDot = dotRef.current
    const cursorOutline = outlineRef.current
    if (!cursorDot || !cursorOutline) return

    const onMouseMove = (e: MouseEvent) => {
      const posX = e.clientX
      const posY = e.clientY
      cursorDot.style.left = `${posX}px`
      cursorDot.style.top = `${posY}px`
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" })
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .floating-icon')) {
        cursorOutline.classList.add('hovered')
      } else {
        cursorOutline.classList.remove('hovered')
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" data-cursor-dot></div>
      <div ref={outlineRef} className="cursor-outline" data-cursor-outline></div>
    </>
  )
}