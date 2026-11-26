import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { indicators, pillars, site, updatedCopy } from "@/content/site";
import grafite from "@/assets/arquitetura-grafite.webp.asset.json";

const title = "BEWAY — Estratégia e Capital";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: site.descriptor },
      { property: "og:title", content: title },
      { property: "og:description", content: site.descriptor },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: site.descriptor },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BEWAY",
          slogan: site.slogan,
          description: site.descriptor,
          email: site.contact.email,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const shown = indicators.slice(0, 3);
  return (
    <>
      <Header />
      <main id="topo">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text reveal">
            <h1 id="hero-title" className="max-w-xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              {site.slogan}
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">{site.descriptor}</p>
            <a
              href="https://wa.me/5521979991015"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow group mt-14 inline-flex items-center gap-4 py-2"
            >
              <span className="h-px w-10 bg-signal" aria-hidden="true" />
              Conheça a BEWAY
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
          <img
            src={grafite.url}
            alt="Arquitetura contemporânea em concreto escuro e vidro, com linhas estruturais em perspectiva"
            fetchPriority="high"
            className="hero-photo"
          />
        </section>

        {/* ATUAÇÃO */}
        <section id="a-beway" aria-labelledby="atuacao-title" className="py-28 md:py-44">
          <div className="container-site grid gap-16 md:grid-cols-12">
            <h2 id="atuacao-title" className="eyebrow text-muted-foreground md:col-span-3">Atuação</h2>
            <div className="grid gap-14 md:col-span-9 md:grid-cols-3 md:gap-10">
              {pillars.map((p) => (
                <article key={p.t} className="border-t border-foreground pt-8">
                  <h3 className="text-2xl font-light">{p.t}</h3>
                  <p className="mt-5 max-w-xs leading-relaxed text-muted-foreground">{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDICADORES */}
        {shown.length > 0 && (
          <section aria-labelledby="experiencia-title" className="border-t border-border pb-28 pt-20 md:pb-40">
            <div className="container-site grid gap-16 md:grid-cols-12">
              <h2 id="experiencia-title" className="eyebrow text-muted-foreground md:col-span-3">Experiência</h2>
              <dl className="grid gap-12 sm:grid-cols-3 md:col-span-9 md:gap-10">
                {shown.map((ind) => (
                  <div key={ind.description} className="flex flex-col">
                    <dt className="text-sm leading-relaxed text-muted-foreground">{ind.description}</dt>
                    <dd className="order-first mb-3 text-4xl font-light md:text-5xl">{ind.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* VISÃO */}
        <section aria-labelledby="visao-title" className="bg-secondary py-28 md:py-44">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <h2 id="visao-title" className="eyebrow text-muted-foreground md:col-span-3">Visão</h2>
            <figure className="md:col-span-8">
              <blockquote className="text-3xl font-light leading-snug md:text-4xl lg:text-5xl">
                “{updatedCopy.vision}”
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {updatedCopy.visionSource}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" aria-labelledby="contato-title" className="bg-ink py-28 text-ink-foreground md:py-44">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <p className="eyebrow text-ink-muted md:col-span-3">Contato</p>
            <div className="md:col-span-8">
              <h2 id="contato-title" className="text-4xl leading-tight md:text-5xl lg:text-6xl">
                {updatedCopy.contactTitle}
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">{updatedCopy.contactDescription}</p>
              <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-col justify-center border border-ink-foreground px-8 py-4 transition-colors hover:border-signal"
                >
                  <span className="eyebrow">WhatsApp</span>
                  <span className="mt-1 text-lg font-light">{site.contact.whatsappDisplay}</span>
                </a>
                <a href={`mailto:${site.contact.email}`} className="link-quiet py-2 text-ink-muted hover:text-ink-foreground">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
