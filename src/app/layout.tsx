"use client";

import Footer from "@/components/CommonLayout/Footer"
import Navbar from "@/components/CommonLayout/Navbar"
import "@/styles/global.css"
import { Josefin_Sans } from 'next/font/google'
import { usePathname } from 'next/navigation'

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const hideLayout =
  pathname.startsWith('/add-products') || pathname.startsWith('/product-list')

  return (
    <html lang="en" className={josefin.className}>
      <body suppressHydrationWarning>
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </body>
    </html>
  )
}
