import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, Github, BookOpen } from "lucide-react"
import { resources } from "@/lib/data"

export default function Resources() {
  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="h-4 w-4" />
      case "documentation":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Key Resources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-pretty leading-relaxed mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{resource.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {resource.category}
                  </Badge>
                  <a
                    href={resource.href}
                    target={resource.external ? "_blank" : "_self"}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                  >
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      {getIcon(resource.type)}
                      {resource.external && <ExternalLink className="ml-1 h-3 w-3" />}
                      <span className="sr-only">{resource.external ? "Open external link" : "View resource"}</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
