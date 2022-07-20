import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const saveLoginState = (user) => {
      setIsLoggedIn(true);
      localStorage.setItem('user',null);
    }

    const logOut = () => {
      setIsLoggedIn(false);
      localStorage.setItem('user',null);
    }

    return (
      <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
      </AuthContext.Provider>
    );
  };