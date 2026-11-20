import { useEffect, useState } from "react";
import { site } from "@/content/site";

const nav = [
  { href: "#a-beway", label: "A BEWAY" },
  { href: "#contato", label: "Contato" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-18 items-center justify-between">
        <a href="#topo" className="flex items-baseline gap-3" aria-label="BEWAY — voltar ao topo" onClick={() => setOpen(false)}>
          <span className="text-2xl font-light tracking-[0.18em]">{site.name}</span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            {site.signature}
          </span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-10">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="eyebrow link-quiet">{n.label}</a>
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
              <li key={n.href} className="border-t border-border">
                <a href={n.href} className="eyebrow block py-4" onClick={() => setOpen(false)}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
