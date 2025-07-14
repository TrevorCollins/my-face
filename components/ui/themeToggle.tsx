'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { MoonIcon, SunIcon } from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevents hydration mismatch
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='p-1 text-white'
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 stroke-3'>Light Mode</SunIcon>
      ) : (
        <MoonIcon className='size-4 stroke-3'>Dark Mode</MoonIcon>
      )}
    </Button>
  )
}

export default ThemeToggle
