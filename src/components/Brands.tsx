import { useScrollReveal } from "@/hooks/useScrollReveal"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { useLanguage, getLocaleData } from "@/lib/i18n"

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  )
}

export default function Brands() {
  const { locale, t } = useLanguage()
  const { brands } = getLocaleData(locale)

  return (
    <section id="marcas" className="bg-navy-900 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-7 bg-gold-400" />
            <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-400">{t("brands.title")}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.05] text-white">
              {t("brands.heading")}
            </h2>
            <p className="font-sans text-sm text-white/40 max-w-sm leading-relaxed">
              {t("brands.description")}
            </p>
          </div>
        </Reveal>
      </div>
      <InfiniteMovingCards items={brands.items} direction="left" speed="slow" pauseOnHover className="mb-6" />
      <InfiniteMovingCards items={[...brands.items].reverse()} direction="right" speed="normal" pauseOnHover />
    </section>
  )
}
