import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Atelier Verde" },
      { name: "description", content: "Common questions about working with Atelier Verde — timelines, scope, and how we collaborate." },
      { property: "og:title", content: "FAQ — Atelier Verde" },
      { property: "og:description", content: "Common questions about working with the studio." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  ["How many projects do you take on?", "Roughly six per year. Each engagement is led personally by a partner of the studio, so we keep our caseload small on purpose."],
  ["What does a typical project cost?", "Sprints start around €8k, full identity engagements from €40k. Pricing depends on scope, timeline, and the level of partnership involved."],
  ["How long does an identity project take?", "Most full identity engagements run 8 to 14 weeks. Sprints take two. We never rush a project to fit a calendar — we set a timeline together."],
  ["Do you work remotely?", "Yes. We're based in Lisbon and work with clients across Europe and the Americas. We typically combine remote work with one or two in-person workshops."],
  ["Do you offer development?", "Yes — front-end and CMS implementation are part of our practice. For complex backend work, we partner with engineering studios we trust."],
  ["Who owns the work?", "You do. All deliverables are transferred upon final invoice. We retain the right to show finished work in our portfolio unless agreed otherwise."],
];

function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered." intro="If your question isn't here, write to us — we read every message." />
      <section className="container-page pb-24">
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-xl">{q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}