import data from "@/data/servicos.json";
import type { Categoria, Servico } from "@/types/service";

export const servicos = data as Servico[];

export const categorias: Array<{ id: Categoria; nome: string; descricao: string }> = [
  { id: "saude", nome: "Saúde", descricao: "Cuidados, vacinação e desenvolvimento infantil." },
  { id: "educacao", nome: "Educação", descricao: "Vagas, matrícula e apoio para aprender." },
  { id: "assistencia", nome: "Assistência social", descricao: "Acolhimento e apoio para as famílias." },
];

export function getGoogleMapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
