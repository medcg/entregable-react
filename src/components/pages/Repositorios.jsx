import React, { useState, useEffect } from "react";
import { API_URL } from "../../api/config";

const App = () => {
  const [search, setSearch] = useState("");
  
  const [repos, setRepos] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await fetch(`${API_URL}/repo?query=${search}`);
      if (response.ok) {
        const data = await response.json();
        setRepos(data.items);
        setSearchHistory((prevHistory) => [...prevHistory, search]);
      } else {
        setRepos([]);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const CreateRepo = async () => {
    try {
      const response = await fetch(`${API_URL}/repo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
                console.log("Repositorio creado con éxito");
      } else {
                console.error("Error al crear repositorio");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const ReadRepo = async () => {
    try {
      const response = await fetch(`${API_URL}/repo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
                console.log("Repositorio leído con éxito");
      } else {
                console.error("Error al leer el repositorio");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };
    

  const DeleteRepo = async () => {try {
    const response = await fetch(`${API_URL}/repo/:id`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.ok) {
              console.log("Repositorio eliminado con éxito");
    } else {
              console.error("Error al eliminar el repositorio");
    }
  } catch (error) {
    console.error("error", error.message);
  }
};

  return (
    <div className="text-center">
      <h1 className="mt-4 mb-8 text-3xl text-blue-900">
        Busca los Repositorios
      </h1>
      <div className="flex items-center justify-center">
        <input
          className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nombre de Repositorio"
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <button
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full bg-stone-950 border-yellow-700 text-white px-4 py-2"
          onClick={fetchRepos}
        >
          Buscar
        </button>{" "}
      </div>
      <div>
        <button onClick={CreateRepo}>Crear Repositorio</button>
        <button onClick={ReadRepo}>Leer Repositorio</button>
        <button onClick={DeleteRepo}>Eliminar Repositorio</button>
      </div>
      <article>
        {repos.length > 0 ? (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </article>
     <div>
        <h2>Historial de búsquedas:</h2>
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
