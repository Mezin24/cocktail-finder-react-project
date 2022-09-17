import React, { useState, useEffect, useCallback } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import transformCoctail from '../tools/transformCoctail';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const params = useParams();
  console.log(cocktail);

  const fetchCocktail = useCallback(async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktail = transformCoctail(drinks[0]);
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchCocktail(params.id);
  }, [fetchCocktail, params.id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingridients } =
    cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingridients: </span>
            {ingridients.map((item, i) => {
              return item ? <span key={i}>{item}</span> : null;
            })}
          </p>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
