import { NextResponse } from "next/server"
import { iteratePaginatedAPI } from "@notionhq/client"

import { notion } from "@/lib/notion"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const pageId = params.slug
  const blocks = []

  try {
    for await (const block of iteratePaginatedAPI(notion.blocks.children.list, {
      block_id: pageId,
    })) {
      blocks.push(block)
    }
    return NextResponse.json(blocks ?? "No blocks")
  } catch (err: any) {
    return NextResponse.json({ error: err })
  }
}
