import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Repositorios from './components/pages/Repositorios';
import Usuarios from './components/pages/Usuarios';
import PaginaPrincipal from './components/pages/PaginaPrincipal'


const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/repos" element={<Repositorios />} />
    <Route path="/users" element={<Usuarios />} />
    <Route path="/" element={<PaginaPrincipal />} />
    </Routes>
  </Router>
  );
}

export default App;