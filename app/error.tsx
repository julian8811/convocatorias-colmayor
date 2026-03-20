'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-lg px-6 py-16 text-center">
      <h2 className="text-lg font-semibold text-foreground">No se pudo cargar esta sección</h2>
      {process.env.NODE_ENV === 'development' && (
        <p className="mt-2 text-xs text-muted-foreground break-all">{error.message}</p>
      )}
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
