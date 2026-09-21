'use client'

import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M9 8l6 4-6 4V8z" fill="var(--accent)" stroke="none" />
      </svg>
    ),
    title: 'Montaz Filmow',
    desc: 'Narracyjne cięcia dla dokumentow, krotkometrazowych, reklam i tresci social. Kazda klatka zarabia na swoje miejsce.',
    list: ['Dokumenty i krotki metraz', 'Spoty reklamowe', 'Teledyski', 'Color Grading'],
    delay: 'reveal-d1',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Motion Design',
    desc: 'Kinetyczna typografia, animacje logo, sekwencje tytulowe i identyfikacja marki w ruchu. Design ktory zyje.',
    list: ['Motion Typography', 'Animacja Logo', 'Sekwencje Tytulowe', 'Brand Motion Identity'],
    delay: 'reveal-d2',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: 'Wideo SaaS',
    desc: 'Explainere produktowe, walkthroughy UI i demo dla inwestorow ktore konwertuja. Jasnosc spotyka rzemioslo.',
    list: ['Explainere Produktowe', 'Walkthroughy UI/UX', 'Decki Inwestorskie', 'Wideo Onboardingowe'],
    delay: 'reveal-d3',
  },
]

export default function Services() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
      }, { threshold: 0.15 })
      obs.observe(el)
    })
  }, [])

  return (
    <section id="uslugi" className="section">
      <div className="reveal">
        <p className="section-label">Czym Sie Zajmuje</p>
        <h2 className="section-title">Uslugi</h2>
        <p className="section-sub">Kompleksowa postprodukcja i motion design dla marek, tworcow i startupow.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el }}
            className={`service-card reveal ${s.delay}`}
          >
            <div className="service-inner">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
