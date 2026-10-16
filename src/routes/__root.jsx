import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import { AppProvider } from "@/lib/app-context";
import { Navbar, Footer, AmbientBackground } from "@/components/site-chrome";
function NotFoundComponent() {
  return (
    <div className="error-page">
      <div>
        <span>404</span>
        <h1>That page doesn't exist.</h1>
        <p>Let’s get you back to the portfolio.</p>
        <Link to="/" className="black-button">
          Return home
        </Link>
      </div>
    </div>
  );
}
function RevealManager() {
  useEffect(() => {
    const seen = new WeakSet();
    const reveal = (root) => {
      [
        ...(root instanceof HTMLElement && root.matches(".reveal") ? [root] : []),
        ...(root.querySelectorAll?.(".reveal") ?? []),
      ].forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        requestAnimationFrame(() => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.92)
            el.classList.add("is-visible");
          else observer.observe(el);
        });
      });
    };
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    reveal(document);
    const mutation = new MutationObserver((records) =>
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) reveal(node);
        }),
      ),
    );
    mutation.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
  return null;
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="error-page">
      <div>
        <span>ERROR</span>
        <h1>Something slipped.</h1>
        <p>Try again or head back home.</p>
        <button
          className="black-button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
        <a href="/" className="outline-button">
          Go home
        </a>
      </div>
    </div>
  );
}
export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Raounek Nour El Yakine — Systems Security Engineering Portfolio" },
      {
        name: "description",
        content: "A personal portfolio combining cybersecurity, AI, web development and UI/UX.",
      },
      { name: "author", content: "Raounek Nour El Yakine" },
      { property: "og:title", content: "Raounek Nour El Yakine — Security × AI × Product" },
      {
        property: "og:description",
        content: "Systems security engineering, AI, web products and interface design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  ),
  component: function RootComponent() {
    const { queryClient } = Route.useRouteContext();
    return (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <div className="app-shell">
            <AmbientBackground />
            <Navbar />
            <RevealManager />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </AppProvider>
      </QueryClientProvider>
    );
  },
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
