import data from '../utils/data';
import Link from 'next/link';

function Categories() {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center gap-4'>
      {data.categories.map(item => (
        <section
          key={item.id}
          className='my-10 sm:my-5'
        >
          <Link href={`/store/#${item.category}`} passHref>
            <img
              loading="eager"
              decoding="async"
              className="object-contain rounded-md cursor-pointer hover:opacity-[0.85] hover:shadow-lg hover:shadow-green-500"
              src={item.src}
              alt={item.name}
            />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Categories;
