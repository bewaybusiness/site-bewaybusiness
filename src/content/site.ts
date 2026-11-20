/**
 * Conteúdo editável do site BEWAY.
 * Textos, contatos e indicadores ficam centralizados aqui.
 */
export const site = {
  name: "BEWAY",
  signature: "Estratégia e Capital",
  slogan: "Direção para crescimento.",
  descriptor: "Aconselhamento e viabilização de investimentos para crescimento empresarial.",
  futureUrl: "https://www.bewaybusiness.com.br",
  contact: {
    whatsappUrl:
      "https://wa.me/5521979991015?text=Ol%C3%A1%21%20Conheci%20a%20BEWAY%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20de%20crescimento%20empresarial.",
    email: "contato@bewaybusiness.com.br",
  },
} as const;

export type Indicator = {
  /** Valor validado, ex.: "12 anos" */
  value: string;
  description: string;
  period?: string;
  context?: string;
  /** "beway": resultado atribuível à BEWAY; "negocios": resultado geral dos negócios atendidos */
  attribution: "beway" | "negocios";
};

/**
 * Indicadores validados (até 3). Deixe vazio enquanto não houver números confirmados:
 * a seção é exibida sem elementos numéricos.
 */
export const indicators: Indicator[] = [];
