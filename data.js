/**
 * WIGEON PRODUCTIONS — Archivo central de contenido y configuración
 * -----------------------------------------------------------------
 * Martín: puedes editar tus precios, agregar canciones o cambiar textos
 * directamente aquí sin tocar el diseño ni el código principal.
 *
 * Para agregar audio local (.mp3) en lugar de Google Drive en cualquier track:
 * agrega la propiedad `localAudio: "assets/audio/nombre.mp3"` al objeto del track.
 */

window.WIGEON_DATA = {
  contact: {
    brandName: "WIGEON PRODUCTIONS",
    shortName: "WIGEON",
    founder: "Martín",
    phoneDisplay: "+57 312 571 0446",
    phoneRaw: "573125710446",
    whatsappLink: "https://wa.me/573125710446",
    instagramBrand: "https://www.instagram.com/wigeon_productions/",
    instagramFounder: "https://www.instagram.com/wigeonb/",
    email: "contacto@wigeonproductions.com", // Cámbialo por tu Gmail o correo real cuando quieras
    locationES: "Zipaquirá · Sabana de Bogotá · Remoto Mundial",
    locationEN: "Zipaquirá, Colombia · Remote Worldwide"
  },

  /**
   * PORTAFOLIO REAL DE WIGEON PRODUCTIONS
   * Tipos de reproductor soportados:
   *  - "spotify": embebe reproductor oficial de Spotify (usa spotifyTrackId)
   *  - "youtube": embebe reproductor de YouTube (usa youtubeId)
   *  - "drive": embebe vista previa de audio de Google Drive (usa driveId) o audio local si defines localAudio
   *  - "external": enlace externo (ej. proyecto de transcripción / redes del artista)
   */
  portfolio: [
    {
      id: "paula-bail-5-minutos",
      featured: true,
      category: "production",
      genreTag: "Pop · Producción Completa",
      genreTagEN: "Pop · Full Production",
      title: "5 Minutos Más",
      artist: "Paula Bail",
      year: "Spotify Release",
      mediaType: "spotify",
      spotifyTrackId: "5onWCv4FoqZCsAH7SjItfY",
      externalUrl: "https://open.spotify.com/track/5onWCv4FoqZCsAH7SjItfY",
      externalLabelES: "Abrir en Spotify",
      externalLabelEN: "Open on Spotify",
      rolesES: ["Producción Completa", "Dirección Creativa", "Arreglos", "Grabación", "Mezcla"],
      rolesEN: ["Full Production", "Creative Direction", "Arrangement", "Recording", "Mixing"],
      descriptionES: "Desarrollo integral de la canción: dirección creativa, arreglos instrumentales, grabación, edición final y mezcla orientada a plataformas de streaming.",
      descriptionEN: "End-to-end production including creative direction, instrumental arrangement, recording, final editing, and streaming-ready mixing."
    },
    {
      id: "paco-planetas-quiereme",
      featured: true,
      category: "production",
      genreTag: "Pop / Indie · Producción",
      genreTagEN: "Pop / Indie · Production",
      title: "Quiéreme",
      artist: "Paco Planetas",
      year: "YouTube Release",
      mediaType: "youtube",
      youtubeId: "SEzMYd8EGME",
      externalUrl: "https://www.youtube.com/watch?v=SEzMYd8EGME",
      externalLabelES: "Ver en YouTube",
      externalLabelEN: "Watch on YouTube",
      rolesES: ["Producción", "Composición", "Arreglos"],
      rolesEN: ["Production", "Composition", "Arrangement"],
      descriptionES: "Producción y composición musical: construcción de ideas melódicas, arreglos y base instrumental completa para el sencillo.",
      descriptionEN: "Music production and composition: melodic development, arrangements, and full instrumental foundation."
    },
    {
      id: "milandi-body-and-soul",
      featured: true,
      category: "mixing",
      genreTag: "Jazz · Grabación, Bajo & Mezcla",
      genreTagEN: "Jazz · Recording, Bass & Mix",
      title: "Body and Soul (Cover)",
      artist: "Milandí",
      year: "Studio Session",
      mediaType: "drive",
      driveId: "1j63XdUd_0Yaqi4JbUDl-kvqGTmoRg1Z1",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1j63XdUd_0Yaqi4JbUDl-kvqGTmoRg1Z1/view",
      externalLabelES: "Abrir audio original",
      externalLabelEN: "Open original audio",
      rolesES: ["Ingeniería de Grabación", "Bajo Eléctrico", "Mezcla Final"],
      rolesEN: ["Recording Engineer", "Electric Bass", "Final Mixing"],
      descriptionES: "Grabación en estudio del dúo Milandí, interpretación de bajo eléctrico y mezcla final respetando la dinámica natural y calidez del jazz.",
      descriptionEN: "Studio recording for Duo Milandí, live electric bass performance, and final mixing preserving natural jazz dynamics and warmth."
    },
    {
      id: "paula-bail-para-ti",
      featured: false,
      category: "production",
      genreTag: "Pop · Producción Completa",
      genreTagEN: "Pop · Full Production",
      title: "Para Ti (Fragmento)",
      artist: "Paula Bail",
      year: "Production Excerpt",
      mediaType: "drive",
      driveId: "1lS874wCPHzPPxwaB7cVusNyu4nUTA4yW",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1lS874wCPHzPPxwaB7cVusNyu4nUTA4yW/view",
      externalLabelES: "Abrir fragmento",
      externalLabelEN: "Open excerpt",
      rolesES: ["Producción Completa", "Arreglos", "Grabación", "Mezcla"],
      rolesEN: ["Full Production", "Arrangement", "Recording", "Mixing"],
      descriptionES: "Producción completa desde el concepto sonoro hasta los arreglos, grabación, edición detallada y mezcla.",
      descriptionEN: "Full song production from sonic direction and arrangement through recording, detailed editing, and mixing."
    },
    {
      id: "swey-some-love",
      featured: false,
      category: "production",
      genreTag: "Pop / R&B · Producción",
      genreTagEN: "Pop / R&B · Production",
      title: "Some Love (Fragmento)",
      artist: "Swey",
      year: "Production Excerpt",
      mediaType: "drive",
      driveId: "1R2tcn-GqTsFbY4t2_J8eoqQCvxBxNoNj",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1R2tcn-GqTsFbY4t2_J8eoqQCvxBxNoNj/view",
      externalLabelES: "Abrir fragmento",
      externalLabelEN: "Open excerpt",
      rolesES: ["Pre-producción", "Arreglos", "Producción", "Grabación"],
      rolesEN: ["Pre-production", "Arrangement", "Production", "Recording"],
      descriptionES: "Producción completa abarcando pre-producción, diseño del arreglo instrumental y sesiones de grabación.",
      descriptionEN: "Complete production spanning pre-production, instrumental arrangement, and recording sessions."
    },
    {
      id: "swey-el-honor",
      featured: false,
      category: "production",
      genreTag: "Pop · Producción",
      genreTagEN: "Pop · Production",
      title: "El Honor (Fragmento)",
      artist: "Swey",
      year: "Production Excerpt",
      mediaType: "drive",
      driveId: "1nO8D4p0TeXSk5SjPq0TdPMtP-dwNBfNS",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1nO8D4p0TeXSk5SjPq0TdPMtP-dwNBfNS/view",
      externalLabelES: "Abrir fragmento",
      externalLabelEN: "Open excerpt",
      rolesES: ["Pre-producción", "Arreglos", "Producción", "Grabación"],
      rolesEN: ["Pre-production", "Arrangement", "Production", "Recording"],
      descriptionES: "Desarrollo musical completo desde la pre-producción y estructura armónica hasta la grabación.",
      descriptionEN: "Complete musical development from pre-production and harmonic structure through recording."
    },
    {
      id: "genfest-bonds-of-hope",
      featured: false,
      category: "production",
      genreTag: "2.º Lugar GENFEST 2023",
      genreTagEN: "2nd Place GENFEST 2023",
      title: "Bonds of Hope",
      artist: "Canción Original · GENFEST 2023",
      year: "Award · 2nd Place",
      mediaType: "drive",
      driveId: "1cBoH26b__kA-DXJV14WpEpE6r1r5asxQ",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1cBoH26b__kA-DXJV14WpEpE6r1r5asxQ/view",
      externalLabelES: "Abrir fragmento",
      externalLabelEN: "Open excerpt",
      rolesES: ["Composición", "Letra", "Producción", "Mezcla & Master"],
      rolesEN: ["Composition", "Lyrics", "Production", "Mix & Master"],
      descriptionES: "Obra original ganadora del 2.º lugar en la convocatoria oficial GENFEST 2023. Participación integral en música, letra, producción, grabación, mezcla y mastering.",
      descriptionEN: "Original song awarded 2nd place in the official GENFEST 2023 competition. Full involvement across music, lyrics, production, recording, mixing, and mastering."
    },
    {
      id: "mayele-amazonas",
      featured: false,
      category: "mixing",
      genreTag: "Ensamble Acústico · Grabación",
      genreTagEN: "Acoustic Ensemble · Recording",
      title: "Amazonas en Llamas (Joropo)",
      artist: "Mayelé",
      year: "Unreleased Recording",
      mediaType: "drive",
      driveId: "1aLqiOVLEUp7i0NWdxP5YpVZZAKI652mh",
      localAudio: "",
      externalUrl: "https://drive.google.com/file/d/1aLqiOVLEUp7i0NWdxP5YpVZZAKI652mh/view",
      externalLabelES: "Abrir fragmento",
      externalLabelEN: "Open excerpt",
      rolesES: ["Grabación en Estudio", "Microfonía Acústica"],
      rolesEN: ["Studio Recording", "Acoustic Miking"],
      descriptionES: "Captura en estudio de ensamble de joropo cuidando la naturalidad tímbrica, el balance acústico y la energía de la interpretación en vivo.",
      descriptionEN: "Studio capture of a traditional Joropo ensemble focusing on natural timbre, acoustic balance, and live performance energy."
    },
    {
      id: "joseg-el-tunel-rojo",
      featured: false,
      category: "transcription",
      genreTag: "Álbum Completo · Derechos de Autor",
      genreTagEN: "Full Album · Copyright Registration",
      title: "Álbum \"El Túnel Rojo\"",
      artist: "Joseg",
      year: "Full Album Transcription",
      mediaType: "external",
      externalUrl: "https://www.instagram.com/josegsoy/",
      externalLabelES: "Visitar a @josegsoy",
      externalLabelEN: "Visit @josegsoy",
      rolesES: ["Transcripción Completa", "Partituras PDF", "Documentación Legal"],
      rolesEN: ["Full Transcription", "Sheet Music PDF", "Copyright Documentation"],
      descriptionES: "Transcripción integral y documentación musical en partitura de un álbum completo de rock para el registro y protección de derechos de autor (DNDA).",
      descriptionEN: "Complete transcription and professional sheet-music documentation of a full rock album for copyright registration and protection."
    }
  ],

  /**
   * PAQUETES PRINCIPALES DE PRODUCCIÓN (Precios en COP y USD)
   */
  packages: [
    {
      id: "instrumental",
      featured: false,
      badgeES: "01 · BASE A MEDIDA",
      badgeEN: "01 · CUSTOM INSTRUMENTAL",
      nameES: "Producción Instrumental",
      nameEN: "Custom Instrumental Production",
      priceCOP: 650000,
      priceUSD: 220,
      turnaroundES: "7–10 días hábiles",
      turnaroundEN: "7–10 business days",
      idealES: "Ideal para cantantes que ya tienen melodía/letra y graban sus voces aparte.",
      idealEN: "Ideal for vocalists who already have a melody/lyrics and record vocals separately.",
      featuresES: [
        "Arreglo original a medida (Pop, R&B, Funk o Jazz)",
        "Bajo eléctrico real y capas armónicas con identidad",
        "Programación de batería con pocket y textura moderna",
        "Mezcla instrumental + stems separados (WAV 24-bit)",
        "2 rondas de revisiones incluidas"
      ],
      featuresEN: [
        "Custom original arrangement (Pop, R&B, Funk, or Jazz)",
        "Live electric bass & rich harmonic layering",
        "Groove-focused drum programming & modern textures",
        "Mixed instrumental + separated stems (24-bit WAV)",
        "2 rounds of revisions included"
      ]
    },
    {
      id: "full-production",
      featured: true,
      badgeES: "02 · MÁS ELEGIDO",
      badgeEN: "02 · MOST POPULAR",
      nameES: "Producción Completa",
      nameEN: "Full Release-Ready Production",
      priceCOP: 1100000,
      priceUSD: 380,
      turnaroundES: "10–14 días hábiles",
      turnaroundEN: "10–14 business days",
      idealES: "De una nota de voz o maqueta acústica a canción terminada lista para Spotify.",
      idealEN: "From a voice memo or acoustic demo to a finished track ready for Spotify.",
      featuresES: [
        "Pre-producción, estructura y diseño sonoro personalizado",
        "Producción instrumental completa + instrumentos reales",
        "Dirección y grabación vocal (remota o en home studio en Zipaquirá)",
        "Edición, afinación vocal natural, mezcla y mastering comercial",
        "Entrega de Master WAV, versión instrumental, acapella y stems",
        "3 rondas de revisiones incluidas"
      ],
      featuresEN: [
        "Pre-production, song structure & custom sonic direction",
        "Complete instrumental production + live instruments",
        "Vocal direction & tracking (remote or in-studio in Zipaquirá)",
        "Vocal editing, natural tuning, detailed mix & commercial master",
        "Final WAV Master, instrumental, acapella & full stems",
        "3 rounds of revisions included"
      ]
    },
    {
      id: "mix-master",
      featured: false,
      badgeES: "03 · POST-PRODUCCIÓN",
      badgeEN: "03 · POST-PRODUCTION",
      nameES: "Mezcla & Mastering",
      nameEN: "Mixing & Mastering",
      priceCOP: 300000,
      priceUSD: 100,
      turnaroundES: "4–6 días hábiles",
      turnaroundEN: "4–6 business days",
      idealES: "Para artistas y bandas que ya tienen sus pistas grabadas y buscan sonido comercial.",
      idealEN: "For artists and bands with recorded multitracks seeking clarity, punch, and depth.",
      featuresES: [
        "Limpieza, balance, dinámica, color y profundidad profesional",
        "Edición básica y afinación vocal natural",
        "Mastering optimizado para Spotify, Apple Music y YouTube",
        "Entrega en WAV 24-bit + MP3 320 kbps",
        "2 rondas de revisiones incluidas"
      ],
      featuresEN: [
        "Cleanup, tonal balance, punch, warmth & stereo depth",
        "Basic timing cleanup & natural vocal pitch correction",
        "Mastering optimized for Spotify, Apple Music & YouTube",
        "24-bit WAV + 320 kbps MP3 deliverables",
        "2 rounds of revisions included"
      ]
    }
  ],

  /**
   * ADD-ONS OPCIONALES (Conectados también al cotizador interactivo)
   */
  addons: [
    {
      id: "session-drums",
      nameES: "Batería acústica real (baterista de sesión)",
      nameEN: "Live acoustic drums (session drummer)",
      descES: "Si tu canción de Funk, Jazz o Pop pide batería acústica real, coordino grabación multipista con baterista profesional.",
      descEN: "When your Funk, Jazz, or Pop track calls for live acoustic drums, I coordinate multitrack recording with a pro session drummer.",
      priceCOP: 300000,
      priceUSD: 110
    },
    {
      id: "dnda-transcription",
      nameES: "Partitura profesional en PDF (Registro DNDA / Copyright)",
      nameEN: "Professional Sheet Music PDF (Copyright / Lead Sheet)",
      descES: "Transcripción limpia en software de notación lista para registrar tu obra musical sin complicaciones.",
      descEN: "Clean notation-software PDF lead sheet ready for copyright registration or live musicians.",
      priceCOP: 100000,
      priceUSD: 35
    },
    {
      id: "studio-vocals",
      nameES: "Sesión presencial de voces en Zipaquirá",
      nameEN: "In-person vocal session (Zipaquirá / Bogotá area)",
      descES: "Grabación guiada de voces, guitarras o bajo en mi home studio en Zipaquirá (Sabana de Bogotá).",
      descEN: "Guided vocal, guitar, or bass tracking session at my home studio in Zipaquirá (near Bogotá).",
      priceCOP: 150000,
      priceUSD: 50
    }
  ],

  /**
   * SERVICIOS TÉCNICOS COMPLEMENTARIOS (Manteniendo toda la oferta de WIGEON sin diluir la especialidad)
   */
  secondaryServices: [
    {
      num: "04",
      titleES: "Transcripción Musical & Partituras",
      titleEN: "Music Transcription & Sheet Music",
      descES: "Transcripción fiel de canciones o álbumes completos a PDF profesional (melodía, armonía, letra o arreglos) para registro de derechos de autor (DNDA) o montaje en vivo.",
      descEN: "Accurate transcription of singles or full albums into clean PDF sheet music (melody, chords, lyrics, or parts) for copyright registration or live bands.",
      startingCOP: "Desde $100.000 COP / canción",
      startingEN: "From $35 USD / song"
    },
    {
      num: "05",
      titleES: "Diseño Sonoro",
      titleEN: "Sound Design",
      descES: "Creación, edición y procesamiento de texturas, identidades sonoras y audio para piezas audiovisuales, podcasts, comerciales y proyectos creativos.",
      descEN: "Creation, editing, and processing of sonic textures, audio branding, and sound design for film, podcasts, commercials, and creative media.",
      startingCOP: "Cotización según proyecto",
      startingEN: "Custom project quote"
    },
    {
      num: "06",
      titleES: "Diagnóstico & Calibración de Sistemas",
      titleEN: "Audio System Measurement & Calibration",
      descES: "Medición acústica, análisis y ajuste técnico de sistemas de sonido para home studios, bares con música en vivo, iglesias y salas (presencial en Sabana de Bogotá y Bogotá).",
      descEN: "Acoustic measurement, diagnostics, and system tuning for home studios, live music venues, churches, and spaces (on-site in Bogotá / Sabana area).",
      startingCOP: "Desde $400.000 COP",
      startingEN: "On-site (Colombia) / Remote Studio Consult $80 USD"
    }
  ],

  /**
   * PREGUNTAS FRECUENTES
   */
  faqs: [
    {
      qES: "¿Cómo funciona trabajar a distancia si estoy en otra ciudad o país?",
      aES: "Es súper fluido: me envías tu nota de voz o maqueta junto con 1–2 canciones de referencia. Hacemos una breve videollamada o chat para alinear el enfoque, te envío avances por etapas para aprobar groove y estructura, grabas tus voces con mi guía (o en tu estudio local) y te entrego la mezcla y el máster final listo para subir a Spotify.",
      qEN: "How does remote production work if I'm in another city or country?",
      aEN: "It's seamless: you send me your voice memo or rough demo plus 1–2 Spotify references. We align on direction via a short call or chat, I share milestone bounces so you approve the groove and arrangement, you record vocals with my guidance, and I deliver the final release-ready mix and master."
    },
    {
      qES: "¿Qué pasa si mi canción de Funk, Jazz o Pop necesita batería acústica real?",
      aES: "Para Pop y R&B moderno trabajo con baterías híbridas y programación con pocket orgánico que suenan a estándar comercial. Y si tu tema de Funk, Jazz o Pop pide batería acústica viva, coordino grabación multipista con un baterista profesional de sesión como extra opcional sin que tengas que buscar estudio aparte.",
      qEN: "What if my Funk, Jazz, or Pop song needs live acoustic drums?",
      aEN: "For modern Pop and R&B I build organic, pocket-driven hybrid drums. Whenever a Funk, Jazz, or Pop track calls for live acoustic drums, I bring in a vetted session drummer for multitrack live drum recording as an optional add-on."
    },
    {
      qES: "¿Cómo son los pagos, tiempos y revisiones?",
      aES: "Trabajamos con 50% de anticipo para reservar agenda e iniciar, y 50% contra aprobación final antes de liberar los archivos WAV definitivos. En Colombia acepto transferencia (Bancolombia/Nequi) y tarjeta; para clientes internacionales recibo pagos en USD (Wise, Payoneer, DolarApp o PayPal). Cada paquete incluye 2 a 3 rondas de revisiones.",
      qEN: "How do payments, timelines, and revisions work?",
      aEN: "Projects start with a 50% deposit to lock studio time, with the remaining 50% due upon final approval before final WAV delivery. International payments are accepted in USD (Wise, Payoneer, ACH, or PayPal), and local payments in COP. Each package includes 2–3 revision rounds."
    },
    {
      qES: "¿Puedo grabar mis voces o instrumentos presencialmente contigo?",
      aES: "¡Sí! Si estás en Zipaquirá, Chía, Cajicá o Bogotá, podemos agendar sesiones presenciales de pre-producción y grabación de voces, bajo eléctrico, guitarras o teclados en mi home studio.",
      qEN: "Can I record vocals or instruments with you in person?",
      aEN: "Yes! If you're in Zipaquirá, Chía, Cajicá, or Bogotá (Colombia), we can schedule in-person pre-production and tracking sessions for vocals, electric bass, guitars, or keys at my home studio."
    }
  ]
};
