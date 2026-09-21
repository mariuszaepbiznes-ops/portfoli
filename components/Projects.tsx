'use client'

import { useState, useRef, useEffect } from 'react'

export interface GalleryProject {
  id: number
  title: string
  category: string
  videoSrc: string
  duration: string
  aspect: '1/1' | '16/9' | '9/16'
  desc: string
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    title: 'najlepszy mój edit pod względem wyswietleń',
    category: 'TikTok / Shorts',
    videoSrc: '/videos/edit.mp4',
    duration: '0:22',
    aspect: '1/1',
    desc: 'Dynamiczny montaż 2160x2160 zoptymalizowany pod algorytmy i maksymalną jakość.',
  },
  {
    id: 2,
    title: 'Reklama discorda ',
    category: 'Saas / Promo',
    videoSrc: '/videos/edit_2.mp4',
    duration: '0:15',
    aspect: '1/1',
    desc: 'Film promocyjny discorda zrobiony w after effects ',
  },
  {
    id: 3,
    title: 'Edit z tankiem z lżpz',
    category: 'TikTok / Shorts',
    videoSrc: '/videos/edit_3.mp4',
    duration: '0:19',
    aspect: '1/1',
    desc: 'Przykładoy edit który zrobiłem',
  },
  {
    id: 4,
    title: 'Smutny edit z lombardu',
    category: 'TikTok / Shorts',
    videoSrc: '/videos/edit_4.mp4',
    duration: '0:26',
    aspect: '1/1',
    desc: 'Najsmutniejszy edit jaki zrobiłem',
  },
  {
    id: 5,
    title: 'dynamiczny edit z lombardu',
    category: 'TikTok / Shorts',
    videoSrc: '/videos/edit_5.mp4',
    duration: '0:06',
    aspect: '1/1',
    desc: 'Szybki i dynamiczny edit z lombardu',
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const activeProject = GALLERY_PROJECTS[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_PROJECTS.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_PROJECTS.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  // Restart video when active project changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {
        // Autoplay may require mute in some browsers
      })
    }
  }, [currentIndex])

  return (
    <section id="galeria" className="section-1to1">
      {/* NAGŁÓWEK SEKCI I PODTYTUŁ (DOKŁADNIE JAK NA GRAFICE) */}
      <div className="section-header-centered">
        <h2 className="title-bold-gradient">GALERIA</h2>
        <p className="subtitle-1to1">
          Przegląd moich najnowszych prac montażowych i projektów
        </p>
      </div>

      {/* GŁÓWNY MONITOR / EKRAN SHOWCASE (POBRAME WIDEO NA PEŁNYM EKRANIE) */}
      <div className="gallery-monitor-wrapper">
        <div className="gallery-monitor">
          <div className="monitor-screen">
            {/* Prawdziwy odtwarzacz wideo na cały ekran (zero iframe strony!) */}
            <video
              ref={videoRef}
              key={activeProject.videoSrc}
              className="monitor-video-player"
              src={activeProject.videoSrc}
              controls
              autoPlay
              playsInline
              loop
            />

            {/* Pływająca plakietka informacyjna o aktualnym filmie */}
            <div className="monitor-floating-badge">
              <span className="monitor-badge-pill">{activeProject.category}</span>
              <span className="monitor-badge-title">{activeProject.title}</span>
            </div>
          </div>
        </div>

        {/* STEROWANIE SLIDEREM: STRZAŁKA LEWO, KROPKI, STRZAŁKA PRAWO */}
        <div className="slider-controls-row">
          <button className="slider-arrow-btn" onClick={handlePrev} aria-label="Poprzedni film">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="slider-dots">
            {GALLERY_PROJECTS.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === currentIndex ? 'slider-dot--active' : ''}`}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsPlaying(true)
                }}
                aria-label={`Przejdź do filmu ${idx + 1}`}
              />
            ))}
          </div>

          <button className="slider-arrow-btn" onClick={handleNext} aria-label="Następny film">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* POZIOMY PASEK MINIATUR NA DOLE Z PRAWDZIWYM PODGLĄDEM WIDEO */}
        <div className="gallery-thumbnails-strip">
          {GALLERY_PROJECTS.map((proj, idx) => {
            const isSelected = idx === currentIndex
            return (
              <div
                key={proj.id}
                className={`gallery-thumb-card ${isSelected ? 'gallery-thumb-card--selected' : ''}`}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsPlaying(true)
                }}
              >
                {/* Mini podgląd wideo */}
                <video
                  className="thumb-video-preview"
                  src={proj.videoSrc}
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="thumb-video-overlay">
                  <div className="thumb-mini-tag">{proj.category}</div>
                  <div className="thumb-mini-title">{proj.title}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
