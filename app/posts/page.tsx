import { getFiles } from '@/lib/fetch'
import PostsWithSearch from '@/components/PostsWithSearch'

export default async function PostsPage() {
  const posts = await getFiles('posts')

  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
