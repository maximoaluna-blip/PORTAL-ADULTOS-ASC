# PORTAL-ADULTOS-ASC

**Portal de Formación de Adultos** — Asociación Scouts de Colombia

Punto de entrada único a las líneas de formación digital para adultos voluntarios del movimiento scout.

🌐 **URL pública:** https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/

---

## ¿Qué es esto?

Es un landing simple que aglutina las distintas **líneas de formación** dirigidas a adultos en la ASC. Cada línea es una plataforma educativa independiente con su propio repositorio, backend y dashboard.

Este portal solo cumple un rol: **convocar y direccionar**. Una persona llega aquí, lee qué línea le aplica, hace clic, y entra a la plataforma de esa línea.

## Líneas disponibles hoy

| Línea | Estado | Cursos activos | URL de la plataforma |
|---|---|---|---|
| 📜 Política de Adultos en el Movimiento | ✅ Activa | 5 | https://maximoaluna-blip.github.io/INDUCCION-ADULTOS/ |
| 🎒 Programa de Jóvenes | ✅ Activa | 6 | https://maximoaluna-blip.github.io/INDUCCION-PROGRAMA-JOVENES/ |
| 🏛️ Desarrollo Institucional | ✅ Activa | 6 | https://maximoaluna-blip.github.io/INDUCCION-DESARROLLO-INSTITUCIONAL/ |
| 🛡️ Políticas Transversales | 🔒 Próximamente | — | — |

> La fuente de verdad de esta tabla es [`lineas.json`](lineas.json). Si editas el JSON, actualiza también esta tabla.

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
2. Construir su contenido **y crear en la raíz del repo de la línea su `index.html` (landing que lee `02-Plataforma-Web/cursos.json`) + `404.html`**. Sin el `index.html` raíz, GitHub Pages sirve la URL de la línea con 404 (la línea no queda "publicada" aunque los cursos existan). El `index.html` de la línea debe incluir el botón `.back-portal` ("← Plataforma ASC") que regresa a este portal.
3. Editar `lineas.json` aquí: agregar/actualizar la entrada con `id`, `name`, `icon`, `description`, `audience`, `url`, `status`, `coursesActive`, `coursesPlanned`, `color`. El portal **solo muestra el botón "Entrar a la Línea" cuando `status === "active"` Y `url` no es `null`**.
4. Commit + push (de este repo del portal). GitHub Pages redespliega y la línea aparece en el portal.
5. Actualizar la tabla "Líneas disponibles hoy" de este README para que coincida con el JSON.

**Cero código adicional** — el portal lee el JSON dinámicamente. Pero recuerda que son **dos repos**: el de la línea (cursos + landing) y este (catálogo). Publicar una línea toca ambos.

## Tecnología

- HTML5 + CSS3 + JavaScript vanilla
- Sin dependencias, sin build step
- Modo oscuro automático según preferencia del sistema
- Comparte la clave `localStorage.rover-theme` con las plataformas hermanas para sincronizar el tema visual
- Tema base: morado #622599 + amarillo #FFE675 (identidad visual ASC)

## Contacto

Asociación Scouts de Colombia · Plataforma de Formación de Adultos
