import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChairmanCard() {
  return (
    <div className="fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">의장 메시지</h2>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image Placeholder */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">DR</span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">사라 리처드슨 박사</h3>
                <Badge variant="secondary" className="mb-4">
                  의장 겸 최고보안책임자, 오토테크 솔루션즈
                </Badge>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  스마트 모빌리티 보안 표준화 포럼에 오신 것을 환영합니다. 교통 혁명의 문턱에 서 있는 지금, 견고한 보안
                  표준의 중요성은 그 어느 때보다 중요합니다. 우리의 커넥티드 및 자율주행 차량은 단순한 기술적 진보가
                  아니라 모빌리티 보안에 대한 접근 방식의 근본적인 변화를 의미합니다.
                </p>

                <p>
                  전 세계 업계 리더, 학술 기관, 규제 기관과의 협력적 노력을 통해 우리는 수백만 사용자를 보호하고 스마트
                  모빌리티 기술의 안전한 배포를 보장하는 보안 프레임워크를 구축하고 있습니다. 함께 우리는 더욱 안전하고
                  연결되며 지속 가능한 교통의 미래를 만들어가고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
