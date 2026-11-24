import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { support } from "@/content/legal";

const title = "Contato e Suporte — BEWAY";
const description = "Canais oficiais da BEWAY para dúvidas, suporte, compras, reembolso e privacidade.";

export const Route = createFileRoute("/contato-suporte")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contato-suporte" }],
  }),
  component: () => <LegalPage doc={support} eyebrow="Suporte" />,
});
