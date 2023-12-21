import React from 'react';
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  return (
    <div>
      <h1 className="text-3xl text-center text-blue-900 mt-4 mb-4 shadow-2xl">GITHUB SEARCHER</h1>
      <p className=" mt-4 mb-4 text-center text-blue-900 shadow-2xl">En este buscador puedes localizar tanto los usuarios como los repositorios de la manera más rápida y eficaz.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub Invertocat Logo.svg" className="w-auto mx-auto rounded-md shadow-2xl" /> 
    </div>
  );
}

export default PaginaPrincipal;

