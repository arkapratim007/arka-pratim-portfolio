'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

function StarField() {
  const meshRef = useRef<THREE.Points>(null!)
  const mouseRef = useRef({ x: 0, y: 0 })

  const [geometry, material] = useMemo(() => {
    const count = 3200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 14)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.5, 'rgba(255,255,255,0.8)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.beginPath()
      ctx.arc(16, 16, 14, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
    const texture = new THREE.CanvasTexture(canvas)

    const mat = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
    })

    return [geo, mat]
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX - window.innerWidth / 2) * 0.0001
      mouseRef.current.y = (e.clientY - window.innerHeight / 2) * 0.0001
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.0001
    meshRef.current.rotation.x += 0.00005
    meshRef.current.rotation.y += mouseRef.current.x * 0.5
    meshRef.current.rotation.x += mouseRef.current.y * 0.5
    mouseRef.current.x *= 0.95
    mouseRef.current.y *= 0.95
  })

  return <points ref={meshRef} geometry={geometry} material={material} />
}

export default function Background() {
  return (
    <div className="background-container">
      <div id="bg-canvas">
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <StarField />
        </Canvas>
      </div>
    </div>
  )
}