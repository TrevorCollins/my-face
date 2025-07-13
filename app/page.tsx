import Blurbs from '@/components/Blurbs'
import ContactBox from '@/components/ContactBox'
import ContactMe from '@/components/ContactMe'
import Details from '@/components/Details'
import Hero from '@/components/Hero'
import Interests from '@/components/Interests'
import RecentPosts from '@/components/RecentPosts'

export default function Home() {
  return (
    <section className='py-16 pb-24'>
      <div className='center container flex max-w-4xl flex-row justify-between gap-10'>
        <div className='flex flex-2 flex-col gap-4'>
          <Hero />
          <ContactBox />
          <Interests />
          <Details />
        </div>
        <div className='flex-3'>
          <ContactMe />
          <RecentPosts />
          <Blurbs />
        </div>
      </div>
    </section>
  )
}
