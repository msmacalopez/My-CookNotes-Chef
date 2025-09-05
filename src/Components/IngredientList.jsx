import React from "react";

const IngredientList = (props) => {
  //transforming the list in a jsx object
  const li_ingredients = props.ingredientsArray.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <section>
      <h2>Ingredients available: </h2>
      <ul className="ingredients-list" aria-live="polite">
        {li_ingredients}
      </ul>
      {/* //Only show container if i have at least 4 ingredients:  */}
      {props.ingredientsArray.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipeShown}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientList;
