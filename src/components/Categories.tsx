type Props = {
  categories: string[];
  selected: string;
  HandleClick: (category: string) => void;
};
export default function Categories({ categories, selected, HandleClick }: Props) {
  return (
    <section className='text-center p-4'>
      <ul className='flex justify-center gap-2 sm:gap-3 flex-wrap'>
        {categories.map((category) => (
          <li
            className={`cursor-pointer border-2 rounded-2xl px-4 py-2 transition-all hover:text-sky-500 ${
              category === selected && 'text-sky-600'
            }`}
            key={category}
            onClick={() => HandleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
