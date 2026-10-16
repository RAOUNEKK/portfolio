import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
export function Logo() {
  return (
    <Link to="/" className="site-logo" aria-label="Raounek Nour El Yakine — home">
      <span>r</span>aounek<span className="logo-dot">.</span>
    </Link>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav page-width">
        <Logo />
        <div className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="nav-cta">
          Let’s talk <ArrowUpRight size={14} />
        </Link>
        <button
          type="button"
          className="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav page-width">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
export function AmbientBackground() {
  return null;
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <div>
          <strong>Built by Raounek</strong>
          <p>Systems Security Engineer</p>
        </div>
      </div>
    </footer>
  );
}
