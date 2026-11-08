export type Categoria = "saude" | "educacao" | "assistencia";

export type Servico = {
  id: string;
  nome: string;
  categoria: Categoria;
  bairro: string;
  endereco: string | null;
  descricao: string;
  telefone: string | null;
  servicosOferecidos: string[];
  publicoAtendido: string;
  comoAcessar: string[];
  documentosNecessarios: string[];
  gratuito: boolean;
  observacoes: string;
  fonteOficial: string;
  verificadoEm: string;
};
