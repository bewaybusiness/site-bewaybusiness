import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacy } from "@/content/legal";

const title = "Privacidade e Cookies — BEWAY";
const description = "Como a BEWAY trata dados pessoais, cookies e tecnologias semelhantes, e como exercer seus direitos.";

export const Route = createFileRoute("/privacidade-e-cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacidade-e-cookies" }],
  }),
  component: () => <LegalPage doc={privacy} eyebrow="Privacidade" />,
});
