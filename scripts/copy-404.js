import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

// Verifica se o index.html existe
if (!fs.existsSync(indexPath)) {
  console.error('❌ Erro: index.html não encontrado em', indexPath);
  process.exit(1);
}

// Lê o index.html
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Adiciona o script de redirecionamento antes do fechamento do </head>
const redirectScript = `
    <script>
      // GitHub Pages redireciona para 404.html quando a rota não existe
      // Este script redireciona para index.html para que o React Router possa lidar com a rota
      var pathSegmentsToKeep = 1;
      var l = window.location;
      var basePath = '/joca-planejados';
      l.replace(
        l.protocol +
          "//" +
          l.hostname +
          (l.port ? ":" + l.port : "") +
          basePath +
          "/?/" +
          l.pathname.slice(basePath.length + 1).replace(/&/g, "~and~") +
          (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
          l.hash
      );
    </script>
`;

// Insere o script antes do </head>
const modifiedContent = indexContent.replace('</head>', redirectScript + '</head>');

// Escreve o 404.html
fs.writeFileSync(notFoundPath, modifiedContent, 'utf-8');

console.log('✅ 404.html criado com sucesso!');

