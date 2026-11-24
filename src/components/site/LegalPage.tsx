import type { ReactNode } from "react";
import type { LegalDoc } from "@/content/legal";
import { Header } from "./Header";
import { Footer } from "./Footer";

const linkify = (x: string) => {
  const parts = x.split(/(contato@bewaybusiness\.com\.br)/);
  return parts.map((p, i) =>
    p === "contato@bewaybusiness.com.br" ? <a key={i} href={`mailto:${p}`}>{p}</a> : p,
  );
};

function Blocks({ blocks }: { blocks: LegalDoc["intro"] }) {
  const out: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`u${out.length}`}>{list.map((l) => <li key={l}>{linkify(l)}</li>)}</ul>);
    list = [];
  };
  blocks.forEach((b) => {
    if (b.t === "li") list.push(b.x);
    else { flush(); out.push(<p key={`p${out.length}`}>{linkify(b.x)}</p>); }
  });
  flush();
  return <>{out}</>;
}

export function LegalPage({ doc, eyebrow }: { doc: LegalDoc; eyebrow: string }) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink pb-16 pt-40 text-ink-foreground md:pb-24 md:pt-48">
          <div className="container-site">
            <p className="eyebrow text-ink-muted">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight md:text-6xl">{doc.title}</h1>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="container-site">
            <div className="legal-content max-w-3xl">
              <Blocks blocks={doc.intro} />
              {doc.sections.map((s) => (
                <section key={s.h}>
                  <h2>{s.h}</h2>
                  <Blocks blocks={s.b} />
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
