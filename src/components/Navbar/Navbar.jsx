import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed flex flex-col justify-between top-0 left-0 h-svh w-full bg-white/30 backdrop-sepia-0 text-white text-lg p-6 md:w-96"
      >
        <div>
          <p className="text-lg font-bold md:text-3xl">Sandi Sopian</p>
          <p className="mb-6">Creative Developer</p>
        </div>

        <div className="flex justify-between items-center">
          <nav>
            <ul className="space-y-4">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Work</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </nav>

          <button className="absolute right-6 text-gray-400 bg-gray-700 p-2 rounded-full hover:text-white" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="bottom-6 left-6">
          <a href="#" className="mr-4 hover:text-white">
            Email
          </a>
          <a href="#" className="mr-4 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            Mighty
          </a>
        </div>
      </motion.div>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 h-svh bg-white/30 backdrop-sepia-0 text-white w-16 flex flex-col items-center justify-between py-6 md:w-32"
        >
          <h1 className="text-lg md:text-3xl font-semibold">SS</h1>

          <button className="mt-6 text-gray-700 hover:text-white" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>

          <div></div>
        </motion.div>
      )}
    </>
  );
}
