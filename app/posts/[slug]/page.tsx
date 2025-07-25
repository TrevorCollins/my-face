import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { getFileBySlug, getFiles } from '@/lib/fetch'
import { ArrowLeftIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
// import NewsletterForm from '@/components/NewsletterForm'
import MDXContent from '@/components/MDXContent'

export const generateStaticParams = async () => {
  const posts = await getFiles('posts')
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getFileBySlug(slug, 'posts')
  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata
  return (
    <section className='pt-32 pb-24'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-xs'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} />
        </main>

        {/* <footer className='mt-16'>
          <NewsletterForm />
        </footer> */}
      </div>
    </section>
  )
}
