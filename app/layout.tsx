import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mariusz portfolio',
  description: 'Portfolio montazysty filmow, edytow i animacji. Film. Edit. Motion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
