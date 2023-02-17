import Container from '@/components/Container'
import TagItem from '@/components/TagItem'
import { NotionRenderer, Equation, Code, Collection, CollectionRow } from 'react-notion-x'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { useLocale } from '@/lib/locale'
import { useRouter } from 'next/router'
import Comments from '@/components/Comments'

const mapPageUrl = id => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

const Layout = ({
  children,
  blockMap,
  frontMatter,
  emailHash,
  fullWidth = false
}) => {
  const locale = useLocale()
  const router = useRouter()
  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      fullWidth={fullWidth}
    >
      <article>
        <h1 className="font-bold text-5xl md:text-7xl text-black dark:text-white font-sans tracking-tighter text-center regular">
          {frontMatter.title}
        </h1>
        {frontMatter.tags && (
              <div className="space-x-1 space-y-1 mb-4 mt-7 flex flex-wrap max-w-full overflow-x-auto article-tags font-mono justify-center border-none text-gray-500 dark:text-gray-400 italic">
                {frontMatter.tags.map(tag => (
                  <TagItem key={tag} tag={tag} />
                ))}
              </div>)}
        {frontMatter.type[0] !== 'Page' && (
          <nav className="flex mt-7 text-gray-500 dark:text-gray-400 solid border-y-2 border-gray-200 mb-4 justify-center">
            <div className="mr-2 md:ml-0 font-mono font-regular inline-flex space-x-1">
              <p>Last updated on</p>
              <p> </p>
              {formatDate(
                frontMatter?.date?.start_date || frontMatter.createdTime,
                BLOG.lang
              )}
            </div>
          </nav>
        )}
        {children}
        {blockMap && (
          <div className="-mt-4 font-serif">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
      </article>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <a>
          <button
            onClick={() => router.push(BLOG.path || '/')}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100 font-sans"
          >
            ← {locale.POST.BACK}
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100 font-sans"
          >
            ↑ {locale.POST.TOP}
          </button>
        </a>
      </div>
      <Comments frontMatter={frontMatter} />
    </Container>
  )
}

export default Layout
