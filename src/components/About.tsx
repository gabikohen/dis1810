import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useLanguage, getLocaleData } from "@/lib/i18n"

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  )
}

export default function About() {
  const { t, locale } = useLanguage()
  const { about } = getLocaleData(locale)

  return (
    <section id="nosotros" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-7 bg-gold-500" />
                <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-500">{t("about.title")}</span>
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.05] text-navy-800 mb-8">
                {t("about.heading")}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-base leading-relaxed text-navy-600 mb-5">
                {t("about.paragraph1")}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-base leading-relaxed text-navy-600 mb-5">
                {t("about.paragraph2")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-sans text-base leading-relaxed text-navy-600 mb-8">
                {t("about.paragraph3")}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <blockquote className="border-l-2 border-gold-500 pl-6 py-1 bg-gold-500/5">
                <p className="font-display text-lg italic text-navy-800 leading-snug">
                  {t("about.quote")}
                </p>
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold-500/20" />
              <div className="bg-navy-800 relative overflow-hidden">
                <div className="absolute -bottom-6 -right-2 font-display text-[8rem] font-black text-gold-500/5 leading-none pointer-events-none select-none">
                  1810
                </div>
                <div className="relative z-10 p-0">
                  {about.facts.map((f, i) => (
                    <div key={i} className={`flex items-center justify-between px-7 py-4 ${i < about.facts.length - 1 ? "border-b border-white/6" : ""} group hover:bg-white/3 transition-colors`}>
                      <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-white/35">{f.label}</span>
                      <span className={`font-sans text-sm font-medium text-right ${f.gold ? "text-gold-400" : "text-white"}`}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
