import { describe, expect, it } from "vitest";
import { indicators, purchaseRules, site } from "@/content/site";

describe("conteúdo BEWAY", () => {
  it("mantém os três valores autorizados atribuídos aos negócios atendidos", () => {
    expect(indicators.map((indicator) => indicator.value)).toEqual(["+12 anos", "+500", "+R$ 30 milhões"]);
    expect(indicators.every((indicator) => indicator.attribution === "negocios")).toBe(true);
  });
  it("usa o preço da oferta no momento da compra", () => {
    expect(purchaseRules.priceSource).toBe("offer-at-purchase");
  });
  it("mantém atendimento operacional em dias úteis das 9h às 18h", () => {
    expect(site.contact.serviceHours).toEqual({ weekdaysOnly: true, startHour: 9, endHour: 18 });
  });
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
