import Image from "next/image"

export function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-3 gap-6"
      style={{ backgroundColor: "#2d3748" }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4JlAyI001DURSBvIbTAXenrRjXLJDn.png"
          alt="Institución Universitaria Colegio Mayor de Antioquia"
          width={220}
          height={60}
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Tagline */}
      <p
        className="hidden sm:block text-xs md:text-sm font-semibold tracking-widest text-right"
        style={{ color: "#8fa8b8" }}
      >
        INSTITUCIÓN UNIVERSITARIA COLMAYOR ADSCRITA A LA ALCALDÍA DE MEDELLÍN
      </p>
    </nav>
  )
}
