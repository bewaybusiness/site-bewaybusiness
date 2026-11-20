import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { indicators, site } from "@/content/site";
import arquitetura from "@/assets/arquitetura-concreto.jpg";

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

const pilares = [
  { t: "Estratégia", d: "Visão empresarial, análise e aconselhamento para decisões mais assertivas." },
  { t: "Capital", d: "Estruturação e viabilização de recursos para oportunidades de crescimento." },
  { t: "Crescimento", d: "Direção para iniciativas com potencial de gerar valor e ampliar resultados." },
];

function Index() {
  const shown = indicators.slice(0, 3);
  return (
    <>
      <Header />
      <main id="topo">
        {/* HERO */}
        <section className="relative pt-18" aria-labelledby="hero-title">
          <div className="container-site grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-12 md:grid-cols-12 md:py-16">
            <div className="reveal md:col-span-6 lg:col-span-5">
              <p className="text-sm font-light tracking-[0.3em]">{site.name}</p>
              <p className="eyebrow mt-2 text-muted-foreground">{site.signature}</p>
              <h1 id="hero-title" className="mt-12 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Direção para crescimento.
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">{site.descriptor}</p>
              <a href="#a-beway" className="eyebrow link-quiet mt-12 inline-flex items-center gap-4 py-2">
                <span className="h-px w-10 bg-signal" aria-hidden="true" />
                CONHEÇA A BEWAY
              </a>
            </div>
            <figure className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
              <img
                src={arquitetura}
                alt="Fachada de edifício contemporâneo em concreto e vidro, com luz natural e sombras marcadas"
                width={1100}
                height={1375}
                fetchPriority="high"
                className="aspect-[4/5] max-h-[78svh] w-full object-cover md:ml-auto"
              />
            </figure>
          </div>
        </section>

        {/* ESSÊNCIA */}
        <section id="a-beway" aria-labelledby="essencia-title" className="bg-ink py-28 text-ink-foreground md:py-40">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <p className="eyebrow text-ink-muted md:col-span-3">A BEWAY</p>
            <div className="md:col-span-8">
              <h2 id="essencia-title" className="text-4xl leading-tight md:text-5xl lg:text-6xl">
                Crescer exige mais do que recursos. Exige direção.
              </h2>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                A BEWAY atua na análise de negócios, orientação de decisões estratégicas e viabilização de
                investimentos que favoreçam o crescimento empresarial.
              </p>
              <p className="mt-16 max-w-2xl border-t border-ink-border pt-8 text-lg font-light leading-relaxed">
                Conhecimento para avaliar caminhos. Estratégia para orientar decisões. Capital para viabilizar
                oportunidades.
              </p>
            </div>
          </div>
        </section>

        {/* ATUAÇÃO */}
        <section aria-labelledby="atuacao-title" className="py-28 md:py-40">
          <div className="container-site">
            <p className="eyebrow text-muted-foreground">Atuação</p>
            <h2 id="atuacao-title" className="mt-6 text-4xl md:text-5xl">Estratégia. Capital. Crescimento.</h2>
            <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-12">
              {pilares.map((p, i) => (
                <article key={p.t} className="border-t border-foreground pt-8">
                  <p className="text-sm font-light text-muted-foreground">0{i + 1}</p>
                  <h3 className="eyebrow mt-6 text-sm">{p.t}</h3>
                  <p className="mt-5 max-w-xs text-lg leading-relaxed">{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDÊNCIAS */}
        <section aria-labelledby="evidencias-title" className="border-t border-border bg-secondary py-24 md:py-32">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <p className="eyebrow text-muted-foreground md:col-span-3">Evidências</p>
            <div className="md:col-span-9">
              <h2 id="evidencias-title" className="max-w-3xl text-4xl leading-tight md:text-5xl">
                Experiência construída na prática.
              </h2>
              {shown.length > 0 && (
                <dl className="mt-16 grid gap-12 sm:grid-cols-3">
                  {shown.map((ind) => (
                    <div key={ind.description} className="flex flex-col border-t border-border pt-6">
                      <dt className="text-sm leading-relaxed text-muted-foreground">
                        {ind.description}
                        <span className="mt-2 block text-xs uppercase tracking-[0.18em]">
                          {ind.attribution === "beway" ? "Atuação BEWAY" : "Negócios atendidos"}
                          {ind.period ? ` · ${ind.period}` : ""}
                        </span>
                        {ind.context && <span className="mt-1 block text-xs">{ind.context}</span>}
                      </dt>
                      <dd className="order-first mb-4 text-4xl font-light">{ind.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </section>

        {/* CRITÉRIO */}
        <section aria-labelledby="criterio-title" className="py-28 md:py-40">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <h2 id="criterio-title" className="text-4xl leading-tight md:col-span-7 md:text-5xl">
              Nem toda oportunidade merece investimento. Nem todo caminho leva ao crescimento.
            </h2>
            <p className="self-end text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
              Cada relação começa pela compreensão do negócio, pela análise do cenário e pela avaliação de onde a
              BEWAY pode efetivamente contribuir.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" aria-labelledby="contato-title" className="bg-ink py-28 text-ink-foreground md:py-40">
          <div className="container-site grid gap-12 md:grid-cols-12">
            <p className="eyebrow text-ink-muted md:col-span-3">Contato</p>
            <div className="md:col-span-8">
              <h2 id="contato-title" className="text-4xl leading-tight md:text-5xl lg:text-6xl">
                Toda boa direção começa com uma conversa.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
                Se existe uma oportunidade de crescimento a ser avaliada, entre em contato com a BEWAY.
              </p>
              <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow inline-flex min-h-12 items-center justify-center border border-ink-foreground px-8 py-4 transition-colors hover:border-signal hover:text-signal"
                >
                  Conversar com a BEWAY
                </a>
                <a href={`mailto:${site.contact.email}`} className="link-quiet py-2 text-ink-muted hover:text-ink-foreground">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="container-site flex flex-col gap-3 border-t border-ink-border py-12 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-xl font-light tracking-[0.18em]">{site.name}</span>
            <span className="eyebrow text-ink-muted">{site.signature}</span>
          </div>
          <p className="text-sm text-ink-muted">{site.slogan}</p>
        </div>
      </footer>
    </>
  );
}
