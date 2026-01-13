import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Base path para GitHub Pages (nome do repositório)
  // Em produção (build), usa o nome do repositório como base path
  const base = command === 'build' ? '/joca-planejados/' : '/';
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: true,
      },
      watch: {
        usePolling: true,
      },
    },
    build: {
      // Otimizações de build para melhor performance
      minify: 'esbuild', // Mais rápido que terser
      rollupOptions: {
        output: {
          // Chunking automático do Vite - mais confiável que manual
          // O Vite automaticamente separa vendor chunks de forma segura
          // Removendo chunking manual para evitar problemas de ordem de carregamento
        },
      },
      // Otimização de assets
      assetsInlineLimit: 4096, // Inline assets pequenos (< 4KB)
      chunkSizeWarningLimit: 1000,
      // Remove console.log em produção (temporariamente desabilitado para debug)
      esbuild: {
        drop: [], // Desabilitado temporariamente para debug
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      // Garantir que React seja resolvido corretamente
      dedupe: ['react', 'react-dom'],
    },
  };
});
