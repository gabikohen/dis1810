import { useScrollReveal } from "@/hooks/useScrollReveal"
import { CheckCircle } from "lucide-react"
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

export default function Why() {
  const { locale, t } = useLanguage()
  const { why } = getLocaleData(locale)

  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <div className="bg-navy-800 relative overflow-hidden h-full min-h-[480px] flex flex-col justify-between p-10 lg:p-14">
              <div className="absolute bottom-0 right-0 w-40 h-40 border-t border-l border-gold-500/15 pointer-events-none" />
              <div className="absolute top-0 left-0 w-20 h-20 border-b border-r border-gold-500/8 pointer-events-none" />

              <div>
                <div className="font-condensed text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold-500 mb-1">{t("why.missionLabel")}</div>
                <div className="h-px bg-gradient-to-r from-gold-500 to-transparent my-5" />
                <h3 className="font-display text-[1.8rem] lg:text-[2.2rem] font-bold leading-[1.15] text-white mb-6">
                  {t("why.missionHeading")}
                </h3>
                <p className="font-sans text-sm leading-[1.8] text-white/50">
                  {t("why.missionText")}
                </p>
              </div>

              <div>
                <div className="h-px bg-gradient-to-r from-gold-500/30 to-transparent my-8" />
                <div className="font-condensed text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-gold-500/60">
                  {t("why.location")}
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 font-display text-[10rem] font-black text-gold-500/4 leading-none pointer-events-none select-none">
                1810
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-7 bg-gold-500" />
                <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-500">{t("why.title")}</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] text-navy-800 mb-12">
                {t("why.heading")}
              </h2>
            </Reveal>

            <div className="space-y-8">
              {why.pillars.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex gap-5 group">
                    <div className="shrink-0 w-8 h-8 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/8 transition-all duration-250">
                      <span className="font-condensed text-xs font-bold text-gold-500">{p.num}</span>
                    </div>
                    <div>
                      <h4 className="font-condensed text-sm font-bold tracking-[0.06em] uppercase text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">{p.title}</h4>
                      <p className="font-sans text-sm leading-[1.7] text-navy-500">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={450}>
              <div className="mt-12 pt-8 border-t border-navy-800/8 flex items-center gap-3">
                <CheckCircle size={16} className="text-gold-500 shrink-0" />
                <span className="font-condensed text-xs font-semibold tracking-[0.12em] uppercase text-navy-400">
                  {t("why.footer")}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
