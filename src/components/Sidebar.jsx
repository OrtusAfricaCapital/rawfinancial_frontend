import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import SidebarSubmenu from './SidebarSubmenu';
import { ThemeContext } from '../contexts/ThemeContext'
import { BsArrowLeftCircle, BsFillPeopleFill, BsChevronDown } from 'react-icons/bs'
import { AiFillPieChart, AiFillSetting, AiOutlineRight } from 'react-icons/ai'
import {MdEmojiPeople} from 'react-icons/md'
import {FaPeopleArrows} from 'react-icons/fa'
import { CgProfile, CgUserList, CgLayoutList, CgList, CgListTree} from 'react-icons/cg'
import { GiArchiveRegister } from "react-icons/gi";

import { useMenuStateContext } from '../contexts/MenuContext';

import Logo from '../assets/images/logo.png'

const Sidebar = () => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true)
    
    const {subMenuOpen, setSubMenuOpen, subMenuTitle, setSubMenuTitle, subMenuItems, setSubMenuItems} = useMenuStateContext();

    const handleOpenSubMenu = (title, items) =>{
        setSubMenuTitle(title);
        setSubMenuItems(items);
        setSubMenuOpen(true);
    }

    const location = useLocation()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
    if (screenSize <= 900) {
        setActiveMenu(false);
    } else {
        setActiveMenu(true);
    }
    }, [screenSize]);

    const Menus = [
        { title: 'Dashboard', path: '/', src: <AiFillPieChart /> },
        { title: 'Borrowers', path: '/borrowers', src: <BsFillPeopleFill />,subMenu: true, subMenuItems: [{title: "View All", path: "/borrowers"}, {title: "Add New", path: "/borrowers"}] },
        { title: 'Loans', path: '/loans', src: <CgLayoutList />,subMenu: true, subMenuItems: [{title: "View All", path: "/borrowers"}, {title: "Add New", path: "/borrowers"}] },
        { title: 'Repayments', path: '/repayments', src: <CgList /> },
        { title: 'Payment Logs', path: '/payment-logs', src: <GiArchiveRegister /> },
        { title: 'Branches', path: '/branches', src: <CgListTree />, gap: 'true' },
        { title: 'Loan Officers', path: '/loan-officers', src: <MdEmojiPeople /> },
        { title: 'Investors', path: '/investors', src: <FaPeopleArrows /> },
        { title: 'Admin Settings', path: '/admin-settings', src: <AiFillSetting />, gap: 'true' },
    ]

    return (
        <div className='flex'>
            <div
                className={`sm:block h-screen bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800
                ${activeMenu ? 'w-72' : 'w-20'} duration-300 relative`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !activeMenu && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setActiveMenu(!activeMenu)}
                />
                <Link to='/'>
                    <div className={`flex ${activeMenu && 'gap-x-4'} items-center`}>
                        <img src={Logo} alt='' className={`w-10 duration-300 ${activeMenu && "rotate-[360deg]"}`} />
                        <h1 className={`${!activeMenu && "scale-0"} text-2xl duration-300 font-medium whitespace-nowrap dark:text-white`}>
                            LMS-V2
                        </h1>
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.subMenu === true ? "#":menu.path} key={index}
                        onClick={menu.subMenu === true ? () => handleOpenSubMenu(menu.title, menu.subMenuItems) : () => {}}
                        >
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${!activeMenu && "scale-0"} origin-left duration-300 hover:block font-medium`}
                                >
                                    {menu.title}
                                </span>
                                {menu.subMenu && activeMenu && (
                                    <AiOutlineRight className={`font-bold text-xl`}/>
                                )}
                            </li>
                            {/* {
                                menu.subMenu && subMenuOpen && activeMenu && (
                                    <ul>
                                        {menu.subMenuItems.map((submenuItem, index) => (
                                            <li key={index} className="flex items-center gap-x-6 p-3 px-5 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                                                {submenuItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            } */}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
