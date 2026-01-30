'use client'

import { Building2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const partners = [
  {
    id: 1,
    name: 'TechCorp Armenia',
    description: 'Leading technology solutions provider in the region.',
  },
  {
    id: 2,
    name: 'Global Finance Group',
    description: 'International financial consulting and investment services.',
  },
  {
    id: 3,
    name: 'Yerevan Business Center',
    description: 'Premier business services and corporate solutions.',
  },
  {
    id: 4,
    name: 'CaucasusBank',
    description: 'Modern banking services for businesses and individuals.',
  },
  {
    id: 5,
    name: 'ArmenLegal',
    description: 'Professional legal advisory and compliance services.',
  },
  {
    id: 6,
    name: 'Digital Solutions LLC',
    description: 'Software development and IT infrastructure services.',
  },
]

export default function PartnersPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.partners.title}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              {t.partners.description}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  {partner.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


