import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Lato } from 'next/font/google'
export const lato = Lato({ subsets: ['latin', ], weight: ['400', '700'], variable: '--font-lato' })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'daena.am - Professional Accounting & Financial Services',
  description: 'Comprehensive accounting, tax consulting, financial reporting, and business support services in Armenia. Expert solutions for your business needs.',
  keywords: ['accounting', 'tax consulting', 'financial services', 'Armenia', 'Yerevan', 'business support'],
  authors: [{ name: 'daena.am' }],
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
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#002169',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hy">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
