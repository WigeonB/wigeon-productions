# WIGEON PRODUCTIONS — Sitio Web Oficial

Sitio web estático, rápido y bilingüe (**ES / EN**) diseñado para **WIGEON PRODUCTIONS** (Pop, R&B, Funk y Jazz), listo para publicarse gratis en **GitHub Pages** sin necesidad de servidores ni pasos de compilación.

## Estructura de archivos

- `index.html` — Estructura principal de la página (Hero con audio inmediato, Portafolio, Paquetes, Proceso, Bio de Martín, FAQ y Cotizador interactivo).
- `styles.css` — Diseño editorial oscuro + cobre cálido (`#C16E46`), 100% adaptable a celular y escritorio.
- `data.js` — **Archivo central de contenido:** edita aquí tus precios (COP y USD), paquetes, canciones, links de audio y preguntas frecuentes sin tocar el código.
- `app.js` — Lógica bilingüe (`ES`/`EN` y `?lang=en`), cambio de moneda (`COP`/`USD`), filtros de portafolio, reproductores embebidos y generador de cotización directa a WhatsApp.
- `assets/studio-hero.jpg` — Fondo atmosférico editorial del Hero.
- `assets/studio-real-overhead.jpg` y `assets/studio-real-bass.jpg` — Fotografías reales del Home Studio de WIGEON PRODUCTIONS en Zipaquirá.

## Cómo publicarlo GRATIS en GitHub Pages (en 5 minutos)

1. Crea una cuenta gratuita en [github.com](https://github.com) (si aún no tienes).
2. Haz clic en **New repository** y ponle de nombre `wigeon-productions` (deja el repositorio en **Public**).
3. Haz clic en **uploading an existing file** y arrastra **todos los archivos y la carpeta `assets/`** de este proyecto.
4. Haz clic en **Commit changes**.
5. Ve a **Settings → Pages** en tu repositorio.
6. En **Build and deployment → Branch**, selecciona `main` y carpeta `/ (root)`, y presiona **Save**.
7. En 1 a 2 minutos tu web quedará en vivo en:
   `https://<tu-usuario>.github.io/wigeon-productions/`
   - Versión directa en inglés para clientes internacionales: `https://<tu-usuario>.github.io/wigeon-productions/?lang=en`

## Cómo personalizarlo en el futuro

- **Cambiar precios o agregar una nueva canción:** Abre `data.js` y edita `packages` o agrega un nuevo objeto al arreglo `portfolio`.
- **Usar tus archivos `.mp3` locales en lugar de Google Drive:** Crea una carpeta `assets/audio/`, guarda tus fragmentos (por ejemplo `assets/audio/body-and-soul.mp3`) y escribe esa ruta en `localAudio: "assets/audio/body-and-soul.mp3"` dentro de `data.js`. El sitio usará automáticamente un reproductor nativo instantáneo.
- **Usar tu foto real en la sección "Hola, soy Martín":** Guarda tu foto en `assets/martin.jpg` y cambia `<img src="assets/studio-hero.png" ...>` en la sección `#martin` de `index.html` por `assets/martin.jpg`.
- **Conectar dominio propio (ej. `wigeonproductions.com`):** Cuando decidas comprar un dominio (~$12 USD/año), solo debes configurarlo en **Settings → Pages → Custom domain** con HTTPS automático gratis.
