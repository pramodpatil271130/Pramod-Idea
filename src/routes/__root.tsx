import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-6xl">Lost in the studio</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for has wandered off. Let's get you back.
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Atelier Verde — Independent Creative Studio" },
      { name: "description", content: "Atelier Verde is an independent creative studio crafting brand identities, digital experiences, and editorial design for considered companies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Atelier Verde — Independent Creative Studio" },
      { name: "twitter:title", content: "Atelier Verde — Independent Creative Studio" },
      { property: "og:description", content: "Atelier Verde is an independent creative studio crafting brand identities, digital experiences, and editorial design for considered companies." },
      { name: "twitter:description", content: "Atelier Verde is an independent creative studio crafting brand identities, digital experiences, and editorial design for considered companies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8132ed10-0512-40c0-b3be-482003bbba88/id-preview-9afa0176--c29724fe-a86b-49c2-b007-842f85e76c7c.lovable.app-1777184630936.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8132ed10-0512-40c0-b3be-482003bbba88/id-preview-9afa0176--c29724fe-a86b-49c2-b007-842f85e76c7c.lovable.app-1777184630936.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
