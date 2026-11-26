/**
 * Conteúdo editável do site BEWAY.
 * Textos, contatos e indicadores ficam centralizados aqui.
 */
export const site = {
  name: "BEWAY",
  signature: "Estratégia e Capital",
  slogan: "Direção para crescimento.",
  descriptor: "Aconselhamento estratégico e viabilização de investimentos para crescimento empresarial.",
  futureUrl: "https://www.bewaybusiness.com.br",
  contact: {
    whatsappDisplay: "+55 21 97999-1015",
    serviceHours: { weekdaysOnly: true, startHour: 9, endHour: 18 },
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
export const indicators: Indicator[] = [
  { value: "+12 anos", description: "de expertise em negócios", attribution: "negocios" },
  { value: "+500", description: "ações comerciais desenvolvidas", attribution: "negocios" },
  { value: "+R$ 30 milhões", description: "em faturamento influenciado", attribution: "negocios" },
];

export const pillars = [
  { t: "Estratégia", d: "Visão gerencial, análise e aconselhamento para decisões mais assertivas." },
  { t: "Capital", d: "Estruturação e viabilização de recursos para oportunidades de crescimento." },
  { t: "Crescimento", d: "Direção para iniciativas com potencial de gerar valor e ampliar resultados." },
];

export const updatedCopy = {
  vision: "É melhor obter sabedoria do que ouro. É melhor obter entendimento do que prata.",
  visionSource: "Provérbios 16:16",
  contactTitle: "Um conselho sábio pode mudar tudo.",
  contactDescription: "Se existe um problema, desafio ou oportunidade de crescimento a ser avaliada, entre em contato com a BEWAY.",
  footerQuote: "Bem-aventurado aquele que teme ao Senhor e anda nos seus caminhos",
  footerSource: "Salmos 128:1",
  copyright: "© BEWAY. Todos os direitos reservados.",
};

export const purchaseRules = { priceSource: "offer-at-purchase", statutoryWithdrawalDays: 7 } as const;
