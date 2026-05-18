# Arquitectura del Ecosistema Formativo · ASC

> Documento maestro de cómo se conectan los repositorios, qué hace cada uno, dónde vive cada componente y por qué se decidió así.

**Versión:** 1.0 · **Última actualización:** 2026-05-17

---

## 1. Vista panorámica

El ecosistema formativo de adultos voluntarios de la Asociación Scouts de Colombia está compuesto por **cuatro repositorios independientes** que se complementan entre sí.

```
                       ┌─────────────────────────┐
                       │  PORTAL-ADULTOS-ASC     │  ◄── Landing público
                       │  (este repo)            │      Entrada para estudiantes
                       │  lineas.json (4 líneas) │
                       └────────────┬────────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
   ┌─────────────────────┐  ┌────────────────┐   ┌──────────────────────┐
   │ INDUCCION-ADULTOS   │  │ INDUCCION-     │   │ (futuras líneas)     │
   │ Línea Política de   │  │ DESARROLLO-    │   │ - Programa de        │
   │ Adultos             │  │ INSTITUCIONAL  │   │   Jóvenes            │
   │                     │  │                │   │ - Políticas          │
   │ 5 cursos activos    │  │ 1 curso piloto │   │   Transversales      │
   └─────────┬───────────┘  └────────┬───────┘   └──────────────────────┘
             │                       │
             └───────────┬───────────┘
                         │
                         ▼
            ┌──────────────────────────────────────┐
            │ Apps Script + Google Sheet           │
            │ (backend compartido durante piloto)  │
            └──────────────────────────────────────┘
                         ▲
                         │ ?action=stats
                         │
            ┌──────────────────────────────────────┐
            │ PORTAL-ADMIN-ASC                     │  ◄── Dashboard unificado
            │ dashboard.html?linea=X               │      con filtro por línea
            └──────────────────────────────────────┘
```

---

## 2. Los 4 repositorios

### 2.1 `PORTAL-ADULTOS-ASC` (este repo) — Landing pública multi-línea

| Aspecto | Detalle |
|---|---|
| **Propósito** | Punto de entrada público para estudiantes. Catálogo visual de las 4 líneas formativas. |
| **URL** | https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/ |
| **Audiencia** | Adultos voluntarios scout buscando formación. |
| **Contenido principal** | `index.html`, `lineas.json` (catálogo), `MARCO-METODOLOGICO-PEDAGOGICO.md` (doc pedagógico transversal). |
| **Lógica** | Carga `lineas.json` y renderiza tarjetas. Cada tarjeta enlaza a la URL pública de la línea correspondiente (otro repo). |

### 2.2 `INDUCCION-ADULTOS` — Línea Política de Adultos en el Movimiento

| Aspecto | Detalle |
|---|---|
| **Propósito** | Plataforma con los 5 cursos del Nivel 1 de la Línea Política de Adultos. |
| **URL** | https://maximoaluna-blip.github.io/INDUCCION-ADULTOS/ |
| **Audiencia** | Consejeros, dirigentes, miembros del consejo de grupo. |
| **Cursos activos** | Bienvenida, Política Marco, Ciclo del Adulto, 7 Competencias, Plan Personal. |
| **Backend** | Apps Script `1TTJ2VjN...` (compartido durante el piloto). |
| **Estado** | ✅ Piloto desplegado, 5 cursos activos. |

### 2.3 `INDUCCION-DESARROLLO-INSTITUCIONAL` — Línea Desarrollo Institucional

| Aspecto | Detalle |
|---|---|
| **Propósito** | Plataforma con los 24 cursos de la Línea Desarrollo Institucional (gobernanza, planeación, finanzas, salud institucional, los 8 ámbitos PNDI 2017). |
| **URL** | https://maximoaluna-blip.github.io/INDUCCION-DESARROLLO-INSTITUCIONAL/ |
| **Audiencia** | Jefes de grupo, consejos, consejeros, comisionados, miembros de cortes de honor y comisiones de vigilancia y control. |
| **Cursos activos** | 1 (Bienvenida al DI, piloto). 5 más planeados para el Nivel 1. |
| **Backend** | Mismo Apps Script que Adultos (compartido durante el piloto). |
| **Estado** | 🟡 Piloto del Curso 1 desplegado, 5 cursos del Nivel 1 por construir. |

### 2.4 `PORTAL-ADMIN-ASC` — Dashboard administrativo unificado

| Aspecto | Detalle |
|---|---|
| **Propósito** | Panel administrativo único para ver KPIs, registros, certificados y exportar CSV de todas las líneas. |
| **URL** | https://maximoaluna-blip.github.io/PORTAL-ADMIN-ASC/ |
| **Audiencia** | Equipo administrativo de la plataforma. |
| **Contenido principal** | `index.html` (landing con tarjetas por línea), `dashboard.html` (dashboard único con filtro por línea), `dashboards.json` (config). |
| **Lógica** | Consulta el Apps Script con `?action=stats` y filtra los registros por la línea activa (parámetro `?linea=X`). |
| **Estado** | ✅ Operativo. |

---

## 3. Flujos principales

### 3.1 Flujo del estudiante

```
1. Estudiante visita PORTAL-ADULTOS-ASC
2. Click en una línea (ej. "Política de Adultos")
3. Abre INDUCCION-ADULTOS (otra URL)
4. Selecciona un curso del catálogo
5. Completa el registro → POST al Apps Script
6. Apps Script guarda en Google Sheet
7. Estudiante avanza por las lecciones
8. Cada módulo completado → POST al Apps Script
9. Al final → genera certificado con código ASC-YYYY-XXXXX
```

### 3.2 Flujo del administrador

```
1. Admin abre PORTAL-ADMIN-ASC
2. Click en "Vista global" o en una línea específica
3. dashboard.html consulta Apps Script con ?action=stats
4. Apps Script lee Google Sheet, calcula agregados + arrays detallados
5. dashboard.html filtra por línea (si aplica) y renderiza:
   - KPIs (registrados, certificados, tasa, promedio)
   - Tabla de registros
   - Tabla de certificados
   - Gráfico por módulo
```

### 3.3 Flujo de actualización del backend

```
1. Editar INDUCCION-ADULTOS/05-Generador-Cursos/google-apps-script.js
2. Validar: node 05-Generador-Cursos/verificar-backend.js
3. Copiar a .clasp-workspace/Código.js
4. clasp push -f
5. Crear deployment nuevo desde UI web (si aplica) o actualizar existente
6. Si cambia URL: actualizar BACKEND.md + build-course.js + recompilar
7. Re-validar: verificar-backend.js → 4/4 OK
8. Push de los repos afectados
```

---

## 4. Decisiones arquitecturales clave

### 4.1 Por qué repos separados por línea

| Beneficio | Implicación |
|---|---|
| **Aislamiento de despliegues** | Un push de un curso de Adultos no recompila DI. |
| **Catálogos independientes** | Cada línea tiene su `cursos.json` propio. |
| **Branding por línea** | Cada línea tiene paleta de color propia (#622599 Adultos, #1565C0 DI). |
| **Escalabilidad** | Agregar nuevas líneas no toca código de las existentes. |
| **Permisos diferenciados (futuro)** | Cada línea puede tener admins distintos cuando se necesite. |

### 4.2 Por qué backend compartido (durante piloto)

| Pro | Contra |
|---|---|
| Una sola fuente de verdad | Un bug en el backend afecta a ambas líneas |
| Backup único | Volumen acumulado puede saturar cuotas de Apps Script |
| Dashboard unificado más simple | Permisos administrativos no se pueden separar |
| Costo cero | (Sin contra estructural por ahora) |

**Cuándo separar:** ver criterios en `INDUCCION-ADULTOS/BACKEND.md` y `INDUCCION-DESARROLLO-INSTITUCIONAL/BACKEND.md`.

### 4.3 Por qué dashboard unificado

Antes había un `dashboard-admin.html` por línea, pero ambos consultaban el mismo backend y mostraban los mismos datos (porque el backend es uno solo). Eso era redundancia pura. Ahora:

- **Un solo `dashboard.html`** en PORTAL-ADMIN-ASC con filtro por línea (querystring `?linea=X`).
- Los dashboards viejos de cada línea son páginas de redirect (preservan URLs antiguas).
- Si en el futuro las líneas se separan, podemos volver a tener dashboards independientes sin tocar la arquitectura.

### 4.4 Por qué `lineas.json` y `dashboards.json` separados

- **`lineas.json`** (en PORTAL-ADULTOS-ASC): catálogo público de las 4 líneas, visible para estudiantes. Su CTA enlaza a la URL pública de cada línea.
- **`dashboards.json`** (en PORTAL-ADMIN-ASC): catálogo administrativo, incluye además los `courseIds` de cada línea para que el filtro del dashboard funcione.

Aunque hay solapamiento (los nombres, iconos, colores), conceptualmente sirven a audiencias distintas (estudiantes vs admins). Mantenerlos separados evita acoplar dos contextos diferentes.

---

## 5. Tecnología por capa

| Capa | Tecnología | Por qué |
|---|---|---|
| **Frontend** | HTML + CSS + JS vanilla (sin frameworks) | Cero build step, GitHub Pages directo, fácil debug. |
| **Hosting** | GitHub Pages | Gratis, automático, suficiente para el tráfico esperado. |
| **Backend datos** | Google Apps Script + Google Sheets | Cero costo, escala razonable, conocido por scouts (admins pueden ver el sheet directamente). |
| **CI/CD** | git push → GitHub Pages | Sin pipelines complejos. Cada push redesplega en <1 min. |
| **Despliegue del Apps Script** | `clasp` CLI | Permite versionar el código del Apps Script en el mismo repo. |
| **Generación de cursos** | Node.js + scripts custom (`build-course.js`) | JSON como fuente de verdad, HTML como artefacto generado. |
| **Certificados PDF** | html2pdf.js + html2canvas + jsPDF (cliente) | Cero dependencias del servidor. |
| **Persistencia local** | `localStorage` (claves namespaced por curso) | Funciona offline, recupera estado entre sesiones. |

---

## 6. Convenciones cross-repo

### 6.1 Branding por línea

| Línea | Color principal | Color secundario | Icono |
|---|---|---|---|
| Política de Adultos | `#622599` (morado scout) | `#FFE675` (amarillo) | 📜 |
| Desarrollo Institucional | `#1565C0` (azul institucional) | `#FDD835` (amarillo dorado) | 🏛️ |
| Programa de Jóvenes (futuro) | `#FF9800` (naranja) | — | 🎒 |
| Políticas Transversales (futuro) | `#4CAF50` (verde) | — | 🛡️ |
| Portal Admin | `#B71C1C` (burdeos) | `#FFC107` (amarillo) | 🔐 |

### 6.2 IDs y namespaces

- **courseId** — slug en kebab-case único en todo el ecosistema. Convención: `<linea>-<nombre>` o simplemente nombre del curso. Ejemplo: `bienvenida-adultos`, `bienvenida-desarrollo-institucional`.
- **AUTH_TOKEN** — token para POST al backend. Actualmente `ADULTOS_ASC_2026` compartido.
- **Certificado** — formato `ASC-YYYY-XXXXX` (5 caracteres alfanuméricos aleatorios). Único cross-línea.
- **localStorage** — claves namespace por curso (`course_<courseId>_<key>`). Claves globales: `globalUserProfile`, `competencyProfile`, `rover-theme`.

### 6.3 Marco metodológico compartido

Todos los cursos siguen los mismos principios pedagógicos documentados en [`MARCO-METODOLOGICO-PEDAGOGICO.md`](MARCO-METODOLOGICO-PEDAGOGICO.md):

- Lecciones cortas (3-7 min)
- Una idea central por lección
- Lenguaje conversacional
- Reflexión personal escrita
- Mini-quiz de 2 preguntas
- Logros (achievements)
- Certificado verificable

---

## 7. Documentos clave por repositorio

| Documento | Adultos | DI | Portal Adultos | Portal Admin |
|---|---|---|---|---|
| `README.md` | ✅ | ✅ | ✅ | ✅ |
| `INDICE-PROYECTO.md` | ✅ | ✅ | (este `ARQUITECTURA.md` cumple ese rol) | — |
| `BACKEND.md` | ✅ | ✅ | (no aplica, no toca backend) | ✅ |
| `CREAR-CURSO.md` | ✅ | ✅ | — | — |
| `AUDITORIA.md` | ✅ | ✅ | — | — |
| `MARCO-METODOLOGICO-PEDAGOGICO.md` | (refencia este) | (refencia este) | ✅ | (refencia este) |
| `Plan-de-Formacion-*.md/.docx` | ✅ | ✅ | — | — |
| `Recomendaciones-Cowork-*.md` | ✅ | ✅ | — | — |
| `ARQUITECTURA.md` (este) | (refencia este) | (refencia este) | ✅ | (refencia este) |
| `FLUJOS-AUTONOMOS-Y-SCRIPTS.md` | (refencia este) | (refencia este) | ✅ | (refencia este) |

---

## 8. URLs canónicas

| Componente | URL |
|---|---|
| 🚪 Portal estudiantes | https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/ |
| 📜 Línea Adultos | https://maximoaluna-blip.github.io/INDUCCION-ADULTOS/ |
| 🏛️ Línea DI | https://maximoaluna-blip.github.io/INDUCCION-DESARROLLO-INSTITUCIONAL/ |
| 🔐 Portal Admin | https://maximoaluna-blip.github.io/PORTAL-ADMIN-ASC/ |
| 📊 Dashboard vista global | https://maximoaluna-blip.github.io/PORTAL-ADMIN-ASC/dashboard.html |
| 📜 Dashboard Adultos | https://maximoaluna-blip.github.io/PORTAL-ADMIN-ASC/dashboard.html?linea=politica-adultos |
| 🏛️ Dashboard DI | https://maximoaluna-blip.github.io/PORTAL-ADMIN-ASC/dashboard.html?linea=desarrollo-institucional |

---

## 9. Evolución prevista

### 9.1 Corto plazo

- Completar Cursos 2-6 del Nivel 1 de DI (~6 meses).
- Pilotaje continuo de Política de Adultos.
- Agregar token de auth al GET `?action=stats` (seguridad).

### 9.2 Mediano plazo

- Construir Niveles 2 y 3 de cada línea según demanda.
- Lanzar Programa de Jóvenes y Políticas Transversales (4 repos en total).
- Evaluar si el backend compartido sigue siendo viable o requiere separación.

### 9.3 Largo plazo

- Integración con Talento 360° (plataforma nacional ASC) si aplica.
- Internacionalización del marco (otros países OMMS).
- Dashboard de comparativas inter-grupo / inter-región.

---

_Documento maestro de arquitectura del ecosistema formativo de adultos voluntarios — Asociación Scouts de Colombia._
