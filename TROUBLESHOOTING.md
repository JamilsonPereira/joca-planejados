# Troubleshooting - Erro 404 no GitHub Pages

## Erro: "Failed to load resource: the server responded with a status of 404"

Este erro geralmente ocorre quando algum recurso (CSS, JS, imagem, favicon) não está sendo encontrado.

## Possíveis Causas e Soluções

### 1. **Favicon não encontrado**
- **Sintoma**: Erro 404 ao carregar `/favicon.ico`
- **Solução**: 
  - O favicon está configurado no `index.html` e será copiado automaticamente pelo Vite
  - Verifique se o arquivo existe em `public/favicon.ico`

### 2. **Base Path não configurado corretamente**
- **Sintoma**: Arquivos JS/CSS retornando 404
- **Solução**: 
  - ✅ Base path configurado: `/joca-planejados/`
  - Verifique se o `vite.config.ts` está usando `command === 'build'` para detectar produção

### 3. **Cache do navegador**
- **Sintoma**: Site funciona localmente mas não no GitHub Pages
- **Solução**:
  - Limpe o cache do navegador: `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
  - Ou abra em uma aba anônima

### 4. **Arquivos não foram deployados corretamente**
- **Sintoma**: Alguns recursos funcionam, outros não
- **Solução**:
  1. Verifique o build local: `npm run build`
  2. Verifique se todos os arquivos estão na pasta `dist/`
  3. Verifique as Actions do GitHub para ver se o deploy foi bem-sucedido

### 5. **Verificar qual recurso está com 404**
1. Abra o Console do Navegador (F12)
2. Vá para a aba "Network" (Rede)
3. Recarregue a página
4. Procure por arquivos com status 404 (vermelho)
5. Anote o nome do arquivo e o caminho completo

## Como Verificar o Build Local

```bash
# Fazer build
npm run build

# Verificar se os arquivos foram gerados
ls dist/
ls dist/assets/

# Testar localmente
npm run preview
```

Ao testar com `npm run preview`, acesse: `http://localhost:4173/joca-planejados/`

## Verificar no GitHub Pages

1. **Verifique o deploy**:
   - Acesse: https://github.com/JamilsonPereira/joca-planejados/actions
   - Veja se o último workflow foi bem-sucedido (verde)

2. **Verifique os arquivos deployados**:
   - Os arquivos devem estar na branch `gh-pages` ou no ambiente do GitHub Pages
   - Verifique: Settings > Pages > Deployment branch

3. **Teste a URL completa**:
   - https://JamilsonPereira.github.io/joca-planejados/
   - Não use `http://` (deve ser `https://`)

## Solução Rápida

Se o erro persistir:

1. **Fazer um novo build limpo**:
   ```bash
   # Limpar dist anterior
   rm -rf dist
   
   # Novo build
   npm run build
   
   # Fazer commit e push
   git add .
   git commit -m "Fix: Rebuild para corrigir caminhos"
   git push origin main
   ```

2. **Aguardar o deploy**:
   - Aguarde 2-5 minutos após o push
   - O GitHub Actions fará o deploy automaticamente

3. **Verificar novamente**:
   - Limpe o cache do navegador
   - Acesse: https://JamilsonPereira.github.io/joca-planejados/

## Debug no Console

Abra o Console do Navegador (F12) e execute:

```javascript
// Verificar base path atual
console.log('Base path:', window.location.pathname);

// Verificar se os assets estão sendo carregados
const scripts = document.querySelectorAll('script[src]');
console.log('Scripts:', Array.from(scripts).map(s => s.src));

const links = document.querySelectorAll('link[href]');
console.log('Links:', Array.from(links).map(l => l.href));
```

## Contato

Se o problema persistir, verifique:
- Console do navegador para erros específicos
- Network tab para ver quais recursos estão falhando
- Actions do GitHub para erros no deploy


