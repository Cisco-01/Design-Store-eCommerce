import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import MetodoPago from './MetodosPago';

function Footer() {
  return (
    <footer className="h-full shadow-inner bg-neutral-900 text-[#f0ffff] flex-wrap">
      <div className="my-2 top-0">
        <h2 className="text-center uppercase font-thin text-3xl">CONTACTO</h2>
      </div>
      <div className="text-center px-2">
        <div className="flex mx-auto text-center justify-center items-center gap-2">
          <Link href="/contact" passHref>
            <h3 className="flex cursor-pointer text-green-500 hover:text-purple-500">
              Ver mapa
            </h3>
          </Link>
          {" | "}
          <p className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-1 my-2 hidden sm:flex" />
            contact@geekshop.com
          </p>
          {" | "}
          <p className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-1 my-2 hidden sm:flex" />
            938151392
          </p>
        </div>
        <p>Chiclayo, Perú</p>
        <p className='text-neutral-400'>Lun a Sab 9:00 am a 8:00 pm, Dom 9:00 am a 3:00 pm</p>
      </div>
      <MetodoPago />
      <p className="bottom-0 text-left pl-5 my-2">
        © 2023 Geek Shop
      </p>
    </footer>
  );
}

export default Footer;
