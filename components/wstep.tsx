'use client'

export default function Hero() {
  return (
    <section id="wstep" className="hero-1to1">
      {/* SIATKA PERSPEKTYWICZNA W TLE + AMBIENT GLOW */}
      <div className="hero-grid-floor" />
      <div className="hero-ambient-glow" />

      {/* PŁYWAJĄCE DEKORACYJNE CZĄSTECZKI (JAK NA GRAFICE) */}
      <div className="floating-particle fp-1" />
      <div className="floating-particle fp-2" />
      <div className="floating-particle fp-3" />
      <div className="floating-particle fp-4" />

      <div className="hero-1to1-content">
        {/* LEWA KOLUMNA: TREŚĆ, PRZYCISKI, CECHY */}
        <div className="hero-left">
          {/* BADGE NA SAMEJ GÓRZE */}
          <div className="hero-badge-tag">
            <span className="hero-badge-icon">%</span>
            <span>VIDEO EDITING &bull; MOTION</span>
          </div>

          {/* GŁÓWNY TYTUŁ Z WYRÓŻNIENIEM DRUGIEGO CZŁONU */}
          <h1 className="hero-main-title">
            Montaż <br />
            <span className="hero-title-gradient">Filmowy</span>
          </h1>

          {/* OPIS */}
          <p className="hero-description">
            Twórz wyjątkowe doświadczenia wizualne. Profesjonalny montaż wideo,
            dynamiczne edity pod TikTok / Reels i unikalny rytm obrazu skrojony
            idealnie pod Twoją społeczność i algorytmy.
          </p>

          {/* PRZYCISKI AKCJI */}
          <div className="hero-cta-group">
            <a href="#galeria" className="btn-hero-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Zobacz Galerię</span>
            </a>

            <a href="#kontakt" className="btn-hero-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              <span>Kontakt</span>
            </a>
          </div>

          {/* 3 CECHY / ATUTY POD KRESKĄ (DOKŁADNIE JAK NA GRAFICE) */}
          <div className="hero-features-bar">
            <div className="hero-feature-item">
              <div className="feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="feature-text">Najwyższa jakość 4K/60FPS</span>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <span className="feature-text">Montaż bez szablonów</span>
            </div>

            <div className="hero-feature-item">
              <div className="feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
                </svg>
              </div>
              <span className="feature-text">100% zaangażowania</span>
            </div>
          </div>
        </div>

        {/* PRAWA KOLUMNA: ZDJĘCIE MONTAŻYSTY (ZAMIAST ROBOTA) + DYMEK */}
        <div className="hero-right">
          <div className="mascot-wrapper">
            <div className="mascot-glow" />
            
            {/* ZDJĘCIE GŁÓWNE */}
            <div className="hero-photo-container">
              <img
                src="/hero.png"
                alt="Montażysta"
                className="hero-photo-img"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = document.getElementById('hero-img-placeholder')
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div id="hero-img-placeholder" className="hero-img-placeholder" style={{ display: 'none' }}>
                <div className="placeholder-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="var(--accent)" />
                    <polyline points="21 15 16 10 5 21" stroke="var(--accent)" />
                  </svg>
                </div>
                <span className="placeholder-text">MARIUSZ</span>
                <span className="placeholder-hint">Edytor Wideo & Montażysta</span>
              </div>
            </div>

            {/* PLAKIETKA POD ZDJĘCIEM: PROFESJONALNY MONTAŻ */}
            <div className="mascot-tag-badge">
              <span className="badge-sparkle">✦</span>
              <span>PROFESJONALNY MONTAŻ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
