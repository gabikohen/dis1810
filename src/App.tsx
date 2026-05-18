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
import { LanguageProvider } from "@/lib/i18n"

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans">
        <Cursor />
        <SiteNavbar />
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
      </div>
    </LanguageProvider>
  )
}
