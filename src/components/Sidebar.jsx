import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ThemeContext } from '../contexts/ThemeContext'
import { BsArrowLeftCircle, BsFillPeopleFill } from 'react-icons/bs'
import { AiFillPieChart, AiFillSetting } from 'react-icons/ai'
import {MdEmojiPeople} from 'react-icons/md'
import {FaPeopleArrows} from 'react-icons/fa'
import { CgProfile, CgUserList, CgLayoutList, CgList, CgListTree} from 'react-icons/cg'
import Logo from '../assets/images/logo.png'

const Sidebar = () => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true)
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
        { title: 'Borrowers', path: '/borrowers', src: <BsFillPeopleFill /> },
        { title: 'Loans', path: '/loans', src: <CgLayoutList /> },
        { title: 'Repayments', path: '/repayments', src: <CgList /> },
        { title: 'Branches', path: '/branches', src: <CgListTree />, gap: 'true' },
        { title: 'Loan Officers', path: '/loan-officers', src: <MdEmojiPeople /> },
        { title: 'Investors', path: '/investors', src: <FaPeopleArrows /> },
        { title: 'Admin Settings', path: '/admin-settings', src: <AiFillSetting />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    activeMenu ? 'w-60' : 'w-fit'
                } sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !activeMenu && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setActiveMenu(!activeMenu)}
                />
                <Link to='/'>
                    <div className={`flex ${activeMenu && 'gap-x-4'} items-center`}>
                        <img src={Logo} alt='' className='pl-2 h-8' />
                        {activeMenu && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                LMS-V2
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !activeMenu && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
