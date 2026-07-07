import { useState } from "react"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useLanguage, getLocaleData } from "@/lib/i18n"

const CONTACT_EMAIL = "info@d1810.com"

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", tipo: "", mensaje: "" })
  const { locale, t } = useLanguage()
  const { contact } = getLocaleData(locale)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validar que los campos estén completos
    if (!form.nombre || !form.email || !form.mensaje) {
      setError(t("contact.form.errorRequired") || "Por favor completa todos los campos")
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nuevo contacto de ${form.nombre}`,
          nombre: form.nombre,
          empresa: form.empresa,
          email: form.email,
          tipo_consulta: form.tipo,
          mensaje: form.mensaje,
        }),
      })

      if (!res.ok) throw new Error("FormSubmit error")
      setSent(true)
    } catch (err) {
      setError(t("contact.form.errorSend") || "Error al enviar el mensaje. Intenta nuevamente.")
      console.error("FormSubmit error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="bg-navy-900 py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(184,131,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(184,131,42,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18rem] font-black text-gold-500/3 leading-none pointer-events-none select-none translate-x-1/4">
        1810
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-7 bg-gold-400" />
                <span className="font-condensed text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-gold-400">{t("contact.title")}</span>
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.05] text-white mb-6">
                {t("contact.heading")}
              </h2>
              <p className="font-sans text-sm leading-[1.8] text-white/45 mb-12 max-w-md">
                {t("contact.description")}
              </p>
            </Reveal>

            <div className="space-y-6">
              {contact.details.map(({ label, value }, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 shrink-0 border border-gold-500/25 flex items-center justify-center">
                      {i === 0 && <MapPin size={14} className="text-gold-500" strokeWidth={1.5} />}
                      {i === 1 && <Mail size={14} className="text-gold-500" strokeWidth={1.5} />}
                      {i === 2 && <Phone size={14} className="text-gold-500" strokeWidth={1.5} />}
                    </div>
                    <div>
                      <div className="font-condensed text-[0.67rem] font-semibold tracking-[0.18em] uppercase text-white/30 mb-0.5">{label}</div>
                      <div className="font-sans text-sm text-white">{value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
                <div className="w-16 h-16 border border-gold-500 flex items-center justify-center">
                  <ArrowRight size={24} className="text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{t("contact.form.sentTitle")}</h3>
                <p className="font-sans text-sm text-white/50 text-center max-w-xs">{t("contact.form.sentText")}</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 px-4 py-3 text-red-200 text-sm rounded">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "nombre", label: t("contact.form.name"), placeholder: t("contact.form.placeholderName") },
                    { name: "empresa", label: t("contact.form.company"), placeholder: t("contact.form.placeholderCompany") },
                  ].map(field => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label className="font-condensed text-[0.67rem] font-semibold tracking-[0.18em] uppercase text-white/35">
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        value={(form as any)[field.name]}
                        onChange={handle}
                        placeholder={field.placeholder}
                        className="bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[0.67rem] font-semibold tracking-[0.18em] uppercase text-white/35">{t("contact.form.email")}</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handle}
                    placeholder={t("contact.form.placeholderEmail")}
                    className="bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[0.67rem] font-semibold tracking-[0.18em] uppercase text-white/35">{t("contact.form.inquiryType")}</label>
                  <select
                    name="tipo" value={form.tipo} onChange={handle}
                    className="bg-navy-800 border border-white/10 px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                  >
                    <option value="">{t("contact.form.placeholderSelect")}</option>
                    {contact.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[0.67rem] font-semibold tracking-[0.18em] uppercase text-white/35">{t("contact.form.message")}</label>
                  <textarea
                    name="mensaje" value={form.mensaje} onChange={handle}
                    placeholder={t("contact.form.placeholderMessage")}
                    rows={4}
                    className="bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group font-condensed text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 bg-gold-500 text-navy-800 flex items-center gap-3 hover:bg-gold-400 transition-all duration-250 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-hover
                >
                  {loading ? t("contact.form.sending") || "Enviando..." : t("contact.form.submit")}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
