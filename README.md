# PORTAL-ADULTOS-ASC

**Portal de Formación de Adultos** — Asociación Scouts de Colombia

Punto de entrada único a las líneas de formación digital para adultos voluntarios del movimiento scout.

🌐 **URL pública:** https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/

---

## ¿Qué es esto?

Es un landing simple que aglutina las distintas **líneas de formación** dirigidas a adultos en la ASC. Cada línea es una plataforma educativa independiente con su propio repositorio, backend y dashboard.

Este portal solo cumple un rol: **convocar y direccionar**. Una persona llega aquí, lee qué línea le aplica, hace clic, y entra a la plataforma de esa línea.

## Líneas disponibles hoy

| Línea | Estado | URL de la plataforma |
|---|---|---|
| 📜 Política de Adultos en el Movimiento | ✅ Activa | https://maximoaluna-blip.github.io/INDUCCION-ADULTOS/ |
| 🏛️ Desarrollo Institucional | 🔒 Próximamente | — |
| 🛡️ Políticas Transversales | 🔒 Próximamente | — |

## Estructura del repo

```
PORTAL-ADULTOS-ASC/
├── index.html          ← Landing principal con cards
├── 404.html            ← Página de error custom
├── lineas.json         ← Catálogo de líneas (editable)
├── assets/
│   ├── logo-asc.png
│   ├── logo-vallescout.png
│   ├── favicon.svg
│   └── theme-toggle.js
└── README.md
```

## ¿Cómo agregar una nueva línea?

1. Crear el repo de la nueva línea (ej. `INDUCCION-DESARROLLO-INSTITUCIONAL`).
2. Construir su contenido y desplegar a GitHub Pages.
3. Editar `lineas.json` aquí: agregar una nueva entrada con `id`, `name`, `icon`, `description`, `audience`, `url`, `status`, `coursesActive`, `coursesPlanned`, `color`.
4. Commit + push. GitHub Pages redespliega y la línea aparece en el portal.

**Cero código adicional** — el portal lee el JSON dinámicamente.

## Tecnología

- HTML5 + CSS3 + JavaScript vanilla
- Sin dependencias, sin build step
- Modo oscuro automático según preferencia del sistema
- Comparte la clave `localStorage.rover-theme` con las plataformas hermanas para sincronizar el tema visual
- Tema base: morado #622599 + amarillo #FFE675 (identidad visual ASC)

## Contacto

Asociación Scouts de Colombia · Plataforma de Formación de Adultos
