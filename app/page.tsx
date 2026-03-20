import { Stats } from "@/components/boletin/stats"
import { ConvocatoriasInternacionales } from "@/components/boletin/internacionales"
import { ConvocatoriasNacionales } from "@/components/boletin/nacionales"
import { Footer } from "@/components/boletin/footer"
import { Navbar } from "@/components/colmayor/navbar"
import { FooterColmayor } from "@/components/colmayor/footer"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <Stats />
        <ConvocatoriasInternacionales />
        <div className="border-t border-border" />
        <ConvocatoriasNacionales />
        <Footer />
      </main>
      <FooterColmayor />
    </div>
  )
}
