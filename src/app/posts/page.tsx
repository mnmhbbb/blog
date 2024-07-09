import Posts from '@/components/Posts';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <Posts posts={posts} categories={categories} />;
}
