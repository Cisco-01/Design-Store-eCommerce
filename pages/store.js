import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";
import Filter from "../utils/filter";

export default function StoreScreen({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Lo siento. Servicios agotados.");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Servicios agregados al carrito");
  };
  return (
    <Layout title="Store">
      <div className="py-5 px-2 flex flex-col items-center">
        <h1
          className="fade uppercase mx-auto my-16 text-2xl
        bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-500 text-center"
        >
          MARCA LA DIFERENCIA, DISEÑANDO TU PRESENCIA{" "}
        </h1>
        <div className="relative rounded-md p-3 mb-5 mx-auto ">
          <input
            className="relative w-72 h-10 rounded-md border-gray-500 bg-gray-300 
              pl-2 text-zinc-600 focus:border-transparent outline-double outline-3 outline-offset-2 outline-gray-400
              focus:ring-transparent sm:text-sm focus:outline focus:scale-105"
            type="text"
            id="myInput"
            onKeyUp={Filter}
            title="Buscar"
            placeholder="Buscar"
          />
        </div>
        <div
          id="container"
          className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.slug}
              addToCartHandler={addToCartHandler}
            ></ProductItem>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
