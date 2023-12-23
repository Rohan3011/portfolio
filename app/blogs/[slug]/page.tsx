import { allBlogs } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: blog.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="[height: calc(100vh - 65px)] bg-green-500 mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </article>
  )
}

export default PostLayout
