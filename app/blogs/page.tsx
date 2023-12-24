import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { BlogCard } from "./blog-card"

export default function BlogsPage() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-5xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blogs</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {posts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
