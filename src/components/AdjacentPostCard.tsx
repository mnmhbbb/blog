import { Post } from '@/service/posts';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

const ICON_CLASS = 'text-3xl m-4 text-yellow-300 transition-all';

export default function AdjacentPostCard({ post: { path }, type }: Props) {
  return (
    <Link href={`/posts/${path}`} className='w-full bg-black max-h-56 p-5'>
      <div className='w-full flex justify-around items-center text-white px-8'>
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
