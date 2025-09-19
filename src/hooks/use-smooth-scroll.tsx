import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useAnimationFrame } from 'framer-motion'

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time)
  })

  return lenisRef
}
