import { NextResponse } from "next/server"
import { isFullPage } from "@notionhq/client"

import { notion } from "@/lib/notion"

const notionSecret = process.env.NOTION_API_KEY
const notionDatabaseId = process.env.NOTION_DATABASE_ID

export async function GET(request: Request) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or database_id !")

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  })

  return NextResponse.json(query.results.filter(isFullPage))
}
