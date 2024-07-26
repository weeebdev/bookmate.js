export interface Quote {
  cfi: string
  color: number
  comment: any
  comments_count: number
  content: string
  created_at: number
  item_uuid: string
  finish_node_offset: number
  finish_node_xpath: string
  liked: boolean
  likes_count: number
  progress: number
  start_node_offset: number
  start_node_xpath: string
  state: string
  style: string
  book: Book
  uuid: string
  permanent_hidden: boolean
  creator: Creator
  liker_users: any[]
}

export interface Book {
  library_card: LibraryCard
  annotation: string
  authors: string
  authors_objects: AuthorsObject[]
  cover: Cover
  language: string
  paper_pages: number
  restricted_reading_on_web: boolean
  title: string
  uuid: string
  type: string
  source_type: string
  publication_date: number
  owner_catalog_title: string
  original_year: any
  is_uploaded: boolean
  editor_annotation: any
  bookshelves_count: number
  impressions_count: number
  quotes_count: number
  readers_count: number
  can_be_read: boolean
  access_restrictions: AccessRestriction[]
  age_restriction: any
  in_library: boolean
  in_wishlist: boolean
  labels: Label[]
}

export interface LibraryCard {
  accessed_at: number
  changes_count: number
  chapter_uuid: any
  cfi: any
  finished_at: number
  fragment: string
  progress: number
  public: boolean
  size_approx: number
  started_at: number
  state: string
  sync_counter: number
  title: string
  uuid: string
  last_read_excerpt: string
  is_uploaded: boolean
}

export interface AuthorsObject {
  name: string
  locale: string
  uuid: string
  works_count: number
  image: Image
  removed: boolean
}

export interface Image {
  small: string
  large: string
  placeholder: string
}

export interface Cover {
  large: string
  placeholder: string
  ratio: number
  small: string
  background_color_hex: string
}

export interface AccessRestriction {
  level: string
}

export interface Label {
  text: string
  color: string
}

export interface Creator {
  id: number
  name: string
  login: string
  avatar: Avatar
  gender: string
}

export interface Avatar {
  large: string
  small: string
}

