import { useState, type FC } from "react";

import logo from "@images/logo.svg";
import cart from "@images/icon-cart.svg";
import avatar from "@images/image-avatar.png";
import menu from "@images/icon-menu.svg";
import close from "@images/icon-close.svg";

const navItems = [
  { id: 1, title: "Collections" },
  { id: 2, title: "Men" },
  { id: 3, title: "Women" },
  { id: 4, title: "About" },
  { id: 5, title: "Contact" },
];

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="flex py-10 w-[90%] mx-auto justify-between items-center border-b-2">
      <div className="flex sm:gap-5 items-end">
        <img
          className="md:hidden cursor-pointer object-contain h-5"
          onClick={handleToggleMenu}
          src={menu}
          alt="menu-icon"
        />
        <img
          className="w-[100%] h-[22px] mr-10 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <ul className="hidden md:flex gap-6 ">
          {navItems.map((item) => (
            <li className="cursor-pointer" key={item.id}>
              <a
                className="text-darkGrayishBlue transition-all hover:border-b-4
               border-orange hover:pb-[52px] hover:text-black"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul
        className={`${
          toggleMenu ? "hidden" : "block"
        } md:hidden bg-white absolute top-0 left-0 z-10 w-[70%] h-[100vh] pt-[100px] pl-6 space-y-6 font-[700] text-[18px]`}
      >
        <img
          onClick={handleToggleMenu}
          className="-mt-[75px] mb-14 md:hidden object-contain cursor-pointer"
          src={close}
          alt="menu"
        />
        {navItems.map((item) => (
          <li className="cursor-pointer" key={item.id}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-7 ">
        <img className="h-5 cursor-pointer" src={cart} alt="cart" />
        <img
          className="h-[50px] cursor-pointer transition-all border-4 border-transparent
           rounded-full hover:border-orange "
          src={avatar}
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
