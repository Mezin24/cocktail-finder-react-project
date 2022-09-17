import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ image, name, id, glass, alcoholic }) => {
  return (
    <article className='cocktail'>
      <div className='image-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
