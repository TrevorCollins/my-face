import Link from 'next/link'
import ThemeToggle from '@/components/ui/themeToggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl flex-col'>
      <nav className='bg-primary text-primary-foreground container flex max-h-[50px] items-center justify-between px-4 py-1'>
        <div>
          <Link href='/'>MyFace.com | Home</Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
      <nav className='bg-secondary text-secondary-foreground container flex items-center justify-between px-4 py-2'>
        <ul className='mx-auto flex items-center text-xs *:border-black *:px-1 *:not-last:border-r-1 sm:*:px-2'>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
