# Flujos autónomos y scripts del ecosistema · ASC

> Documento operativo que explica **cómo trabajo (Claude Code)** sobre este proyecto: qué scripts existen, qué decisiones tomo sin preguntar y cuáles consulto, y cómo cada cambio queda aplicado y verificado end-to-end sin pasos manuales.

**Versión:** 1.0 · **Última actualización:** 2026-05-18

---

## 1. El "loop autónomo" — patrón estándar de trabajo

Cuando se me pide un cambio (ajustar un curso, agregar contenido, parchar un bug), no me detengo en cada paso para pedir confirmación. Ejecuto el **loop completo**:

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Entender el cambio                                          │
│     ↓                                                            │
│  2. Editar fuente (JSON / código / config)                      │
│     ↓                                                            │
│  3. Validar sintaxis (python -c "import json; json.load(...)")  │
│     ↓                                                            │
│  4. Build (node build-course.js <id>)                           │
│     ↓                                                            │
│  5. Preview (opcional, según importancia visual del cambio)     │
│     ↓                                                            │
│  6. Verify backend (node verificar-backend.js)                  │
│     ↓                                                            │
│  7. Git add + commit (mensaje descriptivo)                      │
│     ↓                                                            │
│  8. Git push                                                    │
│     ↓                                                            │
│  9. Verify deploy (curl HTTP 200 a URLs públicas)               │
│     ↓                                                            │
│ 10. Reportar resultado al usuario                                │
└─────────────────────────────────────────────────────────────────┘
```

**Resultado:** cada solicitud termina con el cambio **vivo en producción y verificado**, no en "listo para revisar". Esto es lo que el usuario quiere decir con *"que cada cambio quede aplicado directamente"*.

---

## 2. Qué hago sin preguntar vs qué consulto antes

### 2.1 Hago sin preguntar (decisiones técnicas internas)

| Decisión | Por qué no pregunto |
|---|---|
| Qué `section type` mapear para un contenido pedagógico | Es decisión técnica documentada en `CREAR-CURSO.md` |
| IDs de logros, valores de `unlockOnModule` | Convenciones establecidas |
| Colores, bordes, layout visual | Paleta documentada por línea |
| Mensajes de commit | Sigo convenciones del repo |
| Eliminar archivos temporales / backups intermedios | Limpieza estándar |
| Validar JSON antes de buildear | Higiene básica |
| Hacer rebuild + push al cambiar el motor (`engine.js`/`styles.css`) | Necesario para reflejar en producción |
| Correr `verificar-backend.js` antes y después de tocar backend | Salvaguarda |
| Crear backups (`.bak`) antes de cambios destructivos | Protección |
| Documentar incidentes en `BACKEND.md` (sección "Historial") | Memoria institucional |

### 2.2 Consulto antes (decisiones de contenido o ruptura)

| Decisión | Por qué pregunto |
|---|---|
| Cambiar el contenido pedagógico (texto de lecciones, hooks, ejemplos) | Es decisión del usuario, no mía |
| Eliminar / archivar / cambiar el orden de cursos | Afecta a estudiantes y al plan formativo |
| Cambiar URL pública de un deployment / mover backend | Requiere coordinación de múltiples archivos |
| Crear nuevos repos en GitHub | Decisión arquitectural |
| Borrar registros del Google Sheet | Datos de usuarios reales |
| Cambiar tokens de auth (`AUTH_TOKEN`) | Implica re-sincronizar HTML + backend |
| Aprobar quizzes y reflexiones recién diseñados | Validación pedagógica |
| Dividir / unificar backends | Decisión estratégica de plataforma |

### 2.3 Reporto al final (no espero confirmación)

- Cambios menores de copy / typos / referencias rotas
- Optimizaciones de tamaño (lazy loading, compresión)
- Limpieza de código muerto evidente
- Resincronización entre archivos generados y sus fuentes

---

## 3. Inventario completo de scripts auxiliares

### 3.1 Scripts canónicos (presentes en cada repo de línea)

Estos scripts viven en `05-Generador-Cursos/` y conforman el pipeline de construcción de cualquier curso:

| Script | Propósito | Cuándo se ejecuta | Quién lo dispara |
|---|---|---|---|
| **`build-course.js`** | Compila un JSON de `borradores/<courseId>.json` a HTML autocontenido en `02-Plataforma-Web/<courseId>.html`. Inyecta `templates/styles.css` + `templates/engine.js`. Actualiza `cursos.json` (catálogo). | Cada vez que se modifica un JSON de curso, el motor (`engine.js`) o los estilos. | Manual (`node build-course.js <id>`) — pero yo lo corro automáticamente tras editar. |
| **`preview-course.js`** | Genera un HTML "imprimible" con todo el curso en una sola página, marcando las respuestas correctas. Para revisión PDF visual. | Antes de aprobar un curso para producción. | Manual o automático tras build, si el cambio es significativo. |
| **`verificar-backend.js`** | Valida 4 puntos antes de cualquier deploy: BACKEND.md consistente, build-course.js apunta al deployment correcto, clasp local apunta al script correcto, endpoint responde con arrays detallados. | Antes y después de tocar el backend. Antes de cualquier release. | Manual o automático — yo lo corro siempre antes/después de cambios en `google-apps-script.js`. |

### 3.2 Scripts solo en `INDUCCION-ADULTOS/05-Generador-Cursos/` (uso compartido)

| Script | Propósito |
|---|---|
| **`google-apps-script.js`** | **Fuente de verdad** del código del backend (Apps Script). DI no lo tiene porque el backend es compartido — el repo dueño es Adultos. |
| **`backup-automatico.js`** | Módulo standalone (referencia) del trigger Apps Script que copia el Sheet a Drive cada noche a las 2 AM. Retención 30 días. |
| **`limpiar-base-datos.js`** | Utilidad para limpiar registros del Sheet en bulk. Usar con cuidado. |
| **`fix-tildes.py`** | Utilidad para corregir acentos en archivos. Se usa cuando se ingieren textos desde fuentes con encoding mixto. |
| **`generar-manual-crear-curso.js`** | Genera `Manual-Crear-Curso.docx` desde el contenido conceptual del manual. |
| **`generar-plan-formacion.js`** | Genera `Plan-de-Formacion-Linea-Politica-de-Adultos.docx` desde el plan markdown. |

### 3.3 Scripts en `PORTAL-ADULTOS-ASC/`

| Script | Propósito |
|---|---|
| **`generar-marco-metodologico.js`** | Genera `Marco-Metodologico-Pedagogico.docx` desde su versión markdown. |

### 3.4 Scripts ad-hoc fuera de los repos (workspace)

Scripts construidos para tareas específicas — viven en carpetas como `flor de lis 2/`, `FLOR DE LIS 2 SESIONES 2 Y 3/`:

| Script | Carpeta | Propósito |
|---|---|---|
| **`transcribe.py`** | `flor de lis 2/`, `FLOR DE LIS 2 SESIONES 2 Y 3/` | Transcribe MP3 con `faster-whisper` (modelo small, español). Produce `transcript.json` y `.txt` por segmento. |
| **`extraer_titulos_pptx.py`** | `FLOR DE LIS 2 SESIONES 2 Y 3/` | Extrae títulos y contenido principal de cada slide de los PPTX usando `python-pptx`. |
| **`cortar_segmentos.py`** | `FLOR DE LIS 2 SESIONES 2 Y 3/` | Corta el video master en clips temáticos con `ffmpeg -c copy` (sin re-encoding, conserva calidad). |

**Patrón:** estos scripts son **construidos en sesión** cuando aparece la necesidad, no preexistentes en el repo. Quedan archivados en su carpeta de trabajo para futura reutilización.

---

## 4. Triggers que activan procesos completos

El proyecto tiene un sistema de **disparadores por frase** documentados en el archivo de memoria persistente (`~/.claude/projects/.../memory/`). Cuando el usuario dice una de estas frases, **yo cargo automáticamente el proceso completo correspondiente** y lo ejecuto:

| Frase del usuario | Trigger activado | Documento que carga | Resultado |
|---|---|---|---|
| *"vamos a crear un curso"*, *"creemos el curso N"*, *"arranquemos el nivel X"* | **`create_course_process.md`** | `CREAR-CURSO.md` de la línea correspondiente | Proceso de 12 pasos desde diseño JSON hasta deploy en producción. |
| *"revisa completo el código"*, *"audita el código"*, *"haz limpieza"* | **`code_audit_process.md`** | `AUDITORIA.md` de la línea | 4 etapas: scan → report → apply → verify. |
| *"aquí está el curso N aprobado en Cowork"*, *"ya quedó el contenido del curso de X"* | **`cowork_to_code_handoff.md`** | `Recomendaciones-Cowork-Diseno-Cursos.md` | Cowork = contenido; Code = traducción técnica completa. Yo manejo todo el lado técnico sin pedir formato perfecto. |
| (Cualquier curso nuevo a punto de publicarse) | **`feedback_preview_before_publish.md`** | `preview-course.js` | SIEMPRE genero preview PDF antes de publicar para revisión visual. |
| Inicio de sesión nueva | **`MEMORY.md`** | Índice de todos los triggers | Recibo el contexto fresco. |

> **Importante:** estos triggers funcionan en **cualquier sesión nueva** porque viven en el directorio de memoria persistente del proyecto. No dependen de la sesión actual.

---

## 5. Patrón "self-applying changes" — cómo opero

### 5.1 Para un cambio en un curso

```
Usuario: "Cambia el quiz P1 de la Lección 3 del Curso 1 de DI por X"

Yo:
1. Leo bienvenida-desarrollo-institucional.json, localizo el quiz P1 de L3
2. Aplico el Edit
3. Valido JSON
4. Ejecuto: node build-course.js bienvenida-desarrollo-institucional
5. Ejecuto: node preview-course.js bienvenida-desarrollo-institucional
6. Genero PDF visual con Chrome headless (si el cambio es importante)
7. git add + commit "Ajustar quiz L3 P1 del Curso 1 DI" + push
8. Verifico HTTP 200 con curl
9. Reporto al usuario: "Cambio en producción. Si quieres revisar el preview PDF está en ..."
```

**El usuario no tiene que pedir ninguno de esos pasos.** Son automáticos.

### 5.2 Para un cambio en el backend

```
Usuario: "Agrégame al endpoint /stats el campo 'totalCompromisos'"

Yo:
1. node verificar-backend.js → confirmo 4/4 OK antes
2. Edito google-apps-script.js (en el repo dueño: INDUCCION-ADULTOS)
3. Copio a .clasp-workspace/Código.js
4. clasp push -f
5. Probo el HEAD endpoint con curl (puede pedir login, eso es OK)
6. Pido al usuario que actualice el deployment desde la UI web
   (porque ese paso requiere su intervención manual)
7. Cuando el usuario me da la URL nueva (o confirma que se actualizó):
   a. Actualizo BACKEND.md con cualquier cambio relevante
   b. Si la URL cambió: actualizo build-course.js + recompilo todos los HTMLs
   c. git add + commit + push
8. node verificar-backend.js → confirmo 4/4 OK después
9. Reporto al usuario qué cambió
```

### 5.3 Para tareas exploratorias (no destructivas)

```
Usuario: "Ayúdame con dos videos en la carpeta X"

Yo:
1. Leo la carpeta, identifico los videos
2. Sin pedir permiso: extraigo audio MP3 (paralelo)
3. Sin pedir permiso: transcribo con whisper en background
4. Mientras transcribe, hago análisis previo de PPTX si aplica
5. Cuando termina: analizo transcripción, propongo segmentos
6. Espero aprobación del usuario para CORTAR (eso sí pregunto)
7. Tras aprobación: corto con ffmpeg, verifico tamaños, reporto
```

---

## 6. Salvaguardas activas

Lo que evita que un cambio autónomo rompa producción:

| Salvaguarda | Mecanismo |
|---|---|
| **JSON inválido nunca llega a producción** | `build-course.js` valida antes de generar HTML. |
| **HTML desincronizado del JSON** | Política: **nunca editar HTML directamente**, siempre regenerar desde JSON. Documentado en `AUDITORIA.md`. |
| **Push de código backend equivocado** | `verificar-backend.js` paso 3: clasp scriptId debe coincidir con `BACKEND.md`. |
| **Deployment con código viejo** | `verificar-backend.js` paso 4: el endpoint debe devolver arrays detallados. |
| **Pérdida de cambios externos** | `clasp pull` antes de push cuando hay sospecha de drift. |
| **Reversibilidad** | Cada cambio queda como commit en git. Rollback con `git revert <hash>`. |
| **Backup nocturno del Sheet** | Trigger Apps Script (`backup-automatico.js`) — retención 30 días. |
| **Verificación post-deploy** | `curl -I <url>` para confirmar HTTP 200 después de push. |

---

## 7. Cómo NO romper el contrato autónomo

Si el usuario quiere modificar mi comportamiento:

| Quieres que… | Dile / haz |
|---|---|
| Yo te confirme antes de aplicar cambios | Decir: *"antes de aplicar cualquier cambio, propónmelo primero"*. Aplicará a esa sesión. |
| Yo no haga commit/push automático | Decir: *"no hagas push aún"*. Yo dejo el cambio local y reporto. |
| Yo no toque el backend | Decir: *"no toques el Apps Script"*. |
| Cambiar el flujo permanente | Editar los archivos en `~/.claude/projects/.../memory/` (los triggers). |
| Agregar un nuevo trigger automático | Crear `<nombre>.md` en `memory/` y agregar la referencia en `MEMORY.md`. |

---

## 8. Reporte estándar al usuario después de un cambio

Después de aplicar un cambio autónomo, reporto siempre:

1. **Qué cambió** (1-2 frases)
2. **Dónde quedó aplicado** (archivos modificados, URLs públicas que ya reflejan el cambio)
3. **Pruebas hechas** (validación JSON, build OK, HTTP 200, etc.)
4. **Qué requiere acción tuya** (si algo necesita verificación visual o decisión manual)
5. **Próximos pasos sugeridos** (opcional)

Ejemplo:

> ✅ Quiz L3 P1 del Curso 1 de DI actualizado.
>
> - JSON: `bienvenida-desarrollo-institucional.json` (línea 287)
> - HTML regenerado: `bienvenida-desarrollo-institucional.html` (HTTP 200 verificado)
> - Commit: `fef701f` pusheado a main
> - **Tu acción:** revisar el PDF en `previews/preview-bienvenida-desarrollo-institucional.pdf` si quieres validar visualmente.
> - **Próximo:** sin pendientes derivados.

---

## 9. Documentación relacionada

- [`ARQUITECTURA.md`](ARQUITECTURA.md) — Mapa global del ecosistema (4 repos).
- [`MARCO-METODOLOGICO-PEDAGOGICO.md`](MARCO-METODOLOGICO-PEDAGOGICO.md) — Pedagogía transversal.
- `INDUCCION-ADULTOS/CREAR-CURSO.md` y `INDUCCION-DESARROLLO-INSTITUCIONAL/CREAR-CURSO.md` — Manual operativo de creación de cursos.
- `INDUCCION-ADULTOS/AUDITORIA.md` y `INDUCCION-DESARROLLO-INSTITUCIONAL/AUDITORIA.md` — Proceso de auditoría de código.
- `*/BACKEND.md` — Documentación del backend por repo.
- `~/.claude/projects/.../memory/*.md` — Triggers persistentes (memoria de sesión).

---

_Documento operativo del comportamiento autónomo de Claude Code sobre el ecosistema formativo ASC. Sujeto a iteración según evolucione la forma de trabajo._
