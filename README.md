# JC Prime Guincho — Site Institucional

Site institucional completo em HTML, CSS e JavaScript puro (sem frameworks,
sem build necessário), pronto para publicação. Foco em conversão: levar o
visitante ao WhatsApp o mais rápido possível.

## Estrutura de pastas

```
jc-prime-guincho/
├── index.html              → estrutura e conteúdo do site
├── css/
│   └── style.css            → todo o estilo visual (identidade preto/dourado)
├── js/
│   ├── config.js            → ÚNICO arquivo com os dados da empresa
│   └── main.js               → comportamento (menu, WhatsApp, FAQ, formulário, animações)
├── assets/
│   └── images/
│       └── LEIA-ME.txt      → instruções para colocar a logo e fotos reais
└── README.md                 → este arquivo
```

## Como editar os dados da empresa

Abra **`js/config.js`**. Esse é o único lugar do projeto onde os dados da
empresa aparecem: nome, slogan, WhatsApp, telefone, Instagram, cidade,
horário e lista de serviços. Alterando os valores desse arquivo, o site
inteiro é atualizado automaticamente (header, hero, contato, footer, botão
flutuante e formulário).

Campos mais comuns para alterar:

- `whatsappNumber`: número em formato internacional só com dígitos (ex: `5511987654321`)
- `phoneNumber`: número usado no link `tel:` (ex: `+551141111234`)
- `instagramUrl`: link completo do perfil
- `services`: lista de serviços exibida na seção "Nossos Serviços" e no formulário

## Onde colocar a logo e as fotos reais

Veja o arquivo `assets/images/LEIA-ME.txt` — ele explica exatamente quais
arquivos adicionar (`logo.png`, `favicon.png`, `hero.jpg`, `sobre.jpg`,
`og-cover.jpg`) e quais linhas trocar no `index.html` para usá-los no lugar
das imagens temporárias.

Até que as imagens reais sejam adicionadas, o site usa fotos temporárias do
Unsplash (guinchos/reboques genéricos) apenas para não deixar espaços vazios.

## Como executar localmente

Como o projeto é HTML/CSS/JS puro, não é necessário instalar nada (sem
`npm install`, sem build). Basta servir os arquivos:

**Opção 1 — abrir direto no navegador**
Dê duplo clique em `index.html`.

**Opção 2 — servidor local simples (recomendado, evita bloqueios do navegador)**

Com Python já instalado:
```bash
cd jc-prime-guincho
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.

Com Node.js instalado:
```bash
cd jc-prime-guincho
npx serve .
```

## Build de produção

Não há etapa de build — os arquivos em `jc-prime-guincho/` já são os
arquivos finais de produção. Para publicar, basta enviar a pasta inteira
(`index.html`, `css/`, `js/`, `assets/`) para o serviço de hospedagem
escolhido.

Opcional (recomendado antes de publicar): minificar `css/style.css` e
`js/main.js` com qualquer minificador online, para reduzir o tamanho dos
arquivos. Isso é opcional — o site já é leve sem esse passo.

## Como publicar

Qualquer uma destas opções funciona, todas gratuitas:

**Netlify (mais simples)**
1. Acesse https://app.netlify.com
2. Arraste a pasta `jc-prime-guincho` inteira para a área de deploy
3. Pronto — o Netlify gera uma URL pública imediatamente

**Vercel**
1. Acesse https://vercel.com/new
2. Importe a pasta do projeto (ou um repositório Git com esses arquivos)
3. Confirme o deploy (não é necessário configurar build command)

**GitHub Pages**
1. Suba os arquivos para um repositório no GitHub
2. Nas configurações do repositório, ative "GitHub Pages" apontando para a
   branch principal (pasta raiz)

**Hospedagem tradicional (ex: HostGator, Hostinger)**
1. Envie todos os arquivos da pasta `jc-prime-guincho` via FTP para a pasta
   pública do domínio (geralmente `public_html`)

Em qualquer uma dessas opções, depois de publicado, atualize o link
`canonical` e as tags `og:url` / `og:image` em `index.html` com o domínio
final, se ele for diferente de `jcprimeguincho.com.br`.

## Checklist de qualidade já verificado

- Botão do WhatsApp (header, hero, seções, botão flutuante e footer) abre o
  WhatsApp com mensagem pré-preenchida
- Botão de telefone usa `tel:+551141111234`
- Botão de Instagram aponta para `https://instagram.com/jcprimeguincho`
- Menu hamburger funcional no mobile
- FAQ em accordion funcional
- Formulário gera mensagem formatada e abre o WhatsApp (sem backend)
- Sem overflow horizontal em nenhum breakpoint
- Foco visível em todos os elementos interativos (acessibilidade)
- Animações respeitam `prefers-reduced-motion`
- SEO: title, meta description, Open Graph, dados estruturados locais,
  HTML semântico, H1 único, favicon configurado
