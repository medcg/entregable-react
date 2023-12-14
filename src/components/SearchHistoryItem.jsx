import React, { useState } from "react";

const SearchHistoryItem = ({
  item,
  handleUpdateSearch,
  GetSearch,
  handleDeleteSearch,
}) => {
  const [searchValue, setSearchValue] = useState(item.query);

  return (
    <li>
      <div>
        <input
          className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => handleUpdateSearch(item._id, searchValue)}>
          Editar
        </button>
      </div>
      <div>
        <button onClick={() => GetSearch(item._id)}>Obtener Búsqueda</button>
        <button onClick={() => handleDeleteSearch(item._id)}>
          Eliminar Búsqueda
        </button>
      </div>
    </li>
  );
};

export default SearchHistoryItem;
