'use client'

import { useState } from 'react'

export default function Nav() {
  const [activeTab, setActiveTab] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      id: 'hero',
      label: 'Wstęp',
      href: '#hero',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      id: 'o-mnie',
      label: 'O mnie',
      href: '#o-mnie',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      id: 'galeria',
      label: 'Galeria',
      href: '#galeria',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.28 19.64 10.59 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-3.5 8c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11zm3.5-3c-.83 0-1.5-.67-1.5-1.5S11.17 5 12 5s1.5.67 1.5 1.5S12.83 8 12 8zm3.5 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      id: 'cennik',
      label: 'Cennik',
      href: '#cennik',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 'opinie',
      label: 'Opinie',
      href: '#opinie',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* PŁYWAJĄCA GŁÓWNA KAPSULA NAWIGACJI (JAK NA GRAFICE) */}
      <header className="pill-nav-container">
        <nav className="pill-nav">
          {/* Awatar / Logo po lewej */}
          <div className="pill-nav-avatar">
            <img src="/hero.png" alt="Logo" className="pill-avatar-img" />
          </div>

          {/* Główne ikony nawigacji */}
          <div className="pill-nav-links">
            {navItems.map((item) => {
              const isActive = activeTab === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`pill-nav-item ${isActive ? 'pill-nav-item--active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  title={item.label}
                >
                  <span className="pill-nav-icon">{item.icon}</span>
                  {isActive && <span className="pill-nav-label">{item.label}</span>}
                </a>
              )
            })}
          </div>

          {/* Przycisk Discord po prawej */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="pill-discord-btn"
            title="Discord"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
        </nav>
      </header>

      {/* PŁYWAJĄCY PRZYCISK MENU W PRAWYM GÓRNYM ROGU (JAK NA GRAFICE) */}
      <button
        className="corner-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="corner-menu-line" />
        <span className="corner-menu-line" />
        <span className="corner-menu-line" />
      </button>

      {/* ROZWIJANE MENU MOBILNE */}
      {menuOpen && (
        <div className="corner-menu-dropdown">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="corner-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="corner-menu-item corner-menu-item--discord"
            onClick={() => setMenuOpen(false)}
          >
            Dołącz do Discorda
          </a>
        </div>
      )}
    </>
  )
}
