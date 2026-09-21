'use client'

export default function About() {
  const tools = ['PREMIERE PRO', 'AFTER EFFECTS']
  const badges = ['1+ YEARS EXP', 'VIRAL PACING', 'PIXEL PERFECT']

  return (
    <section id="o-mnie" className="section-1to1">
      <div className="about-card-1to1">
        {/* LEWA STRONA: O MNIE, BIO, SOFT, STATS */}
        <div className="about-left-col">
          <div className="about-pill-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>O MNIE</span>
          </div>

          <h2 className="about-title-1to1">
            Cześć, Jestem <span className="highlight-text">Mariusz</span>.
          </h2>

          <p className="about-desc-1to1">
            Tworzę unikalny montaż wideo w nowoczesnym, dynamicznym klimacie oraz
            3D animacje SaaS. tworząc edity na TikTok, filmy na YouTube
          </p>

          {/* BADGE NARZĘDZI (PHOTOSHOP, CINEMA 4D itd. -> PREMIERE, AFTER EFFECTS) */}
          <div className="about-tools-row">
            {tools.map((tool) => (
              <span key={tool} className="tool-pill">
                {tool}
              </span>
            ))}
          </div>

          {/* DOLNE BADGE STATYSTYK */}
          <div className="about-stats-row">
            {badges.map((badge) => (
              <span key={badge} className="stat-pill-1to1">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* PRAWA STRONA: AWATAR / RENDER Z PLAKIETKĄ LOKALIZACJI */}
        <div className="about-right-col">
          <div className="about-avatar-box">
            <div className="avatar-graphic">
              <img src="/hero.png" alt="Logo" className="about-avatar-img" />
            </div>
            
            <div className="avatar-bottom-tag">
              <span>Polska PL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
