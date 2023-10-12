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
    <div className="text-center">
      <h1 className="mt-4 mb-8 text-3xl text-blue-900">Busca los Repositorios</h1>
      <div className= "flex items-center justify-center">
        <input className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nombre de Repositorio"
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full bg-stone-950 border-yellow-700 text-white px-4 py-2" onClick={fetchRepos}>Buscar</button>{" "}
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
