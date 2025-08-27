import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  BarChart3
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="page-container p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title gradient-text">Marketing Automation Overview</h1>
          <p className="page-description">
            Build, run, and monitor your marketing automations in one place. Launch campaigns, 
            review performance, and manage tasks with real-time insights.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Create Workflow",
              description: "Design and execute",
              icon: Plus,
              color: "bg-gradient-to-br from-primary/10 to-primary/5",
              iconColor: "text-primary",
              href: "/workflows/new"
            },
            {
              title: "Quick Task",
              description: "Run ad-hoc automation",
              icon: Play,
              color: "bg-gradient-to-br from-green-500/10 to-green-500/5",
              iconColor: "text-green-600",
              href: "/tasks/new"
            },
            {
              title: "Templates",
              description: "Browse prebuilt flows",
              icon: Folder,
              color: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
              iconColor: "text-blue-600",
              href: "/templates"
            },
            {
              title: "Wallet",
              description: "Manage usage & credits",
              icon: Eye,
              color: "bg-gradient-to-br from-purple-500/10 to-purple-500/5",
              iconColor: "text-purple-600",
              href: "/wallet"
            }
          ].map((action) => (
            <Card key={action.title} className="card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className={`h-6 w-6 ${action.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Total Tasks", value: "206", icon: Activity, change: "+12%" },
            { label: "Success Rate", value: "98.5%", icon: CheckCircle, change: "+2.1%" },
            { label: "Active Workflows", value: "24", icon: Zap, change: "+8%" },
            { label: "Credits Used", value: "96K", icon: BarChart3, change: "48%" }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Popular Templates */}
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">Popular Templates</CardTitle>
                  <CardDescription>Start with proven automation workflows</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="text-primary border-primary/20">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "E-commerce Data Scraping",
                    description: "Searches products, extracts details, captures screenshots",
                    difficulty: "Advanced",
                    duration: "6m",
                    rating: 4.8,
                    tasks: 8,
                    category: "data-extraction",
                    color: "bg-blue-500"
                  },
                  {
                    name: "Price Monitoring",
                    description: "Checks prices, compares thresholds, notifies via webhook",
                    difficulty: "Advanced", 
                    duration: "3.5m",
                    rating: 4.8,
                    tasks: 6,
                    category: "monitoring",
                    color: "bg-green-500"
                  },
                  {
                    name: "Email Automation",
                    description: "Handles login, compose, send, and confirmation",
                    difficulty: "Intermediate",
                    duration: "7m", 
                    rating: 4.8,
                    tasks: 12,
                    category: "email",
                    color: "bg-purple-500"
                  }
                ].map((template) => (
                  <div key={template.name} className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${template.color}`}></div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {template.name}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {template.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {template.description}
                        </p>
                        <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{template.rating}</span>
                          </div>
                          <span>{template.duration}</span>
                          <span>{template.tasks} tasks</span>
                          <Badge variant="secondary" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Workflows */}
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">My Workflows</CardTitle>
                  <CardDescription>Your custom automation workflows</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="text-primary border-primary/20">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Competitor Analysis Workflow",
                      status: "Active",
                      tasks: 7,
                      lastRun: "2 hours ago",
                      success: 98
                    },
                    {
                      name: "Social Media Campaign",
                      status: "Paused", 
                      tasks: 12,
                      lastRun: "1 day ago",
                      success: 95
                    },
                    {
                      name: "Email Lead Nurturing",
                      status: "Active",
                      tasks: 8,
                      lastRun: "30 minutes ago",
                      success: 100
                    }
                  ].map((workflow) => (
                    <div key={workflow.name} className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold text-foreground">{workflow.name}</h4>
                            <Badge variant={workflow.status === "Active" ? "default" : "secondary"}>
                              {workflow.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span>{workflow.tasks} tasks</span>
                            <span>Last run: {workflow.lastRun}</span>
                            <span className="text-green-600">{workflow.success}% success</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            {/* Usage Overview */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">Usage Overview</CardTitle>
                <CardDescription>Current month statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">206</div>
                    <div className="text-xs text-muted-foreground">Total Tasks</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-xs text-muted-foreground">Active Tasks</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Credits Used</span>
                    <span className="font-medium text-foreground">96,000 / 200,000</span>
                  </div>
                  <Progress value={48} className="h-3" />
                  <div className="text-xs text-muted-foreground text-center">
                    52% remaining this month
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">98.5%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-bold text-foreground">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  AI Suggestions
                </CardTitle>
                <CardDescription>Personalized optimization recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Optimize Price Monitoring",
                    description: "Reduce check frequency to save 20% credits",
                    impact: "High",
                    savings: "Save 30 min/day"
                  },
                  {
                    title: "Social Media Scheduler", 
                    description: "Schedule posts during peak engagement hours",
                    impact: "Medium",
                    savings: "Boost engagement 15%"
                  },
                  {
                    title: "Email Automation", 
                    description: "Add follow-up sequences to nurture leads",
                    impact: "High",
                    savings: "Increase conversions 25%"
                  }
                ].map((suggestion) => (
                  <div key={suggestion.title} className="group p-4 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-accent/30 transition-all duration-300 cursor-pointer">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-foreground text-sm">{suggestion.title}</h4>
                        <Badge variant={suggestion.impact === "High" ? "default" : "secondary"} className="text-xs">
                          {suggestion.impact}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{suggestion.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-green-600">{suggestion.savings}</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-bold text-foreground">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    type: "success",
                    title: "Task Completed",
                    description: "Competitor Analysis finished successfully",
                    time: "2 hours ago",
                    icon: CheckCircle
                  },
                  {
                    type: "warning", 
                    title: "Workflow Paused",
                    description: "Social Media Campaign paused by user",
                    time: "4 hours ago",
                    icon: AlertTriangle
                  },
                  {
                    type: "success",
                    title: "Template Used",
                    description: "Price Monitoring template deployed",
                    time: "6 hours ago",
                    icon: CheckCircle
                  }
                ].map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-border/30 hover:bg-accent/30 transition-colors">
                    <alert.icon className={`h-4 w-4 mt-0.5 ${
                      alert.type === "success" ? "text-green-500" : "text-yellow-500"
                    }`} />
                    <div className="space-y-1 flex-1">
                      <h4 className="font-medium text-sm text-foreground">{alert.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{alert.description}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}