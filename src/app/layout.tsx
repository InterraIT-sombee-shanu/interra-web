import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InterraIT | Business Solutions | Digital Transformation | IT Services',
  description: 'We are InterraIT, a Silicon Valley-based company that specializes in providing IT services to leading companies worldwide including Mazda, Moderna, ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
