import Cursor from "@/components/Cursor"
import SiteNavbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Ticker from "@/components/Ticker"
import About from "@/components/About"
import Services from "@/components/Services"
import Brands from "@/components/Brands"
import Testimonials from "@/components/Testimonials"
import Why from "@/components/Why"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { AnimatePresence, motion } from "framer-motion"
import { LanguageProvider, useLanguage } from "@/lib/i18n"

function AppContent() {
  const { locale } = useLanguage()

  return (
    <div className="font-sans">
      <Cursor />
      <SiteNavbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          <main>
            <Hero />
            <Ticker />
            <About />
            <Services />
            <Brands />
            <Testimonials />
            <Contact />
            <Why />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
