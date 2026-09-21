import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0c0b09',
        bg2:     '#141210',
        bg3:     '#1a1815',
        accent:  '#d4b896',
        accent2: '#a08060',
        cream:   '#f5f0e8',
        muted:   'rgba(245,240,228,0.45)',
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      borderColor: {
        subtle: 'rgba(245,240,228,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
