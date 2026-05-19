import { useEffect } from 'react'

const COUNT_ATTR = 'data-scroll-lock-count'
const OVERFLOW_ATTR = 'data-scroll-lock-overflow'
const HTML_OVERFLOW_ATTR = 'data-scroll-lock-html-overflow'
const PADDING_RIGHT_ATTR = 'data-scroll-lock-padding-right'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document

    const currentCount = Number.parseInt(body.getAttribute(COUNT_ATTR) || '0', 10)

    if (currentCount === 0) {
      body.setAttribute(OVERFLOW_ATTR, body.style.overflow || '')
      body.setAttribute(HTML_OVERFLOW_ATTR, documentElement.style.overflow || '')
      body.setAttribute(PADDING_RIGHT_ATTR, body.style.paddingRight || '')

      const scrollBarWidth = window.innerWidth - documentElement.clientWidth

      body.style.overflow = 'hidden'
      documentElement.style.overflow = 'hidden'
      if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`
    }

    body.setAttribute(COUNT_ATTR, String(currentCount + 1))

    return () => {
      const nextCount = Math.max(
        0,
        Number.parseInt(body.getAttribute(COUNT_ATTR) || '1', 10) - 1
      )

      if (nextCount === 0) {
        body.style.overflow = body.getAttribute(OVERFLOW_ATTR) || ''
        documentElement.style.overflow = body.getAttribute(HTML_OVERFLOW_ATTR) || ''
        body.style.paddingRight = body.getAttribute(PADDING_RIGHT_ATTR) || ''

        body.removeAttribute(COUNT_ATTR)
        body.removeAttribute(OVERFLOW_ATTR)
        body.removeAttribute(HTML_OVERFLOW_ATTR)
        body.removeAttribute(PADDING_RIGHT_ATTR)
      } else {
        body.setAttribute(COUNT_ATTR, String(nextCount))
      }
    }
  }, [locked])
}
