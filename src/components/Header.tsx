import { useState } from "react";
import { Cart } from "./Icons/Cart";
import { Logo } from "./Icons/Logo";
import { Menu } from "./Icons/Menu";
import { AnimatePresence, motion } from "framer-motion";
import { Close } from "./Icons/Close";
import { useSelector } from "react-redux";
import { CartProduct } from "../store/features/cart";
import { SideBar } from "./SideBar";
import { CartHeader } from "./CartHeader";

export function Header() {
  const [isNaviOpen, setIsNaviOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleChangeNaviOpenState() {
    setIsNaviOpen(!isNaviOpen);
  }

  function handleOpenCart() {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  }

  return (
    <header className="flex w-full justify-center">
      <div className=" lg:after:content-[''] lg:after:border-[1px] lg:after:w-[80%]  md:after:w-[100%] lg:after:border-gray-100 flex-col flex h-20 items-center lg:h-36 w-full md:w-[80%]">
        <div className="flex items-center h-[100%] justify-around gap-16 md:gap-20  w-full">
          <div className="lg:hidden flex items-center gap-3">
            <Menu
              className="cursor-pointer"
              onClick={handleChangeNaviOpenState}
            />
            <AnimatePresence>
              {isNaviOpen && (
                <SideBar onChangeOpenState={handleChangeNaviOpenState} />
              )}
            </AnimatePresence>
            <Logo />
          </div>
          <div className="lg:flex hidden items-center gap-20 ">
            <Logo />
            <nav className="flex gap-8 text-gray-300">
              <a className="group hover:text-gray-600 cursor-pointer">
                Collections
                <span className="group-hover:border-orange-400 w-[100%] block relative top-14 border-t-4 border-transparent" />
              </a>

              <a className=" group hover:text-gray-600 cursor-pointer">
                Men
                <span className="group-hover:border-orange-400 w-[100%] block relative top-14 border-t-4 border-transparent" />
              </a>

              <a className="group hover:text-gray-600 cursor-pointer">
                Women
                <span className="group-hover:border-orange-400 w-[100%] block relative top-14 border-t-4 border-transparent" />
              </a>

              <a className="group hover:text-gray-600 cursor-pointer">
                About
                <span className="group-hover:border-orange-400 w-[100%] block relative top-14 border-t-4 border-transparent" />
              </a>

              <a className="group hover:text-gray-600 cursor-pointer">
                Contact
                <span className="group-hover:border-orange-400 w-[100%] block relative top-14 border-t-4 border-transparent" />
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-6">
              <Cart onClick={handleOpenCart} />
              <span className="bg-gray-800 rounded-full w-12 h-12" />
            </div>
            <div className="flex lg:gap-12 gap-6 items-center 2xl:ml-[31rem] ml[50%]">
              {isCartOpen && <CartHeader />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
