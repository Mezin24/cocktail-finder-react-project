export default (item) => {
  const {
    idDrink,
    strDrink,
    strAlcoholic,
    strDrinkThumb,
    strInstructions,
    strGlass,
  } = item;

  return {
    id: idDrink,
    name: strDrink,
    alcoholic: strAlcoholic,
    info: strInstructions,
    image: strDrinkThumb,
    glass: strGlass,
  };
};
