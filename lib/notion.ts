import { APIErrorCode, Client as NotionClient } from "@notionhq/client"

export const notion = new NotionClient({
  auth: process.env.NOTION_API_KEY,
})
export const NotionAPIErrorCode = APIErrorCode
