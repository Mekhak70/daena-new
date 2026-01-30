'use client'

import React from "react"
import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { type Locale } from '@/lib/i18n'

export function LocaleLayoutClient({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  return (
    <LanguageProvider initialLocale={locale}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

