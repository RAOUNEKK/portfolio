import type { ReactNode } from "react";
export function PageHeader({ eyebrow, title, subtitle }: {
    eyebrow?: string;
    title: ReactNode;
    subtitle?: string;
}) {
    return <header className="inner-page-header page-width reveal"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</header>;
}
export function PageShell({ children }: {
    children: ReactNode;
}) { return <section className="page-shell page-width">{children}</section>; }

