"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categorias, servicos } from "@/lib/services";
import { ServiceCard } from "@/components/services/service-card";

export function ServiceDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todas");
  const [neighborhood, setNeighborhood] = useState("todos");
  const neighborhoods = Array.from(new Set(servicos.map((item) => item.bairro))).sort((a, b) => a.localeCompare(b, "pt-BR"));
  const filtered = useMemo(() => servicos.filter((item) => {
    const text = `${item.nome} ${item.descricao} ${item.bairro} ${item.servicosOferecidos.join(" ")} ${item.publicoAtendido}`.toLocaleLowerCase("pt-BR");
    return text.includes(query.toLocaleLowerCase("pt-BR")) && (category === "todas" || item.categoria === category) && (neighborhood === "todos" || item.bairro === neighborhood);
  }), [query, category, neighborhood]);
  function clearFilters() { setQuery(""); setCategory("todas"); setNeighborhood("todos"); }
  return <div>
    <div className="filter-panel">
      <div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><label htmlFor="busca" className="sr-only">Buscar serviço</label><input id="busca" className="input pl-12" placeholder="Busque por nome, bairro ou assunto" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
      <div className="flex flex-1 flex-col gap-3 sm:flex-row"><div className="relative flex-1"><SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><label htmlFor="categoria" className="sr-only">Filtrar por categoria</label><select id="categoria" className="input pl-11" value={category} onChange={(event) => setCategory(event.target.value)}><option value="todas">Todas as categorias</option>{categorias.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)}</select></div><div className="flex-1"><label htmlFor="bairro" className="sr-only">Filtrar por bairro</label><select id="bairro" className="input" value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)}><option value="todos">Todos os bairros</option>{neighborhoods.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div>
      {(query || category !== "todas" || neighborhood !== "todos") && <button className="clear-button" onClick={clearFilters}><X size={16} /> Limpar filtros</button>}
    </div>
    <div className="mb-5 flex items-center justify-between gap-4"><p className="text-sm text-slate-500">{filtered.length} {filtered.length === 1 ? "serviço encontrado" : "serviços encontrados"}</p></div>
    {filtered.length > 0 ? <div className="grid gap-5 lg:grid-cols-3">{filtered.map((item) => <ServiceCard key={item.id} service={item} />)}</div> : <div className="empty-state"><Search size={28} className="text-blue" /><h3 className="mt-3 text-lg font-bold text-ink">Não encontramos esse serviço</h3><p className="mt-2 text-sm text-slate-600">Tente outro termo ou limpe os filtros para ver todas as opções.</p><button className="button button-secondary mt-5" onClick={clearFilters}>Ver todos os serviços</button></div>}
  </div>;
}
