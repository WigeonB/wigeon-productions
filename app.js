/**
 * WIGEON PRODUCTIONS — Lógica interactiva (Bilingüe ES/EN, COP/USD, Portafolio y Cotizador)
 */
(function () {
  const DATA = window.WIGEON_DATA;

  const I18N = {
    es: {
      "nav.portfolio": "Portafolio",
      "nav.packages": "Paquetes",
      "nav.process": "Proceso",
      "nav.about": "Martín",
      "nav.quote": "Cotizar",
      "nav.cta": "Cotizar canción",

      "hero.eyebrow": "POP · R&B · FUNK · JAZZ · PRODUCCIÓN MUSICAL",
      "hero.title": "DE NOTA DE VOZ A CANCIÓN LISTA PARA SPOTIFY",
      "hero.lead": "Producción musical, arreglos, bajo en vivo y mezcla para artistas de <strong>Pop, R&B, Funk y Jazz</strong>. Combino formación en ingeniería de sonido y musicalidad real para que tu proyecto tenga groove, carácter y claridad comercial.",
      "hero.ctaListen": "Escuchar Portafolio",
      "hero.ctaQuote": "Cotizar mi proyecto",
      "hero.metaLocLabel": "Modalidad",
      "hero.metaLocValue": "Remoto Mundial (ES/EN) · Zipaquirá / Bogotá",
      "hero.metaCredLabel": "Trayectoria",
      "hero.metaCredValue": "Spotify · YouTube · 2.º Lugar GENFEST 2023",
      "hero.playerTag": "ESCUCHA INMEDIATA · PRODUCCIÓN COMPLETA",
      "hero.playerDesc": "Producción completa, dirección creativa, arreglos, grabación y mezcla.",

      "proof.p1Title": "Ingeniería + Musicalidad",
      "proof.p1Desc": "No son beats genéricos reciclados: armonía real, bajo eléctrico en vivo y criterios técnicos de ingeniería de sonido.",
      "proof.p2Title": "100% Remoto o Presencial",
      "proof.p2Desc": "Flujo remoto ágil en español e inglés, o sesiones presenciales de voces e instrumentos en Zipaquirá / Sabana de Bogotá.",
      "proof.p3Title": "Batería Híbrida o Acústica Real",
      "proof.p3Desc": "Baterías modernas con pocket orgánico incluidas, más opción de baterista de sesión en vivo para Funk, Jazz o Pop.",

      "portfolio.kicker": "TRABAJOS SELECCIONADOS",
      "portfolio.title": "ESCUCHA EL PORTAFOLIO",
      "portfolio.subtitle": "Reproduce mis producciones, grabaciones y mezclas directamente aquí sin salir de la página.",
      "portfolio.filterAll": "Todos (9)",
      "portfolio.filterProd": "Producción (6)",
      "portfolio.filterMix": "Mezcla & Grabación (2)",
      "portfolio.filterTrans": "Transcripción (1)",

      "packages.kicker": "OFERTA CLARA Y TRANSPARENTE",
      "packages.title": "PAQUETES DE PRODUCCIÓN",
      "packages.subtitle": "Precios orientativos de partida. Cada canción tiene sus propias necesidades: elige un punto de partida y ajustamos el presupuesto exacto a tu proyecto.",
      "packages.currencyLabel": "Moneda:",
      "packages.from": "Desde",
      "packages.choose": "Cotizar este paquete",
      "packages.addonsTitle": "EXTRAS OPCIONALES PARA POTENCIAR TU PRODUCCIÓN",
      "packages.addonsSub": "Agrégalos a cualquier paquete según lo que pida tu canción.",

      "secondary.kicker": "OTRAS ÁREAS DE WIGEON",
      "secondary.title": "SERVICIOS TÉCNICOS & COMPLEMENTARIOS",

      "process.kicker": "CÓMO TRABAJAMOS",
      "process.title": "TU CANCIÓN EN 4 PASOS SIMPLES",
      "process.subtitle": "Un proceso transparente y sin sorpresas para que disfrutes crear tu música y sepas exactamente qué esperar en cada etapa.",
      "process.s1Title": "Maqueta y Referencias",
      "process.s1Desc": "Me envías tu nota de voz, demo en guitarra/piano o pistas, más 1–2 referencias en Spotify. Definimos estética, tempo, tono y cotización exacta.",
      "process.s2Title": "Pre-producción y Groove",
      "process.s2Desc": "Con el 50% de anticipo construyo la estructura, armonía y maqueta de producción para que apruebes el vibe antes de cerrar detalles.",
      "process.s3Title": "Grabación y Producción",
      "process.s3Desc": "Grabamos instrumentos reales (bajo eléctrico, guitarras, teclados) y voces — presencialmente en Zipaquirá o de forma remota con mi guía técnica.",
      "process.s4Title": "Mezcla, Revisiones y Entrega",
      "process.s4Desc": "Hacemos la mezcla y mastering con tus rondas de revisión. Al quedar 100% feliz, completas el 50% restante y recibes todos los WAV y stems listos para lanzar.",

      "about.kicker": "FUNDADOR DE WIGEON",
      "about.title": "HOLA, SOY MARTÍN",
      "about.role": "Ingeniero de Sonido · Músico Multiinstrumentista · Productor Musical",
      "about.p1": "Mi trabajo nace de unir dos mundos que normalmente van separados: la formación técnica como <strong>ingeniero de sonido</strong> y la sensibilidad de toda una vida como <strong>músico multiinstrumentista</strong>.",
      "about.p2": "En WIGEON me enfoco en ayudar a artistas independientes de <strong>Pop, R&B, Funk y Jazz</strong> a llevar sus ideas desde una simple grabación en el celular hasta canciones terminadas con groove auténtico, arreglos con identidad y sonido competitivo para plataformas digitales.",
      "about.p3": "Trabajo desde mi home studio en <strong>Zipaquirá (Sabana de Bogotá)</strong> colaborando tanto presencialmente con artistas de la región como de forma 100% remota con músicos de toda Latinoamérica, Estados Unidos y Europa.",

      "faq.kicker": "DUDAS FRECUENTES",
      "faq.title": "ANTES DE EMPEZAR",

      "quote.kicker": "EMPECEMOS TU PROYECTO",
      "quote.title": "COTIZA TU CANCIÓN SIN COMPROMISO",
      "quote.lead": "Cuéntame qué tienes en mente. Selecciona el paquete y los extras que te interesan para ver un estimado orientativo y enviarme tu resumen directo por WhatsApp en un clic.",
      "quote.callLabel": "Llamada / Colombia",
      "quote.nameLabel": "Tu nombre o proyecto artístico *",
      "quote.genreLabel": "Género principal",
      "quote.serviceLabel": "¿Qué servicio necesitas?",
      "quote.addonsLabel": "Extras opcionales",
      "quote.demoLabel": "Link a tu maqueta o referencia en Spotify (opcional)",
      "quote.notesLabel": "Cuéntame brevemente sobre tu canción",
      "quote.estimateLabel": "Estimado orientativo:",
      "quote.estimateNote": "50% anticipo · 50% entrega final",
      "quote.submitWA": "Enviar cotización por WhatsApp",
      "quote.copyBtn": "Copiar resumen (para Instagram DM o correo)",

      "footer.tagline": "Music & Audio · Pop · R&B · Funk · Jazz",

      "play.click": "Reproducir muestra aquí",
      "play.sub": "Audio embebido · sin salir de la web",
      "play.transTitle": "Transcripción de álbum completo",
      "play.transSub": "Documentación profesional para derechos de autor",
      "copy.success": "✓ Resumen copiado. Pégalo en tu DM de Instagram o correo.",
      "wa.opening": "Abriendo WhatsApp con el resumen de tu proyecto..."
    },
    en: {
      "nav.portfolio": "Portfolio",
      "nav.packages": "Packages",
      "nav.process": "Process",
      "nav.about": "Martín",
      "nav.quote": "Get a Quote",
      "nav.cta": "Start a Track",

      "hero.eyebrow": "POP · R&B · FUNK · JAZZ · MUSIC PRODUCTION",
      "hero.title": "FROM VOICE MEMO TO RELEASE-READY SONG",
      "hero.lead": "Custom music production, arrangements, live electric bass, and mixing for <strong>Pop, R&B, Funk &amp; Jazz</strong> artists. Combining sound engineering precision with real musicianship so your music has groove, soul, and streaming clarity.",
      "hero.ctaListen": "Listen to Portfolio",
      "hero.ctaQuote": "Quote Your Project",
      "hero.metaLocLabel": "Workflow",
      "hero.metaLocValue": "Remote Worldwide (EN/ES) · Colombia",
      "hero.metaCredLabel": "Credits",
      "hero.metaCredValue": "Spotify · YouTube · 2nd Place GENFEST 2023",
      "hero.playerTag": "INSTANT LISTEN · FULL PRODUCTION",
      "hero.playerDesc": "Full production, creative direction, arrangement, recording, and mixing.",

      "proof.p1Title": "Engineering + Musicianship",
      "proof.p1Desc": "Never recycled generic loops: real harmony, live electric bass, and trained sound engineering standards.",
      "proof.p2Title": "Seamless Remote Worldwide",
      "proof.p2Desc": "Smooth bilingual workflow (EN/ES) for international artists, plus in-person vocal/instrument sessions near Bogotá.",
      "proof.p3Title": "Hybrid or Live Acoustic Drums",
      "proof.p3Desc": "Pocket-driven modern drums included, plus vetted live session drummer recording available for Funk, Jazz, or Pop.",

      "portfolio.kicker": "SELECTED WORKS",
      "portfolio.title": "LISTEN TO THE PORTFOLIO",
      "portfolio.subtitle": "Stream my productions, studio recordings, and mixes right here without leaving the page.",
      "portfolio.filterAll": "All (9)",
      "portfolio.filterProd": "Production (6)",
      "portfolio.filterMix": "Mix & Recording (2)",
      "portfolio.filterTrans": "Transcription (1)",

      "packages.kicker": "CLEAR & TRANSPARENT PRICING",
      "packages.title": "PRODUCTION PACKAGES",
      "packages.subtitle": "Starting rates to help you plan. Every song is unique — choose a starting point and we'll tailor the exact quote to your track.",
      "packages.currencyLabel": "Currency:",
      "packages.from": "Starting at",
      "packages.choose": "Quote this package",
      "packages.addonsTitle": "OPTIONAL ADD-ONS TO ELEVATE YOUR TRACK",
      "packages.addonsSub": "Add any of these to your production package.",

      "secondary.kicker": "ADDITIONAL WIGEON SERVICES",
      "secondary.title": "TECHNICAL & SPECIALTY AUDIO",

      "process.kicker": "HOW IT WORKS",
      "process.title": "YOUR SONG IN 4 SIMPLE STEPS",
      "process.subtitle": "A clear, collaborative workflow with zero guesswork from rough idea to streaming master.",
      "process.s1Title": "Demo & References",
      "process.s1Desc": "Send me your voice memo, guitar/piano demo, or stems plus 1–2 Spotify references. We lock direction, key, tempo, and exact quote.",
      "process.s2Title": "Pre-Production & Groove",
      "process.s2Desc": "With a 50% deposit, I build the structure, harmony, and groove sketch so you approve the musical vibe early.",
      "process.s3Title": "Tracking & Production",
      "process.s3Desc": "We layer live electric bass, organic instruments, and vocals — seamlessly remote with my vocal guidance or in-studio.",
      "process.s4Title": "Mix, Revisions & Delivery",
      "process.s4Desc": "Detailed mixing & mastering with your revision rounds. Once you love it, complete the final 50% and receive final WAVs & stems.",

      "about.kicker": "FOUNDER OF WIGEON",
      "about.title": "HI, I'M MARTÍN",
      "about.role": "Sound Engineer · Multi-Instrumentalist · Music Producer",
      "about.p1": "My work bridges two worlds that are too often separated: formal training as a <strong>sound engineer</strong> and lifelong instincts as a <strong>multi-instrumentalist musician</strong>.",
      "about.p2": "At WIGEON, I help independent <strong>Pop, R&B, Funk, and Jazz</strong> artists turn rough phone memos and ideas into finished records with authentic pocket, musical depth, and commercial polish.",
      "about.p3": "Based out of my home studio in <strong>Zipaquirá (Bogotá area, Colombia)</strong>, I collaborate remotely with artists across the US, Europe, and Latin America, as well as in-person with local vocalists and musicians.",

      "faq.kicker": "COMMON QUESTIONS",
      "faq.title": "BEFORE WE START",

      "quote.kicker": "LET'S BUILD YOUR TRACK",
      "quote.title": "GET A CUSTOM QUOTE",
      "quote.lead": "Tell me about your song. Pick a package and any add-ons below to see an instant estimate and send your project brief straight to WhatsApp in one click.",
      "quote.callLabel": "Phone / Colombia",
      "quote.nameLabel": "Your name or artist project *",
      "quote.genreLabel": "Main genre",
      "quote.serviceLabel": "Which service do you need?",
      "quote.addonsLabel": "Optional add-ons",
      "quote.demoLabel": "Link to your demo or Spotify reference (optional)",
      "quote.notesLabel": "Tell me briefly about your song",
      "quote.estimateLabel": "Estimated starting range:",
      "quote.estimateNote": "50% deposit · 50% upon final approval",
      "quote.submitWA": "Send Quote via WhatsApp",
      "quote.copyBtn": "Copy summary (for Instagram DM or email)",

      "footer.tagline": "Music & Audio · Pop · R&B · Funk · Jazz",

      "play.click": "Play audio sample here",
      "play.sub": "Embedded preview · no external tab needed",
      "play.transTitle": "Full album transcription",
      "play.transSub": "Professional copyright & sheet music documentation",
      "copy.success": "✓ Summary copied! Paste it into Instagram DM or email.",
      "wa.opening": "Opening WhatsApp with your project summary..."
    }
  };

  // Detecta idioma por ?lang=en / localStorage / default es
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const savedLang = localStorage.getItem("wigeon_lang");
  let currentLang = (urlLang === "en" || urlLang === "es") ? urlLang : (savedLang || "es");
  let currentCurrency = currentLang === "en" ? "USD" : "COP";
  let currentFilter = "all";

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function formatPrice(cop, usd) {
    if (currentCurrency === "USD") {
      return `$${usd.toLocaleString("en-US")} USD`;
    }
    return `$${cop.toLocaleString("es-CO")} COP`;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val.includes("<strong>")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Actualiza placeholders del formulario
    const nameInput = document.getElementById("artistName");
    const notesInput = document.getElementById("projectNotes");
    if (nameInput) {
      nameInput.placeholder = currentLang === "en" ? "e.g. Alex M. / Band" : "Ej. Sofía M. / Banda";
    }
    if (notesInput) {
      notesInput.placeholder = currentLang === "en"
        ? "I have a voice memo with guitar chords and want a groovy Pop/R&B production..."
        : "Tengo una nota de voz con guitarra y busco un sonido Pop/R&B con bajo real...";
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });
    document.querySelectorAll(".curr-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.currency === currentCurrency);
    });
  }

  function renderPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    if (!grid) return;

    const items = DATA.portfolio.filter((item) => currentFilter === "all" || item.category === currentFilter);
    grid.innerHTML = items.map((item) => {
      const genre = currentLang === "en" ? item.genreTagEN : item.genreTag;
      const desc = currentLang === "en" ? item.descriptionEN : item.descriptionES;
      const roles = currentLang === "en" ? item.rolesEN : item.rolesES;
      const extLabel = currentLang === "en" ? item.externalLabelEN : item.externalLabelES;

      let mediaHTML = "";
      if (item.mediaType === "spotify") {
        mediaHTML = `
          <iframe
            src="https://open.spotify.com/embed/track/${item.spotifyTrackId}?utm_source=generator&theme=0"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="${item.artist} - ${item.title}">
          </iframe>
        `;
      } else if (item.mediaType === "youtube") {
        mediaHTML = `
          <iframe
            class="yt-embed"
            src="https://www.youtube.com/embed/${item.youtubeId}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="${item.artist} - ${item.title}">
          </iframe>
        `;
      } else if (item.mediaType === "drive") {
        if (item.localAudio) {
          mediaHTML = `
            <div class="inline-audio-box">
              <audio class="native-audio" controls preload="none" src="${item.localAudio}"></audio>
            </div>
          `;
        } else {
          mediaHTML = `
            <div class="inline-audio-box" data-drive-container="${item.driveId}">
              <button type="button" class="inline-play-btn" data-drive-play="${item.driveId}" data-track-title="${item.artist} - ${item.title}">
                <span class="play-circle" aria-hidden="true">▶</span>
                <span class="play-meta">
                  <strong>${t("play.click")}</strong>
                  <span>${t("play.sub")}</span>
                </span>
              </button>
            </div>
          `;
        }
      } else {
        mediaHTML = `
          <div class="transcription-banner">
            <span class="transcription-icon" aria-hidden="true">🎼</span>
            <div>
              <strong>${t("play.transTitle")}</strong>
              <span>${t("play.transSub")}</span>
            </div>
          </div>
        `;
      }

      return `
        <article class="track-card" id="track-${item.id}">
          <div class="track-top">
            <span class="track-genre">${genre}</span>
            <span class="track-year">${item.year}</span>
          </div>
          <h3 class="track-title">${item.title}</h3>
          <p class="track-artist">${item.artist}</p>
          <div class="track-media">${mediaHTML}</div>
          <p class="track-desc">${desc}</p>
          <div class="role-chips">
            ${roles.map((r) => `<span class="role-chip">${r}</span>`).join("")}
          </div>
          <a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" class="track-link">
            ${extLabel} ↗
          </a>
        </article>
      `;
    }).join("");

    // Click para cargar el iframe de Google Drive inline bajo demanda (rápido y limpio)
    grid.querySelectorAll("[data-drive-play]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const driveId = btn.getAttribute("data-drive-play");
        const title = btn.getAttribute("data-track-title");
        const box = btn.closest("[data-drive-container]");
        if (!box) return;
        box.innerHTML = `
          <iframe
            class="drive-preview-frame"
            src="https://drive.google.com/file/d/${driveId}/preview"
            allow="autoplay"
            title="${title}">
          </iframe>
        `;
      });
    });
  }

  function renderPackages() {
    const grid = document.getElementById("packagesGrid");
    if (!grid) return;

    grid.innerHTML = DATA.packages.map((pkg) => {
      const badge = currentLang === "en" ? pkg.badgeEN : pkg.badgeES;
      const name = currentLang === "en" ? pkg.nameEN : pkg.nameES;
      const ideal = currentLang === "en" ? pkg.idealEN : pkg.idealES;
      const turnaround = currentLang === "en" ? pkg.turnaroundEN : pkg.turnaroundES;
      const features = currentLang === "en" ? pkg.featuresEN : pkg.featuresES;

      return `
        <article class="package-card ${pkg.featured ? "is-featured" : ""}">
          <span class="pkg-badge">${badge}</span>
          <h3 class="pkg-name">${name}</h3>
          <p class="pkg-ideal">${ideal}</p>
          <div class="pkg-price-wrap">
            <span class="pkg-from">${t("packages.from")}</span>
            <div class="pkg-price">${formatPrice(pkg.priceCOP, pkg.priceUSD)}</div>
            <span class="pkg-turnaround">⏱ ${turnaround}</span>
          </div>
          <ul class="pkg-features">
            ${features.map((f) => `<li>${f}</li>`).join("")}
          </ul>
          <button type="button" class="btn ${pkg.featured ? "btn-primary" : "btn-ghost"} btn-lg btn-full" data-select-pkg="${pkg.id}">
            ${t("packages.choose")}
          </button>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-select-pkg]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pkgId = btn.getAttribute("data-select-pkg");
        const select = document.getElementById("serviceSelect");
        if (select) {
          select.value = pkgId;
          updateEstimate();
        }
        document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function renderAddons() {
    const grid = document.getElementById("addonsGrid");
    if (grid) {
      grid.innerHTML = DATA.addons.map((a) => `
        <div class="addon-card">
          <div class="addon-top">
            <strong>${currentLang === "en" ? a.nameEN : a.nameES}</strong>
            <span class="addon-price">+${formatPrice(a.priceCOP, a.priceUSD)}</span>
          </div>
          <p>${currentLang === "en" ? a.descEN : a.descES}</p>
        </div>
      `).join("");
    }

    const list = document.getElementById("quoteAddonsList");
    if (list) {
      const checkedIds = Array.from(list.querySelectorAll("input:checked")).map((i) => i.value);
      list.innerHTML = DATA.addons.map((a) => `
        <label class="check-item">
          <span class="check-item-left">
            <input type="checkbox" name="addons" value="${a.id}" ${checkedIds.includes(a.id) ? "checked" : ""} />
            <span>${currentLang === "en" ? a.nameEN : a.nameES}</span>
          </span>
          <span class="addon-price">+${formatPrice(a.priceCOP, a.priceUSD)}</span>
        </label>
      `).join("");
      list.querySelectorAll("input").forEach((inp) => inp.addEventListener("change", updateEstimate));
    }
  }

  function renderSecondaryServices() {
    const grid = document.getElementById("secondaryGrid");
    if (!grid) return;
    grid.innerHTML = DATA.secondaryServices.map((s) => `
      <article class="secondary-card">
        <span class="secondary-num">${s.num}</span>
        <h4>${currentLang === "en" ? s.titleEN : s.titleES}</h4>
        <p>${currentLang === "en" ? s.descEN : s.descES}</p>
        <span class="secondary-price">${currentLang === "en" ? s.startingEN : s.startingCOP}</span>
      </article>
    `).join("");
  }

  function renderFAQ() {
    const list = document.getElementById("faqList");
    if (!list) return;
    list.innerHTML = DATA.faqs.map((f, idx) => `
      <details class="faq-item" ${idx === 0 ? "open" : ""}>
        <summary>${currentLang === "en" ? f.qEN : f.qES}</summary>
        <div class="faq-answer">${currentLang === "en" ? f.aEN : f.aES}</div>
      </details>
    `).join("");
  }

  function renderServiceSelect() {
    const select = document.getElementById("serviceSelect");
    if (!select) return;
    const prevVal = select.value || "full-production";

    const options = [
      ...DATA.packages.map((p) => ({
        id: p.id,
        label: `${currentLang === "en" ? p.nameEN : p.nameES} (${formatPrice(p.priceCOP, p.priceUSD)})`
      })),
      {
        id: "transcription",
        label: currentLang === "en"
          ? "Music Transcription / Sheet Music PDF (From $35 USD)"
          : "Transcripción Musical / Partitura DNDA (Desde $100.000 COP)"
      },
      {
        id: "calibration",
        label: currentLang === "en"
          ? "Audio System Calibration / Studio Consult"
          : "Diagnóstico y Calibración de Sistema de Audio"
      }
    ];

    select.innerHTML = options.map((o) => `<option value="${o.id}">${o.label}</option>`).join("");
    select.value = options.some((o) => o.id === prevVal) ? prevVal : "full-production";
  }

  function computeEstimate() {
    const select = document.getElementById("serviceSelect");
    const selectedId = select ? select.value : "full-production";

    let baseCOP = 0;
    let baseUSD = 0;
    const pkg = DATA.packages.find((p) => p.id === selectedId);
    if (pkg) {
      baseCOP = pkg.priceCOP;
      baseUSD = pkg.priceUSD;
    } else if (selectedId === "transcription") {
      baseCOP = 100000;
      baseUSD = 35;
    } else if (selectedId === "calibration") {
      baseCOP = 400000;
      baseUSD = 80;
    }

    document.querySelectorAll('#quoteAddonsList input[type="checkbox"]:checked').forEach((cb) => {
      const addon = DATA.addons.find((a) => a.id === cb.value);
      if (addon) {
        baseCOP += addon.priceCOP;
        baseUSD += addon.priceUSD;
      }
    });

    return formatPrice(baseCOP, baseUSD);
  }

  function updateEstimate() {
    const el = document.getElementById("estimateValue");
    if (el) {
      el.textContent = computeEstimate();
    }
  }

  function buildBriefText() {
    const name = (document.getElementById("artistName")?.value || "").trim() || (currentLang === "en" ? "(Not provided)" : "(Sin especificar)");
    const genre = document.getElementById("artistGenre")?.value || "";
    const select = document.getElementById("serviceSelect");
    const serviceLabel = select?.options[select.selectedIndex]?.text || "";
    const demo = (document.getElementById("demoLink")?.value || "").trim();
    const notes = (document.getElementById("projectNotes")?.value || "").trim();
    const selectedAddons = Array.from(document.querySelectorAll('#quoteAddonsList input:checked')).map((cb) => {
      const a = DATA.addons.find((item) => item.id === cb.value);
      return a ? (currentLang === "en" ? a.nameEN : a.nameES) : "";
    }).filter(Boolean);
    const estimate = computeEstimate();

    if (currentLang === "en") {
      return [
        "Hi Martín (WIGEON PRODUCTIONS)! I'd like to quote a project:",
        `• Artist / Project: ${name}`,
        `• Main Genre: ${genre}`,
        `• Service: ${serviceLabel}`,
        selectedAddons.length ? `• Add-ons: ${selectedAddons.join(", ")}` : null,
        `• Web Estimate: ${estimate}`,
        demo ? `• Demo / Reference: ${demo}` : null,
        notes ? `• Details: ${notes}` : null
      ].filter(Boolean).join("\n");
    }

    return [
      "¡Hola Martín (WIGEON PRODUCTIONS)! Quiero cotizar un proyecto:",
      `• Artista / Proyecto: ${name}`,
      `• Género principal: ${genre}`,
      `• Servicio: ${serviceLabel}`,
      selectedAddons.length ? `• Extras: ${selectedAddons.join(", ")}` : null,
      `• Estimado orientativo web: ${estimate}`,
      demo ? `• Maqueta / Referencia: ${demo}` : null,
      notes ? `• Detalles: ${notes}` : null
    ].filter(Boolean).join("\n");
  }

  function renderAll() {
    applyTranslations();
    renderPortfolio();
    renderPackages();
    renderAddons();
    renderSecondaryServices();
    renderFAQ();
    renderServiceSelect();
    updateEstimate();
  }

  // Event listeners
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("wigeon_lang", currentLang);
      currentCurrency = currentLang === "en" ? "USD" : "COP";
      renderAll();
    });
  });

  document.querySelectorAll(".curr-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCurrency = btn.dataset.currency;
      renderAll();
    });
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      renderPortfolio();
    });
  });

  document.getElementById("serviceSelect")?.addEventListener("change", updateEstimate);

  document.getElementById("quoteForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = buildBriefText();
    const url = `https://wa.me/${DATA.contact.phoneRaw}?text=${encodeURIComponent(message)}`;
    const feedback = document.getElementById("formFeedback");
    if (feedback) feedback.textContent = t("wa.opening");
    window.open(url, "_blank", "noopener,noreferrer");
  });

  document.getElementById("copyBriefBtn")?.addEventListener("click", async () => {
    const message = buildBriefText();
    const feedback = document.getElementById("formFeedback");
    try {
      await navigator.clipboard.writeText(message);
      if (feedback) feedback.textContent = t("copy.success");
    } catch {
      if (feedback) feedback.textContent = message;
    }
  });

  // Menú móvil
  const menuBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !drawer.hidden;
      drawer.hidden = isOpen;
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Año actual en footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderAll();
})();
