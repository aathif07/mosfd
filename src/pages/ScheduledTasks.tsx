import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  RefreshCw,
  Calendar,
  Clock,
  Play,
  Pause,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";

export default function ScheduledTasks() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Scheduled Tasks</h1>
          <p className="text-muted-foreground">
            Automate recurring marketing tasks and workflows
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Task
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search scheduled tasks..." 
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Schedules", value: "12", icon: Play, color: "text-green-600" },
          { label: "Paused", value: "3", icon: Pause, color: "text-orange-600" },
          { label: "Next Run", value: "2h 45m", icon: Clock, color: "text-blue-600" },
          { label: "This Week", value: "48", icon: Calendar, color: "text-purple-600" }
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

      {/* Scheduled Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Scheduled Tasks</CardTitle>
          <CardDescription>Manage your recurring automation schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Daily Price Monitoring",
                description: "Monitor competitor pricing every morning at 9 AM",
                schedule: "Daily at 09:00",
                nextRun: "Tomorrow at 09:00",
                status: "Active",
                workflow: "Price Monitoring Template",
                lastRun: "Today at 09:00 - Success"
              },
              {
                name: "Weekly Social Media Report",
                description: "Generate social media performance report every Monday",
                schedule: "Weekly on Monday at 10:00",
                nextRun: "Monday at 10:00",
                status: "Active",
                workflow: "Social Media Analytics",
                lastRun: "Last Monday - Success"
              },
              {
                name: "Email Campaign Sequence",
                description: "Send nurturing emails to new leads every 3 days",
                schedule: "Every 3 days at 14:00",
                nextRun: "Aug 30 at 14:00",
                status: "Paused",
                workflow: "Email Automation Template",
                lastRun: "Aug 25 - Success"
              },
              {
                name: "Content Distribution",
                description: "Auto-post blog content to social platforms",
                schedule: "Tuesday & Thursday at 16:00",
                nextRun: "Thursday at 16:00",
                status: "Active",
                workflow: "Content Marketing Flow",
                lastRun: "Tuesday - Success"
              }
            ].map((task, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-foreground">{task.name}</h4>
                      <Badge variant={task.status === "Active" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Schedule: {task.schedule}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Next: {task.nextRun}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">
                          Workflow: {task.workflow}
                        </div>
                        <div className="text-muted-foreground">
                          Last run: {task.lastRun}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      {task.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
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