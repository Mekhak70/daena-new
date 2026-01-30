'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { type Locale, locales, localeNames } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import Logo from '@/public/logo.png'
import Image from 'next/image'

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { locale, setLocale, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/partners', label: t.nav.partners },
    { href: '/contact', label: t.nav.contact },
  ]

  // Helper function to check if a path is active
  const isActive = (href: string) => {
    const localizedHref = `/${locale}${href === '/' ? '' : href}`
    return pathname === localizedHref 
  }

  // Helper function to get localized href
  const getLocalizedHref = (href: string) => {
    return `/${locale}${href === '/' ? '' : href}`
  }

  // Handle language change
  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    
    // Get current path without locale
    let pathWithoutLocale = pathname
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}/`)) {
        pathWithoutLocale = pathname.slice(`/${loc}`.length)
        break
      } else if (pathname === `/${loc}`) {
        pathWithoutLocale = '/'
        break
      }
    }
    
    // Navigate to the same page with new locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={getLocalizedHref('/')} className="flex items-center gap-2">
          <Image src={Logo} alt="daena.am" width={100} height={30} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLocalizedHref(link.href)}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-primary',
                isActive(link.href)
                  ? 'text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 rounded-md border border-border bg-secondary/50 p-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={cn(
                  'cursor-pointer rounded px-2 py-1 text-xs font-medium transition-colors',
                  locale === loc
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedHref(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary',
                  isActive(link.href)
                    ? 'text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
