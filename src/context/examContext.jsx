"use client";
import React, { createContext} from "react";

export const ExamContext = createContext(null);

export default function ExamContextProvider({ children }) {
 

  return (
    <ExamContext.Provider
      value={{
        
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}
