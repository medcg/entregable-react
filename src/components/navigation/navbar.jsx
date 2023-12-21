import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-2.5 bg-orange-600 flex justify-center">
      <ul className="flex space-x-8">
        <li className="mx-2">
          <Link
            to="/"
            className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out rounded-full py-2 px-4"
          >
            Pagina Principal
          </Link>
        </li>

        <li className="mx-2">
          <Link
            to="/usuarios"
            className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out rounded-full py-2 px-4"
          >
            Usuarios
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/repositorios"
            className="text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out rounded-full py-2 px-4"
          >
            Repositorios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
