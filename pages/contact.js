import DatosEmpresa from "../components/DatosEmpresa";
import Map from "../components/Map";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout title="Shopping Cart">
      <div className="my-2 top-0">
        <h1 className="text-center uppercase font-thin text-3xl">Ubícanos</h1>
      </div>
      <Map />
      <DatosEmpresa />
    </Layout>
  );
}

export default Contact;
