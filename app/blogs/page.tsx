import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { BlogCard } from "./blog-card"

export default function BlogsPage() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blogs</h1>
      {posts.map((post, idx) => (
        <BlogCard key={idx} {...post} />
      ))}
    </div>
  )
}
