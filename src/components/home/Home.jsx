import React, { useContext } from "react";
import { GlobalContext } from "../../context/Index";
import RecipeList from "../recipe-list/RecipeList";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <div>Loading In Progress...!</div>;

   return (
    <div className="py-7 container mx-auto flex flex-wrap justify-center gap-5">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeList item={item} />)
      ) : (
        <div>
          <p className="lg:text-2xl text-xl text-center text-white font-extrabold">
            Search Wide Range Of Recipes And Pick Your Favorite Ones.
          </p>
        </div>
      )}
    </div>
  );
}
export default Home;
