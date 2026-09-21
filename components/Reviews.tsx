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
