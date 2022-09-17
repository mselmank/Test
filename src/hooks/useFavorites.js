import React, { useEffect, useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const ls = localStorage.getItem("Favorites");
    if (ls) return JSON.parse(ls);
    else return [""];
  });
  const AddToFavorites = (objectID) => () => {
    const isFavorited = favorites.includes(objectID);
    if (isFavorited) setFavorites((prev) => prev.filter((b) => b !== objectID));
    else setFavorites((prev) => [...prev, objectID]);
  };
  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }, [favorites]);
  return [favorites, AddToFavorites];
}

export default useFavorites;
