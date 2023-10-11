import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setRepos(data.items);
      } else {
        setRepos([]);
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingresa Nombre de Repositorio"
        />
      </div>
      <div>
        <button onClick={fetchRepos}>Buscar</button>{" "}
      </div>
      <article>
        {repos.length > 0 ? (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </article>
    </div>
  );
};

export default App;
