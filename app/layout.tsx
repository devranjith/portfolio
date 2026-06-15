import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from './components/ui/toaster'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Ranjith K - Web Developer Portfolio',
  description: 'Full Stack Web Developer specializing in modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#fcfcfc] text-[#111111] dark:bg-[#0a0a0a] dark:text-[#fcfcfc]`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
