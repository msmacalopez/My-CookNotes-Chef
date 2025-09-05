import React from "react";
import CookNotes from "./CookNotes";
import IngredientList from "./IngredientList";

const Main = () => {
  // Starting State Array
  const [ingredientsArray, setIngredientsArray] = React.useState([
    "tomato",
    "corn",
    "cucumber",
    "salt",
  ]);
  //replace: const ingredientes = ["Chicken", "Oregano", "Tomatoes"];

  //Boolean for data fetch
  const [recipeShown, setRecipeShown] = React.useState(false);

  //Once Click the "Get Recipe" BTN, set state to TRUE
  function getRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
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
          getRecipeShown={getRecipeShown}
        />
      ) : null}

      {
        recipeShown && <CookNotes />
        // return AI
      }
    </main>
  );
};
export default Main;
