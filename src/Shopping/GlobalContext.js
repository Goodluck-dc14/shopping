import React, { useState, useEffect, createContext } from "react";
import app from "./base";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);
      console.log(user);
    });
  });
  return (
    <GlobalContext.Provider value={{ current }}>
      {children}
    </GlobalContext.Provider>
  );
};
