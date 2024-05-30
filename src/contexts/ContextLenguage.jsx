"use client";
const { createContext, useContext, useState } = require("react");

const ContextLenguage = createContext();

export const useContextLenguage = () => {
  const context = useContext(ContextLenguage);
  if (!context) throw new Error("Contexto no alcanzado");
  return context;
};

export default function LenguageProvider({ children }) {
  const [lenguage, setLenguage] = useState("es");

  const handleLenguage = (lang) => {
    setLenguage(lang);
  };

  return (
    <ContextLenguage.Provider value={{ handleLenguage, lenguage }}>
      {children}
    </ContextLenguage.Provider>
  );
}
