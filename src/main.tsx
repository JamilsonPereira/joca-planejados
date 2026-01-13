import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";

// Debug: Log inicial
console.log("🚀 Aplicação iniciando...");
console.log("📍 URL atual:", window.location.href);
console.log("📍 Pathname:", window.location.pathname);

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element não encontrado!");
  throw new Error("Root element not found");
}

console.log("✅ Root element encontrado, renderizando...");

try {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
  console.log("✅ Aplicação renderizada com sucesso!");
} catch (error) {
  console.error("❌ Erro ao renderizar:", error);
  throw error;
}
