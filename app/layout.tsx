import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "900"]
})

export const metadata: Metadata = {
  title: "Etagères ",
  description: "Application de test technique soft vodooz"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
