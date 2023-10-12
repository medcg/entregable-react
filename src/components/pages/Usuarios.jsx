import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState(""); 

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${search}` 
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null); 
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return (
    <div className="text-center">
      <h1 className="mt-4 mb-8 text-3xl text-blue-900">Busca los Usuarios</h1>
      <div className= "flex items-center justify-center">
        <input className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nombre de Usuario"
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full bg-stone-950 border-yellow-700 text-white px-4 py-2" onClick={fetchUser}>Buscar</button>{" "}
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
    </div>
  );
};

export default App;
