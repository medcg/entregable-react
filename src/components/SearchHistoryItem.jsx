import React, { useState } from "react";

const SearchHistoryItem = ({
  item,
  handleUpdateSearch,
  GetSearch,
  handleDeleteSearch,
}) => {
  const [searchValue, setSearchValue] = useState(item.query);

  return (
    <li className="mb-4 flex-items-center">
      <div className="mr-2">
        <input
          className="py-2 px-4 border border-stone-950 rounded-lg max-w-2000"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="mt-2"/> 
        <button 
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full"
        onClick={() => handleUpdateSearch(item._id, searchValue)}>
          Editar
        </button>
      </div>
      <div className="mt-2">
        <button 
         className="px-4 py-2 bg-green-500 text-white rounded-full"
        onClick={() => GetSearch(item._id)}>Obtener Búsqueda</button>
        <button
        className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full"
        onClick={() => handleDeleteSearch(item._id)}>
          Eliminar Búsqueda
        </button>
      </div>
    </li>
  );
};

export default SearchHistoryItem;
