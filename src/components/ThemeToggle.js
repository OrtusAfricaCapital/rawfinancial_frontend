import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

import {FaSun, FaMoon} from 'react-icons/fa'

const Toggle = () => {
  const {theme,setTheme} = useContext(ThemeContext)

  return (
      <div className='transition ease-in-out duration-500 rounded-full p-1 mr-10'>
          {theme === 'dark' ? (
              <FaSun
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-xl dark:text-gray-400 cursor-pointer'
              />
          ) : (
              <FaMoon
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-xl dark:text-gray-400 cursor-pointer'
              />
          )}
      </div>
  )
}

export default Toggle