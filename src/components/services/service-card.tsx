import { ChevronDown, ExternalLink, FileText, Info, MapPin, Phone, Route, UsersRound, ArrowUpRight, Check } from "lucide-react";
import type { Servico } from "@/types/service";
import { getGoogleMapsUrl } from "@/lib/services";

const labels = { saude: "Saúde", educacao: "Educação", assistencia: "Assistência social" };
const colors = { saude: "tag-blue", educacao: "tag-yellow", assistencia: "tag-teal" };

export function ServiceCard({ service }: { service: Servico }) {
  return <article className="service-card flex h-full flex-col">
    <div className="mb-5 flex items-center justify-between gap-3"><span className={`tag ${colors[service.categoria]}`}>{labels[service.categoria]}</span><span className="text-xs font-medium text-slate-400">Atualizado em {new Date(service.verificadoEm + "T12:00:00").toLocaleDateString("pt-BR")}</span></div>
    <h3 className="text-xl font-bold leading-tight text-ink">{service.nome}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{service.descricao}</p>
    <div className="mt-4 flex-1"><p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Você encontra</p><ul className="space-y-2 text-sm text-slate-700">{service.servicosOferecidos.slice(0, 3).map((item) => <li key={item} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal" />{item}</li>)}</ul></div>
    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
      <p className="flex gap-2"><MapPin size={17} className="mt-0.5 shrink-0 text-teal" />{service.endereco ? service.endereco : service.bairro}</p>
      {service.telefone && <p className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-teal" />{service.telefone}</p>}
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      <details className="service-details w-full">
        <summary className="button button-small button-primary w-full cursor-pointer list-none sm:w-auto">Ver serviços e orientações <ChevronDown size={15} /></summary>
        <div className="service-details-content mt-4 space-y-5 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-700">
          <div><h4 className="detail-heading"><Check size={16} /> O que você encontra aqui</h4><ul className="mt-2 space-y-1.5">{service.servicosOferecidos.map((item) => <li key={item}>• {item}</li>)}</ul></div>
          <div><h4 className="detail-heading"><UsersRound size={16} /> Quem pode utilizar</h4><p className="mt-2">{service.publicoAtendido}</p></div>
          <div><h4 className="detail-heading"><Route size={16} /> Como conseguir atendimento</h4><ol className="mt-2 space-y-1.5">{service.comoAcessar.map((item, index) => <li key={item}>{index + 1}. {item}</li>)}</ol></div>
          <div><h4 className="detail-heading"><FileText size={16} /> Documentos necessários</h4><ul className="mt-2 space-y-1.5">{service.documentosNecessarios.map((item) => <li key={item}>• {item}</li>)}</ul></div>
          <div><h4 className="detail-heading"><Info size={16} /> Informações importantes</h4><p className="mt-2">{service.observacoes}</p></div>
          <a className="inline-flex items-center gap-1 font-bold text-blue hover:underline" href={service.fonteOficial} target="_blank" rel="noopener noreferrer">Abrir fonte oficial <ArrowUpRight size={15} /></a>
        </div>
      </details>
      {service.endereco && <a className="button button-small button-secondary" href={getGoogleMapsUrl(service.endereco)} target="_blank" rel="noopener noreferrer">Ver no Google Maps <ExternalLink size={14} /></a>}
    </div>
    <p className="mt-3 text-xs text-slate-400">Serviço gratuito · Fonte oficial indicada na página de orientações</p>
  </article>;
}
