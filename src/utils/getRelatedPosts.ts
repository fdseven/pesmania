// https://www.joshfinnie.com/blog/creating-a-similar-posts-component-in-astrojs/
import type { CollectionEntry } from "astro:content";

export function getRelatedPosts(
  posts: CollectionEntry<"blog">[], // All posts for the blog
  slug: string, // Current page's Slug
  tags: string[], // Current page's tags
  numRelatedPosts: number = 5 // Number of elements to return
) {
  const relatedPosts = posts
    .filter(
      post =>
        post.data.postSlug != slug &&
        post.data.draft != true &&
        post.data.tags?.filter(tag => tags.includes(tag)).length > 0
    )
    .map(post => ({
      ...post,
      tagCount: post.data.tags.filter(tag => tags.includes(tag)).length,
    }))
    .sort((a, b) => {
      if (a.tagCount > b.tagCount) return -1;
      if (b.tagCount > a.tagCount) return 1;

      if (a.data.pubDatetime > b.data.pubDatetime) return -1;
      if (a.data.pubDatetime < b.data.pubDatetime) return 1;

      return 0;
    });

  return relatedPosts.slice(0, numRelatedPosts);
}
