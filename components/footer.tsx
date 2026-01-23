'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              daena.am
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              {t.hero.subtitle.substring(0, 100)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t.nav.home}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.partners}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {t.nav.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+37477580618"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  +374 77 58 06 18
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@daena.am"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  info@daena.am
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} daena.am. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
