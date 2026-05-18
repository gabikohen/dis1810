import { useState } from "react"
import { Truck, BarChart2, Package, Globe, Users, TrendingUp } from "lucide-react"
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

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { locale, t } = useLanguage()
  const { services } = getLocaleData(locale)

  return (
    <section id="servicios" className="bg-navy-900 py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(rgba(184,131,42,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-7 bg-gold-400" />
            <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-400">{t("services.title")}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.05] text-white">
              {t("services.heading")}
            </h2>
            <p className="font-sans text-sm text-white/40 max-w-xs lg:text-right leading-relaxed">
              {t("services.description")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gold-500/15"
          style={{ gap: "1px", background: "rgba(184,131,42,0.12)" }}>
          {services.items.map((s, i) => {
            const Icon = [Globe, Truck, BarChart2, Package, Users, TrendingUp][i]
            const isHovered = hovered === i
            return (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`bg-navy-900 p-8 lg:p-10 relative transition-all duration-350 cursor-default ${isHovered ? "bg-navy-700" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  data-hover
                >
                  <div className="absolute top-6 right-7 font-display text-5xl font-black text-gold-500/8 leading-none">{s.num}</div>
                  <div className={`w-11 h-11 border flex items-center justify-center mb-6 transition-all duration-300 ${isHovered ? "border-gold-500 bg-gold-500/10" : "border-gold-500/25"}`}>
                    <Icon size={18} className={`transition-colors duration-300 ${isHovered ? "text-gold-400" : "text-gold-500/60"}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-condensed text-base font-bold tracking-[0.06em] uppercase text-white mb-3">{s.title}</h3>
                  <p className="font-sans text-[0.88rem] leading-[1.7] text-white/45">{s.desc}</p>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-gold-500 transition-all duration-350 ${isHovered ? "w-full" : "w-0"}`} />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
