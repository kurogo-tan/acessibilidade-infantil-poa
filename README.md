# Guia Infância Acessível

Projeto acadêmico independente de extensão universitária associado à Cruzeiro do Sul Virtual. O site organiza caminhos para que famílias de Porto Alegre encontrem informações sobre serviços públicos gratuitos para crianças, especialmente na primeira infância.

## Tecnologias

- Next.js com App Router e TypeScript
- Tailwind CSS
- Lucide React
- Exportação estática para Vercel (`output: "export"`)
- Dados locais em `src/data/servicos.json`

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Validação e build de produção

```bash
npm run typecheck
npm run build
```

O build estático é gerado em `out/`.

## Dados e atualização

Os serviços exibidos em `src/data/servicos.json` foram conferidos em 08/11/2026 a partir de páginas oficiais da Prefeitura de Porto Alegre, Ministério da Saúde, Ministério da Educação e Ministério do Desenvolvimento e Assistência Social. Cada registro mantém `servicosOferecidos`, `publicoAtendido`, `comoAcessar`, `documentosNecessarios`, `gratuito`, `observacoes`, `fonteOficial` e `verificadoEm`. Quando uma página oficial não detalha a oferta de uma unidade específica, isso aparece explicitamente como informação a confirmar. Antes de uma publicação ou uso em atendimento, confirme endereço, telefone, horários, critérios e disponibilidade diretamente no canal oficial.

## Acessibilidade

O projeto usa HTML semântico, hierarquia de títulos, links descritivos, estados de foco visíveis, navegação por teclado, formulários com rótulos acessíveis, contraste adequado, layout responsivo e suporte a `prefers-reduced-motion`.

## Publicar na Vercel

1. Suba o repositório para o GitHub com o nome `guia-infancia-acessivel`.
2. Importe o repositório na Vercel.
3. Use `npm run build` como comando de build. O diretório de saída é `out/` por causa do export estático.

O site não usa backend, banco de dados, autenticação, APIs externas, geolocalização ou Google Maps SDK. Os botões de mapa usam apenas URLs de busca do Google Maps.
