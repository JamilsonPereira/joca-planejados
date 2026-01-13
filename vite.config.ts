import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Base path para GitHub Pages (nome do repositório)
  // Em produção, usa o nome do repositório como base path
  const base = mode === 'production' ? '/joca-planejados/' : '/';
  
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
          // Chunking para melhor cache
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react-vendor';
              }
              if (id.includes('@radix-ui')) {
                return 'ui-vendor';
              }
              return 'vendor';
            }
          },
        },
      },
      // Otimização de assets
      assetsInlineLimit: 4096, // Inline assets pequenos (< 4KB)
      chunkSizeWarningLimit: 1000,
      // Remove console.log em produção
      esbuild: {
        drop: mode === 'production' ? ['console', 'debugger'] : [],
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
