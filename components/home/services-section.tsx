'use client'

import { Calculator, FileText, BarChart3, Briefcase } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const icons = {
  accounting: Calculator,
  tax: FileText,
  financial: BarChart3,
  business: Briefcase,
}

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    { key: 'accounting' as const, icon: icons.accounting },
    { key: 'tax' as const, icon: icons.tax },
    { key: 'financial' as const, icon: icons.financial },
    { key: 'business' as const, icon: icons.business },
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="cursor-pointer group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                {t.services[key].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.services[key].description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
