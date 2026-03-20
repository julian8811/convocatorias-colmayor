'use client'

import './globals.css'

/**
 * Reemplaza el global-error interno de Next y evita fallos del manifiesto RSC
 * cuando no existe un archivo explícito en app/.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased p-8 font-sans">
        <h1 className="text-lg font-semibold">Algo salió mal</h1>
        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-4 text-xs text-red-700 whitespace-pre-wrap break-all">{error.message}</pre>
        )}
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Reintentar
        </button>
      </body>
    </html>
  )
}
