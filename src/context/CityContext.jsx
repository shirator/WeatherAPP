import { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cityName, setCityName] = useState(null);

  return (
    <CityContext.Provider value={{ cityName, setCityName }}>
      {children}
    </CityContext.Provider>
  );
};
