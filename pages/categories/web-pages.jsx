import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../utils/data";

function WebPages() {
  return (
    <>
      <Header />
      <div
        className="px-2 flex flex-col items-center mx-auto h-srceen text-center
    bg-[url('https://www.espacios.net.mx/wp-content/uploads/2017/10/2017-09-19-11.48.22.jpg')] bg-center bg-fixed"
      >
        <div className="w-screen lg:h-screen bg-gradient-to-t from-transparent to-black px-4">
          <h1 className="uppercase my-5 text-5xl text-gray-200">
            Hosting Económico desde 140 Soles al año
          </h1>
          <p className="text-2xl text-gray-400 mx-auto mb-3">
            Alojamiento Web en Servidores Linux registro de dominios .com, .pe.
            Contamos con la mejor infraestructura del pais, planes escalonados a
            la medida de su empresa. Asesoría y Soporte técnico.
          </p>
          <div className="w-56 mx-auto mt-5">
            <a
              className="primary-button outline-double outline-3 outline-offset-2 outline-lime-500 flex"
              href="https://api.whatsapp.com/send?phone=51938151392&text=Hey%2C%20quiero%20un%20diseño!"
              target="_blank"
              rel="noopener noreferrer"
            >
              REALIZAR COTIZACIÓN
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-green-800 hover:fill-black ml-2 w-5 h-auto"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <div
            className="w-full p-2 grid md:grid-cols-2 lg:flex items-center justify-center
    py-5 px-5 cursor-default mx-auto lg:space-x-12"
          >
            {data.webpagesImgs.map((item) => (
              <div key={item.id} className="my-8">
                <h1 className="my-2 uppercase font-bold text-xl text-gray-200">
                  {item.name}
                </h1>
                <ul className="text-gray-50 text-center justify-between">
                  <li>{item.size}</li>
                  <li>{item.speed}</li>
                  <li>+ E-mail Ilimitados</li>
                  <li>${item.price}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WebPages;
