import { useState } from "react";

const App = () => {
  const {search, setSearch} = useState("");

  const [user, setUser] = useState(null)

  const fetchUser = async () => 
  try { 
const response = await fetch (`https://api.github.com/search/users?q=${nombre}`)
const data = await response.json ();
setUser (data);
  } 
  catch (error) { 
    console.log("error", error.message);

  }

  return (
    <div>
      <h1>GitHub Searcher</h1>
      <div>
        <imput onChange={ (e) => setSearch(e.target.value)} placeholder="Ingresa Nombre de Usuario"></imput>
      </div>
      <div>
        <button onClick={fetchUser}>Buscar</button>{" "}
      </div>
      <article>
        {user && (
          <div className="container"/>
        <div img src={user.avatar.url} alt="avatar"/>
        <h4>{user.login}</h4>
        <p>{user.bio}</p>
        )}
        
      </article>
    </div>
  );
};

export default App;
