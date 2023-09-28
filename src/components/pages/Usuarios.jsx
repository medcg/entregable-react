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
    <div>
      <h1>GitHub Searcher</h1>
      <div>
        <input
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingresa Nombre de Usuario"
        />
      </div>
      <div>
        <button onClick={fetchUser}>Buscar</button>{" "}
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
