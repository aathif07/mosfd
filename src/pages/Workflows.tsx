import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Workflow,
  Search,
  Filter,
  Plus,
  Play,
  Pause,
  Edit,
  Calendar,
  BarChart3,
  Settings
} from "lucide-react";

export default function Workflows() {
  return (
    <div className="page-container p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title gradient-text">Workflows</h1>
          <p className="page-description">
            Create and manage your marketing automation workflows. Design multi-step processes 
            that run automatically to streamline your marketing operations.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search workflows..."
                className="pl-10 bg-card border-border/50 focus:border-primary/50"
              />
            </div>
            <Button variant="outline" size="sm" className="text-foreground border-border/50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-primary border-primary/20">
              <Settings className="mr-2 h-4 w-4" />
              AI Generate
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" />
              Create Workflow
            </Button>
          </div>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              name: "Competitor Analysis Workflow",
              description: "Automatically gather competitor data, analyze pricing, and generate reports",
              status: "Active",
              tasks: 7,
              lastRun: "2 hours ago",
              nextRun: "Tomorrow 9:00 AM",
              success: 98,
              category: "Research",
              runs: 24
            },
            {
              name: "Social Media Campaign",
              description: "Schedule posts, engage with comments, and track performance metrics",
              status: "Paused",
              tasks: 12,
              lastRun: "1 day ago",
              nextRun: "On demand",
              success: 95,
              category: "Social Media",
              runs: 18
            },
            {
              name: "Email Lead Nurturing",
              description: "Send personalized email sequences based on user behavior and preferences",
              status: "Active",
              tasks: 8,
              lastRun: "30 minutes ago",
              nextRun: "In 2 hours",
              success: 100,
              category: "Email Marketing",
              runs: 45
            },
            {
              name: "Price Monitoring System",
              description: "Track competitor prices and automatically adjust pricing strategies",
              status: "Active",
              tasks: 6,
              lastRun: "1 hour ago",
              nextRun: "Every 6 hours",
              success: 97,
              category: "Analytics",
              runs: 120
            },
            {
              name: "Content Distribution",
              description: "Automatically publish blog posts across multiple platforms and social media",
              status: "Draft",
              tasks: 10,
              lastRun: "Never",
              nextRun: "Not scheduled",
              success: 0,
              category: "Content",
              runs: 0
            },
            {
              name: "Customer Feedback Collection",
              description: "Send surveys, collect responses, and analyze customer satisfaction data",
              status: "Active",
              tasks: 5,
              lastRun: "3 hours ago",
              nextRun: "Weekly",
              success: 92,
              category: "Customer Experience",
              runs: 8
            }
          ].map((workflow) => (
            <Card key={workflow.name} className="card-elevated group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <Workflow className="h-5 w-5 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {workflow.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {workflow.name}
                    </CardTitle>
                  </div>
                  <Badge 
                    variant={workflow.status === "Active" ? "default" : 
                           workflow.status === "Paused" ? "secondary" : "outline"}
                    className="ml-2"
                  >
                    {workflow.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{workflow.tasks}</div>
                    <div className="text-xs text-muted-foreground">Tasks</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{workflow.success}%</div>
                    <div className="text-xs text-muted-foreground">Success</div>
                  </div>
                </div>

                {/* Timing Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last run:</span>
                    <span className="font-medium text-foreground">{workflow.lastRun}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Next run:</span>
                    <span className="font-medium text-foreground">{workflow.nextRun}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total runs:</span>
                    <span className="font-medium text-foreground">{workflow.runs}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-foreground border-border/50 hover:border-primary/50"
                  >
                    <Edit className="mr-2 h-3 w-3" />
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 ${
                      workflow.status === "Active" 
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white" 
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                  >
                    {workflow.status === "Active" ? (
                      <>
                        <Pause className="mr-2 h-3 w-3" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-3 w-3" />
                        Run
                      </>
                    )}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-muted-foreground border-border/50 hover:border-primary/50"
                  >
                    <BarChart3 className="h-3 w-3" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-muted-foreground border-border/50 hover:border-primary/50"
                  >
                    <Calendar className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for No Workflows */}
        {false && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-accent/30 rounded-full flex items-center justify-center mb-4">
              <Workflow className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No workflows found</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Get started by creating your first automation workflow or using one of our templates.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Create Workflow
              </Button>
              <Button variant="outline" className="text-foreground border-border/50">
                Browse Templates
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}