import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Blog</h1>
      </Link>

      {/* TODO: */}
      {/* <div>
        <button type='button'>검색</button>
      </div> */}
    </header>
  );
}
