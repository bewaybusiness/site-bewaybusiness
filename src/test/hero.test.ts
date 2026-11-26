import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(__dirname, "../..");
const indexSource = readFileSync(path.join(root, "src/routes/index.tsx"), "utf8");
const cssSource = readFileSync(path.join(root, "src/styles.css"), "utf8");

/** Recorta apenas a seção Hero: do `<section className="hero"` até o primeiro `</section>`. */
function heroBlock(source: string) {
  const start = source.indexOf('<section className="hero"');
  expect(start).toBeGreaterThan(-1);
  const end = source.indexOf("</section>", start);
  expect(end).toBeGreaterThan(start);
  return source.slice(start, end);
}

describe("abertura (hero) BEWAY", () => {
  const hero = heroBlock(indexSource);

  it("leva o CTA principal direto ao WhatsApp, sem âncora interna", () => {
    expect(hero).toContain('href="https://wa.me/5521979991015"');
    expect(hero).not.toMatch(/href="#/);
    expect(hero).toContain('target="_blank"');
    expect(hero).toContain('rel="noopener noreferrer"');
  });

  it("preserva o texto do botão", () => {
    expect(hero).toContain("Conheça a BEWAY");
  });

  it("traz o subtexto aprovado do hero", () => {
    const siteSource = readFileSync(path.join(root, "src/content/site.ts"), "utf8");
    expect(siteSource).toContain(
      '"Aconselhamento estratégico e viabilização de investimentos para crescimento empresarial."',
    );
  });

  it("aplica um véu leve no topo do hero para o menu continuar legível", () => {
    expect(cssSource).toMatch(/\.hero::before\s*\{[^}]*linear-gradient\(to bottom/);
    expect(cssSource).toMatch(/\.hero::before\s*\{[^}]*pointer-events:\s*none/);
  });

  it("não reaplica o degradê lateral na junção com a foto", () => {
    expect(hero).not.toMatch(/gradient/i);
    expect(cssSource).not.toMatch(/\.hero::after/);
    expect(cssSource).not.toMatch(/linear-gradient\(to right/);
  });
});
