import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const UserContext = createContext();

// Componente provedor que contém o estado compartilhado
export default function UserProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({});

    return(
        <UserContext.Provider
            value={{
                userInfo,
                setUserInfo
            }}
        >
            {children}
        </UserContext.Provider>
    )
  };

export function useUser() {
    const context = useContext(UserContext)
    return context
}