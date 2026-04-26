import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Atelier Verde" },
      { name: "description", content: "A selection of brand identity, packaging and digital projects from Atelier Verde." },
      { property: "og:title", content: "Selected Work — Atelier Verde" },
      { property: "og:description", content: "A selection of brand identity, packaging and digital projects." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { img: work1, title: "Sedona Studio", category: "Brand identity", year: "2024", desc: "A complete identity system for an architecture practice rooted in the desert Southwest." },
  { img: work2, title: "Cuciplátes", category: "Packaging & brand", year: "2024", desc: "Skincare packaging that brings a sense of ritual and softness to a daily routine." },
  { img: work3, title: "Lobby No. 7", category: "Hospitality brand", year: "2023", desc: "Spatial branding and editorial design for a boutique hotel in northern Portugal." },
  { img: work1, title: "Norte Coffee", category: "Identity & web", year: "2023", desc: "A specialty roaster's identity, packaging system and direct-to-consumer storefront." },
  { img: work2, title: "Lume Editions", category: "Editorial", year: "2022", desc: "An independent publisher's first three titles, end-to-end art direction and design." },
  { img: work3, title: "Câmara Verde", category: "Civic identity", year: "2022", desc: "A new public-facing identity for a regional sustainability initiative." },
];

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="A small body of work, each piece made with care."
        intro="We take on roughly six engagements a year. Below, a selection from the last few seasons."
      />
      <section className="container-page grid gap-x-8 gap-y-16 pb-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title + i} className={i % 3 === 0 ? "md:col-span-2" : ""}>
            <div className="overflow-hidden rounded-lg bg-muted">
              <img
                src={p.img}
                alt={p.title}
                width={1200}
                height={1000}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[5/4]"}`}
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl">{p.title}</h2>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
              </div>
              <span className="text-xs text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}