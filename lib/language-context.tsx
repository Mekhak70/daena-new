'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Locale, translations, type TranslationKeys } from './i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children, 
  initialLocale 
}: { 
  children: ReactNode
  initialLocale?: Locale 
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || 'en')

  useEffect(() => {
    if (initialLocale) {
      setLocaleState(initialLocale)
      localStorage.setItem('locale', initialLocale)
    } else {
      const saved = localStorage.getItem('locale') as Locale | null
      if (saved && ['hy', 'en', 'ru'].includes(saved)) {
        setLocaleState(saved)
      }
    }
  }, [initialLocale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
