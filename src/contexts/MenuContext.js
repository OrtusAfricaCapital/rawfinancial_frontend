import React, { createContext, useState, useContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuTitle, setSubMenuTitle] = useState("");
    const [subMenuItems, setSubMenuItems] = useState([]);

  return (
    <MenuContext.Provider value={{subMenuOpen, setSubMenuOpen, subMenuTitle, setSubMenuTitle, subMenuItems, setSubMenuItems}}>
      {children}
    </MenuContext.Provider>
  );
  };
  
  export const useMenuStateContext = () => useContext(MenuContext);