import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUserState = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  const saveLoginState = (user) => {
    localStorage.setItem('user',JSON.stringify(user));
    setIsLoggedIn(true);
  }

  const logOut = () => {
    localStorage.setItem('user',null);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{saveLoginState, getUserState, logOut}}>
      {children}
    </AuthContext.Provider>
  );
  };