import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
          'font-ms flex min-h-screen flex-col antialiased',
          nunito.variable
        )}
      >
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
