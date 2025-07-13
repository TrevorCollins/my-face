import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

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
          'flex min-h-screen flex-col font-sans text-sm antialiased',
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
