import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  RefreshCw,
  Filter,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Calendar,
  Clock,
  User,
  ExternalLink
} from "lucide-react";

export default function History() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">History</h1>
          <p className="text-muted-foreground">
            Track all automation events and activities
          </p>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search events..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Event Type
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline" size="sm">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Severity
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Events", value: "1,247", icon: Info, color: "text-blue-600" },
          { label: "Success", value: "1,198", icon: CheckCircle, color: "text-green-600" },
          { label: "Warnings", value: "37", icon: AlertTriangle, color: "text-orange-600" },
          { label: "Errors", value: "12", icon: XCircle, color: "text-red-600" }
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

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Event History</CardTitle>
          <CardDescription>Complete log of all automation activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: "success",
                title: "Task Executed Successfully",
                description: "Competitor Analysis workflow completed without errors",
                timestamp: "Aug 28, 2025 - 09:45:23",
                user: "System",
                taskId: "637d54d3-6fed-43d5",
                duration: "4m 32s"
              },
              {
                type: "warning",
                title: "Rate Limit Warning",
                description: "API rate limit approaching for social media scraping",
                timestamp: "Aug 28, 2025 - 09:30:15",
                user: "Social Media Agent",
                taskId: "b8ab99b9-fb25-408b",
                duration: "N/A"
              },
              {
                type: "success",
                title: "Workflow Created",
                description: "New email automation workflow 'Lead Nurturing Sequence' created",
                timestamp: "Aug 28, 2025 - 08:15:42",
                user: "admin@mos.ai",
                workflowId: "f2c1a8d4-9e7b-4a3f",
                duration: "N/A"
              },
              {
                type: "error",
                title: "Task Failed",
                description: "Social media posting failed due to authentication error",
                timestamp: "Aug 27, 2025 - 16:22:10",
                user: "System",
                taskId: "a9b8c7d6-e5f4-3g2h",
                duration: "1m 45s"
              },
              {
                type: "success",
                title: "Browser Profile Updated",
                description: "E-commerce Scraping profile proxy settings updated",
                timestamp: "Aug 27, 2025 - 14:30:55",
                user: "admin@mos.ai",
                profileId: "f56b657d-h8i7-7d5f",
                duration: "N/A"
              },
              {
                type: "info",
                title: "Scheduled Task Triggered",
                description: "Daily price monitoring task started as scheduled",
                timestamp: "Aug 27, 2025 - 09:00:00",
                user: "Scheduler",
                taskId: "g67c768e-i9j8-8e6g",
                duration: "N/A"
              },
              {
                type: "warning",
                title: "Workflow Paused",
                description: "Email Campaign automation paused by user intervention",
                timestamp: "Aug 26, 2025 - 18:45:12",
                user: "admin@mos.ai",
                workflowId: "h78d879f-j0k9-9f7h",
                duration: "N/A"
              },
              {
                type: "success",
                title: "Template Imported",
                description: "E-commerce Data Scraping template successfully imported",
                timestamp: "Aug 26, 2025 - 11:20:33",
                user: "admin@mos.ai",
                templateId: "template-ecommerce-001",
                duration: "N/A"
              }
            ].map((event, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {event.type === "success" && <CheckCircle className="h-5 w-5 text-green-600" />}
                    {event.type === "warning" && <AlertTriangle className="h-5 w-5 text-orange-600" />}
                    {event.type === "error" && <XCircle className="h-5 w-5 text-red-600" />}
                    {event.type === "info" && <Info className="h-5 w-5 text-blue-600" />}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <Badge variant={
                        event.type === "success" ? "default" : 
                        event.type === "warning" ? "secondary" : 
                        event.type === "error" ? "destructive" : "outline"
                      }>
                        {event.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{event.user}</span>
                      </div>
                      {event.taskId && (
                        <span>Task: {event.taskId}</span>
                      )}
                      {event.workflowId && (
                        <span>Workflow: {event.workflowId}</span>
                      )}
                      {event.profileId && (
                        <span>Profile: {event.profileId}</span>
                      )}
                      {event.templateId && (
                        <span>Template: {event.templateId}</span>
                      )}
                      {event.duration !== "N/A" && (
                        <span>Duration: {event.duration}</span>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}