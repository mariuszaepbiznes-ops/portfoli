'use client'

import { useState } from 'react'

interface ReviewItem {
  id: number
  name: string
  initial: string
  rating: number
  text: string
  fullText?: string
}

const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Filip',
    initial: 'F',
    rating: 5,
    text: 'Polecam! Świetny montaż pod TikToka, dynamiczne napisy i retencja poszła mocno w górę.',
    fullText: 'Polecam! Świetny montaż pod TikToka, dynamiczne napisy i retencja poszła mocno w górę. Zrobił dla mnie serię 10 filmów w zaledwie 3 dni, kontakt bezbłędny!',
  },
  {
    id: 2,
    name: 'Marzena',
    initial: 'M',
    rating: 5,
    text: 'Polecam. Montaż filmu na YouTube zrobiony z wyczuciem rytmu i świetną korekcją barwną.',
    fullText: 'Polecam. Montaż filmu na YouTube zrobiony z wyczuciem rytmu i świetną korekcją barwną. Widzowie w komentarzach sami chwalili nowy poziom edycji.',
  },
  {
    id: 3,
    name: 'Adam',
    initial: 'A',
    rating: 5,
    text: 'Świetna praca, ładny montaż i ogromna kreatywność w sound designie. Bardzo polecam!',
    fullText: 'Świetna praca, ładny montaż i ogromna kreatywność w sound designie. Bardzo polecam każdemu, kto szuka edytora rozumiejącego trendy internetowe!',
  },
  {
    id: 4,
    name: 'Martyna',
    initial: 'M',
    rating: 5,
    text: 'Bardzo twórcze, pomysłowe i profesjonalne wykonanie. Animacje SaaS najwyższej jakości...',
    fullText: 'Bardzo twórcze, pomysłowe i profesjonalne wykonanie. Animacje SaaS najwyższej jakości, szybko i starannie wdrożone do naszego pitch decka.',
  },
  {
    id: 5,
    name: 'zuzix',
    initial: 'Z',
    rating: 5,
    text: 'Świetny kontakt, super wideo i wszystko oddane idealnie na czas :D polecam każdemu!',
    fullText: 'Świetny kontakt, super wideo i wszystko oddane idealnie na czas :D polecam każdemu twórcy!',
  },
]

export default function Reviews() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="opinie" className="section-1to1">
      {/* NAGŁÓWEK I PODTYTUŁ (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="section-header-centered">
        <h2 className="title-bold-gradient">OPINIE</h2>
        <p className="subtitle-1to1">
          Zobacz, co mówią klienci o moich projektach i usługach
        </p>
      </div>

      {/* GÓRNA KARTA: INFORMACJE O KONCIE & DISCORD (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="account-info-card-1to1">
        <div className="account-mascot-col">
          {/* Logo / Awatar profilowy */}
          <div className="account-mascot-badge">
            <img src="/hero.png" alt="Logo" className="account-logo-img" />
          </div>
        </div>

        <div className="account-details-col">
          <h3 className="account-section-title">INFORMACJE O KONCIE</h3>

          <div className="account-data-rows">
            <div className="account-row">
              <span className="account-label">Status:</span>
              <span className="account-status-badge">Konto zweryfikowane / Gotowy do współpracy</span>
            </div>

            <div className="account-row">
              <span className="account-label">Nick:</span>
              <span className="account-value">@twoj_montazysta</span>
            </div>

            <div className="account-row">
              <span className="account-label">ID:</span>
              <span className="account-value">discord_editor_pro</span>
            </div>
          </div>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="btn-discord-connect"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Połącz konto Discord</span>
          </a>
        </div>
      </div>

      {/* DOLNY RZĄD KART OPINII KLIENTÓW (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="reviews-cards-row">
        {REVIEWS.map((rev) => {
          const isExpanded = expandedId === rev.id
          return (
            <div key={rev.id} className="review-card-item">
              <div className="review-header">
                <div className="review-avatar-circle">
                  <span>{rev.initial}</span>
                </div>
                <div className="review-author-name">{rev.name}</div>
                <div className="review-stars">
                  {'★'.repeat(rev.rating)}
                </div>
              </div>

              <p className="review-body-text">
                {isExpanded ? rev.fullText : rev.text}
              </p>

              <button
                className="review-expand-btn"
                onClick={() => setExpandedId(isExpanded ? null : rev.id)}
              >
                {isExpanded ? 'Zwiń opinię ↑' : 'Kliknij, aby rozwinąć →'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
