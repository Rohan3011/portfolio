import Link from "next/link"

import { Page } from "@/types/notion"
import { Button } from "@/components/ui/button"

async function getBlogFromNotion(pageId: string) {
  const resp = await fetch(`http://localhost:3000/api/notion/${pageId}`)
  const data = await resp.json()
  return data
}

type PageProps = {
  params: { slug: string }
}

export default async function BlogPage({ params }: PageProps) {
  const blog = await getBlogFromNotion(params.slug)
  console.log("-------------------------------------------------\n", blog)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Blogs
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          My blogs and notes straight from notion.
        </p>

        <Link href="/blog">
          <Button>Back</Button>
        </Link>
      </div>
    </section>
  )
}
