"use client";
const { createContext, useContext, useState, useEffect } = require("react");

const ContextLenguage = createContext();

export const useContextLenguage = () => {
  const context = useContext(ContextLenguage);
  if (!context) throw new Error("Contexto no alcanzado");
  return context;
};

export default function LenguageProvider({ children }) {
  const [lenguage, setLenguage] = useState("es");
  const [changeLenguage, setChangeLenguage] = useState(false);

  useEffect(() => {
      if(!changeLenguage){
        setLenguage("es");
      }else {
        setLenguage("en")
      }
  }, [changeLenguage])
  
  return (
    <ContextLenguage.Provider value={{ lenguage, setChangeLenguage, changeLenguage }}>
      {children}
    </ContextLenguage.Provider>
  );
}
