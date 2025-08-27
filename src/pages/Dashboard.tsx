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
  ArrowRight
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Marketing Automation Overview</h1>
        <p className="text-muted-foreground">
          Build, run, and monitor your marketing automations in one place. Launch campaigns, 
          review performance, and manage tasks with real-time insights.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Create Workflow</h3>
                <p className="text-sm text-muted-foreground">Design and execute</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Play className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">Quick Task</h3>
                <p className="text-sm text-muted-foreground">Run ad-hoc automation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Folder className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Templates</h3>
                <p className="text-sm text-muted-foreground">Browse prebuilt flows</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Wallet</h3>
                <p className="text-sm text-muted-foreground">Manage usage & credits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Popular Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Popular Templates
                <Button variant="outline" size="sm">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "E-commerce Data Scraping",
                  description: "Searches products, extracts details, captures screenshots",
                  difficulty: "Advanced",
                  duration: "360s",
                  rating: 4.8,
                  tasks: 8,
                  category: "data-extraction"
                },
                {
                  name: "Price Monitoring",
                  description: "Checks prices, compares thresholds, notifies via webhook",
                  difficulty: "Advanced", 
                  duration: "210s",
                  rating: 4.8,
                  tasks: 6,
                  category: "monitoring"
                },
                {
                  name: "Email Automation",
                  description: "Handles login, compose, send, and confirmation",
                  difficulty: "Intermediate",
                  duration: "420s", 
                  rating: 4.8,
                  tasks: 12,
                  category: "email"
                }
              ].map((template) => (
                <div key={template.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{template.name}</h4>
                      <Badge variant="secondary" className="text-xs">{template.difficulty}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {template.rating}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{template.duration}</span>
                      <span>{template.tasks} tasks</span>
                      <Badge variant="outline" className="text-xs">{template.category}</Badge>
                    </div>
                  </div>
                  <Button size="sm">Use Template</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* My Workflows */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                My Workflows
                <Button variant="outline" size="sm">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "Competitor Analysis Workflow",
                    status: "Active",
                    tasks: 7,
                    lastRun: "Aug 16, 2025"
                  },
                  {
                    name: "Social Media Campaign",
                    status: "Paused", 
                    tasks: 12,
                    lastRun: "Aug 14, 2025"
                  }
                ].map((workflow) => (
                  <div key={workflow.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{workflow.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <Badge variant={workflow.status === "Active" ? "default" : "secondary"}>
                          {workflow.status}
                        </Badge>
                        <span>{workflow.tasks} tasks</span>
                        <span>Last run: {workflow.lastRun}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Automation Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Automation Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Competitor Analysis", successRate: 98, avgDuration: "2m 15s", runs: 24, lastRun: "2 hours ago" },
                  { name: "Email Campaign", successRate: 95, avgDuration: "1m 45s", runs: 18, lastRun: "4 hours ago" },
                  { name: "Price Monitoring", successRate: 100, avgDuration: "3m 30s", runs: 12, lastRun: "6 hours ago" }
                ].map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.name}</span>
                      <span className="text-sm text-muted-foreground">{metric.successRate}% success</span>
                    </div>
                    <Progress value={metric.successRate} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Avg: {metric.avgDuration}</span>
                      <span>{metric.runs} runs</span>
                      <span>Last: {metric.lastRun}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Usage Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">206</div>
                  <div className="text-xs text-muted-foreground">Total Tasks</div>
                </div>
                <div className="text-center p-3 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">0</div>
                  <div className="text-xs text-muted-foreground">Active Tasks</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Credits Used</span>
                  <span>96,000 / 200,000</span>
                </div>
                <Progress value={48} className="h-2" />
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600">100%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </CardContent>
          </Card>

          {/* AI Workflow Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  title: "Price Monitoring Automation",
                  description: "Save 30 min/day with automated price checks",
                  impact: "High"
                },
                {
                  title: "Social Media Scheduler", 
                  description: "Boost engagement with optimal timing",
                  impact: "Medium"
                }
              ].map((suggestion) => (
                <div key={suggestion.title} className="p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                    </div>
                    <Badge variant={suggestion.impact === "High" ? "default" : "secondary"} className="text-xs">
                      {suggestion.impact}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  type: "success",
                  title: "Task Executed",
                  description: "Competitor Analysis completed",
                  time: "2 hours ago"
                },
                {
                  type: "warning", 
                  title: "Workflow Paused",
                  description: "Social Media Campaign paused",
                  time: "4 hours ago"
                }
              ].map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                  {alert.type === "success" ? (
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                  )}
                  <div className="space-y-1 flex-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <p className="text-xs text-muted-foreground">{alert.description}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  id: "637d54d3-6fed-43d5-89b5-d476c49f22ec",
                  name: "Competitor Analysis",
                  status: "Finished",
                  date: "Aug 22, 2025"
                },
                {
                  id: "b8ab99b9-fb25-408b-9604-f89cd5851f85", 
                  name: "Price Check",
                  status: "Finished",
                  date: "Aug 17, 2025"
                }
              ].map((task) => (
                <div key={task.id} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{task.name}</h4>
                      <p className="text-xs text-muted-foreground font-mono">{task.id}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">{task.status}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{task.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}