import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atelier Verde" },
      { name: "description", content: "An independent creative studio of six, based in Lisbon, working with founders worldwide." },
      { property: "og:title", content: "About — Atelier Verde" },
      { property: "og:description", content: "An independent creative studio of six, based in Lisbon." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title="A small studio in Lisbon, working quietly with the world's most considered companies."
        intro="We were founded in 2017 around a simple belief: that the best work happens slowly, in close partnership, away from the noise."
      />
      <section className="container-page grid gap-12 pb-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-lg">
            <img src={teamImg} alt="Portrait of studio partner" width={1200} height={1400} loading="lazy" className="w-full object-cover" />
          </div>
        </div>
        <div className="space-y-6 md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/85">
            Atelier Verde is six people: designers, writers and an engineer, working together from a quiet studio in Príncipe Real. We choose our projects carefully and treat each as a long conversation rather than a transaction.
          </p>
          <p className="text-lg leading-relaxed text-foreground/85">
            Our work has been recognised by the Type Directors Club, Brand New, and It's Nice That. But the recognition we care about most is the kind that comes from a founder, three years in, telling us their brand still feels right.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[
              ["80+", "Projects shipped"],
              ["6", "People in studio"],
              ["7", "Years in practice"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl text-accent">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl bg-secondary/60 p-10 md:p-14">
          <p className="eyebrow">Principles</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Five things we believe.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {[
              ["Slow is a feature", "We deliberately keep our caseload small so the work has time to mature."],
              ["Strategy is design", "There is no separating the thinking from the making. We do both, together."],
              ["Restraint is generous", "What you choose to leave out is often what makes the work feel right."],
              ["Craft over speed", "We measure ourselves by the longevity of the work, not the speed of delivery."],
              ["Partnership over service", "We work with founders who want a creative partner, not a vendor."],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="font-display text-xl text-accent">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}