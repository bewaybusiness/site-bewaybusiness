import { describe, expect, it } from "vitest";
import { indicators, site } from "@/content/site";

describe("conteúdo BEWAY", () => {
  it("não publica indicadores fictícios ou placeholders", () => {
    expect(indicators.length).toBeLessThanOrEqual(3);
    for (const i of indicators) expect(i.value).not.toMatch(/X{2}/i);
  });
  it("usa o link exato do WhatsApp", () => {
    expect(site.contact.whatsappUrl).toBe(
      "https://wa.me/5521979991015?text=Ol%C3%A1%21%20Conheci%20a%20BEWAY%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20de%20crescimento%20empresarial.",
    );
  });
});
