import { ConvocatoriaCard } from "./convocatoria-card"

export function ConvocatoriasNacionales() {
  const cards = [
    {
      title: "Agro por la Vida y por la Tierra – Convocatoria N.º 47",
      description:
        "Financiar proyectos de investigación aplicada, desarrollo tecnológico e innovación social orientados a garantizar el Derecho Humano a la Alimentación y la soberanía alimentaria, fortaleciendo sistemas productivos sostenibles y el desarrollo territorial en Colombia.",
      dirigidoA:
        "Universidades e IES, centros e institutos de investigación, entidades públicas, empresas del sector productivo y organizaciones sociales vinculadas a proyectos de innovación.",
      fechas: { apertura: "12 marzo 2026", cierre: "23 abril 2026, 04:00 pm" },
      financiamiento: "Recursos disponibles: $446.515.026.467",
      enlace:
        "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/agro-por-la-vida-y-por-la-tierra-garantizar-el",
      tags: ["Nacional", "Minciencias"],
    },
    {
      title: "Energía Sostenible para el Territorio – Convocatoria N.º 49",
      description:
        "Financiar proyectos de investigación, desarrollo tecnológico e innovación orientados a generar soluciones energéticas sostenibles adaptadas a los territorios y comunidades.",
      dirigidoA:
        "Universidades e IES, centros e institutos de investigación, entidades públicas, empresas del sector productivo y organizaciones sociales vinculadas a proyectos de innovación.",
      fechas: { apertura: "12 marzo 2026", cierre: "08 mayo 2026, 04:00 pm" },
      financiamiento: "Recursos disponibles: $377.639.957.602",
      enlace:
        "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/convocatoria-energia-sostenible-para-el-territorio",
      tags: ["Nacional", "Minciencias"],
    },
    {
      title: "Fortalecimiento de Capacidades Territoriales en Situaciones de Emergencia – Convocatoria N.º 52",
      description:
        "Fortalecer las capacidades regionales en CTeI mediante proyectos que impulsen la productividad, competitividad y desarrollo territorial, respondiendo a demandas relacionadas con biodiversidad, seguridad alimentaria, paz y ordenamiento territorial.",
      dirigidoA:
        "Alianzas entre actores del SNCTI que incluyan mínimo una IES en la zona de influencia, una entidad territorial y al menos un integrante con grupo de investigación categorizado A1, A o B en Minciencias.",
      fechas: { apertura: "12 marzo 2026", cierre: "08 mayo 2026, 04:00 pm" },
      financiamiento: "Recursos disponibles: $100.000.000.000",
      enlace:
        "https://minciencias.gov.co/convocatorias/plan-convocatorias-asctei-2025-2026/fortalecimiento-capacidades-territoriales-en",
      tags: ["Nacional", "Minciencias"],
    },
    {
      title: '"Becas para El Cambio" – Formación en Maestrías y Doctorados – Convocatoria N.º 975',
      description:
        "Fortalecer la formación de talento humano de alto nivel mediante becas completas para maestría y doctorado, dirigidas a profesionales colombianos de municipios priorizados de la región Pacífico.",
      dirigidoA:
        "Profesionales universitarios nacidos en municipios priorizados del Pacífico colombiano (Chocó, Valle del Cauca, Cauca y Nariño). Para maestría: título de pregrado. Para doctorado: título de maestría (principalmente Nariño).",
      fechas: { apertura: "12 marzo 2026", cierre: "20 abril 2026, 04:00 pm" },
      financiamiento: "Recursos disponibles: $279.588.000.000",
      enlace:
        "https://minciencias.gov.co/convocatorias/convocatoria-becas-para-el-cambio-formacion-en-maestrias-y-doctorados",
      tags: ["Nacional", "Beca", "Minciencias"],
    },
    {
      title: "Colombia Inteligente 2026 – Convocatoria N.º 976",
      description:
        "Impulsar el desarrollo científico y tecnológico en inteligencia artificial (IA) mediante la creación y fortalecimiento de infraestructura avanzada para investigación, innovación y formación de talento especializado.",
      dirigidoA:
        "Universidades e IES, centros e institutos de investigación, entidades públicas, empresas del sector productivo y organizaciones sociales vinculadas a proyectos de innovación.",
      fechas: { apertura: "12 marzo 2026", cierre: "13 abril 2026, 04:00 pm" },
      financiamiento: "Recursos disponibles: $24.000.000.000",
      enlace: "https://minciencias.gov.co/convocatorias/convocatoria-colombia-inteligente-2026",
      tags: ["Nacional", "IA", "Minciencias"],
    },
    {
      title: "Mujeres TIC para el Cambio – Cursos Abiertos de Formación Virtual",
      description:
        "Programa del Ministerio TIC que busca fomentar el liderazgo femenino a través de procesos de formación gratuita. ¡El cambio es con nosotras!",
      fechas: { nota: "Hasta agotar cupos." },
      enlace: "https://mujeresticparaelcambio.gov.co/809/w3-propertyvalue-412234.html",
      tags: ["Nacional", "Formación"],
    },
    {
      title: "Fondo Emprender SENA",
      description:
        "Financia la creación de nuevas empresas en Colombia mediante capital semilla condonable para emprendedores con ideas de negocio innovadoras que generen empleo y desarrollo económico.",
      dirigidoA:
        "Aprendices o egresados del SENA, estudiantes universitarios en últimos semestres, profesionales recién graduados, técnicos o tecnólogos con certificación, emprendedores de programas SENA y población vulnerable con formación certificada.",
      fechas: { nota: "Según cada convocatoria." },
      financiamiento: "Hasta $100 millones COP o más",
      enlace:
        "https://www.sena.edu.co/es-co/trabajo/Paginas/fondo-emprender.aspx#convocatorias",
      tags: ["Nacional", "Emprendimiento"],
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-foreground mb-6 font-serif border-l-4 border-secondary pl-3">
        Convocatorias Nacionales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => (
          <ConvocatoriaCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
