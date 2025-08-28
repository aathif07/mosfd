import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  Filter,
  RefreshCw,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  ExternalLink
} from "lucide-react";

export default function Tasks() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-muted-foreground">
            Manage and monitor your automation tasks
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Task
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search tasks by ID or description..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Status
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Tasks", value: "206", icon: Play, color: "text-blue-600" },
          { label: "Running", value: "4", icon: Clock, color: "text-orange-600" },
          { label: "Completed", value: "198", icon: CheckCircle, color: "text-green-600" },
          { label: "Failed", value: "4", icon: XCircle, color: "text-red-600" }
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Recent Tasks</CardTitle>
          <CardDescription>Monitor your automation task execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "637d54d3-6fed-43d5-89b5-d476c49f22ec",
                name: "Competitor Analysis Workflow",
                status: "Completed",
                description: "Analyzing competitor marketing strategies and pricing",
                created: "Aug 22, 2025 - 14:30",
                duration: "4m 32s",
                success: true
              },
              {
                id: "b8ab99b9-fb25-408b-9604-f89cd5851f85",
                name: "Price Monitoring Task",
                status: "Running",
                description: "Monitoring product prices across e-commerce platforms",
                created: "Aug 28, 2025 - 09:15",
                duration: "2m 15s",
                success: null
              },
              {
                id: "f2c1a8d4-9e7b-4a3f-8c5d-1b9e6f4a2c8d",
                name: "Email Campaign Automation",
                status: "Completed",
                description: "Automated email sequence for lead nurturing",
                created: "Aug 27, 2025 - 16:45",
                duration: "6m 20s",
                success: true
              },
              {
                id: "a9b8c7d6-e5f4-3g2h-1i9j-8k7l6m5n4o3p",
                name: "Social Media Posting",
                status: "Failed",
                description: "Automated posting to multiple social platforms",
                created: "Aug 26, 2025 - 12:00",
                duration: "1m 45s",
                success: false
              }
            ].map((task) => (
              <div key={task.id} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-foreground">{task.name}</h4>
                      <Badge variant={
                        task.status === "Completed" ? "default" : 
                        task.status === "Running" ? "secondary" : 
                        "destructive"
                      }>
                        {task.status === "Running" && <Clock className="h-3 w-3 mr-1" />}
                        {task.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {task.status === "Failed" && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {task.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>ID: {task.id.substring(0, 8)}...</span>
                      <span>{task.created}</span>
                      <span>Duration: {task.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {task.status === "Running" && (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}