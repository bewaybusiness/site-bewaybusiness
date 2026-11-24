import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { terms } from "@/content/legal";

const title = "Termos de Uso — BEWAY";
const description = "Condições de uso do site e de aquisição de produtos, conteúdos, serviços e ofertas da BEWAY.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: () => <LegalPage doc={terms} eyebrow="Termos" />,
});
