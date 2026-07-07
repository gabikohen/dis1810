# Configuración del envío de emails del formulario de contacto

El formulario usa [FormSubmit](https://formsubmit.co/) para enviar los mensajes a **info@d1810.com**, sin necesidad de backend ni de crear una cuenta.

## Activación (solo la primera vez)

1. Publicá el sitio (o probalo en local) y enviá el formulario de contacto una vez.
2. FormSubmit te va a enviar un email de confirmación a **info@d1810.com** con el asunto "Activate your FormSubmit account" (revisá spam si no aparece).
3. Abrí ese email y hacé clic en **"Activate Form"**.
4. Listo — desde ese momento todos los envíos del formulario llegan directo a la bandeja de entrada.

## Cómo funciona

- El código hace un `fetch` a `https://formsubmit.co/ajax/info@d1810.com` con los datos del formulario (ver `src/components/Contact.tsx`).
- No requiere claves ni cuentas, es completamente gratis.
- Si en algún momento querés cambiar el email de destino, editá la constante `CONTACT_EMAIL` en `src/components/Contact.tsx`.
