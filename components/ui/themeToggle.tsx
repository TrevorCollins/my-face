'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
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
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300'>Light Mode</SunIcon>
      ) : (
        <MoonIcon className='size-4 text-sky-950'>Dark Mode</MoonIcon>
      )}
    </Button>
  )
}

export default ThemeToggle
