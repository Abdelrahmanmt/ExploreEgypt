import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { id: crypto.randomUUID(), title: "Facebook", to: "/facebook" },
    { id: crypto.randomUUID(), title: "Twitter", to: "/twitter" },
    { id: crypto.randomUUID(), title: "Instagram", to: "/instagram" },
  ];
  return (
    <footer className="py-10">
      <div className="container">
        <ul className="flex items-center justify-center lg:justify-end gap-4 ">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className="duration-200 transition-colors text-base opacity-[70%] hover:opacity-[100%] text-white "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
