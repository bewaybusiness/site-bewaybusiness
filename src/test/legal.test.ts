import { describe, expect, it } from "vitest";
import { privacy, support, terms } from "@/content/legal";
import { pillars } from "@/content/site";

const all = (d: typeof terms) => JSON.stringify(d);

describe("termos e páginas legais", () => {
  it("não fixa preço nem nome de produto nos Termos", () => {
    expect(all(terms)).not.toMatch(/R\$\s?\d/);
    expect(all(terms)).not.toMatch(/Fecha Orçamento/);
  });
  it("inclui a cláusula de natureza empresarial com seis parágrafos", () => {
    const s = terms.sections.find((x) => x.h.includes("Natureza Empresarial dos Aconselhamentos e Alocação de Recursos"));
    expect(s?.b).toHaveLength(6);
    expect(s?.b[3]?.x).toContain("não recebe mandato para gerir carteiras");
  });
  it("preserva os canais oficiais no suporte", () => {
    expect(all(support)).toContain("contato@bewaybusiness.com.br");
    expect(all(support)).toContain("+55 21 97999-1015");
    expect(all(support)).toContain("dias úteis, das 9h às 18h");
  });
  it("mantém todas as seções oficiais da política", () => {
    expect(privacy.sections.length).toBeGreaterThanOrEqual(30);
  });
  it("usa os textos aprovados da Atuação", () => {
    expect(pillars.map((p) => p.d)).toEqual([
      "Visão gerencial, análise e aconselhamento para decisões mais assertivas.",
      "Estruturação e viabilização de recursos para oportunidades de crescimento.",
      "Direção para iniciativas com potencial de gerar valor e ampliar resultados.",
    ]);
  });
});

describe("política sem ferramentas não configuradas", () => {
  it("não declara GA4, Meta Pixel, Google Ads ou Wix como ativos", () => {
    const p = JSON.stringify(privacy);
    expect(p).not.toMatch(/Atualmente, a BEWAY (pode )?utiliza/);
    expect(p).not.toMatch(/A BEWAY utiliza Google Tag Manager/);
    expect(p).not.toContain("Wix");
    expect(JSON.stringify(terms)).not.toContain("Wix");
  });
});

describe("sem plataforma nominal de vendas", () => {
  it("não cita Hotmart nas três páginas legais", () => {
    for (const d of [privacy, terms, support]) expect(JSON.stringify(d)).not.toContain("Hotmart");
  });
});
