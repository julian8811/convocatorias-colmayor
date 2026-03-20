import { ConvocatoriaCard } from "./convocatoria-card"

export function ConvocatoriasInternacionales() {
  const cards = [
    {
      title: "Fundación La Caixa – Innovación Social",
      description:
        "Financia proyectos que reduzcan pobreza e inequidades en África, Asia y América Latina mediante innovación social.",
      dirigidoA: "ONG y entidades sociales; promueve innovación social.",
      fechas: { apertura: "20 mayo 2026", cierre: "15 abril 2026" },
      financiamiento: "No especificado en la fuente (Sujeto a convocatoria)",
      enlace: "https://fundacionlacaixa.org/",
      tags: ["Internacional"],
    },
    {
      title: "FONTAGRO – Sistemas Agroalimentarios Sostenibles",
      description:
        "Cofinancia consorcios regionales para mejorar sistemas agroalimentarios con menor huella ambiental.",
      dirigidoA: "Consorcios regionales (Institutos, universidades, sector productivo).",
      fechas: { apertura: "15 dic 2025", cierre: "30 mar 2026" },
      financiamiento: "Monto no especificado en la fuente",
      enlace: "https://www.fontagro.org/",
      tags: ["Internacional"],
    },
    {
      title: "Unión Europea – EU–LAC Social Accelerator (Convocatoria 1/2026)",
      description:
        "Programa de innovación social que financia proyectos en países de Europa y América Latina con ejecución de 18–24 meses.",
      dirigidoA: "Países elegibles: América Latina y Caribe; cofinanciación.",
      fechas: { apertura: "19 ene 2026", cierre: "8 abr 2026" },
      financiamiento: "Subvención total: €1.800.000; máximo €250.000 por proyecto; cofinanciación 50–95%.",
      enlace: "https://eulacsocialaccelerator.cainco.org.bo/publico/convocatoria",
      tags: ["Internacional"],
    },
    {
      title: "Premio UNESCO Juan Bosch – Ciencias Sociales",
      description:
        "Premio bienal que reconoce tesis de jóvenes investigadores en ciencias sociales que contribuyan a políticas públicas en América Latina y el Caribe.",
      dirigidoA: "Estados miembros y ONG proponen candidaturas.",
      fechas: { nota: "Convocatoria de candidaturas para edición 2026" },
      financiamiento: "Premio (valor no especificado)",
      enlace: "https://www.unesco.org/es/prizes/juan-bosch",
      tags: ["Internacional", "Premio"],
    },
    {
      title: "Asuntos Globales Canadá – Canada Fund for Local Initiatives (CFLI)",
      description:
        "Programa para apoyar proyectos de pequeña escala y alto impacto en países en desarrollo alineados con las áreas temáticas prioritarias de Canadá. Proyectos concebidos y diseñados predominantemente por socios locales, seleccionados por embajadas o altas comisiones canadienses.",
      fechas: { cierre: "3 de junio de 2026" },
      financiamiento: "$25.000 y $50.000 dólares canadienses",
      enlace:
        "https://www.international.gc.ca/world-monde/funding-financement/cfli-fcil/colombia-colombie.aspx?lang=eng",
      tags: ["Internacional"],
    },
    {
      title: "Embajada de Japón – Asistencia Financiera No Reembolsable KUSANONE",
      description:
        "Japón ofrece ayuda a organizaciones no gubernamentales o autoridades territoriales para solucionar problemas relacionados con necesidades humanas básicas en población vulnerable por factores socioeconómicos y víctimas del conflicto.",
      dirigidoA:
        "ESAL (Fundaciones u ONG) nacionales o locales con mínimo 2 años de experiencia. Entidades Territoriales: Alcaldías, gobernaciones, cabildos o resguardos indígenas.",
      fechas: { permanente: true },
      financiamiento: "10 a 20 millones de won",
      enlace: "https://www.colombia.emb-japan.go.jp/itpr_es/cooperacionKUSANONE.html",
      tags: ["Internacional"],
    },
    {
      title: "Fundación Coca-Cola – Proyectos Comunitarios",
      description:
        "Financia proyectos comunitarios a nivel global que promuevan acceso al agua potable, sostenibilidad ambiental, economía circular, empoderamiento de mujeres, fortalecimiento comunitario y respuesta a emergencias.",
      dirigidoA:
        "Organizaciones sin ánimo de lucro, ESAL, fundaciones y ONG legalmente constituidas en países elegibles, incluido Colombia. (Inscribirse en 'Community Partner Portal')",
      fechas: { permanente: true },
      financiamiento: "Entre US$25.000 y US$250.000",
      enlace: "https://www.coca-colacompany.com/about-us/the-coca-cola-foundation",
      tags: ["Internacional"],
    },
    {
      title: "Fondo Francés para el Medio Ambiente Mundial (FFEM)",
      description:
        "Financiamiento a proyectos innovadores con impacto ambiental y social en países en desarrollo.",
      dirigidoA:
        "Organizaciones sin ánimo de lucro, empresas, alianzas público-privadas, instituciones de investigación, gobiernos locales y organizaciones internacionales con operaciones en Colombia u otros países elegibles.",
      fechas: { permanente: true, nota: "Evaluación por ciclos." },
      financiamiento: "Entre €500.000 y €2.000.000 por proyecto",
      enlace: "https://www.ffem.fr/en/submit-project",
      tags: ["Internacional"],
    },
    {
      title: "Aja Foundation – Proyectos Sociales Transformadores",
      description:
        "Financiamiento de proyectos sociales transformadores con enfoque en equidad, salud mental, liderazgo comunitario y educación.",
      fechas: { permanente: true },
      enlace: "https://www.ajafoundation.org/how-to-apply/",
      tags: ["Internacional"],
    },
    {
      title: "LR Foundation – Seguridad de Vidas y Comunidades Vulnerables",
      description:
        "Financia proyectos que generen un impacto tangible en la seguridad de vidas humanas y el fortalecimiento de comunidades vulnerables a través de enfoques científicos, tecnológicos y sociales.",
      dirigidoA:
        "Empresas, universidades, centros de investigación y organizaciones sin ánimo de lucro con enfoque en América Latina y países en desarrollo.",
      fechas: { permanente: true },
      financiamiento:
        "Financiación no reembolsable para diseño e implementación; posibilidad de apoyo multianual y acompañamiento técnico.",
      enlace: "https://www.lrfoundation.org.uk/applying-for-funding",
      tags: ["Internacional"],
    },
    {
      title: "Creadores de Contenido Climático",
      description:
        "Respaldar a creadores interesados en generar contenido climático inspirador en plataformas como TikTok, YouTube e Instagram.",
      dirigidoA:
        "Cualquier creador, sin importar el número de seguidores o área de enfoque.",
      fechas: { permanente: true },
      financiamiento: "US$2.000",
      enlace: "https://airtable.com/appr4Ccm3wWmXsnf6/shrp1CYnH5Q1zXatG",
      tags: ["Internacional"],
    },
    {
      title: "AHK Colombia – Servicio de Expertos Jubilados (SES)",
      description:
        "Iniciativa de cooperación internacional alemana que promueve la transferencia de conocimiento mediante profesionales jubilados altamente calificados en más de 50 sectores.",
      fechas: { permanente: true },
      enlace: "https://www.ahk-colombia.com/es/servicios/servicio-de-expertos-jubilados-ses",
      tags: ["Internacional", "Cooperación"],
    },
    {
      title: "CityGapFund – Ciudades Sostenibles",
      description:
        "Ofrece asistencia técnica y fortalecimiento de capacidades a ciudades de países en desarrollo y emergentes para preparar e implementar proyectos urbanos sostenibles, planificación climática y estrategias bajas en carbono.",
      fechas: { permanente: true },
      enlace: "https://www.citygapfund.org/what-we-offer/",
      tags: ["Internacional"],
    },
    {
      title: "Programa de Donativos FEMSA",
      description:
        "Apoyo económico a instituciones que contribuyen al desarrollo comunitario en asistencia social, salud, deporte, educación y medio ambiente. Solicitudes para proyectos específicos, excluyendo gastos de operación.",
      fechas: { nota: "El Comité de Donativos de FEMSA se reúne durante el año para analizar solicitudes." },
      enlace: "https://donativos.femsa.com/2",
      tags: ["Internacional"],
    },
    {
      title: "Close the Gap – Equipamiento TIC para Proyectos Sociales",
      description:
        "Selecciona proyectos que se enfocan tanto en el individuo como en su comunidad, en ámbitos como educación, salud, medio ambiente, microfinanzas, investigación, lo sociocultural y la buena gobernanza.",
      fechas: { permanente: true },
      enlace: "https://www.close-the-gap.org/apply-for-computers",
      tags: ["Internacional", "TIC"],
    },
    {
      title: "Fundación Draper Richards Kaplan – Subvenciones para Resolver Problemas Sociales",
      description:
        "Apoya empresas sociales de alto impacto en sus primeras etapas mediante financiación temprana, apoyo riguroso y líderes excepcionales que abordan problemas complejos de la sociedad.",
      dirigidoA: "Personas naturales y jurídicas consideradas como microempresas de todos los sectores económicos.",
      fechas: { permanente: true },
      financiamiento: "Hasta USD 300.000",
      enlace: "https://www.draperriverskaplan.org",
      tags: ["Internacional"],
    },
    {
      title: "Gottlieb Foundation – Emergency Grant para Artistas Plásticos",
      description:
        "Para artistas plásticos con mínimo diez años de participación en una fase madura de su obra, trabajando en pintura, escultura o grabado.",
      dirigidoA: "Escultores, pintores y grabadores (personas naturales o jurídicas consideradas microempresas).",
      fechas: { apertura: "Permanente" },
      financiamiento: "USD $15.000",
      enlace: "https://www.gottliebfoundation.org/emergency-grant",
      tags: ["Internacional", "Arte"],
    },
    {
      title: "EIT Urban Mobility – Strategic Innovation Open Call",
      description:
        "Financia proyectos de innovación estratégica que desarrollen, prueben y escalen soluciones para mejorar la movilidad urbana de manera sostenible, segura e inclusiva.",
      dirigidoA:
        "Empresas, startups, ESAL, universidades, centros de investigación legalmente constituidos de países elegibles como Colombia.",
      fechas: { cierre: "18 de junio 2026" },
      financiamiento:
        "Financiación no reembolsable para desarrollo e implementación; acceso al ecosistema europeo de movilidad, acompañamiento técnico y visibilidad internacional.",
      enlace: "https://www.eiturbanmobility.eu/call-for-proposals/strategic-innovation-open-call/",
      tags: ["Internacional", "Movilidad Urbana"],
    },
    {
      title: "Catalyst Fund – Resiliencia Climática en África",
      description:
        "Busca empresas tecnológicas emergentes en etapa pre-siembra enfocadas en adaptación y resiliencia climática, con soluciones en tecnología financiera, medios de vida sostenibles y servicios climáticamente inteligentes.",
      fechas: { apertura: "Permanente" },
      financiamiento: "US $175.000",
      enlace: "https://www.thecatalystfund.com/pitch-to-us",
      tags: ["Internacional", "Clima"],
    },
    {
      title: "Rufford Foundation Small Grant – Conservación de Biodiversidad",
      description:
        "Proyectos centrados en especies concretas, hábitats amenazados, conflicto entre el ser humano y la fauna silvestre, o educación de la comunidad.",
      dirigidoA:
        "Investigadores en primeras etapas de su carrera; estudiantes de maestría o doctorado, o graduados en los últimos tres años.",
      fechas: { apertura: "18 Sep 2025", cierre: "31 Dic 2026" },
      financiamiento: "Hasta $94.000.000",
      enlace:
        "https://www.innovamos.gov.co/instrumentos/internacional-proyectos-rufford-foundation-small-grant",
      tags: ["Internacional", "Biodiversidad"],
    },
    {
      title: "EIT Urban Mobility – Financial Support to Startups (Open Call 3)",
      description:
        "Apoyar startups que desarrollen soluciones innovadoras para transformar la movilidad urbana de forma sostenible, eficiente e inclusiva en áreas como movilidad eléctrica, multimodal, logística urbana sostenible, IA y micromovilidad.",
      dirigidoA:
        "Startups y empresas innovadoras legalmente constituidas de países elegibles como Colombia.",
      fechas: { cierre: "16 de noviembre de 2026" },
      financiamiento: "Montos definidos por la convocatoria; acompañamiento técnico y acceso al ecosistema europeo de innovación.",
      enlace:
        "https://www.eiturbanmobility.eu/call-for-proposals/financial-support-to-startups-open-call-3/",
      tags: ["Internacional", "Startups", "Movilidad"],
    },
    {
      title: "Google.org – IA para la Ciencia",
      description:
        "Convocatoria global de 30 millones de dólares diseñada para dotar a investigadores y organizaciones de la financiación, herramientas y experiencia técnica necesarias para impulsar avances científicos.",
      dirigidoA:
        "Organizaciones sin fines de lucro, empresas sociales e instituciones académicas con proyectos científicos de alto impacto social.",
      fechas: { cierre: "17 de abril de 2026" },
      financiamiento: "Entre USD 500.000 y USD 3 millones",
      enlace: "https://www.google.org/impact-challenges/ai-science/",
      tags: ["Internacional", "IA", "Ciencia"],
    },
    {
      title: "Becas Internacionales Maynooth University 2026",
      description:
        "Las becas ofrecen descuentos en matrícula de €1.500 a €7.500 para estudiantes con alto desempeño académico admitidos y que aceptaron su oferta antes de la fecha límite.",
      dirigidoA:
        "Profesionales y estudiantes internacionales no pertenecientes a la Unión Europea, incluyendo ciudadanía colombiana, interesados en pregrado y posgrado presenciales en Irlanda.",
      fechas: { nota: "Cierres: 31 de marzo · 30 de abril · 30 de mayo" },
      financiamiento: "Descuento de matrícula: €1.500 – €7.500",
      enlace:
        "https://bogota.gov.co/boletin-oferta-internacional/becas-internacionales-en-irlanda-maynooth-2026",
      tags: ["Internacional", "Beca"],
    },
    {
      title: "KNB Scholarship – Gobierno de Indonesia",
      description:
        "Programa de becas completamente financiado ofrecido por el Gobierno de Indonesia para cursar maestría o doctorado en universidades públicas asociadas en Indonesia.",
      dirigidoA:
        "Ciudadanos de países en desarrollo que deseen cursar maestría o doctorado en universidades públicas en Indonesia.",
      fechas: { cierre: "31 de marzo de 2026" },
      enlace: "https://www.fundacioncarolina.es/",
      tags: ["Internacional", "Beca"],
    },
    {
      title: "Becas para Doctorandos – Ciencias Biológicas, Universidad de Silesia (Katowice)",
      description:
        "Becas para doctorandos en Ciencias Biológicas con especialización en genética vegetal / biología molecular.",
      dirigidoA: "Máster en biología o relacionado con especialización en genética vegetal/biología molecular o similar.",
      fechas: { cierre: "23 de marzo de 2026" },
      financiamiento: "Hasta USD 50.000",
      enlace: "https://investigacion.unimagdalena.edu.co/Convocatoria/Ver/2805",
      tags: ["Internacional", "Beca", "Doctorado"],
    },
    {
      title: "Common Fund for Commodities – Proyectos Agroalimentarios",
      description:
        "Financia proyectos innovadores y sostenibles que mejoren los medios de vida de pequeños productores agrícolas y fortalezcan las cadenas de valor de commodities con impacto social, ambiental y económico.",
      dirigidoA:
        "PYMES, cooperativas de productores, empresas sociales, ONG, instituciones públicas o privadas con mínimo 3 años de experiencia operativa.",
      fechas: { cierre: "1 de abril de 2026" },
      financiamiento:
        "Hasta USD 1.500.000 para proyectos regulares; hasta USD 300.000 para proyectos Fast Track.",
      enlace: "https://www.common-fund.org/call-for-proposals",
      tags: ["Internacional", "Agro"],
    },
    {
      title: "Fulbright – J. William Fulbright Program (Colombia)",
      description:
        "Dirigida a ciudadanos colombianos con título profesional y al menos un año de experiencia laboral, interesados en estudios de maestría en EE. UU. a partir del segundo semestre de 2027.",
      dirigidoA:
        "Candidatos con historial de excelencia académica, alto potencial de liderazgo y capacidad de generar impacto positivo. Se seleccionan hasta 2 candidatos.",
      fechas: { apertura: "02 de marzo de 2026", cierre: "15 de mayo de 2026" },
      financiamiento:
        "Costos de aplicación, apoyo financiero mensual y costos universitarios, entre otros.",
      enlace: "https://fulbright.edu.co/portfolio-academico/j-william-fulbright-program/",
      tags: ["Internacional", "Beca", "EE.UU."],
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-foreground mb-6 font-serif border-l-4 border-primary pl-3">
        Convocatorias Internacionales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => (
          <ConvocatoriaCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
