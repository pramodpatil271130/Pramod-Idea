import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Atelier Verde" },
      { name: "description", content: "Brand identity, digital experience, and art direction services from an independent creative studio." },
      { property: "og:title", content: "Services — Atelier Verde" },
      { property: "og:description", content: "Brand identity, digital experience, and art direction services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Brand identity",
    body: "We shape the foundations of a brand — strategy, naming, visual systems, voice and editorial guidelines — so every touchpoint feels considered and inevitable.",
    items: ["Brand strategy & positioning", "Naming & verbal identity", "Logo, typography & visual system", "Guidelines & rollout"],
  },
  {
    n: "02",
    title: "Digital experience",
    body: "Marketing sites, editorial platforms and product interfaces built to feel like home. We work end-to-end across UX, design and front-end engineering.",
    items: ["Marketing & editorial sites", "Product UX & interface design", "Design systems", "Front-end engineering"],
  },
  {
    n: "03",
    title: "Art direction",
    body: "Photography, motion and campaign direction that gives your brand a distinctive, ownable voice across every channel.",
    items: ["Photography direction", "Campaign concepts", "Motion & film", "Print & editorial"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Three disciplines, one quiet point of view."
        intro="We work in tight engagements with a small number of clients each year. Every project is led personally by a partner of the studio."
      />
      <section className="container-page space-y-16 pb-24">
        {services.map((s) => (
          <article key={s.n} className="grid gap-8 border-t border-border pt-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">{s.n}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg text-muted-foreground">{s.body}</p>
            </div>
            <ul className="space-y-3 md:col-span-4">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-accent" /> {i}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="mt-12 rounded-2xl bg-secondary/60 p-10 md:p-14">
          <p className="eyebrow">Process</p>
          <h3 className="mt-3 text-3xl md:text-4xl">A four-phase rhythm.</h3>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              ["Listen", "We start with conversation. Workshops, interviews, immersion."],
              ["Frame", "Strategy, narrative and creative territories define the work ahead."],
              ["Make", "Design sprints, iteration and craft — refined together."],
              ["Land", "Rollout, training and ongoing partnership beyond launch."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="font-display text-2xl text-accent">0{i + 1}</p>
                <h4 className="mt-2 text-xl">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Discuss your project
          </Link>
        </div>
      </section>
    </>
  );
}