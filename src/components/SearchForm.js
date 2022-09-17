import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite coctail</label>
          <input
            type='text'
            id='name'
            ref={searchRef}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
