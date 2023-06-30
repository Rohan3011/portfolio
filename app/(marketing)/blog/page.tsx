import Image from "next/image"
import Link from "next/link"

import { Page } from "@/types/notion"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getBlogFromNotion() {
  const resp = await fetch("http://localhost:3000/api/notion")
  const data = await resp.json()
  return data
}

export default async function BlogPage() {
  const { data: blogPosts }: { data: Page[] } = await getBlogFromNotion()
  console.log(blogPosts)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Blogs
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          My blogs and notes straight from notion.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-4xl grid-flow-row  gap-4 lg:grid-cols-2 ">
        {Array.isArray(blogPosts) ? (
          blogPosts.map((blog) => <BlogCard blog={blog} />)
        ) : (
          <p>{typeof blogPosts}</p>
        )}
      </div>
    </section>
  )
}

function BlogCard({ blog }: { blog: Page }) {
  return (
    <Card key={blog.id} className="overflow-hidden">
      <Image
        className="object-contain"
        src="/images/blog.webp"
        width={500}
        height={500}
        alt={blog.id}
      />
      <CardHeader>
        <CardTitle>
          <span>{blog.icon?.emoji}</span>
          {blog.properties.Name.title?.[0]?.plain_text}
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Author:{" "}
          {blog.properties.Author.people?.map((user) => (
            <span key={user.id}>{user.object.toString()}</span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Link href={"/blog/" + blog.id}>
          <Button>More Details</Button>
        </Link>
        <Link href={blog.public_url ?? "#"}>
          <Button variant="outline">Notion</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
