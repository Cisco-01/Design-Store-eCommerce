import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl items-center text-center">Crear Cuenta</h1>
        <div className="mb-4">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="w-full ring-lime-400"
            id="name"
            autoFocus
            {...register("name", {
              required: "Ingrese su nombre",
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Ingrese correo electrónico",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Ingrese un correo electrónico válido",
              },
            })}
            className="w-full ring-lime-400"
            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Ingrese contraseña",
              minLength: { value: 6, message: "La contraseña debe contener más de 5 dígitos" },
            })}
            className="w-full ring-lime-400"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            className="w-full ring-lime-400"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirme su contraseña",
              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "La contraseña debe contener más de 5 dígitos",
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <div className="text-red-500 ">Las contraseñas no coinciden</div>
            )}
        </div>

        <div className="mb-4 items-center text-center">
          <button
            className="px-3 py-1 mx-auto uppercase mt-3 bg-stone-900 hover:scale-105 shadow-md
          rounded-full text-gray-50 hover:text-black hover:bg-lime-500 transition duration-500 ease-in-out
          outline-double outline-3 outline-offset-2 outline-lime-500 hover:outline-transparent"
          >
            Register
          </button>
        </div>
        <div className="mb-4 items-center text-center">
          Ya tiene una cuenta? &nbsp;
          <Link href={`/login?redirect=${redirect || "/"}`}>Iniciar Sesión</Link>
        </div>
      </form>
    </Layout>
  );
}
