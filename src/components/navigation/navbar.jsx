import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/repos">Repositorios</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
