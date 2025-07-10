import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { cn } from '@/lib/utils'

const nunito = Nunito({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'My Face',
  description: 'Portfolio for Trevor Collins'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          nunito.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
