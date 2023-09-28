import React from 'react';
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  return (
    <div>
      <h1>Bienvenido a la Página Principal</h1>
      <p>Esta es la página principal de tu aplicación.</p>
      <p>
        Puedes navegar a{' '}
        <Link to="/usuarios">Usuarios</Link> o{' '}
        <Link to="/repositorios">Repositorios</Link> utilizando los enlaces de navegación.
      </p>
    </div>
  );
}

export default PaginaPrincipal;

