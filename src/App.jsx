import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Repositorios from './components/pages/Repositorios';
import Usuarios from './components/pages/Usuarios';
import PaginaPrincipal from './components/pages/PaginaPrincipal'
import Navbar from './components/navigation/navbar';



const App = () => {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path="/Repositorios" element={<Repositorios/>} />
    <Route path="/Usuarios" element={<Usuarios />} />
    <Route path="/" element={<PaginaPrincipal />} />
    </Routes>
  </Router>
  );
}

export default App;