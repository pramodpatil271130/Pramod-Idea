import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Engagements — Atelier Verde" },
      { name: "description", content: "Three ways to work with the studio: focused sprints, full identity engagements, and ongoing partnerships." },
      { property: "og:title", content: "Engagements — Atelier Verde" },
      { property: "og:description", content: "Three ways to work with Atelier Verde." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Sprint",
    price: "from €8k",
    duration: "2 weeks",
    desc: "A focused engagement to solve a single, well-defined problem.",
    items: ["Brand audit or refresh", "Landing page design & build", "Naming workshop", "Weekly partner involvement"],
  },
  {
    name: "Engagement",
    price: "from €40k",
    duration: "8–14 weeks",
    desc: "A complete project, end-to-end. Most of our work lives here.",
    items: ["Full brand identity system", "Marketing or editorial site", "Photography & art direction", "Rollout & guidelines"],
    featured: true,
  },
  {
    name: "Partnership",
    price: "monthly retainer",
    duration: "6+ months",
    desc: "An ongoing creative partnership for teams without an in-house studio.",
    items: ["Embedded creative partner", "Quarterly campaign work", "Continuous design system care", "Priority studio access"],
  },
];

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engagements"
        title="Three ways to work with us."
        intro="Every project is shaped to fit. The structures below are starting points, not prescriptions."
      />
      <section className="container-page grid gap-6 pb-20 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              t.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
          >
            <p className={`eyebrow ${t.featured ? "text-primary-foreground/70" : ""}`}>{t.duration}</p>
            <h2 className="mt-2 font-display text-3xl">{t.name}</h2>
            <p className={`mt-1 text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
            <p className="mt-6 font-display text-4xl">{t.price}</p>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {t.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 ${t.featured ? "text-background" : "text-accent"}`} /> {i}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                t.featured ? "bg-background text-foreground hover:opacity-90" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Enquire
            </Link>
          </div>
        ))}
      </section>
      <section className="container-page pb-24">
        <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
          Not sure which fits? Tell us about your project and we'll suggest the shape that makes sense.
        </p>
      </section>
    </>
  );
}