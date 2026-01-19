import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeList from "../recipe-list/RecipeList";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-7 container mx-auto flex flex-wrap justify-center gap-5">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeList item={item} />)
      ) : (
        <div>
          <p className="lg:text-2xl text-xl text-center text-white font-extrabold uppercase">
            No item to show. Add items to favorite
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
