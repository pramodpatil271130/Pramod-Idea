import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Atelier Verde" },
      { name: "description", content: "Notes from the studio on craft, brand, and the discipline of working slowly." },
      { property: "og:title", content: "Journal — Atelier Verde" },
      { property: "og:description", content: "Notes from the studio on craft and brand." },
    ],
  }),
  component: JournalPage,
});

const posts = [
  { date: "March 2025", read: "6 min", title: "On the case for restraint", excerpt: "Why the most generous brands are the ones that learn to stop saying things." },
  { date: "February 2025", read: "9 min", title: "How we run a brand sprint", excerpt: "A look inside the two-week engagement we use to refresh an identity without rebuilding it." },
  { date: "January 2025", read: "4 min", title: "A studio's reading list, 2024", excerpt: "Twelve books that shaped our work this year — design, fiction, and otherwise." },
  { date: "December 2024", read: "7 min", title: "Naming as a quiet act", excerpt: "Notes from a decade of helping founders find a word that lasts." },
  { date: "November 2024", read: "5 min", title: "On working with founders", excerpt: "What changes when the person who started the company is also your day-to-day partner." },
];

function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the studio."
        intro="Occasional writing on craft, brand, and the discipline of working slowly."
      />
      <section className="container-page divide-y divide-border pb-24">
        {posts.map((p) => (
          <article key={p.title} className="group grid gap-4 py-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.read} read</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl transition-colors group-hover:text-accent">{p.title}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm underline-offset-4 hover:underline">Read essay →</a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}