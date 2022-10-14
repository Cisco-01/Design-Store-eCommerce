import DropdownLink from "./DropdownLink";
import BtnWsp from "./BtnWsp";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Store } from "../utils/Store";
import {
  MapPinIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import DropMenu from "./DropMenu";

function Header() {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <header className="sticky top-0 z-50 bg-slate-200">
      <nav className="flex h-24 items-center px-12 justify-between shadow-md">
        <Link href={`/`} passHref>
          <div className="lg:ml-5 txtHeader text-4xl flex space-x-2">
            <span
              className="text-stone-900 hover:text-lime-500 
        cursor-pointer"
            >
              GIOVANNI&quot;S
            </span>
            <span
              className="text-lime-500 hover:text-stone-900 
        cursor-pointer"
            >
              DESIGN
            </span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center text-lg">
          <Link href="/store" passHref>
            <div className="p-2 flex items-center cursor-default">
              Store
              <ShoppingBagIcon className="h-5 w-5 cursor-pointer hover:text-lime-500" />
            </div>
          </Link>

          <Link href="/cart" passHref>
            <div className="p-2 flex items-center cursor-default">
              Cart
              <ShoppingCartIcon className="h-5 w-5 cursor-pointer hover:text-lime-500" />
              {cartItemsCount > 0 && (
                <span
                  className="absolute ml-12 mb-6 rounded-full bg-lime-500 px-2 py-1 
                    text-xs font-bold text-slate-200"
                >
                  {cartItemsCount}
                </span>
              )}
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div className="p-2 flex items-center cursor-default">
              Contact
              <MapPinIcon className="h-5 w-5 cursor-pointer hover:text-lime-500" />
            </div>
          </Link>

          {status === "cargando" ? (
            "Cargando"
          ) : session?.user ? (
            <Menu as="div" className="relative inline-block">
              <Menu.Button
                className="hover:rounded-md 
                    cursor-pointer p-2 my-2
                    hover:shadow-md hover:text-lime-500 hover:scale-110
                    hover:duration-500"
              >
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="rounded absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/profile">
                    Perfil
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/order-history">
                    Historial de Pedidos
                  </DropdownLink>
                </Menu.Item>
                {session.user.isAdmin && (
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/admin/dashboard"
                    >
                      Admin Dashboard
                    </DropdownLink>
                  </Menu.Item>
                )}
                <Menu.Item>
                  <a
                    className="dropdown-link"
                    href="#"
                    onClick={logoutClickHandler}
                  >
                    Cerrar Sesión
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/login" passHref>
              <button
                className="hover:rounded-md 
                    cursor-pointer p-2 my-2
                    hover:shadow-md hover:text-red-400 hover:scale-110
                    hover:duration-500"
              >
                Login
              </button>
            </Link>
          )}
        </div>
        <DropMenu />
        <BtnWsp />
      </nav>
    </header>
  );
}

export default Header;
