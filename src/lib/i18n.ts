import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react"

export type Locale = "es" | "en"

const translations = {
  es: {
    navbar: {
      items: {
        about: "Nosotros",
        services: "Servicios",
        brands: "Marcas",
        contact: "Contacto",
      },
      cta: "Ser Cliente",
      language: {
        es: "Español",
        en: "English",
      },
    },
    hero: {
      location: "Buenos Aires · Argentina",
      tagline: "Importación · Distribución · Logística · Marketing",
      ctaServices: "Nuestros Servicios",
      ctaBrands: "Ver Marcas",
      scroll: "Scroll",
      stats: {
        experience: "Años de experiencia",
        brands: "Marcas premium",
        commitment: "Compromiso",
        service: "Servicio integral",
      },
    },
    about: {
      title: "Quiénes Somos",
      heading: "Conectamos el mundo con la mesa argentina",
      paragraph1: "Distribuidora 1810 S.A es una empresa argentina especializada en la importación, distribución y comercialización de alimentos, golosinas y productos de consumo masivo de marcas internacionales líderes.",
      paragraph2: "Con sede en Belgrano, Buenos Aires, trabajamos junto a nuestros proveedores y clientes para posicionar productos como líderes en sus respectivos mercados.",
      paragraph3: "Nuestra filosofía es clara: potenciar las oportunidades de negocio a través de un servicio integral que va desde la importación hasta la activación en el punto de venta.",
      quote: "Trabajamos para que los mejores productos del mundo lleguen a la mesa de los hogares argentinos.",
      facts: [
        { label: "Razón Social", value: "Distribuidora 1810 S.A" },
        { label: "Actividad", value: "Importación & Distribución" },
        { label: "Sede", value: "Buenos Aires, Argentina" },
        { label: "Rubros", value: "Alimentos · Golosinas" },
        { label: "Especialidad", value: "Marcas Internacionales Líderes", gold: true },
        { label: "Modelo", value: "Importación Directa · B2B", gold: true },
      ],
    },
    services: {
      title: "Lo Que Hacemos",
      heading: "Servicios integrales",
      description: "Un ecosistema completo para llevar tu producto al mercado argentino.",
      items: [
        {
          num: "01",
          title: "Importación",
          desc: "Gestionamos la importación directa desde los principales mercados del mundo, garantizando cumplimiento regulatorio y tiempos óptimos de entrega al mercado argentino.",
        },
        {
          num: "02",
          title: "Distribución",
          desc: "Red de distribución mayorista con cobertura nacional. Llegamos a supermercados, cadenas, distribuidores y canales especializados en todo el país.",
        },
        {
          num: "03",
          title: "Marketing & Trade",
          desc: "Diseñamos planes de marketing a medida: degustaciones, material POP, activaciones en puntos de venta y estrategias multicanal para maximizar presencia de marca.",
        },
        {
          num: "04",
          title: "Logística Integral",
          desc: "Gestión completa de la cadena logística: almacenamiento, gestión de inventario, picking y distribución de última milla con trazabilidad total.",
        },
        {
          num: "05",
          title: "Representación de Marcas",
          desc: "Somos el brazo comercial local de marcas internacionales. Actuamos como representantes exclusivos con pleno conocimiento del mercado argentino.",
        },
        {
          num: "06",
          title: "Consultoría Comercial",
          desc: "Asesoramos a marcas extranjeras que deseen ingresar al mercado: análisis de canal, pricing, regulación de importación y estrategia go-to-market.",
        },
      ],
    },
    brands: {
      title: "Portafolio",
      heading: "Marcas que representamos",
      description: "Líderes internacionales, disponibles en Argentina gracias a nuestra operación.",
      items: [
        { name: "Philadelphia", desc: "Cream Cheese · Kraft Heinz" },
        { name: "Sour Patch", desc: "Golosinas Ácidas · Mondelez" },
        { name: "Airheads", desc: "Candy Premium · Perfetti" },
        { name: "Swedish Fish", desc: "Gummies · Mondelez" },
        { name: "Reynolds", desc: "Papel Aluminio · Hogar" },
        { name: "Stash Tea", desc: "Tés & Infusiones Premium" },
        { name: "Hunt's", desc: "Salsas de Tomate · ConAgra" },
        { name: "Xtremes", desc: "Candy Ácido Intenso" },
        { name: "Papadopoulos", desc: "Galletitas Importadas" },
        { name: "Caprice", desc: "Snacks Importados" },
      ],
    },
    testimonials: {
      title: "Testimonios",
      heading: "Lo que dicen nuestros socios",
      items: [
        {
          quote: "Trabajar con Distribuidora 1810 S.A transformó nuestra presencia en Argentina. Profesionalismo total desde la importación hasta el punto de venta.",
          name: "Martín Rodríguez",
          designation: "Director Comercial · Supermercados del Sur",
        },
        {
          quote: "La rapidez con la que posicionaron nuestros productos en el mercado argentino superó todas nuestras expectativas. Son el socio ideal.",
          name: "Sarah Johnson",
          designation: "Export Manager · Mondelez International",
        },
        {
          quote: "Su conocimiento del mercado local y la red de distribución que tienen no tiene comparación. Llevaron nuestra marca a otro nivel.",
          name: "Carlos Méndez",
          designation: "CEO · Cadena Mayorista Norte",
        },
        {
          quote: "El servicio integral que ofrecen — desde la logística hasta el trade marketing — nos permitió enfocarnos en crecer, no en operar.",
          name: "Laura Fernández",
          designation: "Gerente de Compras · Hipermercados BA",
        },
      ],
    },
    why: {
      missionLabel: "Nuestra Misión",
      missionHeading: "Posicionar los mejores productos del mundo en el mercado argentino",
      missionText: "Trabajamos junto a nuestros proveedores y clientes para que cada marca que representamos se convierta en líder en su categoría, generando valor para toda la cadena comercial y llevando sabores únicos a los hogares argentinos.",
      location: "Belgrano, Buenos Aires · Argentina",
      title: "Por Qué Elegirnos",
      heading: "Ventajas diferenciales",
      pillars: [
        {
          num: "1",
          title: "+20 años de experiencia",
          desc: "Décadas operando en el mercado argentino nos dan conocimiento profundo de los canales, ciclos del negocio y regulaciones aduaneras.",
        },
        {
          num: "2",
          title: "Marcas internacionales de primer nivel",
          desc: "Representamos marcas reconocidas globalmente, con acceso a productos de alta demanda y margen diferencial para nuestros clientes.",
        },
        {
          num: "3",
          title: "Servicio integral 360°",
          desc: "Desde la importación y logística hasta el marketing en el punto de venta, un servicio completo que simplifica tu operación.",
        },
        {
          num: "4",
          title: "Relaciones de largo plazo",
          desc: "Vínculos duraderos con fabricantes internacionales y cadenas locales basados en confianza, transparencia y resultados medibles.",
        },
      ],
      footer: "Socios estratégicos de marcas líderes en Argentina",
    },
    contact: {
      title: "Hablemos",
      heading: "Ser parte de nuestra red",
      description: "Si sos distribuidor, supermercado, o tenés una marca internacional que querés posicionar en Argentina, nos encantaría conocerte y explorar oportunidades juntos.",
      details: [
        { label: "Dirección", value: "Belgrano, Buenos Aires, Argentina" },
        { label: "Email", value: "info@d1810.com" },
      ],
      form: {
        sentTitle: "¡Mensaje enviado!",
        sentText: "Nos vamos a poner en contacto a la brevedad. Gracias por tu interés.",
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        inquiryType: "Tipo de Consulta",
        selectOption: "Seleccioná una opción",
        message: "Mensaje",
        placeholderName: "Tu nombre",
        placeholderCompany: "Razón social",
        placeholderEmail: "correo@empresa.com",
        placeholderSelect: "Seleccioná una opción",
        placeholderMessage: "Contanos sobre tu negocio o consulta...",
        submit: "Enviar Consulta",
        sending: "Enviando...",
        errorRequired: "Por favor completa todos los campos requeridos",
        errorSend: "Error al enviar el mensaje. Intenta nuevamente.",
      },
      options: [
        "Quiero ser distribuidor",
        "Representar mi marca en Argentina",
        "Consulta sobre productos",
        "Otro",
      ],
    },
    footer: {
      nav: {
        about: "Nosotros",
        services: "Servicios",
        brands: "Marcas",
        contact: "Contacto",
      },
      copyright: "© 2025 Distribuidora 1810 S.A · Buenos Aires, Argentina",
    },
  },
  en: {
    navbar: {
      items: {
        about: "About",
        services: "Services",
        brands: "Brands",
        contact: "Contact",
      },
      cta: "Become a Client",
      language: {
        es: "Español",
        en: "English",
      },
    },
    hero: {
      location: "Buenos Aires · Argentina",
      tagline: "Import · Distribution · Logistics · Marketing",
      ctaServices: "Our Services",
      ctaBrands: "See Brands",
      scroll: "Scroll",
      stats: {
        experience: "Years of experience",
        brands: "Premium brands",
        commitment: "Commitment",
        service: "Full-service",
      },
    },
    about: {
      title: "Who We Are",
      heading: "We connect the world to Argentine tables",
      paragraph1: "Distribuidora 1810 S.A is an Argentine company specialized in the import, distribution and commercialization of food, confectionery and consumer goods from leading international brands.",
      paragraph2: "Based in Belgrano, Buenos Aires, we work with our suppliers and customers to position products as leaders in their respective markets.",
      paragraph3: "Our philosophy is clear: enhance business opportunities through an end-to-end service that goes from import to activation at the point of sale.",
      quote: "We work so the best products in the world reach Argentine households.",
      facts: [
        { label: "Company Name", value: "Distribuidora 1810 S.A" },
        { label: "Activity", value: "Import & Distribution" },
        { label: "Headquarters", value: "Buenos Aires, Argentina" },
        { label: "Sectors", value: "Food · Confectionery" },
        { label: "Specialty", value: "Leading International Brands", gold: true },
        { label: "Model", value: "Direct Import · B2B", gold: true },
      ],
    },
    services: {
      title: "What We Do",
      heading: "Comprehensive services",
      description: "A complete ecosystem to bring your product to the Argentine market.",
      items: [
        {
          num: "01",
          title: "Import",
          desc: "We manage direct import from major global markets, ensuring regulatory compliance and optimal delivery times to the Argentine market.",
        },
        {
          num: "02",
          title: "Distribution",
          desc: "Wholesale distribution network with national coverage. We reach supermarkets, chains, distributors and specialty channels throughout the country.",
        },
        {
          num: "03",
          title: "Marketing & Trade",
          desc: "We design tailored marketing plans: tastings, POP materials, in-store activations and multichannel strategies to maximize brand presence.",
        },
        {
          num: "04",
          title: "Full Logistics",
          desc: "Complete logistics chain management: warehousing, inventory control, picking and last-mile distribution with full traceability.",
        },
        {
          num: "05",
          title: "Brand Representation",
          desc: "We are the local commercial arm of international brands. We act as exclusive representatives with deep knowledge of the Argentine market.",
        },
        {
          num: "06",
          title: "Commercial Consulting",
          desc: "We advise foreign brands entering the market: channel analysis, pricing, import regulation and go-to-market strategy.",
        },
      ],
    },
    brands: {
      title: "Portfolio",
      heading: "Brands we represent",
      description: "International leaders, available in Argentina thanks to our operation.",
      items: [
        { name: "Philadelphia", desc: "Cream Cheese · Kraft Heinz" },
        { name: "Sour Patch", desc: "Sour Candy · Mondelez" },
        { name: "Airheads", desc: "Premium Candy · Perfetti" },
        { name: "Swedish Fish", desc: "Gummies · Mondelez" },
        { name: "Reynolds", desc: "Aluminum Foil · Home" },
        { name: "Stash Tea", desc: "Premium Teas & Infusions" },
        { name: "Hunt's", desc: "Tomato Sauces · ConAgra" },
        { name: "Xtremes", desc: "Intense Sour Candy" },
        { name: "Papadopoulos", desc: "Imported Cookies" },
        { name: "Caprice", desc: "Imported Snacks" },
      ],
    },
    testimonials: {
      title: "Testimonials",
      heading: "What our partners say",
      items: [
        {
          quote: "Working with Distribuidora 1810 S.A transformed our presence in Argentina. Total professionalism from import to point of sale.",
          name: "Martín Rodríguez",
          designation: "Commercial Director · Supermercados del Sur",
        },
        {
          quote: "The speed with which they positioned our products in the Argentine market exceeded all expectations. They are the ideal partner.",
          name: "Sarah Johnson",
          designation: "Export Manager · Mondelez International",
        },
        {
          quote: "Their knowledge of the local market and distribution network is unmatched. They took our brand to another level.",
          name: "Carlos Méndez",
          designation: "CEO · Cadena Mayorista Norte",
        },
        {
          quote: "The full-service offering — from logistics to trade marketing — allowed us to focus on growth, not operations.",
          name: "Laura Fernández",
          designation: "Purchasing Manager · Hipermercados BA",
        },
      ],
    },
    why: {
      missionLabel: "Our Mission",
      missionHeading: "Position the best products in the world in the Argentine market",
      missionText: "We work with our suppliers and clients so that every brand we represent becomes a category leader, generating value across the commercial chain and bringing unique flavors to households.",
      location: "Belgrano, Buenos Aires · Argentina",
      title: "Why Choose Us",
      heading: "Differentiated advantages",
      pillars: [
        {
          num: "1",
          title: "+20 years of experience",
          desc: "Decades operating in the Argentine market give us deep knowledge of channels, business cycles and customs regulations.",
        },
        {
          num: "2",
          title: "Top international brands",
          desc: "We represent globally recognized brands, with access to high-demand products and differential margins for our customers.",
        },
        {
          num: "3",
          title: "360° full-service",
          desc: "From import and logistics to in-store marketing, a complete service that simplifies your operation.",
        },
        {
          num: "4",
          title: "Long-term relationships",
          desc: "Long-lasting ties with international manufacturers and local chains based on trust, transparency and measurable results.",
        },
      ],
      footer: "Strategic partners of leading brands in Argentina",
    },
    contact: {
      title: "Let's talk",
      heading: "Be part of our network",
      description: "If you are a distributor, supermarket, or have an international brand you want to position in Argentina, we would love to meet you and explore opportunities together.",
      details: [
        { label: "Address", value: "Belgrano, Buenos Aires, Argentina" },
        { label: "Email", value: "info@d1810.com" },
      ],
      form: {
        sentTitle: "Message sent!",
        sentText: "We will contact you shortly. Thank you for your interest.",
        name: "Name",
        company: "Company",
        email: "Email",
        inquiryType: "Inquiry Type",
        selectOption: "Select an option",
        message: "Message",
        placeholderName: "Your name",
        placeholderCompany: "Company name",
        placeholderEmail: "email@company.com",
        placeholderSelect: "Select an option",
        placeholderMessage: "Tell us about your business or inquiry...",
        submit: "Submit Inquiry",
        sending: "Sending...",
        errorRequired: "Please complete all required fields",
        errorSend: "Error sending message. Please try again.",
      },
      options: [
        "I want to be a distributor",
        "Represent my brand in Argentina",
        "Product inquiry",
        "Other",
      ],
    },
    footer: {
      nav: {
        about: "About",
        services: "Services",
        brands: "Brands",
        contact: "Contact",
      },
      copyright: "© 2025 Distribuidora 1810 S.A · Buenos Aires, Argentina",
    },
  },
} as const

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "es",
  setLocale: () => {},
  t: (path: string) => path,
})

const getTranslation = (locale: Locale, path: string) => {
  const parts = path.split(".")
  let current: any = translations[locale]
  for (const part of parts) {
    if (current == null) return path
    current = current[part]
  }
  return typeof current === "string" ? current : path
}

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es"
  const stored = localStorage.getItem("locale")
  return stored === "en" ? "en" : "es"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: (path: string) => getTranslation(locale, path) }),
    [locale],
  )

  return createElement(LanguageContext.Provider, { value }, children)
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function getLocaleData(locale: Locale) {
  return translations[locale]
}
