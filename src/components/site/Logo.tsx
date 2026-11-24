import logo from "@/assets/beway-logo-oficial.png.asset.json";

/** Logo oficial BEWAY (arquivo branco transparente). Em fundo claro usa inversão tonal, sem redesenho. */
export function Logo({ onLight = false, className = "h-7 w-auto" }: { onLight?: boolean; className?: string }) {
  return (
    <img
      src={logo.url}
      alt="BEWAY"
      width={1429}
      height={260}
      className={`${className} ${onLight ? "invert" : ""}`}
    />
  );
}
