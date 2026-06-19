# Metal Vida Engenharia - Cloudflare Pages

Site estatico da Metal Vida Engenharia, pronto para publicar pelo GitHub e rodar na Cloudflare Pages.

## Estrutura

- `index.html`: pagina principal do site.
- `assets/styles.css`: visual principal.
- `assets/script.js`: menu, links de WhatsApp e formulario.
- `assets/lobao-chatbot.css`: visual do chatbot Lobao.
- `assets/lobao-chatbot.js`: conversa, coleta de orcamento e integracao com WhatsApp.
- `assets/logo-metalvida.png`: logo da empresa.
- `assets/favicon.svg`: icone do site.
- `_headers`: cabecalhos basicos aplicados pela Cloudflare Pages.

## Como criar o repositorio no GitHub

1. Acesse `https://repo.new`.
2. Crie um repositorio chamado `metalvida-cloudflare-pages`.
3. Envie todos os arquivos desta pasta para o repositorio.
4. Use a branch `main`.

Se tiver Git instalado na maquina, os comandos sao:

```bash
git init
git add .
git commit -m "Initial Cloudflare Pages site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/metalvida-cloudflare-pages.git
git push -u origin main
```

## Como publicar na Cloudflare Pages

1. Acesse o painel da Cloudflare.
2. Entre em `Workers & Pages`.
3. Clique em `Create application`.
4. Escolha `Pages`.
5. Selecione `Import an existing Git repository`.
6. Escolha o repositorio `metalvida-cloudflare-pages`.
7. Configure:
   - Production branch: `main`
   - Build command: `exit 0`
   - Build output directory: `/`
   - Root directory: deixe em branco
8. Clique em `Save and Deploy`.

## WhatsApp

O numero principal esta em dois arquivos:

- `assets/script.js`: contatos dos botoes atuais do site.
- `assets/lobao-chatbot.js`: constante `LOBAO_WHATSAPP_NUMBER`.

Use somente numeros no padrao internacional. Exemplo: `556499999999`.

## Avatar do Lobao

Para usar uma imagem oficial, coloque o arquivo em `assets/lobao.png` e altere em `assets/lobao-chatbot.js`:

```js
const LOBAO_AVATAR_IMAGE = "assets/lobao.png";
```

## Futuro uso com API da OpenAI

O ponto de integracao esta em `assets/lobao-chatbot.js`, na constante `LOBAO_AI_ENDPOINT`.

Use sempre um backend proprio para chamar a API. Nao coloque chaves da OpenAI diretamente no JavaScript publico do site.
