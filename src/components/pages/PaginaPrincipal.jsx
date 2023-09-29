import React from 'react';
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  return (
    <div>
      <h1>Buscador de GitHub</h1>
      <p>En este buscador puedes localizar tanto los usuarios como los repositorios de la manera más rápida y eficaz.</p>
      <p>
        Puedes navegar a{' '}
        <Link to="/usuarios">Usuarios</Link> o{' '}
        <Link to="/repositorios">Repositorios</Link> utilizando los enlaces de navegación.
      </p>
    </div>
  );
}

export default PaginaPrincipal;

