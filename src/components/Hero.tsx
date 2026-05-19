import { useEffect, useRef } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useLanguage } from "@/lib/i18n"

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

function StatItem({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  return (
    <motion.div className="text-center lg:text-right"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}>
      <div className="font-display text-4xl lg:text-5xl font-black text-white">
        {to}<span className="text-gold-400">{suffix}</span>
      </div>
      <div className="font-condensed text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/35 mt-1">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-navy-900 flex flex-col overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#b8832a" />
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(184,131,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(184,131,42,1) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "linear-gradient(to bottom, transparent, #b8832a 40%, #b8832a 60%, transparent)" }} />

      <div ref={parallaxRef} className="absolute right-[8%] top-[10%] pointer-events-none">
        <motion.div className="w-72 h-72 lg:w-96 lg:h-96 border border-gold-500/10"
          style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
          animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }} />
        <motion.div className="absolute inset-8 border border-gold-500/6"
          style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
          animate={{ rotate: -360 }} transition={{ duration: 28, ease: "linear", repeat: Infinity }} />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 w-full">
          <motion.div className="max-w-4xl" variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-500" />
              <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.28em] uppercase text-gold-400">
                {t("hero.location")}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-black leading-[0.9] mb-10">
              <span className="block text-[clamp(4rem,12vw,9rem)] text-white">Distri</span>
              <span className="block text-[clamp(4rem,12vw,9rem)]"
                style={{ WebkitTextStroke: "2px #b8832a", color: "transparent" }}>buidora</span>
              <motion.span className="block text-[clamp(4rem,12vw,9rem)] text-gold-400 tracking-[-0.02em]"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}>1810 S.A</motion.span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-10">
              <TextGenerateEffect
                words={t("hero.tagline")}
                className="font-condensed text-[clamp(0.9rem,2vw,1.25rem)] font-light tracking-[0.12em] uppercase text-white/45 !font-condensed"
                duration={0.4}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 flex-wrap">
              <motion.a href="#servicios"
                className="group font-condensed text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 bg-gold-500 text-navy-800 flex items-center gap-3"
                whileHover={{ y: -3, backgroundColor: "#d4a44c" }} whileTap={{ scale: 0.97 }}>
                {t("hero.ctaServices")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#marcas"
                className="font-condensed text-sm font-semibold tracking-[0.1em] uppercase text-white/60 hover:text-gold-400 flex items-center gap-2 transition-colors"
                whileHover={{ x: 4 }}>
                {t("hero.ctaBrands")} <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="mt-20 pt-8 border-t border-white/8 grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
            <StatItem to={20} suffix="+" label={t("hero.stats.experience")} />
            <StatItem to={8} suffix="+" label={t("hero.stats.brands")} />
            <StatItem to={100} suffix="%" label={t("hero.stats.commitment")} />
            <StatItem to={360} suffix="°" label={t("hero.stats.service")} />
          </motion.div>
        </div>
      </div>

      <motion.div className="relative z-10 flex justify-center pb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <a href="#nosotros" className="flex flex-col items-center gap-2 text-white/30 hover:text-gold-500 transition-colors">
          <span className="font-condensed text-[0.65rem] tracking-[0.25em] uppercase">{t("hero.scroll")}</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
