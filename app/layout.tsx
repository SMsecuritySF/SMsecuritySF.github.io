import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Smart Mobility Security Standardization Forum",
  description:
    "Advancing security standards for smart mobility systems through collaborative research and standardization efforts.",
  generator: "v0.app",
  keywords: "smart mobility, security, standardization, automotive, IoT, cybersecurity",
  authors: [{ name: "SMSSF" }],
  openGraph: {
    title: "Smart Mobility Security Standardization Forum",
    description:
      "Advancing security standards for smart mobility systems through collaborative research and standardization efforts.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
