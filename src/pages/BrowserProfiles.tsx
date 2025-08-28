import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  RefreshCw,
  Monitor,
  Shield,
  Globe,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal
} from "lucide-react";

export default function BrowserProfiles() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Browser Profiles</h1>
          <p className="text-muted-foreground">
            Manage browser configurations for web automation tasks
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Profile
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search browser profiles..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Proxy: All
              </Button>
              <Button variant="outline" size="sm">
                AdBlock: All
              </Button>
              <Button variant="outline" size="sm">
                Sort: Recent
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Profiles", value: "8", icon: Monitor, color: "text-blue-600" },
          { label: "With Proxy", value: "5", icon: Globe, color: "text-green-600" },
          { label: "AdBlock Enabled", value: "3", icon: Shield, color: "text-purple-600" },
          { label: "Active", value: "2", icon: Eye, color: "text-orange-600" }
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

      {/* Browser Profiles List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Browser Profiles</CardTitle>
          <CardDescription>Configure browser settings for different automation scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Default Profile",
                id: "c238324a-e5f4-4a2c-9b1d-8e7f6g5h4i3j",
                viewport: "1920x1080",
                adBlock: true,
                proxy: "US East",
                persistence: true,
                userAgent: "Chrome 128.0.0.0",
                status: "Active"
              },
              {
                name: "Mobile Testing",
                id: "d349435b-f6g5-5b3d-ac2e-9f8g7h6i5j4k",
                viewport: "375x667",
                adBlock: false,
                proxy: "None",
                persistence: false,
                userAgent: "Mobile Safari",
                status: "Inactive"
              },
              {
                name: "Social Media Automation",
                id: "e45a546c-g7h6-6c4e-bd3f-af9h8i7j6k5l",
                viewport: "1280x960",
                adBlock: true,
                proxy: "EU West",
                persistence: true,
                userAgent: "Chrome 128.0.0.0",
                status: "Active"
              },
              {
                name: "E-commerce Scraping",
                id: "f56b657d-h8i7-7d5f-ce4g-bg0i9j8k7l6m",
                viewport: "1440x900",
                adBlock: false,
                proxy: "Asia Pacific",
                persistence: false,
                userAgent: "Firefox 129.0",
                status: "Inactive"
              },
              {
                name: "Research Profile",
                id: "g67c768e-i9j8-8e6g-df5h-ch1j0k9l8m7n",
                viewport: "1600x900",
                adBlock: true,
                proxy: "Canada",
                persistence: true,
                userAgent: "Chrome 128.0.0.0",
                status: "Active"
              }
            ].map((profile) => (
              <div key={profile.id} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-foreground">{profile.name}</h4>
                      <Badge variant={profile.status === "Active" ? "default" : "secondary"}>
                        {profile.status}
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      ID: {profile.id}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">Viewport</div>
                        <div className="text-muted-foreground">{profile.viewport}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">AdBlock</div>
                        <Badge variant={profile.adBlock ? "default" : "secondary"} className="text-xs">
                          {profile.adBlock ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">Proxy</div>
                        <div className="text-muted-foreground">{profile.proxy}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">User Agent</div>
                        <div className="text-muted-foreground">{profile.userAgent}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
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