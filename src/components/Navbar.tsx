import { useState } from "react"
import { useLanguage } from "@/lib/i18n"
import {
  Navbar, NavBody, NavItems, MobileNav, MobileNavHeader,
  MobileNavMenu, MobileNavToggle, NavbarButton,
} from "@/components/ui/resizable-navbar"

const languageOptions = [
  { code: "es", flag: "🇦🇷" },
  { code: "en", flag: "🇺🇸" },
]

export default function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, locale, setLocale } = useLanguage()

  const navItems = [
    { name: t("navbar.items.about"), link: "#nosotros" },
    { name: t("navbar.items.services"), link: "#servicios" },
    { name: t("navbar.items.brands"), link: "#marcas" },
    { name: t("navbar.items.contact"), link: "#contacto" },
  ]

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <a href="#" className="flex items-center gap-3">
          <div
            className="w-8 h-8 border border-gold-500 flex items-center justify-center"
            style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
          />
          <span className="font-condensed font-bold text-white text-base tracking-wide">
            <span className="text-gold-400">18</span>10 Distribuidora
          </span>
        </a>
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-1.5">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLocale(option.code as "es" | "en")}
                className={`h-9 w-9 rounded-full text-sm leading-none flex items-center justify-center transition-colors duration-200 ${locale === option.code ? "bg-gold-500 text-navy-950" : "bg-white/5 text-white hover:bg-white/10"}`}
                aria-label={t(`navbar.language.${option.code}`)}
              >
                {option.flag}
              </button>
            ))}
          </div>
          <NavbarButton href="#contacto" variant="primary">{t("navbar.cta")}</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <a href="#" className="font-condensed font-bold text-white text-base tracking-wide">
            <span className="text-gold-400">18</span>10 Distribuidora
          </a>
          <MobileNavToggle isOpen={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold text-white hover:text-gold-400 transition-colors w-full py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-1.5 mt-4">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLocale(option.code as "es" | "en")}
                className={`h-9 w-9 rounded-full text-sm leading-none flex items-center justify-center transition-colors duration-200 ${locale === option.code ? "bg-gold-500 text-navy-950" : "bg-white/5 text-white hover:bg-white/10"}`}
                aria-label={t(`navbar.language.${option.code}`)}
              >
                {option.flag}
              </button>
            ))}
          </div>
          <NavbarButton href="#contacto" variant="primary" className="mt-4 w-full text-center">
            {t("navbar.cta")}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
