# Marco Metodológico y Pedagógico

## Plataforma de Formación de Adultos — Asociación Scouts de Colombia

> Documento que sistematiza las decisiones pedagógicas y estructurales que sostienen la propuesta formativa para adultos voluntarios del movimiento scout, su lógica, su justificación y las herramientas que la operan.

**Versión 2.0 · 2 de agosto de 2026** (v1 inicial: mayo de 2026)

> Este documento es la **rúbrica de la auditoría pedagógica**: `/auditar-pedagogia` mide los cursos contra sus §2.3–2.5 y §8. Mantenerlo al día no es cosmético — es mantener el criterio con el que se evalúa la plataforma.

---

## Tabla de contenidos

1. [Propósito del documento](#1-propósito-del-documento)
2. [Condiciones pedagógicas](#2-condiciones-pedagógicas)
3. [Condiciones estructurales](#3-condiciones-estructurales)
4. [Arquitectura formativa de la asociación](#4-arquitectura-formativa-de-la-asociación)
5. [Anatomía de un curso](#5-anatomía-de-un-curso)
6. [Tipos de sección y herramientas pedagógicas](#6-tipos-de-sección-y-herramientas-pedagógicas)
7. [Lógica iterativa: cómo llegamos aquí](#7-lógica-iterativa-cómo-llegamos-aquí)
8. [Justificación pedagógica](#8-justificación-pedagógica)
9. [Línea Política de Adultos: prueba piloto](#9-línea-política-de-adultos-prueba-piloto)
10. [Próximas etapas](#10-próximas-etapas)
11. [Glosario](#11-glosario)
12. [Referencias](#12-referencias)

---

## 1. Propósito del documento

Este documento institucionaliza el **marco metodológico y pedagógico** sobre el cual se construyó —y se seguirá construyendo— la plataforma de formación digital para adultos voluntarios de la Asociación Scouts de Colombia (ASC).

Su intención es triple:

1. **Hacer explícitas las decisiones** pedagógicas y estructurales que tomamos, para que cualquier persona que se sume al proyecto entienda no solo _qué_ hicimos sino _por qué_.
2. **Habilitar la replicación** de la metodología en futuras líneas formativas, tanto dentro como fuera de la línea Política de Adultos.
3. **Servir de referencia** para evaluación, auditoría y mejora continua del proceso formativo.

Está dirigido a: comisiones nacionales y regionales, equipos formadores, dirigentes con responsabilidad sobre formación, auditores de calidad y, en general, cualquier persona que necesite comprender la propuesta a profundidad.

---

## 2. Condiciones pedagógicas

Estas son las decisiones de diseño pedagógico que aplicamos transversalmente a toda la plataforma. Son la base sobre la cual se construye cada curso.

### 2.1 Duración

- **Cursos completos:** entre **20 y 40 minutos**. La intención es que un adulto pueda completar un curso entero en una sola sesión si dispone de ese tiempo, pero también que pueda fragmentarlo si no.
- **Lecciones individuales:** entre **3 y 8 minutos**, con un objetivo de **5–7 minutos** como duración óptima. Esta granularidad permite que la lección se complete en cualquier ventana corta de tiempo (entre reuniones, en transporte público, antes de empezar una actividad scout).

#### El multimedia cuenta dentro de la duración declarada

La duración que se le anuncia al estudiante (`⏱️ N minutos`) es el **tiempo total real**: lectura + video + actividad + reflexión + quiz. No solo la lectura.

> Regla añadida en v2 tras un caso real: una lección declaraba *"5 minutos"* y contenía **15:05 de video** — 23 minutos reales; el curso entero declaraba 25 minutos y tenía 19:15 solo en video. El adulto abre esperando 5 minutos, se encuentra 18 y abandona a la mitad. Es precisamente lo que el microlearning (§8.2) y la auto-eficacia (§8.6) buscan evitar: prometer una duración que no se cumple destruye la confianza en el resto de la ruta.

- Medir con `ffprobe`, no estimar.
- Cada `video` declara su duración en el `caption` (`"Voces parte 1 — Eliana, Marta, Lina · 5:38"`), para que el estudiante decida si le alcanza el tiempo.
- Si con el video la lección pasa de 7–8 minutos: partirla, o marcar el video como opcional con un resumen en texto.

### 2.2 Modularidad y autocontención

- **Cada lección es terminable de forma independiente.** No depende del estado de ánimo ni del momento del día.
- **El progreso se autoguarda** después de cada lección completada. El estudiante puede salir y volver sin perder avance.
- **No hay "tareas para la casa"** entre lecciones. Lo que se debe hacer durante la lección, se hace durante la lección.

### 2.3 Lenguaje

- **Conversacional, claro, aterrizado.** Se prefiere _"un adulto del movimiento"_ a _"un sujeto del proceso de gestión de adultos"_.
- **Tutear al estudiante.** El curso habla con la persona, no a un cargo abstracto.
- **Ejemplos concretos del día a día del grupo scout.** Cada concepto se ilustra con una situación reconocible (la mamá tesorera, el rover ayudante, la reunión del consejo).
- **Citas oficiales plegables (`policy-quote`)** cuando se requiere precisión doctrinal. El estudiante puede expandirlas si quiere ver la redacción exacta de la política, o ignorarlas si prefiere quedarse con la explicación práctica.

Esta es una decisión deliberada y se sostiene en el principio de _aprendizaje significativo_ de la PNAM (Cap. 3): _"Vincula los conocimientos, habilidades y actitudes que sean necesarios para que se puedan aplicar a situaciones o problemas a los que se enfrentan en sus actividades cotidianas."_

### 2.4 Estructura base de una lección

Toda lección sigue, con flexibilidad, la siguiente estructura:

1. **Recuadro de orientación:** tiempo estimado y _una sola idea central_.
2. **Cuerpo conceptual:** desarrollo de la idea, con ejemplos y, cuando aplica, un cuadro plegable de cita oficial.
3. **(Opcional) Actividad interactiva:** subir foto, autodiagnóstico, ejercicio de reflexión.
4. **Reflexión personal:** una pregunta abierta que conecta el contenido con la práctica del estudiante en su grupo. Se escribe en un campo de texto que se guarda automáticamente.
5. **Mini-quiz:** **2–3 preguntas** de comprensión (no de memoria). El estudiante necesita ≥70 % para avanzar a la siguiente lección. El mínimo de 2 lo exige el generador: con una sola pregunta el umbral se vuelve binario y deja de discriminar.

### 2.5 Evaluación

- **Mini-quizzes** al final de cada lección. Son preguntas que evalúan _comprensión_ —no memorización mecánica— y suelen plantear pequeños escenarios ("Una mamá del consejo dice X, ¿qué le respondes según esta lección?").

#### Las 5 reglas medibles del quiz

> Este principio estuvo enunciado sin criterio verificable entre mayo y agosto de 2026. Al medir las tres líneas en agosto, todas habían producido **el mismo defecto**: el **48 %** de las respuestas correctas estaba copiado del texto de su propia lección, y la correcta era la opción más larga en el **87–90 %** de las preguntas — es decir, se podía aprobar eligiendo siempre la más larga sin leer nada. Un principio pedagógico sin regla medible no estandariza: describe una aspiración.

| # | Regla | Verificación |
|---|---|---|
| 1 | Ninguna opción lleva `<strong>` ni `<em>` (se renderizan en negrita y delatan la correcta) | ⚙️ el build rechaza |
| 2 | La correcta no es la más larga en más de la mitad de las preguntas del curso | ⚙️ el build avisa |
| 3 | Mínimo 2 preguntas por quiz, 3 opciones cada una | ⚙️ el build rechaza |
| 4 | El enunciado plantea un escenario, no pide recitar | 👁️ auditoría pedagógica |
| 5 | La respuesta correcta no está calcada del texto de su lección | 👁️ auditoría pedagógica |

**Medir longitud, no posición.** `engine.js` baraja las opciones de cada pregunta en cada sesión (Fisher-Yates, conservando el índice original), así que el orden en que se escriben en el JSON es irrelevante para el estudiante — verificado en navegador: la respuesta correcta apareció repartida 3/7/4 en una carga y 4/3/7 en la siguiente sobre el mismo curso. Lo que el barajado **no** neutraliza es la longitud, porque viaja pegada a la opción.

- **Umbral real:** el quiz de lección exige ≥70 % para avanzar. Con 2 preguntas eso equivale a acertar las dos; conviene decírselo así al estudiante en vez de anunciar un 70 % que en la práctica es 100 %.
- **Reflexiones escritas** por lección. Son personales y privadas, no se califican; sirven al estudiante para hacer suyas las ideas.
- **Autoevaluación interactiva** (sección `self-assessment`) cuando el curso lo justifica. Por ejemplo, en el curso de Las 7 Competencias Esenciales el estudiante se califica grado 1–4 en cada competencia y obtiene un perfil personal.
- **Certificación al completar el curso.** Se emite un certificado con código verificable público (`ASC-AAAA-XXXXX`).

### 2.6 Ayudas y apoyos

- **Recuperación de avance por correo.** Si el estudiante cambia de dispositivo o limpia su navegador, ingresa su correo y la plataforma reconstruye su progreso.
- **Pre-llenado del registro entre cursos.** Si ya se inscribió en una línea o curso anterior, sus datos vienen pre-cargados al inscribirse en el siguiente. Solo confirma o ajusta.
- **Modo oscuro automático** según la preferencia del sistema operativo, con opción de cambio manual.
- **Diseño responsivo:** funciona igual en celular, tableta y computador.
- **Lazy loading de videos:** solo se descarga el video del módulo activo, no todos a la vez. Esto reduce el consumo de datos en plan limitado.

### 2.7 Accesibilidad

- Subtítulos disponibles en los videos (cuando el contenido lo requiere).
- Contraste de colores cumpliendo lineamientos WCAG en lo razonable.
- Imágenes con texto alternativo (`alt` text).
- Navegación por teclado funcional.
- Idioma único: español, registro neutro colombiano.

### 2.8 Privacidad

- Las **reflexiones personales** se guardan localmente en el navegador del estudiante; nadie más las ve a menos que el estudiante decida compartirlas.
- El **autodiagnóstico de competencias** es privado; el resultado solo se muestra al estudiante en su navegador.
- Los **datos de registro** (nombre, edad, grupo, región, correo, motivación) se almacenan en el Google Sheet privado de la línea, accesible solo por el equipo administrador.
- **No se publican datos personales** en el frontend. Solo el código del certificado es público (para verificación) pero no asocia código con nombre en la URL pública.

---

## 3. Condiciones estructurales

Son las decisiones técnicas que sostienen las condiciones pedagógicas. Existen para que las condiciones pedagógicas sean operables y sostenibles en el tiempo.

### 3.1 JSON como fuente de verdad

Cada curso vive como un archivo JSON estructurado en `borradores/`. Ese archivo es la **única fuente de verdad** del contenido del curso. Los HTML que se sirven al estudiante son artefactos generados desde ese JSON mediante un compilador (`build-course.js`).

**Implicación:** un cambio de redacción en una lección son 30 segundos: editar el JSON, ejecutar el build, hacer push. No hay que tocar HTML directamente jamás.

### 3.2 Motor centralizado, contenido distribuido

- El motor de comportamiento (`engine.js`) y los estilos (`styles.css`) están en `templates/` y se **inlinean** en cada HTML al hacer build. Un curso queda autocontenido en un solo archivo HTML.
- Esto significa que mejoras al motor (nuevo tipo de sección, fix de bug, mejora visual) se aplican a todos los cursos al hacer rebuild.

### 3.3 Backend independiente por línea

Cada línea tiene su propia plataforma con:

- **Repositorio Git** independiente (alojado en GitHub).
- **Hosting** en GitHub Pages (gratuito, sin servidor que mantener).
- **Backend** en Google Apps Script con Google Sheets como base de datos.
- **Backup automático** nocturno del Sheet a Google Drive.
- **Dashboard administrativo** para consulta de KPIs.

**Por qué independencia:** cada línea tiene una comisión funcional dueña dentro de la ASC. Que cada una opere su plataforma alinea la herramienta con la estructura organizacional. Una falla técnica en una línea no afecta a otras.

### 3.4 Portal centralizado de discovery

Un sitio único (`PORTAL-ADULTOS-ASC`) actúa como **landing de entrada** para que cualquier persona vinculada a la ASC encuentre la línea que le aplica. El portal es solo direccionamiento; las plataformas de cada línea operan independientemente.

**Por qué un portal:** sin portal, hay 4 URLs sueltas que nadie sabe dónde encontrar. Con portal, hay 1 URL "oficial" para compartir y desde ahí la persona elige.

### 3.5 Compilación reproducible

Cualquiera con Node.js puede ejecutar `node build-course.js <courseId>` y obtener exactamente el mismo HTML que está en producción. Esto facilita auditoría y permite que el proyecto sobreviva al cambio de personas en su equipo.

### 3.6 Documentación operativa

Los procesos están codificados en documentos rectores que viven en el repo raíz (`DOCS-MAESTRAS-ASC`) y en cada línea:

| Documento | Qué codifica |
|---|---|
| **`MARCO-METODOLOGICO-PEDAGOGICO.md`** | Este documento: el *porqué* pedagógico. Rúbrica de la auditoría pedagógica |
| **`MANUAL-CREACION-CURSOS.md`** | Procedimientos universales: pipeline, patrones pedagógicos, checklist base |
| **`CHECKLIST-CALIDAD-CURSO.md`** | Definition of Done. Su §L-0 son las 3 auditorías, la compuerta bloqueante |
| **`PLANTILLA-CURSO.md`** | Las 10 secciones canónicas del diseño `.md` de un curso |
| **`course-schema.json`** (por línea) | Contrato técnico del JSON. Lo valida `build-course.js` antes de compilar |
| **`CREAR-CURSO.md`** (por línea) | Instancia del manual con lo propio de cada línea |
| **`verificar-consistencia.py`** | Chequeo manual cross-repo antes de publicar (ADR-023) |
| **`AUDITORIA.md`** (por línea) | Revisión de código a demanda — distinta de las 3 auditorías de contenido |

---

## 4. Arquitectura formativa de la asociación

La estructura es jerárquica y tiene cuatro niveles de organización:

### 4.1 Portal

La capa más externa. Es la URL pública de entrada. Contiene una breve presentación de la propuesta formativa y enlaces a cada Línea.

### 4.2 Líneas

Cada **Línea** corresponde a un campo temático mayor de la formación de adultos. Son operadas por la comisión funcional correspondiente. Hoy se proyectan cuatro:

| Línea | Audiencia | Estado (02-ago-2026) |
|---|---|---|
| 📜 Política de Adultos en el Movimiento | Consejeros, dirigentes, miembros del consejo de grupo | **Activa** — Nivel 1 completo (5 cursos), con las 3 auditorías pasadas |
| 🎒 Programa de Jóvenes | Dirigentes de manada, tropa, comunidad y clan | **Activa** — Nivel 1 completo (7 cursos) + Nivel 2 iniciado. 8 cursos |
| 🏛️ Desarrollo Institucional | Jefes de grupo, consejos, comisionados | **Activa** — Nivel 1 completo (6 cursos), con las 3 auditorías pasadas |
| 🛡️ Políticas Transversales | Toda persona adulta vinculada (Safe from Harm, Diversidad, Motivación, etc.) | Por construir — hay esqueleto en `_TEMPLATE-LINEA/` |

Cada Línea tiene su propia plataforma técnica (su repositorio, su backend, su dashboard).

### 4.3 Niveles dentro de una línea

Cada línea se organiza en hasta **cuatro niveles**:

- **Nivel 1 — Fundamentación:** ruta común para todo adulto que entra a la línea. Marco conceptual y herramientas básicas.
- **Nivel 2 — Profundización por fase / tema:** cursos que profundizan ámbitos específicos del nivel 1.
- **Nivel 3 — Especialización por cargo:** cursos para roles concretos.
- **Nivel 4 — Transversales:** temas que aplican a toda la línea de manera continua.

Esta organización en niveles ofrece una **progresión lógica recomendada**. Pero **ningún curso bloquea el acceso a otro**: desde el ADR-019 (11-jul-2026) no hay cursos habilitantes ni prerrequisitos técnicos. Un curso puede *recomendar* previos en su ficha ("para aprovechar mejor este curso, te sugerimos haber visto…"), nunca exigirlos. Los niveles 2, 3 y 4 entre sí tampoco son secuenciales: el adulto elige según su rol.

### 4.4 Cursos

Cada **curso** es la unidad mínima de certificación. Un curso aborda un tema autocontenido y entrega un certificado al ser completado.

### 4.5 Lecciones

Cada **lección** es la unidad mínima de aprendizaje. Como se describió en la sección de condiciones pedagógicas, dura entre 3 y 8 minutos y aborda una sola idea central.

---

## 5. Anatomía de un curso

Un curso típico se compone de:

1. **Módulo 0 — Registro al curso** (auto-generado por la plataforma). El estudiante ingresa nombre, edad opcional, grupo, región, correo y motivación.
2. **Módulo 1 — Bienvenida** (`isIntro: true`). Encuadra el curso, presenta los objetivos, muestra el mapa de lecciones.
3. **Módulos 2 a N — Lecciones de contenido.** Cada uno con secciones, reflexión y mini-quiz.
4. **Módulo final — Certificado.** Se genera al completar todas las lecciones con sus quizzes aprobados.

### 5.1 Logros (achievements)

A lo largo del curso, el estudiante desbloquea **logros** (badges) al completar lecciones específicas. Sirven como refuerzo motivacional. Cada curso tiene 4–6 logros + 1 logro final ("Curso Completado").

### 5.2 Conexión cross-course

Algunos cursos producen datos que otros cursos consumen. Por ejemplo:

- En el **Curso 4 — Las 7 Competencias Esenciales** (línea Política de Adultos), el estudiante hace su autodiagnóstico y obtiene un **perfil de competencias**.
- En el **Curso 5 — Tu Plan Personal de Desarrollo**, el plan-builder lee ese perfil y pre-selecciona automáticamente las prioridades del estudiante.

Esta integración técnica refuerza la coherencia pedagógica: el estudiante no repite información, y siente que cada curso lo prepara para el siguiente.

---

## 6. Tipos de sección y herramientas pedagógicas

El generador permite construir cursos combinando los siguientes **tipos de sección** (declarados en el JSON del curso). Cada uno cumple un rol pedagógico específico.

### 6.1 Tipos textuales y de estructura

| Tipo | Rol pedagógico |
|---|---|
| `paragraph` | Texto explicativo regular |
| `heading` | Subtítulo (nivel 3 ó 4) que segmenta el contenido |
| `info-box` | Cuadro destacado (morado claro). Útil para "idea central de la lección" o "implicación práctica" |
| `mission-box` | Cuadro destacado amarillo. Misión, compromiso, llamado a la acción |
| `list` | Lista con viñetas o numerada |
| `timeline` | Línea de tiempo con elementos consecutivos |
| `method-grid` | Cuadrícula de tarjetas con color e icono. Para presentar conceptos paralelos (ej. los 4 grados de dominio) |
| `blockquote` | Cita destacada centrada |
| `course-objectives` | Listado formateado de objetivos del curso |

### 6.2 Tipos multimedia

| Tipo | Rol pedagógico |
|---|---|
| `video` | Video MP4 con _lazy loading_. Solo se descarga cuando el módulo está activo |

### 6.3 Tipos doctrinales

| Tipo | Rol pedagógico |
|---|---|
| `policy-quote` | Cuadro plegable con la cita textual de la política. _Cerrado por defecto._ El estudiante lo expande si quiere precisión doctrinal; si no, sigue con la explicación práctica del texto principal. Esta es la pieza que reconcilia _accesibilidad_ y _rigor doctrinal_. |

### 6.4 Tipos interactivos

| Tipo | Rol pedagógico |
|---|---|
| `photo-upload` | Subida de imagen del estudiante (ej. dibujo del consejero ideal). Se comprime en cliente a 1200 px JPEG y se guarda localmente. Permite descargar la imagen para compartir manualmente. |
| `self-assessment` | Autodiagnóstico interactivo: el estudiante elige un grado por dimensión (ej. competencia). El sistema calcula fortalezas y áreas de oportunidad y guarda el perfil para que cursos posteriores lo lean. |
| `plan-builder` | Constructor interactivo de Plan Personal de Desarrollo. Lee el perfil de competencias del estudiante (si existe) y le ofrece pre-seleccionar prioridades. Genera un PDF imprimible para firmar con el asesor personal. |

### 6.5 Reflexión y evaluación (no son tipos de sección, son piezas obligatorias del módulo)

| Pieza | Rol pedagógico |
|---|---|
| `reflection` | Una pregunta abierta personal por lección. El estudiante escribe en un textarea que se autoguarda |
| `quiz` | Mini-quiz con 2–3 preguntas de comprensión. Mínimo 70 % para avanzar. Debe cumplir las 5 reglas medibles de §2.5 |

---

## 7. Lógica iterativa: cómo llegamos aquí

La estructura actual no salió completa de la primera versión. Es resultado de un proceso iterativo que comenzó con un **video de Taller Flor de Lis 2 — Sesión 1** dictado por dirigentes de la Regional Valle del Cauca el 30 de abril de 2026.

### 7.1 Iteración 1 — Curso monolítico (descartada)

Inicialmente cortamos el video en 27 segmentos y construimos **un solo curso de 90 minutos** con 6 módulos largos. Funcionaba, pero tenía dos problemas:

- **Demasiado largo** para que un adulto voluntario lo termine de una sentada.
- **Densidad desigual** — los temas más conceptuales se mezclaban con los más prácticos.

### 7.2 Iteración 2 — Cinco cursos cortos con autodiagnóstico

Refundimos los 90 minutos en una **ruta de 5 cursos cortos**, cada uno entre 25 y 35 min, distribuidos en lecciones de 5–7 min. Agregamos:

- **Lenguaje práctico** + cuadros oficiales plegables.
- **Autodiagnóstico interactivo** en el Curso 4 (Las 7 Competencias).
- **Plan Personal con plan-builder** en el Curso 5.
- **Conexión cross-course** entre Curso 4 y Curso 5 (el plan se pre-llena con el perfil del autodiagnóstico).

### 7.3 Iteración 3 — Reordenamiento conceptual

Originalmente la ruta fue: Bienvenida → Política → Competencias → Plan → Ciclo. Al revisarla, surgió una observación pedagógica crítica:

> _"¿Hablar de competencias y plan personal sin antes hablar del ciclo de vida del adulto no podría confundir?"_

La respuesta fue sí. Un estudiante aprendía sobre las competencias sin saber _en qué momento del ciclo se evalúan_, y construía su plan sin saber que era _la herramienta principal de la formación básica dentro de la fase de desempeño_.

Reordenamos: **Bienvenida → Política → Ciclo → Competencias → Plan**. El ciclo pasó al medio, dando contexto antes del detalle.

### 7.4 Iteración 4 — Portal centralizado

Cuando proyectamos las cuatro líneas formativas (Política de Adultos, Programa de Jóvenes, Desarrollo Institucional, Políticas Transversales), apareció una pregunta de discovery: _"¿cuál URL le doy a un adulto que quiere empezar?"_.

La respuesta fue construir el **Portal de Formación de Adultos** (`PORTAL-ADULTOS-ASC`): un landing centralizado que presenta las líneas, explica a quién aplica cada una y direcciona a la plataforma correspondiente.

### 7.5 Iteración 5 — De la crítica humana a la auditoría sistemática

Las cuatro primeras iteraciones se hicieron gracias a **críticas puntuales de personas** que se aplicaron como mejora. Ese mecanismo funcionó, pero tenía dos límites: dependía de que alguien mirara, y solo encontraba lo que esa persona alcanzaba a ver.

Entre julio y agosto de 2026 el proyecto sustituyó ese mecanismo por uno sistemático (`DECISIONES.md` ADR-019 y ADR-023): **tres auditorías que se corren sobre cada curso** y responden preguntas distintas.

| Auditoría | Pregunta | Herramienta |
|---|---|---|
| **Doctrinal** | ¿lo que dice es **cierto**? | `/auditar-curso` — contra los documentos oficiales |
| **Pedagógica** | ¿**enseña bien**? | `/auditar-pedagogia` — contra este marco |
| **Funcional** | ¿**funciona**? | `PRUEBAS-E2E/` (Playwright + axe) en CI |

**El piloto humano dejó de ser bloqueante** (ADR-019). No porque no aporte —sigue siendo la única forma de saber cómo se recibe realmente un curso— sino porque como *única* compuerta no escalaba: dependía de conseguir 5–10 adultos disponibles por cada curso, y mientras tanto el curso no salía. Las 3 auditorías son ahora la compuerta; el piloto es una buena práctica recomendada.

Que el cambio era necesario lo confirmó la evidencia: al aplicar por primera vez las auditorías formales a las líneas ya publicadas aparecieron **21 hallazgos críticos** que años de revisión informal no habían detectado — entre ellos una escala de autoevaluación con los grados asignados al peldaño equivocado en 4 de 7 competencias, y un quiz que premiaba la respuesta incorrecta.

**Lección general del proceso:** sin crítica no hay iteración; pero la crítica *sistematizada* encuentra lo que la crítica *ocasional* no ve.

---

## 8. Justificación pedagógica

Las decisiones que describimos no son arbitrarias. Se sostienen en marcos teóricos contemporáneos sobre aprendizaje adulto y diseño instruccional digital.

### 8.1 Andragogía (Knowles)

Malcolm Knowles establece que el aprendizaje del adulto requiere:

1. **Necesidad de saber el porqué.** El adulto necesita entender _para qué_ está aprendiendo algo. → _Cada lección abre con una "idea central" explicitada._
2. **Autoconcepto** del estudiante como dueño de su proceso. → _Las reflexiones personales y el autodiagnóstico ponen al estudiante en control._
3. **Experiencia previa como recurso.** → _El uso de ejemplos del día a día del grupo permite que el estudiante conecte con lo que ya vivió._
4. **Disposición a aprender lo que necesita.** → _Por eso la formación se ata a roles concretos (cargos, niveles del ciclo)._
5. **Orientación al problema** más que a la materia. → _Por eso los quizzes son situacionales: "¿qué le respondes a esta persona?"_
6. **Motivación interna.** → _El sistema gamifica con logros, certificados y un plan personal accionable._

### 8.2 Microlearning

La literatura actual en e-learning corporativo y educativo confirma que las **píldoras de 5–10 minutos** producen:

- **Mejor retención** que sesiones largas.
- **Menor fatiga cognitiva.**
- **Mayor tasa de completación.**
- **Adopción más rápida** entre adultos ocupados.

Por esto, las lecciones de 5–7 minutos no son un atajo de comodidad: son una decisión metodológica explícita.

### 8.3 Aprendizaje significativo (Ausubel)

Ausubel plantea que el aprendizaje es significativo cuando el contenido nuevo se ancla a estructuras cognitivas previas. La PNAM lo retoma como uno de sus 13 principios. En la plataforma se materializa así:

- **Ejemplos del grupo scout** que actúan como anclas cognitivas.
- **Cuadros plegables con la cita oficial** que permiten al estudiante validar lo aprendido contra la fuente.
- **Reflexiones que conectan con la práctica** del estudiante en su rol actual.

### 8.4 Modelo de gestión por competencias (Spencer & Spencer; Marta Alles)

La ASC adopta el modelo de competencias de Spencer & Spencer (citado en la PNAM Cap. 4) y los grados de dominio por conductas observables de Marta Alles (base del Diccionario de Competencias). La plataforma respeta este modelo:

- El **autodiagnóstico** se diseña sobre los 4 grados oficiales por competencia.
- Las **conductas observables** del Diccionario se trasladan a los criterios que el estudiante elige al calificarse.
- El **Plan Personal de Desarrollo** se construye sobre las áreas de oportunidad identificadas, alineado con el modelo institucional.

### 8.5 Evaluación 360°

La PNAM Cap. 5.2.2 establece que la certificación de competencias se realiza con evaluación de 360° (autoevaluación, coevaluación, heteroevaluación y evaluación). La plataforma:

- **Habilita la autoevaluación** mediante el autodiagnóstico interactivo.
- **No reemplaza las otras tres modalidades** —que requieren la presencia del asesor personal, los pares, los chicos y los padres— pero **prepara al estudiante** para participar en ellas con un perfil propio claro.

### 8.5-bis Qué medimos, y qué no (Kirkpatrick)

> Sección añadida en v2. Hasta ahora el marco justificaba muy bien **cómo enseñamos**, pero no decía **cómo sabríamos si funciona**. Esa era la brecha frente al objetivo formativo de fondo: que el adulto *aplique en su grupo* lo aprendido.

El modelo de Kirkpatrick distingue cuatro niveles de evaluación de una acción formativa. Conviene ser explícitos sobre dónde está hoy la plataforma:

| Nivel | Qué mide | Estado |
|---|---|---|
| **1 — Reacción** | ¿le gustó?, ¿lo encontró útil? | 🟡 solo vía piloto, cuando se hace |
| **2 — Aprendizaje** | ¿entendió? | 🟢 quizzes y autodiagnóstico, **pero los datos no se analizan** |
| **3 — Conducta** | ¿cambió lo que hace en su grupo? | 🔴 sin instrumento |
| **4 — Resultados** | ¿mejoró el grupo / la asociación? | 🔴 fuera del alcance de la plataforma |

**El dato del nivel 2 ya se está recogiendo y nadie lo mira.** El backend guarda por curso y por persona: puntajes de quiz, módulos completados, reflexiones escritas y perfiles de autodiagnóstico. Con eso se pueden responder preguntas que hoy no nos hacemos:

- **Análisis de ítems:** ¿qué pregunta falla casi todo el mundo? Puede ser una pregunta mal hecha (ambigua, con dos opciones defendibles) o un concepto mal explicado en la lección. Ambas cosas son accionables y hoy son invisibles.
- **Abandono por lección:** ¿en qué lección se cae la gente? Es el indicador más directo de sobrecarga — habría detectado la lección de "5 minutos" con 15 de video sin necesidad de auditoría.
- **Distancia PRE/POST:** la app `EVALUACIONES-ASC` ya mide avance por eje en el curso piloto. Ese es el puente natural hacia el nivel 2 medido de verdad.

**El nivel 3 requiere un lazo con el mundo real** que la plataforma sola no puede cerrar: el Plan Personal de Desarrollo se firma con el asesor y se registra en Talento 360°, y la evaluación 360° ocurre fuera de aquí. Medir conducta significaría preguntar, meses después, si el plan se ejecutó. Es una decisión de alcance —y de coordinación con la DNAM— más que un problema técnico.

**Compromiso de este marco:** la auditoría pedagógica (`/auditar-pedagogia`) debe incorporar el análisis de ítems cuando haya volumen suficiente de respuestas, en vez de evaluar los quizzes solo por inspección. Un quiz que en el papel parece bien construido pero que el 90 % falla, está mal.

### 8.6 Auto-eficacia (Bandura)

La sensación de _"yo puedo hacer esto"_ es un predictor fuerte del aprendizaje. La plataforma cuida este aspecto por:

- **Lecciones cortas** que se completan con éxito frecuentemente, generando refuerzo.
- **Logros visibles** desbloqueables.
- **Plan personal accionable** que el estudiante imprime y firma — lo convierte en compromiso visible.
- **Lenguaje no condescendiente** que trata al adulto como capaz.

---

## 9. Línea Política de Adultos: primera línea desplegada

La primera línea que salió a producción fue **Política de Adultos en el Movimiento**, y sirvió de prueba de concepto del marco aquí descrito. Hoy las tres líneas nacionales están activas (§4.2).

### 9.1 Estructura desplegada (Nivel 1 — Fundamentación)

| # | Curso | Duración | Hitos pedagógicos |
|---|---|---|---|
| 1 | 🦸 Bienvenida al Movimiento de Adultos | 45 min · 7 lecciones | Hook emocional con video, desarme de mitos, dibujo del consejero ideal, voces de la comunidad, primer compromiso |
| 2 | 📜 La Política — Marco y Principios | 30 min | 13 principios oficiales, 12 herramientas del modelo, definición Spencer-Spencer de competencia |
| 3 | 🔄 El Ciclo del Adulto en el Movimiento | 30 min | Atracción y vinculación, desempeño con formación básica y perfeccionamiento continuo, decisiones para el futuro |
| 4 | 🧠 Las 7 Competencias Esenciales | 40 min | Autodiagnóstico interactivo (4 grados por competencia) que produce el perfil personal |
| 5 | 🗺️ Tu Plan Personal de Desarrollo | 30 min | Plan-builder interactivo + PDF imprimible, cierre de la ruta |

**Total: ~2h 55min en lecciones de 5–12 min.**

> Las duraciones de los cursos 1 y 4 se corrigieron en agosto de 2026 al medir el tiempo real (25→45 y 35→40): el video no estaba contado. El Curso 1 pasó además de 6 a 7 lecciones al partir una que declaraba 5 minutos y contenía 15 de video. Ver §2.1.

### 9.2 Niveles 2, 3 y 4 proyectados

Tras la validación del Nivel 1 con piloto, se construirán:

- **Nivel 2 — 5 cursos** sobre las fases del ciclo del adulto (vinculación, asesoría, evaluación 360° práctica, Talento 360°, cierre de ciclo).
- **Nivel 3 — 7 cursos** por cargo del consejo de grupo (tesorero, secretario, asesor personal, intendente, canciller, etc.).
- **Nivel 4 — 3+ cursos transversales** integrados con la línea de Políticas Transversales (Safe from Harm, Diversidad, Motivación).

**Total proyectado de la línea: 17 cursos.**

### 9.3 Funcionalidades técnicas activas

- ✅ Plataforma desplegada en GitHub Pages con URL pública.
- ✅ Backend en Google Apps Script con persistencia en Google Sheets.
- ✅ Backup automático nocturno del Sheet a Google Drive (retención 30 días).
- ✅ Dashboard administrativo con KPIs (registros, certificados, completación).
- ✅ Modo oscuro automático.
- ✅ Pre-llenado de registro entre cursos.
- ✅ Recuperación de avance vía correo (cross-device).
- ✅ Subida de fotos del estudiante.
- ✅ Autodiagnóstico interactivo con perfil persistente.
- ✅ Plan personal imprimible en PDF.
- ✅ Certificados con código verificable público.

---

## 10. Próximas etapas

> Actualizado en v2. Las etapas 10.1–10.4 de la versión inicial ya se cumplieron: las tres líneas nacionales están activas con su Nivel 1 completo y las 3 auditorías pasadas (§4.2).

### 10.1 Línea Políticas Transversales

Es la única de las cuatro sin construir (A Salvo del Peligro, Diversidad e Inclusión, Gestión para la Motivación). Hay esqueleto documentado en `_TEMPLATE-LINEA/` del repo raíz, con la estructura mínima, las 3 auditorías como compuerta y las trampas ya conocidas.

### 10.2 Niveles 2 y 3 de las líneas activas

Programa de Jóvenes ya inició su Nivel 2 (cursos por rama). Política de Adultos y Desarrollo Institucional tienen sus niveles 2–4 proyectados en sus planes de línea.

### 10.3 Medir el nivel 2 de Kirkpatrick con los datos que ya existen

El backend guarda puntajes de quiz, módulos completados y perfiles de autodiagnóstico, y nadie los analiza (§8.5-bis). Las dos primeras preguntas a responder: **análisis de ítems** (qué pregunta falla casi todo el mundo) y **abandono por lección** (dónde se cae la gente). Ambas alimentarían la auditoría pedagógica con evidencia en vez de solo inspección.

### 10.4 Equilibrio pedagógico pendiente en los quizzes

Corregido el sesgo de longitud en las tres líneas (de 87–90 % a ~29 %), queda el trabajo de fondo: subir la proporción de enunciados planteados como escenario, que era del 17 % en Política de Adultos frente al 43–52 % de las otras dos.

### 10.5 Refinamiento metodológico continuo

Cada iteración alimenta el marco. Este documento es un _living document_: **su desactualización es un defecto**, no un detalle. Entre mayo y agosto de 2026 quedó describiendo un proyecto que ya no existía (dos líneas listadas como "próximamente" llevaban semanas en producción) mientras servía de rúbrica a las auditorías pedagógicas. Revisarlo cada vez que se cierre una fase del plan de mejora o se apruebe un ADR que toque pedagogía.

---

## 11. Glosario

| Término | Definición |
|---|---|
| **Adulto del movimiento** | Toda persona mayor de edad (voluntario o profesional) que ejerce un cargo o función en la ASC |
| **Andragogía** | Disciplina que estudia el aprendizaje del adulto, en oposición a la pedagogía centrada en niños |
| **Asesor Personal** | Adulto que acompaña formalmente el desarrollo de otro adulto durante su nombramiento |
| **Auto-eficacia** | Creencia de la persona en su capacidad de ejecutar lo necesario para alcanzar metas (Bandura) |
| **Ciclo de vida del adulto** | Sucesión cíclica de tres fases: atracción y vinculación, desempeño, decisiones para el futuro |
| **Competencia esencial** | Una de las 7 competencias que aplican a todo adulto del movimiento |
| **Competencia específica** | Una de las 29 competencias técnicas asociadas a cargos concretos |
| **Conducta observable** | Comportamiento concreto que evidencia el grado de dominio de una competencia |
| **Curso** | Unidad mínima de certificación. Aborda un tema autocontenido |
| **Evaluación 360°** | Modelo con 4 modalidades: autoevaluación, coevaluación, heteroevaluación, evaluación formal |
| **Insignia de Madera** | Símbolo mundial oficial de certificación de la formación básica del adulto |
| **Lección** | Unidad mínima de aprendizaje, dura 3–8 min, aborda una idea central |
| **Línea** | Campo temático mayor de la formación; cada línea es operada por una comisión funcional |
| **Microlearning** | Diseño instruccional basado en píldoras cortas autocontenidas |
| **Nivel** | Subdivisión de una línea: fundamentación, profundización, especialización, transversales |
| **Plan Personal de Desarrollo (PPD)** | Plan acordado entre el adulto y su asesor que define competencias a desarrollar y evidencias |
| **PNAM** | Política Nacional de Adultos en el Movimiento (Acuerdo CSN 176 de 2017) |
| **Talento 360°** | Plataforma oficial de la ASC que centraliza la hoja de vida del adulto. No confundir con **SiScout**, que es el registro de membresía |
| **Las 3 auditorías** | Compuerta de calidad antes de publicar (ADR-019): doctrinal (¿es cierto?), pedagógica (¿enseña bien?) y funcional (¿funciona?) |
| **Sesgo de longitud** | Defecto de quiz en que la opción correcta es la más larga: permite aprobar sin leer. Es el único sesgo de opción que el barajado del motor no neutraliza |

---

## 12. Referencias

### 12.1 Documentos oficiales de la ASC

- **PNAM** — Política Nacional de Adultos en el Movimiento, aprobada por el Consejo Scout Nacional mediante **Acuerdo N° 176 del 22 de abril de 2017**, ratificada por Resolución CSN N° 021-17 del 5 de junio de 2017; rediseño de agosto de 2020.
  > Citarla siempre como **PNAM 2017** (por su acuerdo de aprobación). La carpeta local se llama *"Documentos Oficiales PNAM 2022"*, que es el año de la compilación, no de la política: citar "PNAM 2022" induce a error.
- Diccionario de Competencias (PNAM doc 3).
- Manual de Cargos, Funciones y Perfiles por Competencias (PNAM doc 4).
- Cartilla Metodológica (PNAM doc 2).
- Política Interamericana de Adultos en el Movimiento Scout _"Los adultos que necesitamos"_ (25ª Conferencia Scout Interamericana, 2013).

### 12.2 Marcos teóricos

- **Knowles, M.** _The Adult Learner_ — fundamentos de andragogía.
- **Spencer & Spencer.** _Competence at Work_ — definición de competencia adoptada por la PNAM.
- **Alles, M.** _Diccionario de competencias por grados_ — base del Diccionario oficial ASC.
- **Ausubel, D.** _Psicología educativa: un punto de vista cognoscitivo_ — aprendizaje significativo.
- **Bandura, A.** _Self-efficacy: The exercise of control_ — auto-eficacia.

### 12.3 Documentos operativos del proyecto

- `INDICE-PROYECTO.md` — Estado actual del proyecto.
- `AUDITORIA.md` — Proceso de auditoría a demanda.
- `CREAR-CURSO.md` — Manual operativo de creación de cursos.
- `Plan-de-Formacion-Linea-Politica-de-Adultos.docx` — Roadmap de los 4 niveles, 17 cursos.

---

_Documento elaborado como parte del proyecto de digitalización de la formación de adultos voluntarios del movimiento scout colombiano._

---

_**Versión 2.0 — 2 de agosto de 2026.** Actualizado tras la evaluación técnica del corpus rector (`DECISIONES.md` ADR-024). Cambios: §2.1 suma la regla de que **el multimedia cuenta dentro de la duración declarada**; §2.4–2.5 pasan el quiz de 1–3 a **2–3 preguntas** y convierten el criterio de evaluación en **5 reglas medibles**, tres verificadas por el generador; §3.6 reemplaza la lista de 3 documentos operativos por el mapa real del corpus; §4.2 y §9 reflejan el **estado real** (las 3 líneas nacionales activas, no "próximamente"); §4.3 incorpora que **no hay cursos habilitantes** (ADR-019); §7.5 documenta el paso de la crítica ocasional a las **3 auditorías sistemáticas**; **§8.5-bis es nueva**: sitúa la plataforma en el modelo de Kirkpatrick y reconoce que el dato de nivel 2 se recoge pero no se analiza; §10 reemplaza etapas ya cumplidas por las pendientes reales. Citas de la PNAM unificadas como **PNAM 2017** (Acuerdo CSN 176)._

_Versión inicial — mayo de 2026._
