'use client'

import { useState } from 'react'

export interface ServiceDetail {
  id: string
  name: string
  price: string
  time: string
  desc: string
  features: string[]
}

const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'tiktok',
    name: 'Montaż TikTok / Reels / Shorts',
    price: 'od 30 PLN / Film',
    time: '24 - 48h',
    desc: 'Wertykalne wideo 9:16 zoptymalizowane pod algorytmy i maksymalną retencję widzów.',
    features: [
      'Kinetyczne, animowane napisy z podświetleniem',
      'Sound design (efekty whoosh, pop, risery)',
      'Dynamiczne zoomy i cięcia w tempo',
      'Format dopasowany pod TikTok, IG Reels i YT Shorts',
    ],
  },
  {
    id: 'youtube',
    name: 'Film na YouTube / Dokument',
    price: 'od 150 PLN / film',
    time: '2 - 4 dni',
    desc: 'Kompleksowy montaż długiego formatu z budowaniem narracji i angażującym wstępem (hookiem).',
    features: [
      'Selekcja materiału i płynne cięcia A-roll / B-roll',
      'Dopasowana muzyka z licencją komercyjną',
      'Color grading i stabilizacja ujęć',
      'Wstawki memiczne / grafiki ekranowe',
    ],
  },
  {
    id: 'saas',
    name: 'Wideo SaaS & Animacja',
    price: 'od 70 PLN / projekt',
    time: '2 - 4 dni',
    desc: 'Nowoczesna prezentacja oprogramowania, interfejsu aplikacji webowej lub mobilnej dla inwestorów i klientów.',
    features: [
      'Animacje interfejsu (3D mockup / UI walkthrough)',
      'Profesjonalny lektor AI lub naturalny voiceover',
      'Wysokiej jakości motion graphics',
      'Wersje poziome (16:9) oraz reklamowe (1:1 / 9:16)',
    ],
  },
  {
    id: 'gaming',
    name: 'Montaż Gaming / Fragmovie',
    price: 'od 40 PLN / edit',
    time: '24 - 48h',
    desc: 'Efektowne łączenie najlepszych akcji z gry z synchronizacją z beatem muzyki.',
    features: [
      'Precyzyjny time-remapping (slow motion / speed ramp)',
      'Efekty wizualne (impact shakes, flashes, glow)',
      'Płynne 60 FPS i render w 2K/4K',
      'Integracja z platformami Streamable & YouTube',
    ],
  },
  {
    id: 'color',
    name: 'Color Grading & Sound FX',
    price: 'od 35 PLN / projekt',
    time: '24h',
    desc: 'Profesjonalna postprodukcja kolorystyczna i udźwiękowienie Twojego gotowego montażu.',
    features: [
      'Praca w Premiere pro | after effects na profilach LOG / RAW',
      'Stworzenie unikalnego filmowego looku (LUT / Grade)',
      'Czyszczenie dźwięku, kompresja i mastering głosu',
      'Warstwowe udźwiękowienie tła atmosferycznego',
    ],
  },
  {
    id: 'custom',
    name: 'Inny Projekt / Stała Współpraca',
    price: 'Wycena Indywidualna',
    time: 'Do ustalenia',
    desc: 'Elastyczne pakiety miesięczne (retainer) lub nietypowe zlecenia montażowe.',
    features: [
      'Dedykowany montażysta na wyłączność',
      'Priorytetowy czas realizacji w 12-24h',
      'Nielimitowane poprawki w ramach pakietu',
    ],
  },
]

export default function Pricing() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null)

  return (
    <section id="cennik" className="section-1to1">
      {/* NAGŁÓWEK I PODTYTUŁ (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="section-header-centered">
        <h2 className="title-bold-gradient">CENNIK</h2>
        <p className="subtitle-1to1">
          Kliknij lub najedź na usługę, aby poznać szczegóły
        </p>
      </div>

      {/* GŁÓWNA 3-KOLUMNOWA KARTA CENNIKA (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="pricing-card-1to1">
        {/* KOLUMNA 1: LOGO / GRAFIKA */}
        <div className="pricing-col-mascot">
          <div className="pricing-mascot-figure">
            <img src="/hero.png" alt="Logo" className="pricing-logo-img" />
          </div>
        </div>

        {/* KOLUMNA 2: INFORMACJE Z PRZYCISKIEM PODGLĄD */}
        <div className="pricing-col-info">
          <div className="info-header-row">
            <h3 className="info-title">INFORMACJE</h3>
            <span className="info-tag-btn">PODGLĄD</span>
          </div>

          <div className="info-content-box">
            {selectedService ? (
              <div className="info-details-active">
                <h4 className="service-active-title">{selectedService.name}</h4>
                <div className="service-price-pill">{selectedService.price}</div>
                <div className="service-time-tag">⏱ Realizacja: {selectedService.time}</div>
                <p className="service-active-desc">{selectedService.desc}</p>

                <ul className="service-features-list">
                  {selectedService.features.map((feat, i) => (
                    <li key={i}>
                      <span className="feat-check">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="#kontakt" className="btn-order-service">
                  Zamów tę usługę &rarr;
                </a>
              </div>
            ) : (
              <div className="info-empty-state">
                <p className="empty-state-text">
                  Wybierz usługę z listy, aby zobaczyć szczegóły oferty oraz cenę.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* KOLUMNA 3: LISTA USŁUG DO WYKLIKANIA */}
        <div className="pricing-col-list">
          <div className="services-clickable-list">
            {SERVICES_LIST.map((srv) => {
              const isSelected = selectedService?.id === srv.id
              return (
                <button
                  key={srv.id}
                  className={`service-item-btn ${isSelected ? 'service-item-btn--active' : ''}`}
                  onClick={() => setSelectedService(srv)}
                  onMouseEnter={() => setSelectedService(srv)}
                >
                  <span className="service-item-dot" />
                  <span className="service-item-name">{srv.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* NOTA NA SAMYM DOLE (DOKŁADNIE JAK NA GRAFICE) */}
      <p className="pricing-footer-disclaimer">
        Ceny mają charakter orientacyjny i podlegają indywidualnej negocjacji w zależności od stopnia skomplikowania.
      </p>
    </section>
  )
}
