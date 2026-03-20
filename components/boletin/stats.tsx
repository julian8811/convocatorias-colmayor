export function Stats() {
  return (
    <section className="bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-5xl font-bold text-primary">27</p>
          <p className="text-sm text-muted-foreground mt-1 font-sans">Convocatorias Internacionales</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-primary">7</p>
          <p className="text-sm text-muted-foreground mt-1 font-sans">Convocatorias Nacionales</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-5xl font-bold text-secondary-foreground">2</p>
          <p className="text-sm text-muted-foreground mt-1 font-sans">Otras Convocatorias Internacionales</p>
        </div>
      </div>
    </section>
  )
}
