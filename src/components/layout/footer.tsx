import Link from "next/link";
import { ExternalLink, HeartHandshake } from "lucide-react";

export function Footer() {
  return <footer className="mt-20 border-t border-slate-200 bg-slate-50">
    <div className="shell grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><div className="mb-4 flex items-center gap-2 text-lg font-bold text-ink"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue text-white"><HeartHandshake size={20} /></span>Guia Infância Acessível</div><p className="max-w-sm text-sm leading-6 text-slate-600">Informação pública organizada para ajudar famílias a encontrar caminhos de cuidado, educação e proteção em Porto Alegre.</p></div>
      <div><p className="mb-3 text-sm font-bold text-ink">Navegue</p><div className="flex flex-col gap-2 text-sm text-slate-600"><Link href="#servicos" className="footer-link">Encontrar serviços</Link><Link href="#sobre" className="footer-link">Sobre o projeto</Link><Link href="#inicio" className="footer-link">Voltar ao início</Link></div></div>
      <div><p className="mb-3 text-sm font-bold text-ink">Fontes oficiais</p><div className="flex flex-col gap-2 text-sm text-slate-600"><a className="footer-link inline-flex items-center gap-1" href="https://prefeitura.poa.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Porto Alegre <ExternalLink size={13} /></a><a className="footer-link inline-flex items-center gap-1" href="https://www.gov.br/saude/" target="_blank" rel="noopener noreferrer">Ministério da Saúde <ExternalLink size={13} /></a><a className="footer-link inline-flex items-center gap-1" href="https://www.gov.br/mec/" target="_blank" rel="noopener noreferrer">Ministério da Educação <ExternalLink size={13} /></a></div></div>
    </div>
    <div className="border-t border-slate-200"><div className="shell flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>Projeto acadêmico independente · Conteúdo verificado em 08/11/2026</span><span>As informações devem ser confirmadas nos canais oficiais.</span></div></div>
  </footer>;
}
