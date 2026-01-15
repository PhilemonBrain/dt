"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animateCanvas = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0f0f0f")
      gradient.addColorStop(0.5, "#1a1a2e")
      gradient.addColorStop(1, "#0f0f0f")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated glowing line
      const time = Date.now() * 0.0005
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"
      ctx.lineWidth = 2
      ctx.shadowColor = "rgba(59, 130, 246, 0.8)"
      ctx.shadowBlur = 20

      // Fiber optic section (left)
      ctx.beginPath()
      ctx.moveTo(centerX - 300, centerY)
      for (let i = 0; i < 100; i++) {
        const x = centerX - 300 + i * 3
        const y = centerY + Math.sin(i * 0.05 + time) * 20
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Sun ray section (top center)
      ctx.strokeStyle = "rgba(251, 191, 36, 0.6)"
      ctx.shadowColor = "rgba(251, 191, 36, 0.8)"
      ctx.beginPath()
      ctx.moveTo(centerX - 100, centerY)
      ctx.bezierCurveTo(centerX - 50, centerY - 100, centerX + 50, centerY - 100, centerX + 100, centerY)
      ctx.stroke()

      // Community connection (center)
      ctx.strokeStyle = "rgba(168, 85, 247, 0.6)"
      ctx.shadowColor = "rgba(168, 85, 247, 0.8)"
      ctx.beginPath()
      ctx.moveTo(centerX + 100, centerY)
      ctx.lineTo(centerX + 150, centerY - 80)
      ctx.lineTo(centerX + 150, centerY + 80)
      ctx.lineTo(centerX + 100, centerY)
      ctx.stroke()

      // Root system (right)
      ctx.strokeStyle = "rgba(34, 197, 94, 0.6)"
      ctx.shadowColor = "rgba(34, 197, 94, 0.8)"
      ctx.beginPath()
      ctx.moveTo(centerX + 150, centerY)
      ctx.quadraticCurveTo(centerX + 200, centerY - 50, centerX + 300, centerY - 100)
      ctx.moveTo(centerX + 150, centerY)
      ctx.quadraticCurveTo(centerX + 200, centerY + 50, centerX + 300, centerY + 100)
      ctx.stroke()

      requestAnimationFrame(animateCanvas)
    }

    animateCanvas()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance">Donatello</h1>
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-balance">Connecting Worlds. Powering Futures.</h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
          Unified infrastructure spanning ultra-fast fiber, renewable energy, community connection, and sustainable
          agriculture.
        </p>
      </div>
    </section>
  )
}
