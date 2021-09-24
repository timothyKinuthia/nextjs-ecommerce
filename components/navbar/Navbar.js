import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();

  const navLinks = [
    { name: "Cart", icon: <AiOutlineShoppingCart />, link: "/cart" },
    { name: "Login", icon: <AiOutlineUser />, link: "/login" },
  ];

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="py-3 px-4 sm:px-8 flex-col sm:flex-row justify-center">
      <div className="w-full py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-3xl font-bold">
            DUKA<span className="font-pocifico">poa</span>
          </a>
        </Link>
        <div className="hidden sm:block w-1/4">
          <input
            type="text"
            className="w-full border-b border-black py-1 px-2 focus:outline-none"
            placeholder="Enter to search"
          />
        </div>
        <div className="lg:w-1/6 flex justify-between items-center space-x-4">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.link}>
              <a
                key={i}
                className="relative group flex items-center space-x-1 text-xl cursor-pointer"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
                {link.name === "Cart" && (
                  <span className="absolute -top-3.5 -right-4 bg-red text-white font-semibold text-sm py-0.5 px-2 rounded-full">
                    0
                  </span>
                )}
                <span className="absolute w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition ease-bloop duration-400 rounded-sm h-0.5 -bottom-1"></span>
                {isActive(link.link) && (
                  <span className="absolute w-full bg-black rounded-sm h-0.5 -bottom-1"></span>
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="sm:hidden my-4 flex justify-center">
        <input
          type="text"
          className="w-full border-b border-black py-1 px-2 focus:outline-none"
          placeholder="Enter to search"
        />
      </div>
    </div>
  );
};

export default Navbar;
