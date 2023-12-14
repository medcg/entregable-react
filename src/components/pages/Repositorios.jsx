import React, { useState, useEffect } from "react";
import { API_URL } from "../../api/config";

const App = () => {
  const [search, setSearch] = useState("");
  
  const [repos, setRepos] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  const [individualSearch, setIndividualSearch] = useState(null);

  const fetchRepos = async () => {
    try {
      const response = await fetch(`${API_URL}/repo?query=${search}`);
      if (response.ok) {
        const data = await response.json();
        setRepos(data.items);
        setSearchHistory(data);
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
        body: JSON.stringify({search}),
      });

      if (response.ok) {
        const res = await response.json();
        setRepos(res.data.results)
      } else {
                console.error("Error al crear la búsqueda");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const GetRepo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/repo/${id}`, {
          headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        const data = await response.json();
        setIndividualSearch(data);
                console.log("Búsqueda obtenida con éxito");
      } else {
                console.error("Error al obtener la búsqueda");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };
    

  const DeleteRepo = async (id) => {try {
    const response = await fetch(`${API_URL}/repo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.ok) {
              console.log("Búsqueda eliminada con éxito");
    } else {
              console.error("Error al eliminar la búsqueda");
    }
  } catch (error) {
    console.error("error", error.message);
  }
};

const HandleSearch = async () => { 
  CreateRepo();
  fetchRepos();
} 

const handleDeleteUser = async (id) => {
  await DeleteUser(id);
  fetchUser();
} 

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
          onClick={HandleSearch}
        >
          Buscar
        </button>{" "}
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
            <li key={item._id}>{item.query}
            <div>
            <button onClick={() => GetRepo(item._id)}>Obtener Búsqueda</button>
        <button onClick={()=> handleDeleteUser(item._id)}>Eliminar Búsqueda</button>
      </div></li>
          ))}
        </ul>
        </div>
        {individualSearch !== null && (
        <div>
          <h4>Búsqueda actual</h4>
          <p>Id: {individualSearch._id}</p>
          <p>Query: {individualSearch.query}</p>
          <p>Timestamp: {individualSearch.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default App;
