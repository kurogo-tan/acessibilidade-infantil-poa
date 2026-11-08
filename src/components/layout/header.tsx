"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="shell flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Ir para a página inicial" onClick={() => setOpen(false)}><Logo compact /></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <Link className="nav-link" href="#servicos">Encontrar serviços</Link>
          <Link className="nav-link" href="#sobre">Sobre o projeto</Link>
        </nav>
        <button className="icon-button md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden" aria-label="Navegação móvel">
        <div className="shell flex flex-col gap-2"><Link className="mobile-nav-link" href="#servicos" onClick={() => setOpen(false)}>Encontrar serviços</Link><Link className="mobile-nav-link" href="#sobre" onClick={() => setOpen(false)}>Sobre o projeto</Link></div>
      </nav>}
    </header>
  );
}
