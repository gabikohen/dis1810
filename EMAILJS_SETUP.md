# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar el envío de emails:

### 1. Crear cuenta en EmailJS (Gratis)
- Ve a https://www.emailjs.com/
- Crea una cuenta gratuita (puedes usar tu email de Gmail o crear una nueva)
- Verifica tu email

### 2. Obtener tu Public Key
- En el panel de EmailJS, ve a **Account > API Keys**
- Copia tu **Public Key** (formato: ej: `ab1c2d3e4f5g6h7i8j9k0l1m`)

### 3. Crear un Email Service
- Ve a **Email Services** en el panel izquierdo
- Haz clic en **"Create New Service"**
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta de email
- Copia el **Service ID** (formato: ej: `service_abc123def456`)

### 4. Crear una Template de Email
- Ve a **Email Templates**
- Haz clic en **"Create New Template"**
- Usa estos campos en la plantilla:
  ```
  From: {{from_email}}
  Name: {{from_name}}
  Company: {{company}}
  Inquiry Type: {{inquiry_type}}
  Message:
  {{message}}
  ```
- Copia el **Template ID** (formato: ej: `template_abc123def456`)

### 5. Actualizar el código
- Abre `src/components/Contact.tsx`
- Reemplaza estas líneas en la parte superior:

```typescript
// TODO: Reemplaza estas credenciales con las tuyas en https://www.emailjs.com
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY_AQUI"
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID_AQUI"
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID_AQUI"
```

### 6. Actualizar el email destino
- En la función `handleSubmit`, busca:
  ```typescript
  to_email: "tu-email@ejemplo.com", // Reemplaza con tu email
  ```
- Reemplázalo con tu email real

### 7. Guardar y probar
- Guarda los cambios
- El servidor dev se recargará automáticamente
- Abre el formulario en el navegador y prueba enviando un mensaje

## Notas importantes:
- El plan gratuito de EmailJS permite 200 emails/mes
- Los emails se envían directamente desde el navegador del usuario
- No necesitas servidor backend

## Ejemplo de credenciales configuradas correctamente:
```typescript
const EMAILJS_PUBLIC_KEY = "9j2k3l4m5n6o7p8q9r0s1t2u"
const EMAILJS_SERVICE_ID = "service_abc123def456"
const EMAILJS_TEMPLATE_ID = "template_xyz789abc123"
```

¡Listo! El formulario ahora enviará emails reales a tu casilla.
