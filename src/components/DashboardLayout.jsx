import React, {useState, useContext} from 'react'
import { useMenuStateContext } from '../contexts/MenuContext'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SidebarSubmenu from './SidebarSubmenu'

const DashboardLayout = ({ children }) => {
    const {subMenuOpen} = useMenuStateContext();

    return (
        <>
            <div className='flex flex-auto'>
                {!subMenuOpen && <Sidebar />}
                {subMenuOpen && <SidebarSubmenu /> }
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
