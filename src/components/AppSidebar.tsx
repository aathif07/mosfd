import { 
  LayoutDashboard, 
  Workflow, 
  FileText, 
  CheckSquare, 
  Calendar, 
  Globe, 
  History, 
  Wallet, 
  Settings,
  Plus,
  Play
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const coreItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
];

const buildItems = [
  { title: "Workflows", url: "/workflows", icon: Workflow },
  { title: "Templates", url: "/templates", icon: FileText },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Scheduled Tasks", url: "/scheduled", icon: Calendar },
  { title: "Browser Profiles", url: "/profiles", icon: Globe },
];

const monitorItems = [
  { title: "History", url: "/history", icon: History },
];

const adminItems = [
  { title: "Wallet", url: "/wallet", icon: Wallet },
  { title: "Settings", url: "/settings", icon: Settings },
];

const quickActions = [
  { title: "Create Workflow", url: "/workflows/new", icon: Plus },
  { title: "Quick Task", url: "/tasks/new", icon: Play },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent";

  const SidebarSection = ({ 
    title, 
    items, 
    isQuickActions = false 
  }: { 
    title: string; 
    items: typeof coreItems; 
    isQuickActions?: boolean;
  }) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs uppercase tracking-wider font-medium text-muted-foreground">
        {title}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className={isQuickActions ? "text-sm" : ""}>
                <NavLink 
                  to={item.url} 
                  end 
                  className={({ isActive }) => 
                    `${getNavCls({ isActive })} ${isQuickActions ? 'py-2' : ''}`
                  }
                >
                  <item.icon className={`${collapsed ? 'h-4 w-4' : 'mr-3 h-4 w-4'}`} />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="gap-4">
        <SidebarSection title="Core" items={coreItems} />
        
        {!collapsed && (
          <SidebarSection title="Quick Actions" items={quickActions} isQuickActions />
        )}
        
        <SidebarSection title="Build" items={buildItems} />
        <SidebarSection title="Monitor" items={monitorItems} />
        <SidebarSection title="Admin" items={adminItems} />
      </SidebarContent>
    </Sidebar>
  );
}