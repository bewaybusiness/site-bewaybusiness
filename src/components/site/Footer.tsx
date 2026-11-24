import { Link } from "@tanstack/react-router";
import { site, updatedCopy } from "@/content/site";
import { Logo } from "./Logo";

const links = [
  { to: "/privacidade-e-cookies", label: "Privacidade e Cookies" },
  { to: "/termos-de-uso", label: "Termos de Uso" },
  { to: "/contato-suporte", label: "Contato e Suporte" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site border-t border-ink-border py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo className="h-6 w-auto" />
            <p className="eyebrow mt-4 text-ink-muted">{site.signature}</p>
          </div>
          <blockquote className="max-w-sm text-sm font-light leading-relaxed text-ink-muted md:text-right">
            <p>“{updatedCopy.footerQuote}”</p>
            <cite className="mt-2 block text-xs not-italic tracking-[0.18em]">{updatedCopy.footerSource}</cite>
          </blockquote>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>{updatedCopy.copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-quiet hover:text-ink-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
