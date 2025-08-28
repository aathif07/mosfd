import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search,
  CreditCard,
  Wallet,
  TrendingUp,
  Calendar,
  Key,
  Shield,
  Edit,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";

export default function WalletPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Wallet</h1>
          <p className="text-muted-foreground">
            Manage credits, credentials, and billing information
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <TrendingUp className="h-4 w-4 mr-2" />
            Usage Report
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Credits
          </Button>
        </div>
      </div>

      {/* Credit Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Wallet className="h-5 w-5 mr-2" />
              Credit Usage
            </CardTitle>
            <CardDescription>Current month overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary">104,000</div>
                <div className="text-sm text-muted-foreground">Credits Remaining</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">96,000</div>
                <div className="text-sm text-muted-foreground">Credits Used</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Usage</span>
                <span className="font-medium text-foreground">96,000 / 200,000</span>
              </div>
              <Progress value={48} className="h-3" />
              <div className="text-xs text-muted-foreground">
                52% remaining • Resets in 3 days
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Current Plan</CardTitle>
            <CardDescription>Professional Plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Credits</span>
                <span className="font-medium text-foreground">200,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Workflows</span>
                <span className="font-medium text-foreground">Unlimited</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Browser Profiles</span>
                <span className="font-medium text-foreground">50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Priority Support</span>
                <span className="font-medium text-foreground">Included</span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              Upgrade Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Usage Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Credit Usage Breakdown</CardTitle>
          <CardDescription>See where your credits are being used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { category: "Web Scraping", credits: 42000, percentage: 44, color: "bg-blue-500" },
              { category: "Email Automation", credits: 28000, percentage: 29, color: "bg-green-500" },
              { category: "Social Media", credits: 15000, percentage: 16, color: "bg-purple-500" },
              { category: "Data Analysis", credits: 8000, percentage: 8, color: "bg-orange-500" },
              { category: "Other", credits: 3000, percentage: 3, color: "bg-gray-500" }
            ].map((item) => (
              <div key={item.category} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded ${item.color}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.category}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">{item.credits.toLocaleString()} credits</span>
                    <span className="text-sm font-medium text-foreground">{item.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Credentials Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center text-foreground">
              <Key className="h-5 w-5 mr-2" />
              Stored Credentials
            </CardTitle>
            <CardDescription>Manage API keys and authentication credentials</CardDescription>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Credential
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Facebook Business",
                type: "Social Media",
                category: "social",
                count: 2,
                status: "Active",
                lastUsed: "2 hours ago"
              },
              {
                name: "Gmail Account",
                type: "Email",
                category: "email",
                count: 1,
                status: "Active",
                lastUsed: "1 day ago"
              },
              {
                name: "Twitter API",
                type: "Social Media",
                category: "social",
                count: 1,
                status: "Active",
                lastUsed: "3 hours ago"
              },
              {
                name: "Stripe API",
                type: "Payment",
                category: "payment",
                count: 1,
                status: "Active",
                lastUsed: "1 week ago"
              },
              {
                name: "AWS S3",
                type: "Storage",
                category: "storage",
                count: 1,
                status: "Inactive",
                lastUsed: "2 weeks ago"
              }
            ].map((credential) => (
              <div key={credential.name} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-foreground">{credential.name}</h4>
                      <Badge variant={credential.status === "Active" ? "default" : "secondary"}>
                        {credential.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span>Type: {credential.type}</span>
                      <span>Count: {credential.count}</span>
                      <span>Last used: {credential.lastUsed}</span>
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
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <CreditCard className="h-5 w-5 mr-2" />
            Billing History
          </CardTitle>
          <CardDescription>Recent transactions and credit purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "Aug 01, 2025",
                description: "Monthly Plan Renewal - Professional",
                amount: "$99.00",
                credits: "+200,000",
                status: "Completed"
              },
              {
                date: "Jul 15, 2025",
                description: "Additional Credits Purchase",
                amount: "$49.00",
                credits: "+100,000",
                status: "Completed"
              },
              {
                date: "Jul 01, 2025",
                description: "Monthly Plan Renewal - Professional",
                amount: "$99.00",
                credits: "+200,000",
                status: "Completed"
              }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{transaction.description}</div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-medium text-foreground">{transaction.amount}</div>
                  <div className="text-sm text-green-600">{transaction.credits}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}