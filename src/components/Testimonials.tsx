import { useScrollReveal } from "@/hooks/useScrollReveal"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
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

export default function Testimonials() {
  const { locale, t } = useLanguage()
  const { testimonials } = getLocaleData(locale)

  return (
    <section className="bg-navy-950 py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(rgba(184,131,42,1) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-7 bg-gold-400" />
            <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-400">{t("testimonials.title")}</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.05] text-white mb-2">
            {t("testimonials.heading")}
          </h2>
        </Reveal>
        <AnimatedTestimonials testimonials={testimonials.items} autoplay />
      </div>
    </section>
  )
}
