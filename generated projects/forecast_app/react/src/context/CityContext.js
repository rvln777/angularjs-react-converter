import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Fundão,Portugal');
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
