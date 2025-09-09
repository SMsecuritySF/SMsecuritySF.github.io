import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { announcements } from "@/lib/data"

export default function Announcements() {
  return (
    <div className="fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            최신 공지사항
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {announcements.slice(0, 5).map((announcement, index) => (
            <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <Link
                    href={announcement.href}
                    className="font-medium text-foreground hover:text-primary transition-colors text-pretty leading-relaxed"
                  >
                    {announcement.title}
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <time dateTime={announcement.date}>
                      {new Date(announcement.date).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </Badge>
                  <Link href={announcement.href}>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ArrowRight className="h-3 w-3" />
                      <span className="sr-only">공지사항 읽기</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link href="/announcements/index.html">
              <Button variant="outline" className="w-full bg-transparent">
                모든 공지사항 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
