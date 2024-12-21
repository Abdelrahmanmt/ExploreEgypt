/* eslint-disable no-restricted-globals */
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: crypto.randomUUID(), title: "Explore", to: "/explore" },
    { id: crypto.randomUUID(), title: "ChatBot", to: "/chatbot" },
    { id: crypto.randomUUID(), title: "Contact", to: "/contact" },
    { id: crypto.randomUUID(), title: "About Us", to: "/about" },
  ];
  return (
    <header className="py-4">
      <nav className="navbar">
        <div
          onClick={() => setOpenMenu(true)}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="text-white w-6 h-6" />
        </div>
        <div className="navbar-menu">
          <Link to="/">Logo</Link>
        </div>
        <ul
          className={`fixed lg:static top-0 ${
            openMenu ? "left-0 z-50" : "-left-full"
          } px-10 py-20 lg:p-0 bg-black lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center lg:justify-center gap-10 flex-1`}
        >
          <div
            onClick={() => setOpenMenu(false)}
            className="lg:hidden absolute right-10 cursor-pointer"
          >
            <XMarkIcon className="text-white w-6 h-6" />
          </div>
          {links.map((link) => (
            <li>
              <Link
                to={link.to}
                style={{
                  color: location.pathname === link.to ? "#FFD400" : "",
                }}
                onClick={() => setOpenMenu(false)}
                className="hover:text-[#FFD400] transition-colors duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
