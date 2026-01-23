'use client'

import { Award, Shield, Lock, Target } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const icons = {
  experience: Award,
  reliability: Shield,
  confidentiality: Lock,
  accuracy: Target,
}

export function BenefitsSection() {
  const { t } = useLanguage()

  const benefits = [
    { key: 'experience' as const, icon: icons.experience },
    { key: 'reliability' as const, icon: icons.reliability },
    { key: 'confidentiality' as const, icon: icons.confidentiality },
    { key: 'accuracy' as const, icon: icons.accuracy },
  ]

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.benefits.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ key, icon: Icon }, index) => (
            <div key={key} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-4 text-4xl font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {t.benefits[key].title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.benefits[key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
