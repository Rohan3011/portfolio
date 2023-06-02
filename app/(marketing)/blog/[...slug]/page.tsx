import { format, parseISO } from 'date-fns'
import { allPosts, allAuthors } from 'contentlayer/generated'
import { notFound } from "next/navigation"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface PostPageProps {
    params: {
      slug: string[]
    }
  }

   
  export async function generateStaticParams(): Promise<
    PostPageProps["params"][]
  > {
    return allPosts.map((post) => ({
      slug: post.slugAsParams.split("/"),
    }))
  }

  async function getPostFromParams(params) {
    const slug = params?.slug?.join("/")
    const post = allPosts.find((post) => post.slugAsParams === slug)
  
    if (!post) {
      null
    }
    return post
  }
 



const PostLayout = async ({ params }: PostPageProps) => {
    const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
  allAuthors.find(({ slug }) => slug === `/authors/${author}`)
)

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
    <Link
      href="/blog"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-[-200px] top-14 hidden xl:inline-flex"
      )}
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      See all posts
    </Link>
    <div>
      {post.date && (
        <time
          dateTime={post.date}
          className="block text-sm text-muted-foreground"
        >
          Published on {formatDate(post.date)}
        </time>
      )}
      <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
        {post.title}
      </h1>
      {authors?.length ? (
        <div className="mt-4 flex space-x-4">
          {authors.map((author) =>
            author ? (
              <Link
                key={author._id}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
              >
                <Image
                  src={author.avatar}
                  alt={author.title}
                  width={42}
                  height={42}
                  className="rounded-full bg-white"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium">{author.title}</p>
                  <p className="text-[12px] text-muted-foreground">
                    @{author.twitter}
                  </p>
                </div>
              </Link>
            ) : null
          )}
        </div>
      ) : null}
    </div>
    {post.image && (
      <Image
        src={post.image}
        alt={post.title}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />
    )}
    <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    <hr className="mt-12" />
    <div className="flex justify-center py-6 lg:py-10">
      <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
    </div>
  </article>
  )
}

export default PostLayout