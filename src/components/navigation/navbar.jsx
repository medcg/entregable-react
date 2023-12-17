import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-2.5 bg-yellow-400 flex justify-center">
      <ul className="flex space-x-8">
        <li className="mx-2">
          <Link to="/" className="text-blue-800 hover:text-blue-700">
            PaginaPrincipal
          </Link>
        </li>

        <li className="mx-2">
          <Link to="/usuarios" className="text-blue-800 hover:text-blue-700">
            Usuarios
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/repositorios"
            className="text-blue-800 hover:text-blue-700"
          >
            Repositorios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
