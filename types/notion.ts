export interface User {
  object: string
  id: string
}

export interface PageProperty {
  id: string
  type: string
  multi_select?: MultiSelectOption[]
  people?: User[]
  title?: Title[]
}

export interface MultiSelectOption {
  id: string
  name: string
  color: string
}

export interface Title {
  type: string
  text: {
    content: string
    link: null | string
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null | string
}

export interface Page {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: User
  last_edited_by: User
  cover: {
    type: string
    external: {
      url: string
    }
  } | null
  icon: {
    type: string
    emoji: string
  } | null
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  properties: {
    Tags: PageProperty
    Author: PageProperty
    Name: PageProperty
  }
  url: string
  public_url: null | string
}
