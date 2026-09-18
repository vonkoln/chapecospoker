# chapecospoker# Bruno Chapecó — Torneios de Poker para Festas

Landing page de uma página para divulgar o serviço de organização de torneios de poker em festas particulares (aniversário, casamento, formatura) em Belo Horizonte.

## Estrutura do projeto

```
poker-site/
├── index.html   → estrutura e conteúdo da página
├── styles.css   → todo o visual (cores, tipografia, layout, responsividade)
├── script.js    → rolagem suave dos links do menu
└── README.md    → este arquivo
```

Os três arquivos precisam ficar na mesma pasta — o `index.html` referencia `styles.css` e `script.js` por caminho relativo.

## Como visualizar

Basta abrir o `index.html` diretamente no navegador (duplo clique) ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
cd poker-site
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## Antes de publicar

- **WhatsApp**: o botão "Falar com Bruno no WhatsApp" está com `href="#"`. Troque pelo link real, no formato `https://wa.me/55SEUNUMERO` (com DDI e DDD, sem espaços ou símbolos).
- **Fontes**: a página carrega as fontes Fraunces e Karla do Google Fonts via CDN — é preciso conexão com a internet para elas aparecerem corretamente.

## Personalização

- **Cores**: todas as cores estão centralizadas como variáveis no topo do `styles.css` (bloco `:root`), então dá para trocar a paleta inteira ajustando só essas linhas.
- **Textos**: todo o conteúdo (título, seções "Sobre", "Ocasiões", "Como funciona", "O que já vai incluso") está direto no `index.html`, em português.
- **Ícone de ficha**: o desenho da ficha de poker no topo é um SVG simples embutido no HTML — pode ser trocado por uma foto real substituindo o bloco `<div class="chip">`.

## Compatibilidade

Layout responsivo (empilha em telas menores que 760px), respeita `prefers-reduced-motion` e tem foco visível nos links para acessibilidade via teclado.