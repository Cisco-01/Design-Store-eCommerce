import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Dirección de Envío</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Nombres</label>
          <input
            className="w-full ring-lime-400"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Ingrese nombre completo",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Dirección</label>
          <input
            className="w-full ring-lime-400"
            id="address"
            {...register("address", {
              required: "Ingrese una dirección",
              minLength: {
                value: 3,
                message: "La dirección debe tener más de dos carácteres",
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">Ciudad</label>
          <input
            className="w-full ring-lime-400"
            id="city"
            {...register("city", {
              required: "Ingrese ciudad",
            })}
          />
          {errors.city && (
            <div className="text-red-500 ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Código Postal</label>
          <input
            className="w-full ring-lime-400"
            id="postalCode"
            {...register("postalCode", {
              required: "Ingrese código postal",
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">País</label>
          <input
            className="w-full ring-lime-400"
            id="country"
            {...register("country", {
              required: "Ingrese un país",
            })}
          />
          {errors.country && (
            <div className="text-red-500 ">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button outline-double outline-3 outline-offset-2 outline-lime-500">
            Siguiente
          </button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
