'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

const ToastProvider = () => {
  const { resolvedTheme } = useTheme()
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      disableTransitionOnChange
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  )
}
