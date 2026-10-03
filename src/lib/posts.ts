import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// 기존 Docusaurus 태그 주소(/tags/spring-security)를 그대로 유지한다.
export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function excerpt(text: string, length = 150): string {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}
