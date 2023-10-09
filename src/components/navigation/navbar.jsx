import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">PaginaPrincipal</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/repositorios">Repositorios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
