# 123 Mil Transportes — site institucional

Site institucional estático, responsivo e sem dependência de framework. Inclui identidade visual SVG, serviços, galeria com fotos reais, seção da empresa, formulário de solicitação de orçamento e visualizador de imagens.

## Como visualizar

1. Extraia o ZIP.
2. Abra `index.html` em um navegador moderno. Para desenvolvimento, recomenda-se servir a pasta com uma extensão como Live Server ou `python -m http.server 8000`.

## Estrutura

- `index.html` — conteúdo e estrutura semântica.
- `styles.css` — identidade visual, layout responsivo e enquadramento individual das imagens.
- `script.js` — menu mobile, galeria ampliada e preparação/cópia da mensagem de orçamento.
- `assets/logo.svg` — logotipo vetorial criado para o site.
- `assets/images/*.webp` — versões otimizadas usadas no site.
- `assets/images/originals/` — cópias originais preservadas, sem alterações.

## Observações antes de publicar

- O formulário prepara e permite copiar a mensagem do orçamento, mas não envia dados para um servidor e não abre WhatsApp automaticamente. Para ativar contato direto, configure o número comercial autorizado e implemente a integração correspondente.
- Telefone, WhatsApp, e-mail, endereço, CNPJ e redes sociais não foram inventados; devem ser adicionados após confirmação da empresa.
- A página utiliza fontes do Google Fonts quando há conexão com a internet; as fontes de sistema funcionam como alternativa.
- As imagens tratadas receberam ajustes leves de contraste, cor, brilho e nitidez. Os arquivos originais estão preservados em `assets/images/originals/`.
