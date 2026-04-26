import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <span className="font-display text-xl">Atelier Verde</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              An independent creative studio building considered brands and digital experiences for the world's most thoughtful companies.
            </p>
          </div>
          <FooterCol title="Studio" links={[["About", "/about"], ["Journal", "/journal"], ["FAQ", "/faq"]]} />
          <FooterCol title="Work" links={[["Services", "/services"], ["Selected work", "/work"], ["Pricing", "/pricing"]]} />
          <FooterCol title="Connect" links={[["Contact", "/contact"], ["hello@atelierverde.co", "mailto:hello@atelierverde.co"], ["Instagram", "#"]]} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Atelier Verde. All rights reserved.</p>
          <p>Crafted in warm tones · Lisbon &amp; remote</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link to={href} className="text-foreground/80 transition hover:text-foreground">{label}</Link>
            ) : (
              <a href={href} className="text-foreground/80 transition hover:text-foreground">{label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}