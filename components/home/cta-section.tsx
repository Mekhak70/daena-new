'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-8 py-16 text-center md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {t.contact.subtitle}
          </h2>
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
          </div>
        </div>
      </div>
    </section>
  )
}
