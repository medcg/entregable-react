import React, { useState } from "react";
import SearchHistoryItem from "../SearchHistoryItem";
import { API_URL } from "../../api/config";

const App = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  const [individualSearch, setIndividualSearch] = useState(null);

  const fetchSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/search?query=${search}`);
      if (response.ok) {
        const data = await response.json();
        setSearchHistory(data);
      } else {
        setSearchHistory([]);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const CreateSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search }),
      });

      if (response.ok) {
        const res = await response.json();
        setUsers(res.data.results);
      } else {
        console.error("Error al crear la búsqueda");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const GetSearch = async (id) => {
    try {
      const response = await fetch(`${API_URL}/search/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
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

  const DeleteSearch = async (id) => {
    try {
      const response = await fetch(`${API_URL}/search/${id}`, {
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

  const UpdateUserSearch = async (id, newValue) => {
    try {
      const response = await fetch(`${API_URL}/search/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: newValue }),
      });

      if (response.ok) {
        console.log("Búsqueda actualizada con éxito");
      } else {
        console.error("Error al actualizar la búsqueda");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const HandleSearch = async () => {
    await CreateSearch();
    fetchSearch();
  };

  const handleDeleteSearch = async (id) => {
    await DeleteSearch(id);
    fetchSearch();
  };

  const handleUpdateSearch = async (id, newValue) => {
    await UpdateUserSearch(id, newValue);
    fetchSearch();
  };

  return (
    <div className="text-center bg-cover bg-center relative grid grid-cols-2">
      <div className="p-4">
        <h1 className="mt-4 mb-8 text-3xl text-blue-900">Busca los Usuarios</h1>
        <div className="flex items-center justify-center">
          <input
            className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nombre de Usuario"
          />
          <button
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full bg-stone-950 border-yellow-700 text-white px-4 py-2 ml-2"
            onClick={HandleSearch}
          >
            Buscar
          </button>
        </div>
        <article className="flex flex-wrap">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-center mb-6 mr-4 shadow-lg rounded-lg p-4"
            >
              <div className="container">
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-32 h-32 mx-auto my-auto"
                />
                <h4>{user.login}</h4>
                <p>{user.bio}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
      <div className="p-4">
        <div>
          <h1 className="mt-4 mb-8 text-3xl text-blue-900">Historial</h1>
          <ul>
            {searchHistory.map((item) => (
              <SearchHistoryItem
                key={item._id}
                item={item}
                handleUpdateSearch={handleUpdateSearch}
                GetSearch={GetSearch}
                handleDeleteSearch={handleDeleteSearch}
              />
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
    </div>
  );
};

export default App;
