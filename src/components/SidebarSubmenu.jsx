import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

import { useMenuStateContext } from '../contexts/MenuContext'

const SidebarSubmenu = ({title, items}) => {
    const {subMenuOpen, setSubMenuOpen, subMenuTitle, setSubMenuTitle, subMenuItems, setSubMenuItems} = useMenuStateContext();

    const handleCloseSubMenu = (title, items) =>{
        setSubMenuTitle("");
        setSubMenuItems([]);
        setSubMenuOpen(false);
    }

  return (
    <div className='transition ease-out duration-300'>
        <div className={`sm:block h-screen bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800 'w-72' duration-300 relative`}>
            <Link onClick={() => handleCloseSubMenu()} className='flex py-8' to='/'>
                <AiOutlineLeft className='mt-1 mr-3 text-base dark:text-white' />
                <h1 className={`text-base font-medium whitespace-nowrap dark:text-white`}>
                Main menu
                </h1>
            </Link>
            <h1 className='text-2xl p-2 font-bold whitespace-nowrap dark:text-white'>{subMenuTitle}</h1>
            <ul>
                {
                    subMenuItems.map(item => (
                    <li 
                    className="mt-2 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Link to='#'>{item.title}</Link>
                    </li>))
                }
            </ul>
        </div>
    </div>
  )
}

export default SidebarSubmenu