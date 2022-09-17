export default (data) => {
  const {
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = data;

  const ingridients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];
  return {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingridients,
  };
};
