import type React from "react"
import "@/styles/globals.css"

export const metadata = {
  title: "CommandCore - Premium Roblox Studio Modelleri ve Scriptleri",
  description: "Profesyonel Roblox Studio modelleri ve scriptleri için özel Discord topluluğumuz.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  )
}

