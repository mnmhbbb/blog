'use client';
import { useState } from 'react';
import { Post } from '@/service/posts';
import Categories from './Categories';
import PostsGrid from './PostsGrid';

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = 'All Posts';

export default function Posts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className='flex-col m-4'>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        HandleClick={setSelected}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
