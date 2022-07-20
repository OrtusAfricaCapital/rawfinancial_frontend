import React, {useContext, Fragment} from 'react'

import Toggle from './ThemeToggle'
import UserProfileDropdown from './UserProfileDropdown'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    const {setIsLoggedIn} = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
            <div className='flex justify-end pr-4 pt-4'>
                <Toggle />
                <UserProfileDropdown />
            </div>
        </nav>
    )
}

export default Navbar
