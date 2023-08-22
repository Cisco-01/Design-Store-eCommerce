//import DatosEmpresa from "../components/DatosEmpresa";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSession } from "next-auth/react";

function Cotizacion() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [ruc, setRuc] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [subject, setSubject] = useState("");

  const contactEmail = "giovcasle@gmail.com";

  const { data: session } = useSession();
  const {
    register,
    formState: { errors },
  } = useForm();

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(session.user.name)} (${encodeURIComponent(
        session.user.email
      )}): ${encodeURIComponent(mensaje)}`
    );
  };
  return (
    <Layout title="Cotizacion">
      <section id="contactform" className="flotarFormDerecha">
        <div className="my-2 top-0">
          <h1 className="text-center uppercase font-thin text-3xl">
            Solicita tu cotización
          </h1>
        </div>
        <form name="contactform" id="form" method="post" onSubmit={submitForm}>
          <fieldset>
            <div className="mb-4">
              <label htmlFor="empresa">EMPRESA</label>
              <input
                id="empresa"
                autoFocus
                className="w-full"
                name="empresa"
                placeholder="Razón Social"
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ruc">RUC</label>
              <input
                id="ruc"
                autoFocus
                className="w-full"
                name="ruc"
                placeholder="N° RUC"
                type="text"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="w-full"
                id="name"
                autoFocus
                value={session?.user ? session.user.name : nombre}
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                {...register("name")}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="w-full"
                id="email"
                placeholder="Email"
                value={session?.user ? session.user.email : email}
                onChange={(e) => setEmail(e.target.value)}
                {...register("email")}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <select name="distrit" className="text">
              <option value="elegir">Elegir Distrito</option>
              <option value="Cercado">Piura</option>
              <option value="Ancon">Sullana</option>
              <option value="Ate">Paita</option>
              <option value="Barranco">Talara</option>
              <option value="Breña">Olmos</option>
              <option value="Carabayllo ">Catacaos </option>
              <option value="Comas">La Unión</option>
            </select>
            <label className="phno">
              <input
                className=""
                name="phno"
                placeholder="Teléfono"
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <br />
            </label>
            <select name="dept" className="text">
              <option value="elegir">Elegir Servicio</option>
              <option value="offset">Imprenta en General</option>
              <option value="color">Impresión a Color</option>
              <option value="gigantografias">Gigantografías</option>
              <option value="displays">Displays Publicitarios</option>
              <option value="fotocheck">Fotochecks</option>
              <option value="grafico">Diseño Gráfico</option>
              <option value="web">Páginas Web</option>
              <option value="hosting">Hosting</option>
            </select>

            <div>
              <label htmlFor="contactSubject">Asunto</label>
              <input
                type="text"
                defaultValue=""
                value={subject}
                size="35"
                placeholder="Asunto"
                id="contactSubject"
                name="contactSubject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <label className="msg">
              <textarea
                className="text"
                name="msg"
                placeholder="Descripción: Para una rápida y mejor cotización, necesitamos información básica como: cantidades, medidas, tipo de material, acabados."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </label>
            <button
              onClick={submitForm}
              type="submit"
              className="py-3 w-80 mx-auto uppercase cursor-pointer my-3 bg-stone-900 hover:scale-105 shadow-md
              rounded-full text-gray-50 hover:text-black hover:bg-green-500 transition duration-500 ease-in-out
              outline-double outline-3 outline-offset-2 outline-green-500 hover:outline-transparent"
            >
              Enviar mensaje
            </button>
          </fieldset>
        </form>
      </section>

      {/*<DatosEmpresa />*/}
    </Layout>
  );
}

export default Cotizacion;
