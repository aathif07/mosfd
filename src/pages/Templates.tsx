import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText,
  Search,
  Filter,
  Star,
  Clock,
  Play,
  Eye,
  Download,
  Zap,
  BarChart3,
  Mail,
  Globe
} from "lucide-react";

export default function Templates() {
  return (
    <div className="page-container p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title gradient-text">Templates</h1>
          <p className="page-description">
            Start with proven automation workflows. Browse our collection of pre-built templates 
            designed by marketing experts and the community.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
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
              All Categories
            </Button>
            <Button variant="outline" size="sm" className="text-primary border-primary/20">
              Most Popular
            </Button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              name: "E-commerce Data Scraping",
              description: "Automatically search products, extract details, capture screenshots, and compile comprehensive product databases from multiple e-commerce platforms.",
              difficulty: "Advanced",
              duration: "6m",
              rating: 4.8,
              tasks: 8,
              category: "Data Extraction",
              downloads: 1240,
              author: "MOS AI",
              color: "bg-blue-500",
              icon: Globe
            },
            {
              name: "Price Monitoring System",
              description: "Monitor competitor prices across multiple platforms, compare against thresholds, and send automatic notifications via webhook when changes occur.",
              difficulty: "Advanced", 
              duration: "3.5m",
              rating: 4.8,
              tasks: 6,
              category: "Monitoring",
              downloads: 890,
              author: "MOS AI",
              color: "bg-green-500",
              icon: BarChart3
            },
            {
              name: "Email Campaign Automation",
              description: "Complete email workflow including login management, email composition, sending, delivery confirmation, and performance tracking.",
              difficulty: "Intermediate",
              duration: "7m", 
              rating: 4.8,
              tasks: 12,
              category: "Email Marketing",
              downloads: 2100,
              author: "MOS AI",
              color: "bg-purple-500",
              icon: Mail
            },
            {
              name: "Social Media Scheduler",
              description: "Schedule and automatically post content across multiple social media platforms with optimal timing and engagement tracking.",
              difficulty: "Beginner",
              duration: "4m",
              rating: 4.6,
              tasks: 5,
              category: "Social Media",
              downloads: 1580,
              author: "Community",
              color: "bg-pink-500",
              icon: Zap
            },
            {
              name: "Lead Generation Pipeline",
              description: "Comprehensive lead generation workflow including prospecting, email outreach, follow-ups, and CRM integration.",
              difficulty: "Intermediate",
              duration: "8m",
              rating: 4.7,
              tasks: 10,
              category: "Lead Generation",
              downloads: 945,
              author: "MOS AI",
              color: "bg-orange-500",
              icon: Zap
            },
            {
              name: "Content Distribution Hub",
              description: "Automatically distribute blog posts and content across multiple platforms including social media, forums, and content networks.",
              difficulty: "Intermediate",
              duration: "5m",
              rating: 4.5,
              tasks: 7,
              category: "Content Marketing",
              downloads: 756,
              author: "Community",
              color: "bg-indigo-500",
              icon: FileText
            },
            {
              name: "Competitor Analysis Suite",
              description: "Monitor competitor websites, track changes, analyze pricing strategies, and generate detailed competitive intelligence reports.",
              difficulty: "Advanced",
              duration: "9m",
              rating: 4.9,
              tasks: 15,
              category: "Analytics",
              downloads: 632,
              author: "MOS AI",
              color: "bg-red-500",
              icon: BarChart3
            },
            {
              name: "Customer Survey Automation",
              description: "Automated customer satisfaction surveys with response collection, analysis, and reporting dashboard generation.",
              difficulty: "Beginner",
              duration: "3m",
              rating: 4.4,
              tasks: 4,
              category: "Customer Experience",
              downloads: 423,
              author: "Community",
              color: "bg-teal-500",
              icon: Star
            },
            {
              name: "Affiliate Partner Outreach",
              description: "Find potential affiliate partners, send personalized outreach emails, track responses, and manage partnership workflows.",
              difficulty: "Intermediate",
              duration: "6m",
              rating: 4.6,
              tasks: 9,
              category: "Partnership",
              downloads: 789,
              author: "MOS AI",
              color: "bg-cyan-500",
              icon: Globe
            }
          ].map((template) => (
            <Card key={template.name} className="card-elevated group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${template.color}/10`}>
                      <template.icon className={`h-5 w-5 ${template.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>by {template.author}</span>
                        <span>•</span>
                        <span>{template.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={template.difficulty === "Beginner" ? "secondary" : 
                           template.difficulty === "Intermediate" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {template.difficulty}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                  {template.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {template.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Template Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">{template.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{template.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{template.tasks} tasks</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Ready to use</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Customizable workflow</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Documentation included</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Use Template
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-foreground border-border/50 hover:border-primary/50"
                  >
                    <Eye className="mr-2 h-3 w-3" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-8">
          <Button variant="outline" size="lg" className="text-foreground border-border/50">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  );
}