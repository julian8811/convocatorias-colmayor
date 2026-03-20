export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-xl border border-border bg-card px-6 py-6 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Sobre este boletín
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            La información se compila a partir de fuentes públicas de convocantes y organismos de
            cooperación. Los plazos, montos y requisitos pueden variar; consulte siempre el sitio
            oficial de cada convocatoria antes de presentar una postulación.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Boletín de Convocatorias No. 05 – 2026 · Universidad del Tolima ·{" "}
            <time dateTime="2026">2026</time>
          </p>
        </div>
      </div>
    </footer>
  )
}
