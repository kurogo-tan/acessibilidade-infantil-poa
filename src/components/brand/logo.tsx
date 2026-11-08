import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/logo.svg"
      alt="Guia Infância Acessível"
      width={compact ? 190 : 220}
      height={48}
      priority
      className="h-auto w-auto"
    />
  );
}
