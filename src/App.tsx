
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Catalogue from "./pages/Catalogue";
import Realise from "./pages/Realise";
import NotFound from "./pages/NotFound";
import FloatingLanguageSelector from "./components/FloatingLanguageSelector";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/realise" element={<Realise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingLanguageSelector />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
