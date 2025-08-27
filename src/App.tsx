import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/workflows" element={<Layout><div>Workflows Page</div></Layout>} />
          <Route path="/templates" element={<Layout><div>Templates Page</div></Layout>} />
          <Route path="/tasks" element={<Layout><div>Tasks Page</div></Layout>} />
          <Route path="/scheduled" element={<Layout><div>Scheduled Tasks Page</div></Layout>} />
          <Route path="/profiles" element={<Layout><div>Browser Profiles Page</div></Layout>} />
          <Route path="/history" element={<Layout><div>History Page</div></Layout>} />
          <Route path="/wallet" element={<Layout><div>Wallet Page</div></Layout>} />
          <Route path="/settings" element={<Layout><div>Settings Page</div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
