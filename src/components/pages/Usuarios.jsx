import React, { useState } from "react";
import { API_URL } from "../../api/config";

const App = () => {
  const [search, setSearch] = useState("");

  const [user, setUser] = useState(null);

  const [searchHistory, setSearchHistory] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${API_URL}/api/search?query=${search}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setSearchHistory((prevHistory) => [...prevHistory, search]);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const CreateUser = async () => {
    try {
      const response = await fetch(`${API_URL}/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
                console.log("Usuario creado con éxito");
      } else {
                console.error("Error al crear usuario");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  const ReadUser = async () => {
    try {
      const response = await fetch(`${API_URL}/api/search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
                console.log("Usuario leído con éxito");
      } else {
                console.error("Error al leer el usuario");
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };
    

  const DeleteUser = async () => {try {
    const response = await fetch(`${API_URL}/api/search/:id`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.ok) {
              console.log("Usuario eliminado con éxito");
    } else {
              console.error("Error al eliminar el usuario");
    }
  } catch (error) {
    console.error("error", error.message);
  }
};


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
          onClick={fetchUser}
        >
          Buscar
        </button>{" "}
      </div>
      <div>
        <button onClick={CreateUser}>Crear Usuario</button>
        <button onClick={ReadUser}>Leer Usuario</button>
        <button onClick={DeleteUser}>Eliminar Usuario</button>
      </div>
      <article>
        {user && (
          <div>
            <div className="container">
              <img src={user.avatar_url} alt="avatar" />
              <h4>{user.login}</h4>
              <p>{user.bio}</p>
            </div>
          </div>
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
