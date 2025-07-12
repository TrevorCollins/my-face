import Link from 'next/link'

import { FileMetadata } from '@/lib/fetch'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: FileMetadata[] }) {
  return (
    <ul className='my-4 flex flex-col gap-2'>
      {posts.map(post => (
        <li
          key={post.slug}
          className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
        >
          <div className='max-w-lg'>
            <p className='text-xs font-semibold'>{post.title}</p>
            <p className='mt-1 line-clamp-1 text-xs'>{post.summary}</p>
          </div>
          <Link
            href={`/posts/${post.slug}`}
            className='text-dark-blue text-xxs font-semibold text-nowrap'
          >
            (view more)
          </Link>
        </li>
      ))}
    </ul>
  )
}
