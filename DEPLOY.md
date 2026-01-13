# Instruções de Deploy para GitHub Pages

## Configuração do GitHub Pages

### Opção 1: Deploy Automático com GitHub Actions (Recomendado)

1. **Habilitar GitHub Pages:**
   - Vá para: `Settings` > `Pages` no seu repositório
   - Em `Source`, selecione `GitHub Actions`
   - Salve as configurações

2. **Fazer o deploy:**
   - Faça commit e push das alterações para a branch `main`
   - O GitHub Actions irá automaticamente:
     - Fazer o build do projeto
     - Fazer o deploy para o GitHub Pages
   - Aguarde alguns minutos para o deploy completar

3. **Acessar o site:**
   - O site estará disponível em: `https://JamilsonPereira.github.io/joca-planejados`

### Opção 2: Deploy Manual

1. **Instalar dependência:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Fazer build e deploy:**
   ```bash
   npm run deploy
   ```

3. **Configurar GitHub Pages:**
   - Vá para: `Settings` > `Pages` no seu repositório
   - Em `Source`, selecione a branch `gh-pages` e a pasta `/ (root)`
   - Salve as configurações

## Verificações

Se o site ainda aparecer em branco:

1. **Verifique o console do navegador (F12):**
   - Procure por erros de JavaScript
   - Verifique se os arquivos estão sendo carregados corretamente

2. **Verifique a URL:**
   - Certifique-se de acessar: `https://JamilsonPereira.github.io/joca-planejados`
   - Não use `http://` (deve ser `https://`)

3. **Aguarde o cache:**
   - Pode levar alguns minutos para o GitHub Pages atualizar
   - Tente fazer um hard refresh: `Ctrl + Shift + R` (ou `Cmd + Shift + R` no Mac)

4. **Verifique o build localmente:**
   ```bash
   npm run build
   npm run preview
   ```
   - Isso permite testar o build antes de fazer deploy

## Arquivos Configurados

- ✅ `vite.config.ts` - Base path configurado para `/joca-planejados/`
- ✅ `src/App.tsx` - Basename do React Router configurado
- ✅ `.github/workflows/deploy.yml` - Workflow de deploy automático
- ✅ `scripts/copy-404.js` - Script para criar 404.html após o build

