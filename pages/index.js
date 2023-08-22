import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Categories from '../components/Categories';

function Home({ title }) {
  return (
    <Layout title={title}>
      <Banner />

      {/* BEST SELLERS */}
      

      {/* CATEGORIAS */}
      <Categories />
    </Layout>
  );
}

export default Home;
