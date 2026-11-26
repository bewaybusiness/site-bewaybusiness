import type { ReactNode } from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

// Link é substituído por um <a> comum: o teste valida o destino do botão do cabeçalho,
// não a integração de rotas (coberta em app-routing.test.tsx).
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children?: ReactNode; to?: string } & Record<string, unknown>) => (
    <a href={to ?? "#"} {...props}>
      {children}
    </a>
  ),
}));

const { Header } = await import("@/components/site/Header");

afterEach(() => cleanup());

function whatsappLink(container: HTMLElement) {
  return Array.from(container.querySelectorAll("a")).find((a) => a.textContent?.trim() === "Converse com a BEWAY");
}

describe("cabeçalho BEWAY", () => {
  it("não aplica degradê ao fundo do cabeçalho", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).not.toBeNull();
    expect(header?.className).not.toMatch(/gradient/i);
    expect(header?.className).toContain("bg-transparent");
    expect(header?.querySelectorAll('[class*="gradient"]').length).toBe(0);
  });

  it("abre o WhatsApp no destino exato, em nova aba", () => {
    const { container } = render(<Header />);
    const link = whatsappLink(container);
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("https://wa.me/5521979991015");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("rel")).toContain("noopener");
  });

  it("mantém o mesmo destino de WhatsApp no menu do celular", () => {
    const { container } = render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));
    const menu = container.querySelector("#menu-mobile");
    expect(menu).not.toBeNull();
    const link = whatsappLink(menu as HTMLElement);
    expect(link?.getAttribute("href")).toBe("https://wa.me/5521979991015");
    expect(link?.getAttribute("target")).toBe("_blank");
  });
});
