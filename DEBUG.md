# Guia de Debug - Site não aparece

## Checklist de Verificação

### 1. Verificar Console do Navegador (F12)

Abra o Console e procure por:
- ✅ Logs de inicialização: "🚀 Aplicação iniciando..."
- ✅ Erros em vermelho
- ✅ Avisos em amarelo

**Se aparecer "🚀 Aplicação iniciando...":**
- A aplicação está tentando iniciar
- Verifique se há erros após esse log

**Se NÃO aparecer nenhum log:**
- Os arquivos JavaScript não estão carregando
- Verifique a aba Network (Rede) para ver se os arquivos retornam 404

### 2. Verificar Aba Network (Rede)

1. Abra F12 > Network
2. Recarregue a página (F5)
3. Verifique:
   - ✅ Todos os arquivos têm status 200 (verde)
   - ❌ Algum arquivo tem status 404 (vermelho)?

**Arquivos que DEVEM carregar:**
- `index.html` - 200 OK
- `/joca-planejados/assets/index-*.js` - 200 OK
- `/joca-planejados/assets/react-vendor-*.js` - 200 OK
- `/joca-planejados/assets/vendor-*.js` - 200 OK
- `/joca-planejados/assets/index-*.css` - 200 OK

### 3. Verificar URL Correta

✅ URL correta: `https://JamilsonPereira.github.io/joca-planejados/`
❌ URL errada: `https://JamilsonPereira.github.io/` (sem o /joca-planejados/)

### 4. Verificar Deploy no GitHub

1. Acesse: https://github.com/JamilsonPereira/joca-planejados/actions
2. Verifique se o último workflow foi bem-sucedido (✓ verde)
3. Se falhou, clique para ver os detalhes do erro

### 5. Testar Localmente

```bash
npm run build
npm run preview
```

Acesse: `http://localhost:4173/joca-planejados/`

**Se funcionar localmente mas não no GitHub Pages:**
- Problema de configuração do GitHub Pages
- Verifique se o base path está correto

**Se não funcionar nem localmente:**
- Problema no código/build
- Verifique erros no console

### 6. Limpar Cache

1. **Navegador:**
   - `Ctrl + Shift + R` (Windows/Linux)
   - `Cmd + Shift + R` (Mac)

2. **Ou abra em aba anônima:**
   - `Ctrl + Shift + N` (Chrome)
   - `Ctrl + Shift + P` (Firefox)

### 7. Verificar Configuração do GitHub Pages

1. Acesse: https://github.com/JamilsonPereira/joca-planejados/settings/pages
2. Verifique:
   - Source: "GitHub Actions"
   - Build and deployment: Último workflow bem-sucedido

## Informações para Enviar

Se o problema persistir, forneça:

1. **Screenshot do Console** (F12 > Console)
2. **Screenshot da aba Network** (F12 > Network) mostrando os erros 404
3. **URL exata** que está acessando
4. **Status do último workflow** nas Actions do GitHub

## Comandos Úteis

```bash
# Limpar build anterior
rm -rf dist

# Novo build
npm run build

# Testar localmente
npm run preview

# Verificar arquivos gerados
ls -la dist/
ls -la dist/assets/
```

