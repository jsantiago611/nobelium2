import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <a>
      <p className="mr-1 rounded-full px-2 py-2 border leading-none text-md dark:border-gray-600">
        {tag}
      </p>
    </a>
  </Link>
)

export default TagItem
