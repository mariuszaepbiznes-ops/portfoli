'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [count, setCount] = useState(3)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Odliczanie filmowe 3 -> 2 -> 1 -> START
    const timer1 = setTimeout(() => setCount(2), 800)
    const timer2 = setTimeout(() => setCount(1), 1600)
    const timer3 = setTimeout(() => {
      setCount(0)
      setDone(true)
    }, 2400)
    const timer4 = setTimeout(() => setHidden(true), 3400)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`film-intro ${done ? 'film-intro--exit' : ''}`}>
      {/* Kinowe pasy (letterbox) */}
      <div className="film-letterbox film-letterbox--top" />
      <div className="film-letterbox film-letterbox--bottom" />

      {/* Ziarno filmowe i linie zarysowań */}
      <div className="film-noise" />
      <div className="film-scratches" />
      <div className="film-flash" />

      {/* Kinowe znaczniki kadru */}
      <div className="film-hud">
        <div className="film-rec">
          <span className="film-rec-dot" />
          <span>REC [●] 24FPS</span>
        </div>
        <div className="film-timecode">00:00:0{3 - (count > 0 ? count : 0)}:18</div>
        <div className="film-aspect">2.39:1 CINEMASCOPE</div>
      </div>

      {/* Tarcza odliczania (Film Leader Countdown) */}
      {count > 0 ? (
        <div className="film-countdown-target">
          <div className="film-crosshair-h" />
          <div className="film-crosshair-v" />
          <div className="film-circle-outer" />
          <div className="film-circle-inner" />
          <div className="film-sweep-arm" />
          <div className="film-number" key={count}>
            {count}
          </div>
        </div>
      ) : (
        <div className="film-title-reveal">
          <div className="film-logo">
            EDIT<span>.</span>STUDIO
          </div>
          <p className="film-sub">MONTAŻ FILMÓW &bull; TIKTOK &bull; STREAMABLE</p>
        </div>
      )}

      {/* Pomiń intro */}
      <button 
        className="film-skip-btn" 
        onClick={() => {
          setDone(true)
          setTimeout(() => setHidden(true), 600)
        }}
      >
        POMIŃ INTRO &rarr;
      </button>
    </div>
  )
}
