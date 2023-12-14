import React, { useState } from "react";
import { API_URL } from "../../api/config";

const App = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  const [individualSearch, setIndividualSearch] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${API_URL}/search?query=${search}`);
      if (response.ok) {
        const data = await response.json();
        setSearchHistory(data);
        console.log(data);
      } else {
        setSearchHistory([]);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const CreateUser = async () => {
    try {
      const response = await fetch(`${API_URL}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({search}),
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

  const DeleteUser = async (id) => {
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

  const HandleSearch = async () => { 
  await CreateUser();
    fetchUser();
  } 

  const handleDeleteUser = async (id) => {
    await DeleteUser(id);
    fetchUser();
  } 

  return (
    <div className="text-center">
      <h1 className="mt-4 mb-8 text-3xl text-blue-900">Busca los Usuarios</h1>
      <div className="flex items-center justify-center">
        <input
          className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nombre de Usuario"
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
        {users.map((user) => (
          <div key={user.id}>
            <div className="container">
              <img src={user.avatar_url} alt="avatar" />
              <h4>{user.login}</h4>
              <p>{user.bio}</p>
            </div>
          </div>
        ))}
      </article>
      <div>
        <h2>Historial de búsquedas:</h2>
        <ul>
          {searchHistory.map((item) => (
            <li key={item._id}>{item.query}
            <div>
            <button onClick={() => GetSearch(item._id)}>Obtener Búsqueda</button>
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
