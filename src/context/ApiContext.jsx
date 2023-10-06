import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cityData, setCityData] = useState(null);

  return (
    <ApiContext.Provider value={{ cityData, setCityData }}>
      {children}
    </ApiContext.Provider>
  );
};
