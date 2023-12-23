import Link from "next/link"
import { Blog } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

export function BlogCard(blog: Blog) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={blog.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </div>
  )
}
