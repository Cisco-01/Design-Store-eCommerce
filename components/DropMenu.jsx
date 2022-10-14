import { Menu } from "@headlessui/react";

import DropdownLink from "./DropdownLink";
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  ShoppingBagIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";

function DropMenu() {
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
    <div className="flex md:hidden">
      {status === "cargando" ? (
        "Cargando"
      ) : session?.user ? (
        <Menu as="div" className="relative inline-block ml-5">
          <Menu.Button
            className="hover:rounded-md 
                cursor-pointer p-2 my-2
                hover:shadow-md hover:text-lime-500 hover:scale-110
                hover:duration-500"
          >
            <Bars3Icon className="h-6 w-6" />
          </Menu.Button>

          <Menu.Items className="rounded absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/store">
                <ShoppingBagIcon className="h-6 mr-1 hover:text-zinc-500" />
                Store
              </DropdownLink>
            </Menu.Item>

            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/cart">
                <ShoppingCartIcon className="h-6 mr-1 hover:text-zinc-500" />
                Cart
                {cartItemsCount > 0 && (
                  <span
                    className="absolute ml-16 mb-6 rounded-full bg-lime-500 px-2 py-1 
                    text-xs font-bold text-slate-200"
                  >
                    {cartItemsCount}
                  </span>
                )}
              </DropdownLink>
            </Menu.Item>

            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/profile">
                <UserCircleIcon className="h-6 mr-1 hover:text-zinc-500" />
                Perfil
              </DropdownLink>
            </Menu.Item>
            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/order-history">
                <ClipboardDocumentListIcon className="h-6 mr-1 hover:text-zinc-500" />
                Historial de Pedidos
              </DropdownLink>
            </Menu.Item>

            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/contact">
                <MapPinIcon className="h-6 mr-1 hover:text-zinc-500" />
                Contact
              </DropdownLink>
            </Menu.Item>
            {session.user.isAdmin && (
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/admin/dashboard">
                  <ShieldCheckIcon className="h-6 mr-1 hover:text-zinc-500" />
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
                <ArrowLeftOnRectangleIcon className="h-6 mr-1 hover:text-red-500" />
                Cerrar Sesión
              </a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      ) : (
        <Link href="/login" passHref>
          <button
            className="hover:rounded-md 
                cursor-pointer mr-10
                hover:shadow-md hover:text-red-400 hover:scale-110
                hover:duration-500"
          >
            Login
          </button>
        </Link>
      )}
    </div>
  );
}

export default DropMenu;
