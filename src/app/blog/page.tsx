import { GET_BLOG_POSTS } from '@/lib/queries'
import { BlogPost } from '@/lib/types'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'

// Constants
const REVALIDATION_INTERVAL = 3600 // 1 hour in seconds
const PREVIEW_TEXT_LENGTH = 300
const HTML_TAG_PATTERN = /<[^>]*>/g
const HTML_ENTITY_PATTERN = /&[^;]+;/g

// Data fetching
async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_BLOG_POSTS,
    }),
    next: { revalidate: REVALIDATION_INTERVAL }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data.blogPosts
}

// Utility functions
function stripHtmlTags(html: string): string {
  return html
    .replace(HTML_TAG_PATTERN, '')
    .replace(HTML_ENTITY_PATTERN, ' ')
    .trim()
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength).trim() + '...'
}

function getPreviewText(html: string, maxLength: number = 100): string {
  const textContent = stripHtmlTags(html)
  return truncateText(textContent, maxLength)
}

// Component helpers
function getAuthorInitial(name: string): string {
  return name.charAt(0).toUpperCase()
}

function formatPostDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString()
}

// Subcomponents
function AuthorAvatar({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold text-xs">
      {getAuthorInitial(name)}
    </div>
  )
}

function PostMetadata({ authorName, createdAt }: { authorName: string; createdAt: string }) {
  return (
    <div className="flex items-center text-sm text-muted">
      <div className="flex items-center space-x-2">
        <AuthorAvatar name={authorName} />
        <span>By {authorName}</span>
      </div>
      <span className="mx-3">•</span>
      <time className="text-muted">{formatPostDate(createdAt)}</time>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const previewText = getPreviewText(post.blogPostContent.html, PREVIEW_TEXT_LENGTH)

  return (
    <article className="group mb-4 p-6 bg-surface rounded-lg shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.blogPostSlug}`} className="block">
        <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {post.blogTitle}
        </h2>
        <p className="text-sm text-muted/70 leading-relaxed mb-4">
          {previewText}
        </p>
        <PostMetadata
          authorName={post.createdBy.name}
          createdAt={post.createdAt}
        />
      </Link>
    </article>
  )
}

function DecorativeBackground() {
  return (
    <>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
    </>
  )
}

function BlogHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-secondary">
            Blog Posts
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-muted/80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipiscing elit, cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <DecorativeBackground />
    </div>
  )
}

function EmptyBlogState() {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <p className="text-xl text-muted mb-2">No blog posts found</p>
      <p className="text-muted/70">Check back later for new content!</p>
    </div>
  )
}

function BlogPostList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return <EmptyBlogState />
  }

  return (
    <div className="space-y-0">
      {posts.map((post, index) => (
        <div key={post.id} className={index > 0 ? "pt-4" : ""}>
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      <BlogHero />

      <div className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2">
              <BlogPostList posts={posts} />
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}