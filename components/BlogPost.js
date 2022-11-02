import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-6 md:mb-8">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2 cursor-pointer text-black dark:text-gray-100 font-sans regular hover:underline transition-all">
              {post.title}
            </h2>
            <time className="flex-shrink-0 text-gray-400 dark:text-gray-400 font-mono font-normal text-sm">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <p className="text-3xl md:text-4xl tracking-tighter hidden md:block text-gray-500 dark:text-gray-300 font-serif lowercase font-light pb-8 border-solid border-gray-300 border-y">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
