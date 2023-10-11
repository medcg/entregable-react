import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-2.5 bg-yellow-400 flex flex-row">
      <ul className="flex flex-space-x-4">
        <li className="mx-2">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            PaginaPrincipal
          </Link>
        </li>

        <li className="mx-2">
          <Link to="/usuarios" className="text-blue-500 hover:text-blue-700">
            Usuarios
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/repositorios"
            className="text-blue-500 hover:text-blue-700"
          >
            Repositorios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
