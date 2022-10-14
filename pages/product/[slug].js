import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Servicio no encontrado</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. No hay servicios en stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <div className="container m-auto mt-4 px-4">
        <Link href="/">
          <button className="my-3 border-b-2 border-b-lime-500">
            Regresar a los servicios
          </button>
        </Link>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2 mx-auto">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              objectFit="contain"
              className="rounded-md"
            ></Image>
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg font-semibold">{product.name}</h1>
              </li>
              <li>Categoria: {product.category}</li>
              <li>Marca: {product.brand}</li>
              <li>
                {product.rating} de {product.numReviews} vistas
              </li>
              <li>Descripción: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Precio</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Estado</div>
                <div>
                  {product.countInStock > 0 ? "En stock" : "No disponible"}
                </div>
              </div>
              <button
                className="primary-button w-full outline-double outline-3 outline-offset-2 outline-lime-500"
                onClick={addToCartHandler}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
