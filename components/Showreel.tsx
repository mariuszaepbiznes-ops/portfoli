'use client'

import { useState, useEffect, useRef } from 'react'

export default function Showreel() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Reveal on scroll
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <div id="showreel" className="reel-section reveal" ref={ref}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>Showreel 2026</p>
        <div className="reel-wrapper" onClick={() => setOpen(true)} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}>
          <video
            className="reel-thumb-video"
            src="/videos/cinematic_1.mp4"
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="reel-play-overlay">
            <div className="reel-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
          <span className="reel-label">Kliknij aby obejrzeć cały film &bull; 4K</span>
        </div>
      </div>

      {/* MODAL PEŁNOEKRANOWY Z PRAWDZIWYM WIDEO */}
      <div className={`modal-overlay${open ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
        <div className="modal-inner">
          <button className="modal-close" onClick={() => setOpen(false)}>Zamknij &times;</button>
          {open && (
            <video
              className="modal-video"
              src="/videos/cinematic_1.mp4"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
    </>
  )
}
