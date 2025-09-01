import React from "react";

const Main = () => {
  //fx for the onClick-->not used
  // const handleClick = () => {
  //   console.log("Iclicked");
  // };

  const [ingredientsArray, setIngredientesArray] = React.useState([]);
  // const ingredientes = ["Chicken", "Oregano", "Tomatoes"];

  //transforming the list in a jsx object
  const li_ingredients = ingredientsArray.map((item) => (
    <li key={item}>{item}</li>
  ));

  function sendIngredient(formData) {
    //GET new THE INGREDIENT BY NAME attribute in INPUT (form)
    const newIngredient = formData.get("name_ingredient");
    // console.log(newIngredient);-->shows the just entered ingredient

    setIngredientesArray((prevArray) => [...prevArray, newIngredient]);
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
      <ul>{li_ingredients}</ul>
    </main>
  );
};
export default Main;
