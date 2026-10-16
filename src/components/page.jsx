export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="inner-page-header page-width reveal">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
export function PageShell({ children }) {
  return <section className="page-shell page-width">{children}</section>;
}
