import { useEffect, useState } from 'react'

const BOOT_LINES = [
  '> TALOS OS v4.2',
  '> mounting /worlds …',
  '> loading character sprites …',
  '> compiling systems …',
  '> handshake: principal_ready',
]

interface LazyGreetingProps {
  onComplete: () => void
}

export function LazyGreeting({ onComplete }: LazyGreetingProps) {
  const [progress, setProgress] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (preferReduced) {
      onComplete()
      return
    }

    const progressTimer = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(progressTimer)
          return 100
        }
        return p + (p > 85 ? 1 : 2 + Math.floor(Math.random() * 3))
      })
    }, 48)

    return () => window.clearInterval(progressTimer)
  }, [onComplete])

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length - 1) return
    const t = window.setTimeout(() => setLineIndex((i) => i + 1), 420)
    return () => window.clearTimeout(t)
  }, [lineIndex])

  useEffect(() => {
    if (progress < 100) return
    const fade = window.setTimeout(() => setFadeOut(true), 380)
    const done = window.setTimeout(() => onComplete(), 980)
    return () => {
      window.clearTimeout(fade)
      window.clearTimeout(done)
    }
  }, [progress, onComplete])

  return (
    <div className={`greeting ${fadeOut ? 'greeting--out' : ''}`} aria-live="polite">
      <div className="greeting__scan" />
      <div className="greeting__panel">
        <p className="greeting__brand">TALOS</p>
        <p className="greeting__sub">GAME DESIGN // DEVELOPMENT</p>
        <div className="greeting__terminal">
          {BOOT_LINES.slice(0, lineIndex + 1).map((line) => (
            <p key={line} className="greeting__line">
              {line}
            </p>
          ))}
          <span className="greeting__cursor" aria-hidden="true" />
        </div>
        <div className="greeting__bar" role="progressbar" aria-valuenow={Math.min(progress, 100)} aria-valuemin={0} aria-valuemax={100}>
          <div className="greeting__bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <p className="greeting__pct">{Math.min(progress, 100)}%</p>
        <div className="greeting__pixels" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="greeting__pixel" style={{ animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
