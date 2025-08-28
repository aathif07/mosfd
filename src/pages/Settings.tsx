import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Save,
  RotateCcw,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Activity,
  Mail,
  Smartphone
} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">
            Configure your MOS dashboard preferences and system settings
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>

      {/* System Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <Activity className="h-5 w-5 mr-2" />
            System Overview
          </CardTitle>
          <CardDescription>Current system status and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">206</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-muted-foreground">Active Tasks</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">104K</div>
              <div className="text-sm text-muted-foreground">Credits Left</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <User className="h-5 w-5 mr-2" />
              Profile Settings
            </CardTitle>
            <CardDescription>Manage your account information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input id="email" value="admin@mos.ai" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input id="name" value="MOS Administrator" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-foreground">Timezone</Label>
              <Input id="timezone" value="UTC-5 (Eastern Time)" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
            <CardDescription>Configure how you receive alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Email Notifications</Label>
                <div className="text-sm text-muted-foreground">Receive alerts via email</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Task Completion</Label>
                <div className="text-sm text-muted-foreground">Notify when tasks complete</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Error Alerts</Label>
                <div className="text-sm text-muted-foreground">Notify on task failures</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Weekly Reports</Label>
                <div className="text-sm text-muted-foreground">Weekly performance summary</div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Shield className="h-5 w-5 mr-2" />
              Security
            </CardTitle>
            <CardDescription>Manage security and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Two-Factor Authentication</Label>
                <div className="text-sm text-muted-foreground">Add extra security to your account</div>
              </div>
              <Badge variant="outline">Setup Required</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Session Timeout</Label>
                <div className="text-sm text-muted-foreground">Auto-logout after inactivity</div>
              </div>
              <span className="text-sm text-muted-foreground">4 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">API Access</Label>
                <div className="text-sm text-muted-foreground">External API access enabled</div>
              </div>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* Interface Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Palette className="h-5 w-5 mr-2" />
              Interface
            </CardTitle>
            <CardDescription>Customize your dashboard appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Dark Mode</Label>
                <div className="text-sm text-muted-foreground">Switch to dark theme</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Compact View</Label>
                <div className="text-sm text-muted-foreground">Show more items per page</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Animations</Label>
                <div className="text-sm text-muted-foreground">Enable interface animations</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Default Page Size</Label>
              <Input value="20 items" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <Database className="h-5 w-5 mr-2" />
            Advanced Settings
          </CardTitle>
          <CardDescription>System-level configuration options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Performance</h4>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-foreground">Parallel Task Execution</Label>
                  <div className="text-sm text-muted-foreground">Max concurrent tasks: 5</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-foreground">Auto-retry Failed Tasks</Label>
                  <div className="text-sm text-muted-foreground">Retry up to 3 times</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Data Retention</h4>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-foreground">Task History</Label>
                  <div className="text-sm text-muted-foreground">Keep for 90 days</div>
                </div>
                <span className="text-sm text-muted-foreground">90 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-foreground">Log Files</Label>
                  <div className="text-sm text-muted-foreground">Keep for 30 days</div>
                </div>
                <span className="text-sm text-muted-foreground">30 days</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}