'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
            >
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto bg-transparent"
            >
              <Link href="/contact">{t.hero.consultation}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
