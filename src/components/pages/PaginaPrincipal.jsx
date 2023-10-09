import React from 'react';
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  return (
    <div>
      <h1>Buscador de GitHub</h1>
      <p>En este buscador puedes localizar tanto los usuarios como los repositorios de la manera más rápida y eficaz.</p>
      <p>
        Puedes navegar a{' '}
        <Link to="/Usuarios">Usuarios</Link> o{' '}
        <Link to="/Repositorios">Repositorios</Link>
      </p>
    </div>
  );
}

export default PaginaPrincipal;

