import React from "react"
import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { type Locale } from '@/lib/i18n'
import { LocaleLayoutClient } from './locale-layout-client'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  
  return (
    <LocaleLayoutClient locale={locale}>
      {children}
    </LocaleLayoutClient>
  )
}
