import { ExternalLink } from "lucide-react"

interface ConvocatoriaCardProps {
  title: string
  description: string
  dirigidoA?: string
  fechas?: { apertura?: string; cierre?: string; permanente?: boolean; nota?: string }
  financiamiento?: string
  enlace?: string
  tags?: string[]
}

export function ConvocatoriaCard({
  title,
  description,
  dirigidoA,
  fechas,
  financiamiento,
  enlace,
  tags,
}: ConvocatoriaCardProps) {
  return (
    <article className="bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold uppercase tracking-wide bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <h3 className="text-base font-bold text-foreground leading-snug text-pretty">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      <dl className="grid grid-cols-1 gap-2 mt-auto text-sm">
        {dirigidoA && (
          <div>
            <dt className="font-semibold text-foreground/80">Dirigido a</dt>
            <dd className="text-muted-foreground">{dirigidoA}</dd>
          </div>
        )}
        {financiamiento && (
          <div>
            <dt className="font-semibold text-foreground/80">Financiamiento</dt>
            <dd className="text-muted-foreground">{financiamiento}</dd>
          </div>
        )}
        {fechas && (
          <div>
            <dt className="font-semibold text-foreground/80">Fechas</dt>
            <dd className="text-muted-foreground">
              {fechas.permanente && <span>Permanente</span>}
              {fechas.apertura && <span>Apertura: {fechas.apertura}</span>}
              {fechas.apertura && fechas.cierre && <span className="mx-1">·</span>}
              {fechas.cierre && <span>Cierre: {fechas.cierre}</span>}
              {fechas.nota && <span className="block">{fechas.nota}</span>}
            </dd>
          </div>
        )}
      </dl>

      {enlace && (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-1"
        >
          Ver convocatoria <ExternalLink size={12} />
        </a>
      )}
    </article>
  )
}
