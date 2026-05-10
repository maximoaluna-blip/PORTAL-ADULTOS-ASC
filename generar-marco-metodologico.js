// ============================================================================
// generar-marco-metodologico.js
// Genera Marco-Metodologico-Pedagogico.docx — documento institucional sobre
// el marco metodologico y pedagogico de la plataforma de formacion de adultos.
// ============================================================================

const path = require('path');
const fs = require('fs');

const NPM_ROOT = 'C:\\Users\\Principal\\AppData\\Roaming\\npm\\node_modules';
const docx = require(path.join(NPM_ROOT, 'docx'));
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, BorderStyle,
  WidthType, ShadingType, HeadingLevel, PageNumber, PageBreak
} = docx;

const MORADO = '622599';
const MORADO_OSCURO = '3D1660';
const AMARILLO = 'FFE675';
const GRIS_TEXTO = '4A4A4A';
const GRIS_HEADER = 'E8E0F0';
const GRIS_TENUE = '888888';

const border = (color = 'CCCCCC') => ({ style: BorderStyle.SINGLE, size: 6, color });
const allBorders = (color = 'CCCCCC') => ({
  top: border(color), bottom: border(color), left: border(color), right: border(color)
});

const p = (text, opts = {}) => new Paragraph({
  children: [new TextRun({ text, ...opts })],
  spacing: { after: 140, ...(opts.spacing || {}) }
});

const bullet = (text, level = 0) => new Paragraph({
  numbering: { reference: 'bullets', level },
  children: [new TextRun({ text, size: 22 })],
  spacing: { after: 80 }
});

const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, color: MORADO })]
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text, color: MORADO })]
});
const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text, color: MORADO })]
});

const quote = (text) => new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 160, after: 200 },
  indent: { left: 720, right: 720 },
  children: [new TextRun({ text: '"' + text + '"', italics: true, size: 24, color: GRIS_TEXTO })]
});

function cell(content, opts = {}) {
  const children = Array.isArray(content) ? content :
    [new Paragraph({ children: [new TextRun({ text: String(content), size: 20, ...(opts.run || {}) })] })];
  return new TableCell({
    width: { size: opts.width, type: WidthType.DXA },
    borders: allBorders(),
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children
  });
}

const TODAY = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
const content = [];

// ============================================================================
// PORTADA
// ============================================================================
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 1400, after: 200 },
  children: [new TextRun({ text: 'Asociación Scouts de Colombia', size: 24, color: GRIS_TEXTO, bold: true })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 100, after: 600 },
  children: [new TextRun({ text: 'Plataforma de Formación de Adultos', size: 22, color: GRIS_TEXTO })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 800, after: 200 },
  children: [new TextRun({ text: 'MARCO', size: 60, color: MORADO, bold: true })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 200 },
  children: [new TextRun({ text: 'METODOLÓGICO Y PEDAGÓGICO', size: 36, color: MORADO, bold: true })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: AMARILLO, space: 1 } },
  children: [new TextRun({ text: '' })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 300, after: 100 },
  children: [new TextRun({ text: 'Decisiones pedagógicas, estructurales y arquitectónicas', size: 22, italics: true, color: GRIS_TEXTO })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 100, after: 100 },
  children: [new TextRun({ text: 'que sostienen la propuesta formativa.', size: 22, italics: true, color: GRIS_TEXTO })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 1400, after: 100 },
  children: [new TextRun({ text: 'Versión inicial — ' + TODAY, size: 20, color: GRIS_TENUE })]
}));
content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 1: PROPOSITO
// ============================================================================
content.push(h1('1. Propósito del documento'));
content.push(p('Este documento institucionaliza el marco metodológico y pedagógico sobre el cual se construyó —y se seguirá construyendo— la plataforma de formación digital para adultos voluntarios de la Asociación Scouts de Colombia.', { size: 22 }));

content.push(p('Su intención es triple:', { size: 22 }));
content.push(bullet('Hacer explícitas las decisiones pedagógicas y estructurales que tomamos, para que cualquier persona que se sume al proyecto entienda no solo qué hicimos sino por qué.'));
content.push(bullet('Habilitar la replicación de la metodología en futuras líneas formativas, tanto dentro como fuera de la línea Política de Adultos.'));
content.push(bullet('Servir de referencia para evaluación, auditoría y mejora continua del proceso formativo.'));

content.push(p('Está dirigido a: comisiones nacionales y regionales, equipos formadores, dirigentes con responsabilidad sobre formación, auditores de calidad y, en general, cualquier persona que necesite comprender la propuesta a profundidad.', { size: 22 }));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 2: CONDICIONES PEDAGOGICAS
// ============================================================================
content.push(h1('2. Condiciones pedagógicas'));
content.push(p('Estas son las decisiones de diseño pedagógico que aplicamos transversalmente a toda la plataforma. Son la base sobre la cual se construye cada curso.', { size: 22 }));

content.push(h2('2.1 Duración'));
content.push(bullet('Cursos completos: entre 20 y 40 minutos. Un adulto puede completar un curso entero en una sesión, o fragmentarlo si no dispone de ese tiempo.'));
content.push(bullet('Lecciones individuales: entre 3 y 8 minutos, con un objetivo de 5–7 minutos. Esta granularidad permite completar la lección en cualquier ventana corta de tiempo.'));

content.push(h2('2.2 Modularidad y autocontención'));
content.push(bullet('Cada lección es terminable de forma independiente.'));
content.push(bullet('El progreso se autoguarda después de cada lección. El estudiante puede salir y volver sin perder avance.'));
content.push(bullet('No hay tareas para la casa entre lecciones. Lo que se debe hacer durante la lección, se hace durante la lección.'));

content.push(h2('2.3 Lenguaje'));
content.push(bullet('Conversacional, claro, aterrizado. Se prefiere "un adulto del movimiento" a "un sujeto del proceso de gestión de adultos".'));
content.push(bullet('Tutear al estudiante. El curso habla con la persona, no a un cargo abstracto.'));
content.push(bullet('Ejemplos concretos del día a día del grupo scout. Cada concepto se ilustra con una situación reconocible.'));
content.push(bullet('Citas oficiales plegables (policy-quote) cuando se requiere precisión doctrinal. El estudiante puede expandirlas si quiere ver la redacción exacta de la política, o ignorarlas si prefiere quedarse con la explicación práctica.'));

content.push(quote('Vincula los conocimientos, habilidades y actitudes que sean necesarios para que se puedan aplicar a situaciones o problemas a los que se enfrentan en sus actividades cotidianas. — PNAM 2022, Cap. 3, principio de Aprendizaje Significativo'));

content.push(h2('2.4 Estructura base de una lección'));
content.push(p('Toda lección sigue, con flexibilidad, la siguiente estructura:', { size: 22 }));
content.push(bullet('Recuadro de orientación: tiempo estimado y una sola idea central.'));
content.push(bullet('Cuerpo conceptual: desarrollo de la idea, con ejemplos y, cuando aplica, cuadro plegable de cita oficial.'));
content.push(bullet('(Opcional) Actividad interactiva: subir foto, autodiagnóstico, ejercicio de reflexión.'));
content.push(bullet('Reflexión personal: una pregunta abierta que conecta el contenido con la práctica del estudiante.'));
content.push(bullet('Mini-quiz: 1–3 preguntas de comprensión. Mínimo 70 % para avanzar.'));

content.push(h2('2.5 Evaluación'));
content.push(bullet('Mini-quizzes al final de cada lección. Evalúan comprensión, no memorización mecánica.'));
content.push(bullet('Reflexiones escritas por lección. Personales y privadas, no se califican.'));
content.push(bullet('Autoevaluación interactiva (self-assessment) cuando el curso lo justifica. El estudiante se califica grado 1–4 y obtiene un perfil personal.'));
content.push(bullet('Certificación al completar el curso. Código verificable público (ASC-AAAA-XXXXX).'));

content.push(h2('2.6 Ayudas y apoyos'));
content.push(bullet('Recuperación de avance por correo. Si el estudiante cambia de dispositivo o limpia el navegador.'));
content.push(bullet('Pre-llenado del registro entre cursos. Si ya se inscribió antes, sus datos vienen pre-cargados.'));
content.push(bullet('Modo oscuro automático según el sistema, con cambio manual disponible.'));
content.push(bullet('Diseño responsivo: funciona en celular, tableta y computador.'));
content.push(bullet('Lazy loading de videos: solo descarga el video del módulo activo.'));

content.push(h2('2.7 Accesibilidad'));
content.push(bullet('Subtítulos disponibles en los videos cuando el contenido lo requiere.'));
content.push(bullet('Contraste de colores cumpliendo WCAG en lo razonable.'));
content.push(bullet('Imágenes con texto alternativo (alt).'));
content.push(bullet('Navegación por teclado funcional.'));
content.push(bullet('Idioma único: español, registro neutro colombiano.'));

content.push(h2('2.8 Privacidad'));
content.push(bullet('Reflexiones personales se guardan localmente; nadie más las ve.'));
content.push(bullet('Autodiagnóstico es privado; el resultado solo se muestra al estudiante.'));
content.push(bullet('Datos de registro se guardan en Google Sheet privado por línea.'));
content.push(bullet('No se publican datos personales en el frontend público.'));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 3: CONDICIONES ESTRUCTURALES
// ============================================================================
content.push(h1('3. Condiciones estructurales'));
content.push(p('Son las decisiones técnicas que sostienen las condiciones pedagógicas. Existen para que las condiciones pedagógicas sean operables y sostenibles en el tiempo.', { size: 22 }));

content.push(h2('3.1 JSON como fuente de verdad'));
content.push(p('Cada curso vive como un archivo JSON estructurado. Ese archivo es la única fuente de verdad del contenido. Los HTML son artefactos generados desde ese JSON mediante un compilador.', { size: 22 }));
content.push(p('Implicación: un cambio de redacción son 30 segundos —editar JSON, ejecutar build, hacer push— sin tocar HTML directamente jamás.', { size: 22, italics: true, color: GRIS_TEXTO }));

content.push(h2('3.2 Motor centralizado, contenido distribuido'));
content.push(bullet('El motor de comportamiento (engine.js) y los estilos (styles.css) se inlinean en cada HTML al hacer build.'));
content.push(bullet('Mejoras al motor (nuevo tipo de sección, fix de bug) se aplican a todos los cursos al hacer rebuild.'));
content.push(bullet('Cada curso queda autocontenido en un solo archivo HTML.'));

content.push(h2('3.3 Backend independiente por línea'));
content.push(p('Cada línea tiene su propia plataforma con: repositorio Git, hosting en GitHub Pages, backend en Google Apps Script, base de datos en Google Sheets, backup automático nocturno y dashboard administrativo.', { size: 22 }));
content.push(p('Por qué independencia: cada línea tiene una comisión funcional dueña dentro de la ASC. Que cada una opere su plataforma alinea la herramienta con la estructura organizacional.', { size: 22 }));

content.push(h2('3.4 Portal centralizado de discovery'));
content.push(p('Un sitio único (PORTAL-ADULTOS-ASC) actúa como landing de entrada. El portal solo direcciona; las plataformas de cada línea operan independientemente. Sin portal, hay 4 URLs sueltas; con portal, hay 1 URL "oficial" para compartir.', { size: 22 }));

content.push(h2('3.5 Compilación reproducible'));
content.push(p('Cualquiera con Node.js puede ejecutar el comando build y obtener exactamente el mismo HTML que está en producción. Esto facilita auditoría y permite que el proyecto sobreviva al cambio de personas en su equipo.', { size: 22 }));

content.push(h2('3.6 Documentación operativa'));
content.push(bullet('AUDITORIA.md — Proceso de revisión y depuración de código a demanda.'));
content.push(bullet('CREAR-CURSO.md — Proceso paso a paso para construir un curso o un nivel completo.'));
content.push(bullet('MARCO-METODOLOGICO-PEDAGOGICO.md — Este documento.'));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 4: ARQUITECTURA FORMATIVA
// ============================================================================
content.push(h1('4. Arquitectura formativa de la asociación'));
content.push(p('La estructura es jerárquica y tiene cuatro niveles de organización:', { size: 22 }));

content.push(h2('4.1 Portal'));
content.push(p('La capa más externa. Es la URL pública de entrada. Contiene una breve presentación de la propuesta formativa y enlaces a cada Línea.', { size: 22 }));

content.push(h2('4.2 Líneas'));
content.push(p('Cada Línea corresponde a un campo temático mayor de la formación de adultos. Hoy se proyectan cuatro:', { size: 22 }));

const tableLineas = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [400, 3200, 4000, 1760],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('', { width: 400, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Línea', { width: 3200, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Audiencia', { width: 4000, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Estado', { width: 1760, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('📜', { width: 400 }),
      cell('Política de Adultos en el Movimiento', { width: 3200, run: { bold: true } }),
      cell('Consejeros, dirigentes, miembros del consejo de grupo', { width: 4000 }),
      cell('Activa (en piloto)', { width: 1760, run: { bold: true, color: '4CAF50' } })
    ]}),
    new TableRow({ children: [
      cell('🎒', { width: 400 }),
      cell('Programa de Jóvenes', { width: 3200, run: { bold: true } }),
      cell('Dirigentes de manada, tropa, comunidad y clan', { width: 4000 }),
      cell('Próximamente', { width: 1760, run: { color: 'FF9800' } })
    ]}),
    new TableRow({ children: [
      cell('🏛️', { width: 400 }),
      cell('Desarrollo Institucional', { width: 3200, run: { bold: true } }),
      cell('Comisionados regionales y nacionales, gobernanza', { width: 4000 }),
      cell('Próximamente', { width: 1760, run: { color: 'FF9800' } })
    ]}),
    new TableRow({ children: [
      cell('🛡️', { width: 400 }),
      cell('Políticas Transversales', { width: 3200, run: { bold: true } }),
      cell('Toda persona adulta vinculada (Safe from Harm, Diversidad, Motivación)', { width: 4000 }),
      cell('Próximamente', { width: 1760, run: { color: 'FF9800' } })
    ]})
  ]
});
content.push(tableLineas);
content.push(p('', { spacing: { after: 200 } }));
content.push(p('Cada Línea tiene su propia plataforma técnica (repositorio, backend, dashboard).', { size: 22 }));

content.push(h2('4.3 Niveles dentro de una línea'));
content.push(p('Cada línea se organiza en hasta cuatro niveles:', { size: 22 }));
content.push(bullet('Nivel 1 — Fundamentación: ruta común para todo adulto que entra a la línea.'));
content.push(bullet('Nivel 2 — Profundización por fase / tema: cursos que profundizan ámbitos específicos.'));
content.push(bullet('Nivel 3 — Especialización por cargo: cursos para roles concretos.'));
content.push(bullet('Nivel 4 — Transversales: temas que aplican a toda la línea de manera continua.'));
content.push(p('Esta organización asegura una progresión lógica. Los niveles 2, 3 y 4 entre sí no son secuenciales: el adulto elige según su rol.', { size: 22 }));

content.push(h2('4.4 Cursos y Lecciones'));
content.push(p('Cada Curso es la unidad mínima de certificación; aborda un tema autocontenido y entrega un certificado al ser completado. Cada Lección es la unidad mínima de aprendizaje, dura 3–8 minutos y aborda una sola idea central.', { size: 22 }));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 5: ANATOMIA DE UN CURSO
// ============================================================================
content.push(h1('5. Anatomía de un curso'));
content.push(p('Un curso típico se compone de:', { size: 22 }));
content.push(bullet('Módulo 0 — Registro al curso (auto-generado). Nombre, edad opcional, grupo, región, correo, motivación.'));
content.push(bullet('Módulo 1 — Bienvenida (isIntro). Encuadra el curso, presenta los objetivos, muestra el mapa de lecciones.'));
content.push(bullet('Módulos 2 a N — Lecciones de contenido. Cada una con secciones, reflexión y mini-quiz.'));
content.push(bullet('Módulo final — Certificado. Se genera al completar todas las lecciones con quizzes aprobados.'));

content.push(h2('5.1 Logros'));
content.push(p('A lo largo del curso, el estudiante desbloquea logros (badges) al completar lecciones específicas. Refuerzan motivación. Cada curso tiene 4–6 logros + 1 logro final ("Curso Completado").', { size: 22 }));

content.push(h2('5.2 Conexión cross-course'));
content.push(p('Algunos cursos producen datos que otros cursos consumen. Por ejemplo: en el Curso 4 — Las 7 Competencias Esenciales, el estudiante obtiene un perfil de competencias; en el Curso 5 — Tu Plan Personal, el plan-builder lee ese perfil y pre-selecciona prioridades. Esta integración técnica refuerza la coherencia pedagógica.', { size: 22 }));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 6: TIPOS DE SECCION
// ============================================================================
content.push(h1('6. Tipos de sección y herramientas pedagógicas'));
content.push(p('El generador permite construir cursos combinando los siguientes tipos de sección. Cada uno cumple un rol pedagógico específico.', { size: 22 }));

content.push(h2('6.1 Tipos textuales y de estructura'));

const tableTipos1 = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2800, 6560],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('Tipo', { width: 2800, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Rol pedagógico', { width: 6560, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('paragraph', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Texto explicativo regular', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('heading', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Subtítulo (nivel 3 ó 4) que segmenta el contenido', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('info-box', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Cuadro destacado (morado claro). Para "idea central" o "implicación práctica"', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('mission-box', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Cuadro destacado amarillo. Misión, compromiso, llamado a la acción', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('list', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Lista con viñetas o numerada', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('timeline', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Línea de tiempo con elementos consecutivos', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('method-grid', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Cuadrícula de tarjetas con color e icono. Para conceptos paralelos', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('blockquote', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Cita destacada centrada', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('course-objectives', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Listado formateado de objetivos del curso', { width: 6560 })
    ]})
  ]
});
content.push(tableTipos1);

content.push(h2('6.2 Tipo multimedia'));
const tableTipos2 = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2800, 6560],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('Tipo', { width: 2800, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Rol pedagógico', { width: 6560, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('video', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Video MP4 con lazy loading. Solo se descarga cuando el módulo está activo', { width: 6560 })
    ]})
  ]
});
content.push(tableTipos2);

content.push(h2('6.3 Tipo doctrinal'));
const tableTipos3 = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2800, 6560],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('Tipo', { width: 2800, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Rol pedagógico', { width: 6560, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('policy-quote', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Cuadro plegable con la cita textual de la política. Cerrado por defecto. Reconcilia accesibilidad con rigor doctrinal.', { width: 6560 })
    ]})
  ]
});
content.push(tableTipos3);

content.push(h2('6.4 Tipos interactivos'));
const tableTipos4 = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [2800, 6560],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('Tipo', { width: 2800, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Rol pedagógico', { width: 6560, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('photo-upload', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Subida de imagen del estudiante. Compresión cliente a 1200 px JPEG. Persiste en localStorage.', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('self-assessment', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Autodiagnóstico interactivo: el estudiante elige un grado por dimensión. Calcula fortalezas y áreas de oportunidad. Guarda perfil global.', { width: 6560 })
    ]}),
    new TableRow({ children: [
      cell('plan-builder', { width: 2800, run: { bold: true, color: MORADO } }),
      cell('Constructor interactivo de Plan Personal de Desarrollo. Lee perfil del autodiagnóstico. Genera PDF imprimible.', { width: 6560 })
    ]})
  ]
});
content.push(tableTipos4);

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 7: LOGICA ITERATIVA
// ============================================================================
content.push(h1('7. Lógica iterativa: cómo llegamos aquí'));
content.push(p('La estructura actual no salió completa de la primera versión. Es resultado de un proceso iterativo que comenzó con un video del Taller Flor de Lis 2 — Sesión 1, dictado por dirigentes de la Regional Valle del Cauca el 30 de abril de 2026.', { size: 22 }));

content.push(h2('7.1 Iteración 1 — Curso monolítico (descartada)'));
content.push(p('Cortamos el video en 27 segmentos y construimos un curso de 90 minutos con 6 módulos largos. Funcionaba pero tenía dos problemas:', { size: 22 }));
content.push(bullet('Demasiado largo para que un adulto voluntario lo termine de una sentada.'));
content.push(bullet('Densidad desigual: temas conceptuales mezclados con prácticos.'));

content.push(h2('7.2 Iteración 2 — Cinco cursos cortos con autodiagnóstico'));
content.push(p('Refundimos los 90 minutos en una ruta de 5 cursos cortos, cada uno entre 25 y 35 min. Agregamos lenguaje práctico con cuadros oficiales plegables, autodiagnóstico interactivo, plan personal con plan-builder, y conexión cross-course entre Curso 4 y Curso 5.', { size: 22 }));

content.push(h2('7.3 Iteración 3 — Reordenamiento conceptual'));
content.push(p('La ruta original era: Bienvenida → Política → Competencias → Plan → Ciclo. Surgió una observación pedagógica crítica:', { size: 22 }));
content.push(quote('¿Hablar de competencias y plan personal sin antes hablar del ciclo de vida del adulto no podría confundir?'));
content.push(p('La respuesta fue sí. Reordenamos: Bienvenida → Política → Ciclo → Competencias → Plan. El ciclo pasó al medio, dando contexto antes del detalle.', { size: 22 }));

content.push(h2('7.4 Iteración 4 — Portal centralizado'));
content.push(p('Cuando proyectamos las cuatro líneas formativas, apareció una pregunta de discovery: "¿cuál URL le doy a un adulto que quiere empezar?". La respuesta fue construir el Portal de Formación de Adultos: un landing centralizado que presenta las líneas y direcciona a cada plataforma.', { size: 22 }));

content.push(h2('7.5 Lección general del proceso'));
content.push(p('Cada iteración se hizo gracias a una crítica clara que se aplicó como mejora. Sin críticas no hubo iteraciones; con críticas, hubo aprendizaje.', { size: 22 }));
content.push(p('Esto valida la decisión de "siempre piloto antes de escalar": probar cada nivel/curso con usuarios reales y aplicar las observaciones antes de pasar al siguiente.', { size: 22, italics: true, color: GRIS_TEXTO }));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 8: JUSTIFICACION PEDAGOGICA
// ============================================================================
content.push(h1('8. Justificación pedagógica'));
content.push(p('Las decisiones que describimos no son arbitrarias. Se sostienen en marcos teóricos contemporáneos sobre aprendizaje adulto y diseño instruccional digital.', { size: 22 }));

content.push(h2('8.1 Andragogía (Knowles)'));
content.push(p('Malcolm Knowles establece que el aprendizaje del adulto requiere:', { size: 22 }));
content.push(bullet('Necesidad de saber el porqué. → Cada lección abre con una "idea central" explicitada.'));
content.push(bullet('Autoconcepto del estudiante como dueño de su proceso. → Las reflexiones personales y el autodiagnóstico ponen al estudiante en control.'));
content.push(bullet('Experiencia previa como recurso. → Ejemplos del día a día del grupo permiten que el estudiante conecte con lo vivido.'));
content.push(bullet('Disposición a aprender lo que necesita. → La formación se ata a roles concretos.'));
content.push(bullet('Orientación al problema más que a la materia. → Quizzes situacionales: "¿qué le respondes a esta persona?"'));
content.push(bullet('Motivación interna. → El sistema gamifica con logros, certificados y plan personal accionable.'));

content.push(h2('8.2 Microlearning'));
content.push(p('La literatura actual en e-learning corporativo y educativo confirma que las píldoras de 5–10 minutos producen mejor retención, menor fatiga cognitiva, mayor tasa de completación y adopción más rápida entre adultos ocupados. Por esto, las lecciones de 5–7 minutos no son un atajo de comodidad: son una decisión metodológica explícita.', { size: 22 }));

content.push(h2('8.3 Aprendizaje significativo (Ausubel)'));
content.push(p('Ausubel plantea que el aprendizaje es significativo cuando el contenido nuevo se ancla a estructuras cognitivas previas. La PNAM 2022 lo retoma como uno de sus 13 principios. En la plataforma se materializa con ejemplos del grupo scout que actúan como anclas, cuadros plegables con cita oficial que permiten validar lo aprendido contra la fuente, y reflexiones que conectan con la práctica del estudiante en su rol actual.', { size: 22 }));

content.push(h2('8.4 Modelo de gestión por competencias (Spencer & Spencer; Marta Alles)'));
content.push(p('La ASC adopta el modelo de competencias de Spencer & Spencer (citado en PNAM Cap. 4) y los grados de dominio por conductas observables de Marta Alles (base del Diccionario de Competencias). La plataforma respeta este modelo: el autodiagnóstico se diseña sobre los 4 grados oficiales, las conductas observables del Diccionario se trasladan a los criterios que el estudiante elige al calificarse, y el Plan Personal de Desarrollo se construye sobre las áreas de oportunidad identificadas.', { size: 22 }));

content.push(h2('8.5 Evaluación 360°'));
content.push(p('La PNAM Cap. 5.2.2 establece que la certificación de competencias se realiza con evaluación de 360° (autoevaluación, coevaluación, heteroevaluación y evaluación). La plataforma habilita la autoevaluación y prepara al estudiante para participar en las otras tres modalidades —que requieren la presencia del asesor personal, los pares, los chicos y los padres— con un perfil propio claro.', { size: 22 }));

content.push(h2('8.6 Auto-eficacia (Bandura)'));
content.push(p('La sensación de "yo puedo hacer esto" es un predictor fuerte del aprendizaje. La plataforma cuida este aspecto por: lecciones cortas que se completan con éxito frecuentemente; logros visibles desbloqueables; plan personal accionable que el estudiante imprime y firma; y lenguaje no condescendiente que trata al adulto como capaz.', { size: 22 }));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 9: LINEA POLITICA DE ADULTOS - PILOTO
// ============================================================================
content.push(h1('9. Línea Política de Adultos: prueba piloto'));
content.push(p('La primera línea desplegada en producción es la línea Política de Adultos en el Movimiento. Sirve como prueba de concepto del marco metodológico aquí descrito.', { size: 22 }));

content.push(h2('9.1 Estructura desplegada (Nivel 1 — Fundamentación)'));
const tableNivel1 = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [400, 3000, 1200, 4760],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('#', { width: 400, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Curso', { width: 3000, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Duración', { width: 1200, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Hitos pedagógicos', { width: 4760, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    new TableRow({ children: [
      cell('1', { width: 400, run: { bold: true } }),
      cell('🦸 Bienvenida al Movimiento de Adultos', { width: 3000 }),
      cell('25 min', { width: 1200 }),
      cell('Hook emocional, desarme de mitos, dibujo del consejero ideal, primer compromiso', { width: 4760 })
    ]}),
    new TableRow({ children: [
      cell('2', { width: 400, run: { bold: true } }),
      cell('📜 La Política — Marco y Principios', { width: 3000 }),
      cell('30 min', { width: 1200 }),
      cell('13 principios oficiales, 12 herramientas, definición Spencer-Spencer', { width: 4760 })
    ]}),
    new TableRow({ children: [
      cell('3', { width: 400, run: { bold: true } }),
      cell('🔄 El Ciclo del Adulto', { width: 3000 }),
      cell('30 min', { width: 1200 }),
      cell('Atracción, desempeño con formación básica + perfeccionamiento, decisiones para el futuro', { width: 4760 })
    ]}),
    new TableRow({ children: [
      cell('4', { width: 400, run: { bold: true } }),
      cell('🧠 Las 7 Competencias Esenciales', { width: 3000 }),
      cell('35 min', { width: 1200 }),
      cell('Autodiagnóstico interactivo (4 grados por competencia) que produce el perfil personal', { width: 4760 })
    ]}),
    new TableRow({ children: [
      cell('5', { width: 400, run: { bold: true } }),
      cell('🗺️ Tu Plan Personal de Desarrollo', { width: 3000 }),
      cell('30 min', { width: 1200 }),
      cell('Plan-builder + PDF imprimible, cierre de la ruta', { width: 4760 })
    ]})
  ]
});
content.push(tableNivel1);
content.push(p('', { spacing: { after: 100 } }));
content.push(p('Total: ~2h 30min en lecciones de 5–7 min cada una.', { size: 22, italics: true, color: GRIS_TEXTO }));

content.push(h2('9.2 Niveles 2, 3 y 4 proyectados'));
content.push(p('Tras la validación del Nivel 1 con piloto, se construirán:', { size: 22 }));
content.push(bullet('Nivel 2 — 5 cursos sobre las fases del ciclo del adulto.'));
content.push(bullet('Nivel 3 — 7 cursos por cargo del consejo de grupo.'));
content.push(bullet('Nivel 4 — 3+ cursos transversales integrados con la línea de Políticas Transversales.'));
content.push(p('Total proyectado de la línea: 17 cursos.', { size: 22, bold: true, color: MORADO }));

content.push(h2('9.3 Funcionalidades técnicas activas'));
content.push(bullet('Plataforma desplegada en GitHub Pages con URL pública.'));
content.push(bullet('Backend en Google Apps Script con persistencia en Google Sheets.'));
content.push(bullet('Backup automático nocturno (retención 30 días).'));
content.push(bullet('Dashboard administrativo con KPIs.'));
content.push(bullet('Modo oscuro automático.'));
content.push(bullet('Pre-llenado de registro entre cursos.'));
content.push(bullet('Recuperación de avance vía correo.'));
content.push(bullet('Subida de fotos del estudiante.'));
content.push(bullet('Autodiagnóstico interactivo con perfil persistente.'));
content.push(bullet('Plan personal imprimible en PDF.'));
content.push(bullet('Certificados con código verificable público.'));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 10: PROXIMAS ETAPAS
// ============================================================================
content.push(h1('10. Próximas etapas'));
content.push(bullet('Cierre del piloto del Nivel 1 — recoger retroalimentación, aplicar ajustes, dejar el Nivel 1 estable.'));
content.push(bullet('Construcción del Nivel 2 de Política de Adultos — 5 cursos adicionales sobre las fases del ciclo.'));
content.push(bullet('Apertura de la línea Programa de Jóvenes — segunda línea formativa siguiendo el mismo marco.'));
content.push(bullet('Apertura progresiva de Desarrollo Institucional y Políticas Transversales.'));
content.push(bullet('Refinamiento metodológico continuo — este documento se considera living document.'));

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 11: GLOSARIO
// ============================================================================
content.push(h1('11. Glosario'));
const glosario = [
  ['Adulto del movimiento', 'Toda persona mayor de edad (voluntario o profesional) que ejerce un cargo o función en la ASC'],
  ['Andragogía', 'Disciplina que estudia el aprendizaje del adulto, en oposición a la pedagogía centrada en niños'],
  ['Asesor Personal', 'Adulto que acompaña formalmente el desarrollo de otro adulto durante su nombramiento'],
  ['Auto-eficacia', 'Creencia de la persona en su capacidad de ejecutar lo necesario para alcanzar metas (Bandura)'],
  ['Ciclo de vida del adulto', 'Sucesión cíclica de tres fases: atracción y vinculación, desempeño, decisiones para el futuro'],
  ['Competencia esencial', 'Una de las 7 competencias que aplican a todo adulto del movimiento'],
  ['Competencia específica', 'Una de las 29 competencias técnicas asociadas a cargos concretos'],
  ['Conducta observable', 'Comportamiento concreto que evidencia el grado de dominio de una competencia'],
  ['Curso', 'Unidad mínima de certificación. Aborda un tema autocontenido'],
  ['Evaluación 360°', 'Modelo con 4 modalidades: autoevaluación, coevaluación, heteroevaluación, evaluación formal'],
  ['Insignia de Madera', 'Símbolo mundial oficial de certificación de la formación básica del adulto'],
  ['Lección', 'Unidad mínima de aprendizaje, dura 3–8 min, aborda una idea central'],
  ['Línea', 'Campo temático mayor de la formación; cada línea es operada por una comisión funcional'],
  ['Microlearning', 'Diseño instruccional basado en píldoras cortas autocontenidas'],
  ['Nivel', 'Subdivisión de una línea: fundamentación, profundización, especialización, transversales'],
  ['Plan Personal de Desarrollo (PPD)', 'Plan acordado entre el adulto y su asesor que define competencias a desarrollar y evidencias'],
  ['PNAM', 'Política Nacional de Adultos en el Movimiento (Acuerdo CSN 176 de 2017)'],
  ['Talento 360°', 'Plataforma oficial de la ASC que centraliza la hoja de vida del adulto']
];
const tableGloss = new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [3000, 6360],
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        cell('Término', { width: 3000, shading: GRIS_HEADER, run: { bold: true } }),
        cell('Definición', { width: 6360, shading: GRIS_HEADER, run: { bold: true } })
      ]
    }),
    ...glosario.map(([k, v]) => new TableRow({
      children: [
        cell(k, { width: 3000, run: { bold: true, color: MORADO } }),
        cell(v, { width: 6360 })
      ]
    }))
  ]
});
content.push(tableGloss);

content.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================================
// SECCION 12: REFERENCIAS
// ============================================================================
content.push(h1('12. Referencias'));

content.push(h2('12.1 Documentos oficiales de la ASC'));
content.push(bullet('PNAM 2022 — Política Nacional de Adultos en el Movimiento. Acuerdo Consejo Scout Nacional N° 176 del 22 de abril de 2017. Resolución CSN N° 021-17 del 5 de junio de 2017.'));
content.push(bullet('Diccionario de Competencias (PNAM doc 3).'));
content.push(bullet('Manual de Cargos, Funciones y Perfiles por Competencias (PNAM doc 4).'));
content.push(bullet('Cartilla Metodológica (PNAM doc 2).'));
content.push(bullet('Política Interamericana de Adultos en el Movimiento Scout "Los adultos que necesitamos" (25ª Conferencia Scout Interamericana, 2013).'));

content.push(h2('12.2 Marcos teóricos'));
content.push(bullet('Knowles, M. — The Adult Learner. Fundamentos de andragogía.'));
content.push(bullet('Spencer & Spencer — Competence at Work. Definición de competencia adoptada por la PNAM.'));
content.push(bullet('Alles, M. — Diccionario de competencias por grados. Base del Diccionario oficial ASC.'));
content.push(bullet('Ausubel, D. — Psicología educativa: un punto de vista cognoscitivo. Aprendizaje significativo.'));
content.push(bullet('Bandura, A. — Self-efficacy: The exercise of control. Auto-eficacia.'));

content.push(h2('12.3 Documentos operativos del proyecto'));
content.push(bullet('INDICE-PROYECTO.md — Estado actual del proyecto.'));
content.push(bullet('AUDITORIA.md — Proceso de auditoría a demanda.'));
content.push(bullet('CREAR-CURSO.md — Manual operativo de creación de cursos.'));
content.push(bullet('Plan-de-Formacion-Linea-Politica-de-Adultos.docx — Roadmap de los 4 niveles, 17 cursos.'));

// --- Cierre ---
content.push(p('', { spacing: { after: 600 } }));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: '— Fin del documento —', size: 20, italics: true, color: GRIS_TENUE })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 200, after: 100 },
  children: [new TextRun({ text: 'Documento elaborado como parte del proyecto de digitalización', size: 18, italics: true, color: GRIS_TENUE })]
}));
content.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 100 },
  children: [new TextRun({ text: 'de la formación de adultos voluntarios del movimiento scout colombiano.', size: 18, italics: true, color: GRIS_TENUE })]
}));

// ============================================================================
// CONFIGURACION DEL DOCUMENTO
// ============================================================================
const doc = new Document({
  creator: 'Plataforma de Formación de Adultos ASC',
  title: 'Marco Metodológico y Pedagógico',
  description: 'Marco metodológico y pedagógico de la Plataforma de Formación de Adultos de la Asociación Scouts de Colombia',
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 36, bold: true, font: 'Arial', color: MORADO },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: 'Arial', color: MORADO },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 }
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 24, bold: true, font: 'Arial', color: MORADO },
        paragraph: { spacing: { before: 220, after: 140 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({
            text: 'Marco Metodológico y Pedagógico · Plataforma de Adultos ASC',
            size: 16, color: GRIS_TENUE, italics: true
          })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'Página ', size: 16, color: GRIS_TENUE }),
            new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GRIS_TENUE }),
            new TextRun({ text: ' de ', size: 16, color: GRIS_TENUE }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: GRIS_TENUE })
          ]
        })]
      })
    },
    children: content
  }]
});

const OUT = path.join(
  'C:\\Users\\Principal\\Documents\\APP APRENDIZAJE\\APP PARA APRENDIZAJE\\PORTAL-ADULTOS-ASC',
  'Marco-Metodologico-Pedagogico.docx'
);

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(OUT, buf);
  const sz = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log('OK ' + sz + ' KB -> ' + OUT);
}).catch(err => {
  console.error('ERROR: ' + err.message);
  process.exit(1);
});
