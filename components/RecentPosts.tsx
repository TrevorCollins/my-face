import Link from 'next/link'
import { getFiles } from '@/lib/fetch'
import Posts from '@/components/Posts'

export default async function RecentPosts() {
  const posts = await getFiles('posts', 4)

  return (
    <section className='my-6'>
      <div>
        <h2 className='title text-sm'>Trevor&apos;s Latest Blog Entries</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='text-dark-blue hover:text-blue inline-flex text-xs font-bold transition-colors'
        >
          <span>[View All Blog Entries]</span>
        </Link>
      </div>
    </section>
  )
}
