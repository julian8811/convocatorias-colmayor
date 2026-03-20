import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <p className="text-sm font-semibold text-muted-foreground">404</p>
      <h1 className="text-2xl font-bold text-foreground">Página no encontrada</h1>
      <Link href="/" className="text-sm font-medium text-primary underline underline-offset-4">
        Volver al inicio
      </Link>
    </div>
  )
}
