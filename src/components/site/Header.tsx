import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const nav: { href: string; label: string; external?: boolean }[] = [
  { href: "/#a-beway", label: "A BEWAY" },
  { href: "https://wa.me/5521979991015", label: "Converse com a BEWAY", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ink-foreground transition-colors duration-300 ${
        scrolled || open ? "border-b border-ink-border bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-18 items-center justify-between">
        <Link to="/" aria-label="BEWAY — página inicial" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto md:h-7" />
        </Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-10">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="eyebrow link-quiet" {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="eyebrow -mr-3 px-3 py-3 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="container-site pb-6 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href} className="border-t border-ink-border">
                <a href={n.href} className="eyebrow block py-4" {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setOpen(false)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
