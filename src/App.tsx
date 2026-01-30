import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { DocsLayout } from "./components/docs/DocsLayout";
import Introduction from "@/pages/docs/Introduction";
import DevelopmentLifecycle from "@/pages/docs/DevelopmentLifecycle";
import DataSources from "@/pages/docs/DataSources";
import FFONTOBot from "@/pages/docs/FFOntoBot";
import UsingFFOnto from "@/pages/docs/UsingFFOnto";
import AdditionalInformation from "@/pages/docs/AdditionalInformation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/docs/introduction" replace />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="/docs/introduction" replace />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="development-lifecycle" element={<DevelopmentLifecycle />} />
            <Route path="data-sources" element={<DataSources />} />
            <Route path="ffonto-bot" element={<FFONTOBot />} />
            <Route path="using-ffonto" element={<UsingFFOnto />} />
            <Route path="additional-information" element={<AdditionalInformation />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
