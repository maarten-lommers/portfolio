import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
