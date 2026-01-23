'use client'

import { Target, BookOpen, Users } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { t } = useLanguage()

  const sections = [
    { key: 'mission' as const, icon: Target },
    { key: 'story' as const, icon: BookOpen },
    { key: 'trust' as const, icon: Users },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.about.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {sections.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={`flex flex-col items-start gap-8 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground lg:h-24 lg:w-24">
                  <Icon className="h-10 w-10 lg:h-12 lg:w-12" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {t.about[key].title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {t.about[key].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.benefits.title}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(['experience', 'reliability', 'confidentiality', 'accuracy'] as const).map(
              (key) => (
                <div
                  key={key}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {t.benefits[key].title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.benefits[key].description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
