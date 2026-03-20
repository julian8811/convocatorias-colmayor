import Image from "next/image"
import { Mail, Phone, Printer, MapPin } from "lucide-react"

const colsLeft = [
  { label: "Calendario de participación ciudadana", href: "https://www.colmayor.edu.co/" },
  { label: "Trámites", href: "https://www.colmayor.edu.co/" },
  { label: "Internacionalización", href: "https://www.colmayor.edu.co/" },
  { label: "Investigación", href: "https://www.colmayor.edu.co/" },
  { label: "Correo interno", href: "https://www.colmayor.edu.co/" },
  { label: "Bienestar", href: "https://www.colmayor.edu.co/" },
  { label: "Mi Colmayor", href: "https://www.colmayor.edu.co/" },
]

const colsCenter = [
  { label: "Extensión Académica", href: "https://www.colmayor.edu.co/" },
  { label: "Contratación", href: "https://www.colmayor.edu.co/" },
  { label: "Portal de trabajo", href: "https://www.colmayor.edu.co/" },
  { label: "Tarifas", href: "https://www.colmayor.edu.co/" },
  { label: "Preguntas frecuentes", href: "https://www.colmayor.edu.co/" },
  { label: "Directorio Institucional", href: "https://www.colmayor.edu.co/" },
]

const colsRight = [
  { label: "Política de Seguridad y Privacidad", href: "https://www.colmayor.edu.co/" },
  { label: "Derechos de autor", href: "https://www.colmayor.edu.co/" },
  { label: "Términos y Condiciones", href: "https://www.colmayor.edu.co/" },
  { label: "Correo de Notificaciones Judiciales", href: "https://www.colmayor.edu.co/" },
  { label: "Sala de Arte", href: "https://www.colmayor.edu.co/" },
  { label: "Mapa del Sitio", href: "https://www.colmayor.edu.co/" },
]

export function FooterColmayor() {
  return (
    <footer className="font-sans bg-colmayor-bar text-slate-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4JlAyI001DURSBvIbTAXenrRjXLJDn.png"
            alt="Colegio Mayor de Antioquia"
            width={180}
            height={50}
            className="object-contain"
            unoptimized
          />
          <p className="text-xs leading-relaxed text-colmayor-muted">
            Institución Universitaria Colmayor adscrita a la Alcaldía de Medellín
          </p>
          {/* Contact */}
          <ul className="flex flex-col gap-2 text-xs">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 flex-shrink-0 text-colmayor-gold" />
              <span>Línea gratuita: 01 8000 415 380</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 flex-shrink-0 text-colmayor-gold" />
              <span>Conmutador: +57 (604) 444 56 11</span>
            </li>
            <li className="flex items-start gap-2">
              <Printer size={14} className="mt-0.5 flex-shrink-0 text-colmayor-gold" />
              <span>FAX: +57 (4) 421 99 47</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 flex-shrink-0 text-colmayor-gold" />
              <a
                href="mailto:colmayor@colmayor.edu.co"
                className="text-colmayor-muted hover:underline"
              >
                colmayor@colmayor.edu.co
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 flex-shrink-0 text-colmayor-gold" />
              <span>Carrera 78 # 65-46 Bloque Fundacional Piso 1. Medellín – Antioquia – Colombia</span>
            </li>
          </ul>
        </div>

        {/* Links col 1 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-colmayor-gold">
            Institucional
          </h3>
          <ul className="flex flex-col gap-2">
            {colsLeft.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-colmayor-muted hover:underline transition-colors hover:text-slate-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links col 2 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-colmayor-gold">
            Servicios
          </h3>
          <ul className="flex flex-col gap-2">
            {colsCenter.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-colmayor-muted hover:underline transition-colors hover:text-slate-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links col 3 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-colmayor-gold">
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            {colsRight.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-colmayor-muted hover:underline transition-colors hover:text-slate-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-colmayor-footer-border px-6 py-4 text-center text-xs text-colmayor-footer-note">
        © Todos los derechos reservados Institución Universitaria Colmayor.
        Carrera 78 # 65-46 Bloque Fundacional Piso 1. Medellín – Antioquia – Colombia
      </div>
    </footer>
  )
}
