import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/yago-hero.jpg";
import trainingImg from "@/assets/yago-training.jpg";
import detailImg from "@/assets/yago-detail.jpg";
import mirrorImg from "@/assets/yago-mirror.jpg.asset.json";
import gymImg from "@/assets/yago-gym.png.asset.json";
import backImg from "@/assets/yago-back.png.asset.json";
import mirrorSelfieImg from "@/assets/yago-mirror-selfie.png";
import logoImg from "@/assets/logo.png";
import backFlexImg from "@/assets/yago-back-flex.png";
import gymPoseImg from "@/assets/yago-gym-pose.png";
import frontFlexImg from "@/assets/yago-front-flex.png";
import roomPoseImg from "@/assets/yago-room-pose.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yago — Entrenador Personal Online" },
      {
        name: "description",
        content:
          "Entrenador personal online. Transformación física, hábitos y nutrición con un método cercano y resultados reales.",
      },
      { property: "og:title", content: "Yago — Entrenador Personal Online" },
      {
        property: "og:description",
        content:
          "Transformaciones físicas reales, hábitos sostenibles y nutrición a tu medida.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const achievements = [
  {
    n: "1:1",
    label: "Asesoría Individual",
    detail: "Acompañamiento cercano y personalizado semana a semana para guiarte y asegurar tu progreso de verdad.",
  },
  {
    n: "4",
    label: "Años de experiencia entrenando\u00a0",
    detail: "Especializado en entrenamiento online, fuerza y composición corporal.",
  },
  {
    n: "98%",
    label: "Adherencia al método",
    detail: "Programas diseñados a medida, sostenibles y con seguimiento semanal.",
  },
];

const stats = [
  { k: "Sesiones", v: "3–5 / semana" },
  { k: "Modalidad", v: "100% Online" },
  { k: "Idiomas", v: "ES · EN" },
  { k: "Edad", v: "19" },
];

const testimonialsRow1 = [
  {
    name: "Lorenzo",
    role: "1/04/2026",
    quote:
      "Desde que te tengo como entrenador los entrenamientos no se comparan a los que me hacían antes en mi gimnasio. Es una locura lo que he avanzado en tan poco tiempo.",
  },
  {
    name: "Enrique",
    role: "25/06/2025",
    quote:
      "Ya llevo casi un año trabajando con Yago y ha sido lo mejor que he podido hacer. Mis entrenamientos cambiaron por completo y el físico se vio reflejado. A nivel nutricional me ha ayudado muchísimo para saber qué comer y cómo comerlo.",
  },
];

const testimonialsRow2 = [
  {
    name: "Carlos",
    role: "12/05/2026",
    quote:
      "Ha sabido adaptar perfectamente la rutina a mi horario de trabajo a turnos. Por fin he conseguido ser constante.",
  },
  {
    name: "Adrián",
    role: "03/04/2026",
    quote:
      "Buscaba ganar masa muscular y fuerza. Yago me organizó los entrenos y me guio paso a paso. En pocos meses he mejorado mis marcas y me veo mucho más fuerte.",
  },
];

function Index() {
  return (
    <main className="bg-grain min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 text-display text-xl">
            <img src={logoImg} alt="Yago Logo" className="h-9 w-auto object-contain rounded-full border border-border/40" />
            <span>Yago<span className="text-clay">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-foreground transition">Sobre mí</a></li>
            <li><a href="#logros" className="hover:text-foreground transition">Logros</a></li>
            <li><a href="#testimonios" className="hover:text-foreground transition">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-foreground transition">Contacto</a></li>
          </ul>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
          >
            Empezar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 animate-rise">
            <p className="text-eyebrow mb-6">Entrenador Personal · Online</p>
            <h1 className="text-display text-[clamp(3rem,9vw,8.5rem)]">
              Consigue tu<br />
              <em className="italic text-clay">mejor versión.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Acompaño a personas como tú a conseguir un cambio físico real y sobre todo,
              un cambio de hábitos que te ayude a conseguir tu mejor&nbsp;versión.
              Entrenamiento, nutrición y constancia —Completamente diseñados a tu medida.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm tracking-wide text-background hover:bg-primary transition"
              >
                Quiero empezar →
              </a>
              <a
                href="#testimonios"
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm tracking-wide hover:bg-card transition"
              >
                Ver testimonios
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[frontFlexImg, gymPoseImg, backFlexImg, roomPoseImg].map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
                  <img
                    src={src}
                    alt={`Yago foto ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-5 py-4 shadow-elegant rounded-sm hidden md:block">
              <p className="text-eyebrow">Disponible</p>
              <p className="text-sm mt-1">Plazas abiertas · Junio</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:col-start-1">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={mirrorSelfieImg}
                alt="Yago posando en el espejo"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-eyebrow mb-5">Sobre mí</p>
            <h2 className="text-display text-5xl md:text-6xl">
              Entrenamiento con propositos y&nbsp;&nbsp; hábitos para toda la vida.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Yo soy Yago tengo 19 años llevo varios&nbsp; años entrenando por
              propósito propio mejorando mi físico hábitos y nutrición. Por eso
              mismo he creado esta web para poder ayudaros a conseguir vuestra
              mejor versión que es lo que mas me gusta poder ayudar a otras
              personas a conseguir sus objetivos.&nbsp;
              <br /><br />
              Mi método con el que trabajo destaca porque tanto el entrenamiento
              como la alimentación se adaptan a ti y a tu estilo de vida para que
              sea lo mas llevadera en el tiempo posible y no te canses de la
              alimentación o el entreno.
            </p>
          </div>
        </div>
      </section>

      {/* LOGROS */}
      <section id="logros" className="py-28 md:py-36 bg-card/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-eyebrow mb-5">Logros</p>
              <h2 className="text-display text-5xl md:text-7xl max-w-2xl">
                Resultados que <em className="italic text-clay">hablan solos.</em>
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Cifras de un trabajo constante. Detrás de cada número hay una historia
              personal de esfuerzo y disciplina.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {achievements.map((a) => (
              <article
                key={a.label}
                className="bg-background p-10 md:p-12 flex flex-col gap-6 hover:bg-card transition"
              >
                <span className="text-display text-7xl md:text-8xl text-clay">{a.n}</span>
                <h3 className="text-2xl">{a.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-32">
              <p className="text-eyebrow mb-5">Testimonios</p>
              <h2 className="text-display text-5xl md:text-6xl">
                Lo que dicen <em className="italic text-clay">quienes ya entrenan</em> conmigo.
              </h2>
              <div className="mt-10 aspect-[4/5] overflow-hidden rounded-sm shadow-elegant hidden md:block">
                <img
                  src={backFlexImg}
                  alt="Espalda de Yago"
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-12">
              {testimonialsRow1.map((t, i) => (
                <figure
                  key={t.name}
                  className="border-t border-border pt-10 first:border-t-0 first:pt-0"
                >
                  <span className="text-display text-6xl text-clay leading-none">“</span>
                  <blockquote className="mt-2 text-2xl md:text-3xl text-display leading-snug">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase">
                        {t.role}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">
                      0{i + 1} / 04
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Row 2: Reverse layout (Testimonials on left, image on right) */}
          <div className="grid md:grid-cols-12 gap-12 items-start mt-32 md:mt-48">
            <div className="md:col-span-7 space-y-12">
              {testimonialsRow2.map((t, i) => (
                <figure
                  key={t.name}
                  className="border-t border-border pt-10 first:border-t-0 first:pt-0"
                >
                  <span className="text-display text-6xl text-clay leading-none">“</span>
                  <blockquote className="mt-2 text-2xl md:text-3xl text-display leading-snug">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase">
                        {t.role}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">
                      0{i + 3} / 04
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="md:col-span-4 md:col-start-9 md:sticky md:top-32">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elegant hidden md:block">
                <img
                  src={gymPoseImg}
                  alt="Yago posando en el gimnasio"
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO / CTA */}
      <section id="contacto" className="py-28 md:py-40 bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-eyebrow mb-6" style={{ color: "var(--sand)" }}>
            ¿Empezamos?
          </p>
          <h2 className="text-display text-5xl md:text-8xl">
            Tu mejor versión <em className="italic" style={{ color: "var(--sand)" }}>empieza hoy.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-lg opacity-70 leading-relaxed">
            Escríbeme y diseñaremos juntos el plan que se ajusta a tu vida, tus
            objetivos y tus tiempos.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yagovicre@gmail.com?subject=Información%20sobre%20asesoría&body=Hola%20Yago,%20me%20gustaría%20recibir%20más%20información%20sobre%20tus%20planes%20de%20entrenamiento."
              className="inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition"
            >
              YAGOVICRE@GMAIL.COM
            </a>
            <a
              href="https://www.instagram.com/yagooo_.07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-8 py-4 text-sm tracking-wide hover:bg-background/10 transition"
            >
              Instagram →
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} Yago — Entrenador Personal Online
      </footer>
    </main>
  );
}
