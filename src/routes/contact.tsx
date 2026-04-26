import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Verde" },
      { name: "description", content: "Tell us about your project. We respond within two business days." },
      { property: "og:title", content: "Contact — Atelier Verde" },
      { property: "og:description", content: "Tell us about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  return (
    <>
      <Toaster />
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project."
        intro="We respond personally within two business days. The more context you share, the more useful our reply."
      />
      <section className="container-page grid gap-12 pb-24 md:grid-cols-12">
        <aside className="space-y-8 md:col-span-4">
          <div>
            <p className="eyebrow">Studio</p>
            <p className="mt-2 text-sm">Rua das Flores 12<br />1200-194 Lisbon, Portugal</p>
          </div>
          <div>
            <p className="eyebrow">General</p>
            <a href="mailto:hello@atelierverde.co" className="mt-2 block text-sm hover:text-accent">hello@atelierverde.co</a>
          </div>
          <div>
            <p className="eyebrow">New business</p>
            <a href="mailto:projects@atelierverde.co" className="mt-2 block text-sm hover:text-accent">projects@atelierverde.co</a>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-2 text-sm">Mon–Thu, 9:30–18:00 WET</p>
          </div>
        </aside>

        <form
          className="space-y-6 rounded-2xl border border-border bg-card p-8 md:col-span-8 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Message received. We'll be in touch shortly.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company" name="company" />
            <Field label="Budget range" name="budget" placeholder="e.g. €40k–€80k" />
          </div>
          <Field label="Project type" name="type" placeholder="Brand identity, website, art direction…" />
          <div>
            <label className="eyebrow mb-2 block">Tell us more</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="A few sentences about what you're hoping to do."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow mb-2 block" htmlFor={name}>{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}