import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Verde — Independent Creative Studio" },
      { name: "description", content: "Brand identity, digital design, and editorial direction for considered companies. Based in Lisbon, working worldwide." },
      { property: "og:title", content: "Atelier Verde — Independent Creative Studio" },
      { property: "og:description", content: "Brand identity, digital design, and editorial direction for considered companies." },
    ],
  }),
  component: Index,
});

const clients = ["Maison Olea", "Terra Nova", "Praia Studio", "Câmara Verde", "Norte Coffee", "Lume Editions"];

const services = [
  { n: "01", t: "Brand identity", d: "Naming, visual systems, typography and tone — the foundations of a brand that lasts." },
  { n: "02", t: "Digital experience", d: "Marketing sites, product interfaces and editorial platforms designed to feel inevitable." },
  { n: "03", t: "Art direction", d: "Photography, motion and campaign direction that gives your work a distinctive voice." },
];

const projects = [
  { img: work1, title: "Sedona Studio", category: "Brand identity", year: "2024" },
  { img: work2, title: "Cuciplátes", category: "Packaging", year: "2024" },
  { img: work3, title: "Lobby No. 7", category: "Hospitality brand", year: "2023" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Independent creative studio · Est. 2017</p>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              Brands built with <em className="italic text-accent">intention</em>, designed to age beautifully.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Atelier Verde partners with founders and forward-thinking teams to shape brands, products and editorial work — quietly, carefully, and with a sense of place.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-secondary">
                View selected work
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elevated)]">
              <img src={heroImg} alt="Warm, natural light filling a creative studio interior" width={1600} height={1100} className="h-[420px] w-full object-cover md:h-[520px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border/60 bg-secondary/30 py-10">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">Trusted by considered teams</p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 font-display text-lg text-foreground/70 md:grid-cols-6">
            {clients.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">A small studio with a wide perspective.</h2>
          </div>
          <Link to="/services" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">All services →</Link>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-card p-8 lift">
              <p className="eyebrow">{s.n}</p>
              <h3 className="mt-4 text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="container-page py-12">
        <div className="flex items-end justify-between gap-8">
          <h2 className="max-w-2xl text-4xl md:text-5xl">Selected work</h2>
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground">All projects →</Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <Link to="/work" key={p.title} className="group block">
              <div className="overflow-hidden rounded-lg bg-muted">
                <img src={p.img} alt={p.title} width={1200} height={1000} loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
                </div>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-page py-24">
        <figure className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl leading-snug md:text-4xl">
            “Working with Atelier Verde felt like being understood. They gave our brand a voice that finally sounded like us — quiet, generous, and unmistakable.”
          </p>
          <figcaption className="mt-6 text-sm text-muted-foreground">Inês Cardoso · Founder, Maison Olea</figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-2xl bg-primary px-8 py-16 text-primary-foreground md:px-16">
          <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-end">
            <h2 className="text-4xl leading-tight md:text-5xl">Have something thoughtful in mind? Let's begin.</h2>
            <div className="md:text-right">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
