import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { socialMedia } from "../../services/database";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed flex flex-col justify-between top-0 left-0 h-svh w-full bg-black/50 backdrop-blur-sm text-white text-lg p-6 md:w-96"
      >
        <div>
          <p className="text-2xl font-bold md:text-3xl">Sandi Sopian</p>
          <p className="mb-6">Web Developer</p>
        </div>

        <div className="flex justify-between items-center">
          <nav>
            <ul className="space-y-4">
              {Links.map((link, index) => (
                <li key={index} className="hover:text-gray-300 cursor-pointer">
                  <NavLink to={link.link} className={({ isActive }) => (isActive ? "border-b-2 hover:text-gray-300 cursor-pointer text-4xl" : " font-normal")}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button className="absolute right-6 text-gray-400 bg-gray-700 p-2 rounded-full hover:text-white cursor-pointer" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="bottom-6 left-6">
          {socialMedia.map((social, index) => (
            <a key={index} href={social.socialMediaLink} target="_blank" rel="noreferrer" className="mr-2 hover:text-gray-300 cursor-pointer">
              {social.socialMediaName}
            </a>
          ))}
        </div>
      </motion.div>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 h-svh bg-white/30 backdrop-sepia-0 text-white w-24 md:w-32 flex flex-col items-center justify-between py-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold">SS</h1>

          <button className="mt-6 text-gray-700 hover:text-white cursor-pointer" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>

          <div></div>
        </motion.div>
      )}
    </>
  );
}
