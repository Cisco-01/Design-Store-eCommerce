import bcrypt from "bcryptjs";
import {
  SwatchIcon,
  FingerPrintIcon,
  GiftIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const data = {
  users: [
    {
      name: "Giovanni",
      email: "giovanni@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "User1",
      email: "user1@hotmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  services: [
    {
      id: 1,
      title: "gigantografías y Displays",
      icon: <SwatchIcon />,
      url: "gigantografias",
      desc:
        "Roll Screen, Display Wall Curvo y Recto, Parante araña X-Banner " +
        "Stand, entre otros. Todas nuestras Gigantografías cuentan con 1440 " +
        "displays a 6 pasadas, especial para imagenes " +
        "y proyectos con acabado A-1. Nuestra calidad de " +
        "resolución 1200 dpi, ideal en carteles exteriores, frontis de " +
        "empresas o tiendas comerciales hasta 3.2 metros de ancho. " +
        "Backing portatil especial para Stand en Ferias y " +
        "Eventos.",
    },
    {
      id: 2,
      title: "Imprenta INKJET y a color",
      icon: <FingerPrintIcon />,
      url: "impresiones",
      desc:
        "OffSet para todo tipo de impresión de material gráfico y publicitario " +
        "como volantes, flyers, folletos, trípticos, cartas menu y más. " +
        "Impresión de stickers adhesivos y etiquetas a full color en papel " +
        "Couche adhesivo, papel adhesivo mate, vinil adhesivo. Impresión de " +
        "Fotochecks y Credenciales con color de alta calidad, Con Portas, " +
        "Cintas con logo personalizado.",
    },
    {
      id: 3,
      title: "Articulos Promocionales",
      icon: <GiftIcon />,
      url: "promocionales",
      desc:
        "Articulos promocionales y regalos con personalizaciones corporativas, " +
        "polos, poleras, rompecabezas cojines, tazas y muchas cosas personalizadas más. " +
        "También realizamos imanes publicitarios, impresión de imantado vehicular a full color en vinilo magnético.",
    },

    {
      id: 4,
      title: "Diseño y desarrollo Web",
      icon: <GlobeAltIcon />,
      url: "web-pages",
      desc:
        "Contamos con la mejor infraestructura del pais, planes escalonados a la medida de su empresa. " +
        "Asesoría y Soporte técnico. No pierda dinero ni negocios por correos no recibidos o por tener su página " +
        "web fuera de línea debido a un servicio de hosting que no reune los estándares de calidad que nosotros sí ofrecemos.",
    },
  ],
  gigantografiasImgs: [
    {
      id: 1,
      name: "Impresión digital en gran formato",
      desc:
        "Gigantografías en gran formato en alta calidad para su publicidad interior y exterior en diversos materiales como: " +
        "Banner Frontlit, Vinil adhesivo blockout, Vinil arenado y/o pavonado, Canvas (Lienzo), Papel Sintetico mate, Papel Perlado, Papel Fotográfico y Aplicaciones de Vinil Adhesivo reforzado en Sintra.",
      bigImg:
        "https://content.app-sources.com/s/2957537951454028/uploads/Vinil_Impreso/impresion-en-gran-formato-8032575.png",
    },
    {
      id: 2,
      name: "Roll Up Banner Luxury",
      desc:
        "Roll Up Banner Luxury 100 x 200 con impresión." +
        "Display publicitario para pequeñas áreas de exposición, especial para eventos. Impreso en banner liso 13 onz. BlockOut Mate en alta resolución 1440 dpi calidad fotográfica. Incluye maletin de transporte.",
      bigImg:
        "https://freepikpsd.com/file/2019/10/standee-png-4-Transparent-Images-300x197.png",
    },
    {
      id: 3,
      name: "Display Wall Curvo y Recto Backing",
      desc: "Display Wall Curvo y recto con impresión, Backing portatil para Empresas, stands, eventos y ferias, Display Publicitario portatil impreso en alta resolución 1440 dpi, incluye maletin, reflectores y las gráficas impresas. Estructura araña de aluminio, incluyen maletín de cargo, 2 reflectores.",
      bigImg:
        "https://rollscreen.pe/wp-content/uploads/2020/04/productos-eslader-2.png",
    },
  ],
  impresionesImgs: [
    {
      id: 1,
      name: "Impresión en vinil adhesivo",
      desc: "Impresión en vinil adhesivo de alta resolución 1440 dpi full color con tintas eco-solventes para mayor duración. Servicio de Laminado Mate, Brillante, Laminado alto transito, texturado, Laminado 3D Diamante al calor.",
      bigImg: "https://impresionacr.com/wp-content/uploads/Adhesivo.png",
    },
    {
      id: 2,
      name: "Laminado mate o brillante (Glossy)",
      desc: "Servicio de Laminado Mate, Brillante, Laminado alto transito, 3D, texturado, Diamante 3D al frio o al calor. Aplicables sobre Vinil Adhesivo, Lona Front (Banner), Lona Traslucida, Backlight Film, Polietileno.",
      bigImg:
        "https://img2.exportersindia.com/product_images/bc-full/dir_22/654346/cast-and-cure-holographic-film-1980506.jpg",
    },
    {
      id: 3,
      name: "Cajas de luz y Letreros luminosos",
      desc: "Diseño, impresión, fabricación e instalación de cajas de luz y letreros luminosos.",
      bigImg:
        "https://anunciosluminososdemexico.com/assets/images/anuncios/multiples-anuncios-luminosos-letreros3d-cajasdeluz-letreros-luminosos-iluminados.png",
    },
    {
      id: 4,
      name: "Tarjetas personales y cartulinas ecológicas",
      desc: "Impresos en papeles reciclados Flora, cartulinas Kimberly y Papeles Finos. Tarjetas sectorizadas, tarjetas pavonadas semi transparentes, tarjetas hot stamping pan de oro y plata",
      bigImg:
        "https://www.anzueloestudio.pe/img/servicios/tarjetas-presentacion-personales-3.png",
    },
  ],
  promocionalesImgs: [
    {
      id: 1,
      name: "Tazas Personalizadas",
      desc: "Mugs y tazas personalizadas para todo tipo de ocasión. Diseños especiales para el día del padre, de la madre, del niño, para personal administrativo y empresas.",
      bigImg: "https://artegrafiuk.com/wp-content/uploads/2020/06/todos.png",
    },
    {
      id: 2,
      name: "Polos Personalizados",
      desc:
        "T-Shirts,polos personalizados" +
        "Hoodies y poleras personalizadas para todo tipo de ocasión. Diseños especiales para el día del padre, de la madre, del niño, para personal administrativo y empresas.",
      bigImg:
        "https://static.wooweb.site/media/sites/315/2021/01/Banner-1000-x-562-Polos-personalizados-01.png",
    },
  ],
  webpagesImgs: [
    {
      id: 1,
      name: "Hosting Plan Básico",
      size: "650 MB de espacio",
      speed: "Hasta 5 GB transf/mensual",
      price: "40.00",
    },
    {
      id: 2,
      name: "Hosting Plan Empresarial",
      size: "1,500 MegaBytes de espacio",
      speed: "Hasta 9 GB transf/mensual",
      price: "60.00",
    },
    {
      id: 3,
      name: "Hosting Plan Corporativo",
      size: "3 GB de espacio",
      speed: "21 GB transf/mensual",
      price: "80.00",
    },
    {
      id: 4,
      name: "Hosting Plan Premium",
      size: "6 GB de espacio",
      speed: "60 GB transf/mensual",
      price: "120.00",
    },
  ],
};

export default data;
