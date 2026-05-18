import { useLanguage } from "@/lib/i18n"

export default function Footer() {
  const { t } = useLanguage()
  const links = [
    { label: t("footer.nav.about"), href: "#nosotros" },
    { label: t("footer.nav.services"), href: "#servicios" },
    { label: t("footer.nav.brands"), href: "#marcas" },
    { label: t("footer.nav.contact"), href: "#contacto" },
  ]

  return (
    <footer className="bg-navy-950 border-t border-gold-500/12 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold text-white">
          Distribuidora <span className="text-gold-400">1810</span>
        </div>
        <div className="font-condensed text-[0.7rem] tracking-[0.12em] uppercase text-white/20">
          {t("footer.copyright")}
        </div>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-condensed text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-white/25 hover:text-gold-500 transition-colors duration-200"
                data-hover
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
