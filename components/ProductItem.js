/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <section className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg text-center text-black font-semibold">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className='mb-2'>${product.price}</p>
        <button
          className="primary-button outline-double outline-3 outline-offset-2 outline-lime-500"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Añadir al carrito
        </button>
      </div>
    </section>
  );
}
