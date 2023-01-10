import Link from 'next/link';
import Layout from '../components/Layout';
import data from '../utils/data';

function Home({ title }) {
  return (
    <Layout title={title}>
      <div className="grid md:grid-cols-2 min-h-screen w-full m-auto">
        {data.services.map(item => (
          <div
            key={item.id}
            className="px-4 m-auto text-center items-center normal-case text-lg text-stone-900 justify-center"
          >
            <div className="h-14 w-14 m-auto mb-3 hover:text-gray-600">
              {item.icon}
            </div>
            <p className="px-5 mb-2">{item.desc}</p>
            <Link href={`/categories/${item.url}`} passHref>
              <button className="my-5 primary-button outline-double outline-3 outline-offset-2 outline-lime-500">
                <p>{item.title}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
