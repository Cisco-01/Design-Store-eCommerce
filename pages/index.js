import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import data from "../utils/data";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="grid md:grid-cols-2 m-auto space-x-8 space-y-8 h-full
            bg-[url('https://1.bp.blogspot.com/-_B1NQqcUjG4/X58l93-TU-I/AAAAAAAAIAc/D464CPe7jjEm0XrZ7HNSNE8CsUPE2GBfQCLcBGAsYHQ/s960/background-ppt-white-shades.jpg')] bg-cover bg-fixed bg-no-repeat"
      >
        {data.services.map((item) => (
          <div
            key={item.id}
            className="px-4 m-auto text-center items-center normal-case text-lg text-stone-900"
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
      <Footer />
    </>
  );
};

export default Home;
