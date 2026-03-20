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
    <footer style={{ backgroundColor: "#2d3748", color: "#cbd5e0" }} className="font-sans">
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
          <p className="text-xs leading-relaxed" style={{ color: "#8fa8b8" }}>
            Institución Universitaria Colmayor adscrita a la Alcaldía de Medellín
          </p>
          {/* Contact */}
          <ul className="flex flex-col gap-2 text-xs">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#e9a800" }} />
              <span>Línea gratuita: 01 8000 415 380</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#e9a800" }} />
              <span>Conmutador: +57 (604) 444 56 11</span>
            </li>
            <li className="flex items-start gap-2">
              <Printer size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#e9a800" }} />
              <span>FAX: +57 (4) 421 99 47</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#e9a800" }} />
              <a
                href="mailto:colmayor@colmayor.edu.co"
                className="hover:underline"
                style={{ color: "#8fa8b8" }}
              >
                colmayor@colmayor.edu.co
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#e9a800" }} />
              <span>Carrera 78 # 65-46 Bloque Fundacional Piso 1. Medellín – Antioquia – Colombia</span>
            </li>
          </ul>
        </div>

        {/* Links col 1 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#e9a800" }}>
            Institucional
          </h3>
          <ul className="flex flex-col gap-2">
            {colsLeft.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline transition-colors"
                  style={{ color: "#8fa8b8" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links col 2 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#e9a800" }}>
            Servicios
          </h3>
          <ul className="flex flex-col gap-2">
            {colsCenter.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline transition-colors"
                  style={{ color: "#8fa8b8" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links col 3 */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#e9a800" }}>
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            {colsRight.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline transition-colors"
                  style={{ color: "#8fa8b8" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-4 text-center text-xs"
        style={{ borderColor: "#3d4f62", color: "#637d90" }}
      >
        © Todos los derechos reservados Institución Universitaria Colmayor.
        Carrera 78 # 65-46 Bloque Fundacional Piso 1. Medellín – Antioquia – Colombia
      </div>
    </footer>
  )
}
