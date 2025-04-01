import "@/styles/base.css"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: { default: "Next Boiler", template: "%s | Next Boiler" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-7/8 lg:w-6/8">{children}</main>
      </body>
    </html>
  )
}
