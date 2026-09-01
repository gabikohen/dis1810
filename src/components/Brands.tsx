import { useScrollReveal } from "@/hooks/useScrollReveal"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-condensed text-[0.67rem] font-semibold tracking-[0.22em] uppercase text-white/30">{brands.featuredTitle}</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 max-w-3xl mx-auto">
          {brands.featured.map((product, i) => (
            <Reveal key={product.name} delay={i * 120}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative flex h-56 lg:h-64 w-full items-center justify-center">
                  <div className="absolute inset-x-6 bottom-4 h-24 bg-gold-500/10 blur-2xl rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="relative max-h-full w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 font-condensed text-sm font-bold tracking-[0.05em] uppercase text-white">
                  {product.name}
                </div>
                <div className="mt-1 font-sans text-xs text-white/40">{product.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  )
}
