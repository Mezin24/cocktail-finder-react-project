import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import _transformCoctailInfo from './tools/transformCoctailInfo';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext({
  loading: null,
  coctails: [],
  searchTerm: '',
  setSearchTerm: () => {},
});

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [coctails, setCoctails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCoctails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;

      if (drinks) {
        const coctails = drinks.map(_transformCoctailInfo);
        setCoctails(coctails);
      } else {
        setCoctails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCoctails();
  }, [searchTerm, fetchCoctails]);

  return (
    <AppContext.Provider
      value={{
        loading,
        coctails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
