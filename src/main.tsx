import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// El sitio no usa Service Worker; desregistra cualquiera que haya quedado
// de una versión anterior, ya que puede interceptar y colgar fetch() (ej. el formulario de contacto).
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister())
  })
  if ("caches" in window) {
    caches.keys().then(keys => keys.forEach(key => caches.delete(key)))
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
