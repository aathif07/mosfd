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
          <Route path="/workflows" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Workflows</h2><p className="text-muted-foreground">Workflow management system coming soon...</p></div></div></Layout>} />
          <Route path="/templates" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Templates</h2><p className="text-muted-foreground">Template library coming soon...</p></div></div></Layout>} />
          <Route path="/tasks" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Tasks</h2><p className="text-muted-foreground">Task management coming soon...</p></div></div></Layout>} />
          <Route path="/scheduled" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Scheduled Tasks</h2><p className="text-muted-foreground">Scheduled task management coming soon...</p></div></div></Layout>} />
          <Route path="/profiles" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Browser Profiles</h2><p className="text-muted-foreground">Browser profile management coming soon...</p></div></div></Layout>} />
          <Route path="/history" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">History</h2><p className="text-muted-foreground">Activity history coming soon...</p></div></div></Layout>} />
          <Route path="/wallet" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Wallet</h2><p className="text-muted-foreground">Credit and billing management coming soon...</p></div></div></Layout>} />
          <Route path="/settings" element={<Layout><div className="p-6"><div className="bg-card rounded-lg p-8 text-center"><h2 className="text-2xl font-bold text-foreground mb-4">Settings</h2><p className="text-muted-foreground">System settings coming soon...</p></div></div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
