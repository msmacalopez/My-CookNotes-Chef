import React from "react";
import CookNotes from "./CookNotes";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "./ai.js";

const Main = () => {
  // Starting State Array
  const [ingredientsArray, setIngredientsArray] = React.useState([
    // "tomato",
    // "corn",
    // "cucumber",
    // "salt",
  ]);
  //replace: const ingredientes = ["Chicken", "Oregano", "Tomatoes"];

  //Boolean for data fetch
  const [recipeShown, setRecipeShown] = React.useState("");

  //Once Click the "Get Recipe" BTN, set state to TRUE
  async function getRecipe() {
    //call the API, pass the ingredients from the state variable
    const recipeMarkdown = await getRecipeFromMistral(ingredientsArray);
    console.log(recipeMarkdown);
    setRecipeShown(recipeMarkdown);
  }

  // //transforming the list in a jsx object
  // const li_ingredients = ingredientsArray.map((item) => (
  //   <li key={item}>{item}</li>
  // ));

  function sendIngredient(formData) {
    //GET new ingredient by NAME attribute in INPUT (form)
    const newIngredient = formData.get("name_ingredient");
    // console.log(newIngredient); ->just entered
    if (!ingredientsArray.includes(newIngredient) && newIngredient.length > 2)
      setIngredientsArray((prevArray) => [...prevArray, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingre-form" action={sendIngredient}>
        <input
          type="text"
          placeholder="e.g. onion"
          aria-label="Add New Ingredient"
          name="name_ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>

      {/* //Only render this section when there is items in the List  */}
      {ingredientsArray.length > 0 ? (
        <IngredientList
          ingredientsArray={ingredientsArray}
          getRecipe={getRecipe}
        />
      ) : null}

      {
        recipeShown && <CookNotes recipeShown={recipeShown} />
        // return AI
      }
    </main>
  );
};
export default Main;
