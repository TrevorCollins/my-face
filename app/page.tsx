import Intro from '@/components/intro'
import RecentPosts from '@/components/RecentPosts'
import RecentProjects from '@/components/RecentProjects'

export default function Home() {
  return (
    <section className='py-40 pb-24'>
      <div className='center container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}
