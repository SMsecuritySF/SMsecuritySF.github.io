import Header from "@/components/Header"
import ChairmanCard from "@/components/ChairmanCard"
import Announcements from "@/components/Announcements"
import Resources from "@/components/Resources"
import Section from "@/components/Section"
import BackToTop from "@/components/BackToTop"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Users, Globe, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="fade-in">
              <Badge variant="secondary" className="mb-6 text-sm font-medium">
                스마트 모빌리티 보안 발전
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
                스마트 모빌리티 보안 표준화 포럼
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-4xl mx-auto leading-relaxed">
                협력적 연구, 산업 파트너십, 그리고 포괄적인 보안 표준을 통해 안전하고 연결된 교통의 미래를 이끌어갑니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  우리의 미션에 참여하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  표준 보기
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="fade-in text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">모빌리티의 미래를 보호하다</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  스마트 모빌리티 보안 표준화 포럼(SMSSF)은 차세대 교통 시스템을 위한 포괄적인 보안 프레임워크를
                  구축하기 위해 업계 리더, 연구자, 정책 입안자들을 한데 모으는 협력적 이니셔티브입니다.
                </p>
                <p>
                  커넥티드 및 자율주행 차량이 우리 교통 인프라의 핵심이 되어가는 가운데, 우리는 엄격한 표준화 프로세스와
                  지속적인 혁신을 통해 이러한 시스템이 안전하고 신뢰할 수 있으며 믿을 만하도록 보장하는 일을 하고
                  있습니다.
                </p>
                <p>
                  우리의 다학제적 접근법은 V2X(Vehicle-to-Everything) 통신부터 클라우드 기반 플릿 관리 시스템에
                  이르기까지 스마트 모빌리티 생태계가 직면한 복잡한 보안 과제들을 다룹니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="fade-in text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">보안 표준</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    커넥티드 모빌리티 시스템을 위한 포괄적인 보안 프레임워크와 프로토콜 개발
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">산업 협력</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    자동차 제조업체, 기술 회사, 연구 기관 간의 파트너십 촉진
                  </p>
                </CardContent>
              </Card>

              <Card className="fade-in text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">글로벌 영향</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    전 세계 모빌리티 보안을 향상시키는 국제적으로 인정받는 표준 창조
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Chairman's Message */}
        <Section id="chairman" className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <ChairmanCard />
          </div>
        </Section>

        {/* News & Resources */}
        <Section id="news" className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="fade-in text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">최신 소식 및 자료</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                최신 공지사항을 확인하고 스마트 모빌리티 보안을 위한 필수 자료에 액세스하세요.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Announcements />
              <Resources />
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-muted/50 border-t py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">연락처 정보</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>스마트 모빌리티 보안 표준화 포럼</p>
                <p>이메일: info@smssf.org</p>
                <p>전화: +1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">빠른 링크</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  SMSSF 소개
                </a>
                <a href="#chairman" className="block text-muted-foreground hover:text-primary transition-colors">
                  의장 메시지
                </a>
                <a href="#news" className="block text-muted-foreground hover:text-primary transition-colors">
                  소식 및 자료
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">팔로우하기</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 스마트 모빌리티 보안 표준화 포럼. 모든 권리 보유.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                개인정보 보호정책
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                서비스 약관
              </a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
