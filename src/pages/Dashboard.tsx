import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { 
  Plus, 
  Play, 
  Eye, 
  Folder, 
  Star, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Activity,
  Zap,
  BarChart3,
  Search,
  Megaphone,
  Target,
  PenTool,
  Share2,
  Mail,
  Users,
  User,
  Package,
  Calendar,
  Newspaper,
  PieChart,
  Heart
} from "lucide-react";

export default function Dashboard() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const marketingAgents = [
    {
      id: "market-research",
      title: "Market Research & Strategy",
      description: "AI-powered market analysis, competitor research, and strategic planning",
      icon: Search,
      color: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-600",
      tasks: 24,
      status: "Active"
    },
    {
      id: "brand-communication",
      title: "Brand & Communication",
      description: "Brand messaging, voice consistency, and communication strategy",
      icon: Megaphone,
      color: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
      iconColor: "text-purple-600",
      tasks: 18,
      status: "Active"
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "Paid media campaigns, PPC optimization, and performance tracking",
      icon: Target,
      color: "bg-gradient-to-br from-green-500/10 to-green-500/5",
      iconColor: "text-green-600",
      tasks: 32,
      status: "Active"
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      description: "Content creation, editorial calendars, and content optimization",
      icon: PenTool,
      color: "bg-gradient-to-br from-orange-500/10 to-orange-500/5",
      iconColor: "text-orange-600",
      tasks: 28,
      status: "Active"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Social media automation, scheduling, and engagement management",
      icon: Share2,
      color: "bg-gradient-to-br from-pink-500/10 to-pink-500/5",
      iconColor: "text-pink-600",
      tasks: 45,
      status: "Active"
    },
    {
      id: "email-crm",
      title: "Email & CRM Marketing",
      description: "Email campaigns, automation sequences, and CRM integration",
      icon: Mail,
      color: "bg-gradient-to-br from-indigo-500/10 to-indigo-500/5",
      iconColor: "text-indigo-600",
      tasks: 36,
      status: "Active"
    },
    {
      id: "affiliate-partnership",
      title: "Affiliate & Partnership",
      description: "Partner program management and affiliate marketing automation",
      icon: Users,
      color: "bg-gradient-to-br from-teal-500/10 to-teal-500/5",
      iconColor: "text-teal-600",
      tasks: 15,
      status: "Active"
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description: "Influencer outreach, campaign management, and ROI tracking",
      icon: User,
      color: "bg-gradient-to-br from-rose-500/10 to-rose-500/5",
      iconColor: "text-rose-600",
      tasks: 22,
      status: "Active"
    },
    {
      id: "product-marketing",
      title: "Product Marketing",
      description: "Product launches, positioning, and go-to-market strategies",
      icon: Package,
      color: "bg-gradient-to-br from-cyan-500/10 to-cyan-500/5",
      iconColor: "text-cyan-600",
      tasks: 19,
      status: "Active"
    },
    {
      id: "event-offline",
      title: "Event & Offline Marketing",
      description: "Event management, offline campaigns, and experiential marketing",
      icon: Calendar,
      color: "bg-gradient-to-br from-amber-500/10 to-amber-500/5",
      iconColor: "text-amber-600",
      tasks: 12,
      status: "Active"
    },
    {
      id: "public-relations",
      title: "Public Relations (PR)",
      description: "Media outreach, press releases, and reputation management",
      icon: Newspaper,
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5",
      iconColor: "text-emerald-600",
      tasks: 16,
      status: "Active"
    },
    {
      id: "analytics-data",
      title: "Analytics & Data Science",
      description: "Data analysis, reporting, and predictive marketing insights",
      icon: PieChart,
      color: "bg-gradient-to-br from-violet-500/10 to-violet-500/5",
      iconColor: "text-violet-600",
      tasks: 41,
      status: "Active"
    },
    {
      id: "customer-retention",
      title: "Customer Experience & Retention",
      description: "Customer journey optimization and retention strategies",
      icon: Heart,
      color: "bg-gradient-to-br from-red-500/10 to-red-500/5",
      iconColor: "text-red-600",
      tasks: 29,
      status: "Active"
    }
  ];

  if (selectedAgent) {
    const agent = marketingAgents.find(a => a.id === selectedAgent);
    return (
      <div className="page-container p-6 animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Agent Dashboard Header */}
          <div className="page-header">
            <div className="flex items-center space-x-4 mb-4">
              <Button 
                variant="outline" 
                onClick={() => setSelectedAgent(null)}
                className="text-muted-foreground"
              >
                ← Back to Dashboard
              </Button>
            </div>
            <div className="flex items-center space-x-6">
              <div className={`p-4 rounded-xl ${agent?.color}`}>
                {agent?.icon && <agent.icon className={`h-8 w-8 ${agent.iconColor}`} />}
              </div>
              <div>
                <h1 className="page-title gradient-text">{agent?.title}</h1>
                <p className="page-description mt-2">{agent?.description}</p>
              </div>
            </div>
          </div>

          {/* Agent Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Active Tasks</p>
                    <p className="text-2xl font-bold text-foreground">{agent?.tasks}</p>
                  </div>
                  <Activity className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold text-foreground">97.8%</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold text-foreground">156</p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Credits Used</p>
                    <p className="text-2xl font-bold text-foreground">12.4K</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agent-Specific Tools and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Available Tools</CardTitle>
                <CardDescription>Specialized tools for {agent?.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Campaign Builder",
                  "Performance Analyzer", 
                  "Content Generator",
                  "Audience Insights",
                  "A/B Test Manager"
                ].map((tool) => (
                  <div key={tool} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-accent/30 transition-all duration-300 cursor-pointer">
                    <span className="font-medium text-foreground">{tool}</span>
                    <Button size="sm" variant="ghost">Launch</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Recent Activity</CardTitle>
                <CardDescription>Latest actions and results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: "Campaign Launched", time: "2 hours ago", status: "success" },
                  { action: "Report Generated", time: "4 hours ago", status: "success" },
                  { action: "Audience Updated", time: "6 hours ago", status: "success" },
                  { action: "Task Completed", time: "8 hours ago", status: "success" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-foreground">{activity.action}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title gradient-text">Marketing Operating System</h1>
          <p className="page-description">
            13 AI-powered marketing agents ready to automate your campaigns, analyze data, 
            and optimize performance across all channels.
          </p>
        </div>

        {/* Marketing Agents Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Marketing Agents</h2>
            <Badge variant="secondary" className="text-sm">
              {marketingAgents.length} Active Agents
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marketingAgents.map((agent) => (
              <Card 
                key={agent.id} 
                className="card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAgent(agent.id)}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl ${agent.color} group-hover:scale-110 transition-transform duration-300`}>
                        <agent.icon className={`h-6 w-6 ${agent.iconColor}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {agent.tasks} tasks
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-sm leading-tight">{agent.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{agent.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                        {agent.status}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <Plus className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Create Workflow</h3>
                    <p className="text-sm text-muted-foreground">
                      Build custom automation workflows with drag-and-drop interface. 
                      Connect multiple agents, set triggers, and automate complex marketing sequences.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>• Visual workflow builder</span>
                      <span>• 50+ integrations</span>
                      <span>• Real-time testing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Quick Task</h3>
                    <p className="text-sm text-muted-foreground">
                      Execute one-time marketing tasks instantly. Run data scraping, 
                      send bulk emails, generate reports, or perform any ad-hoc automation.
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>• Instant execution</span>
                      <span>• No setup required</span>
                      <span>• Real-time results</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Total Agents", value: "13", icon: Activity, change: "All Active" },
              { label: "Success Rate", value: "98.5%", icon: CheckCircle, change: "+2.1%" },
              { label: "Active Tasks", value: "347", icon: Zap, change: "+15%" },
              { label: "Credits Used", value: "156K", icon: BarChart3, change: "78%" }
            ].map((stat) => (
              <Card key={stat.label} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Agent Activity */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-bold text-foreground">
              <Clock className="mr-2 h-6 w-6 text-primary" />
              Recent Agent Activity
            </CardTitle>
            <CardDescription>Latest actions across all marketing agents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                agent: "Performance Marketing",
                action: "Campaign optimized",
                description: "Google Ads performance improved by 23%",
                time: "15 min ago",
                icon: Target,
                status: "success"
              },
              {
                agent: "Social Media Marketing",
                action: "Posts scheduled",
                description: "42 posts scheduled across 6 platforms",
                time: "1 hour ago",
                icon: Share2,
                status: "success"
              },
              {
                agent: "Email & CRM Marketing",
                action: "Sequence launched",
                description: "Welcome series sent to 156 new subscribers",
                time: "2 hours ago",
                icon: Mail,
                status: "success"
              },
              {
                agent: "Analytics & Data Science",
                action: "Report generated",
                description: "Weekly performance report completed",
                time: "3 hours ago",
                icon: PieChart,
                status: "success"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border/30 hover:bg-accent/30 transition-colors">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5">
                  <activity.icon className="h-4 w-4 text-green-600" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground text-sm">{activity.agent}</h4>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-foreground font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}