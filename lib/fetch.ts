import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type File = {
  metadata: FileMetadata
  content: string
}

export type FileMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export const getFileBySlug = async (
  slug: string,
  directory: string
): Promise<File | null> => {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      directory,
      `${slug}.mdx`
    )
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export const getFiles = async (
  directory: string,
  limit?: number
): Promise<FileMetadata[]> => {
  const filePath = path.join(process.cwd(), 'content', directory)
  const files = fs.readdirSync(filePath)

  const sortedFiles = files
    .map(file => getFileMetadata(file, directory))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return sortedFiles.slice(0, limit)
  }

  return sortedFiles
}

export const getFileMetadata = (
  fileName: string,
  directory: string
): FileMetadata => {
  const slug = fileName.replace(/\.mdx$/, '')
  const filePath = path.join(process.cwd(), 'content', directory, fileName)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
