import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repositorios from "./components/pages/Repositorios";
import Usuarios from "./components/pages/Usuarios";
import PaginaPrincipal from "./components/pages/PaginaPrincipal";
import Navbar from "./components/navigation/navbar";


const App = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/Repositorios"
          element={
            <Repositorios
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
            />
          }
        />
        <Route
          path="/Usuarios"
          element={
            <Usuarios
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
            />
          }
        />
        <Route path="/" element={<PaginaPrincipal />} />
      </Routes>
    </Router>
  );
};

export default App;
