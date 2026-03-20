import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { AnalyticsWrapper } from '@/components/analytics-wrapper'
import { Providers } from '@/components/providers'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Boletín de Convocatorias No. 05 – 2026 | UT',
  description: 'Boletín de Convocatorias No. 05 del 2026 – Vicerrectoría de Investigación, Creación, Innovación, Extensión y Proyección Social, Universidad del Tolima.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
