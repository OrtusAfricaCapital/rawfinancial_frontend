import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

const Header = ({
  heading,
  paragraph,
  linkName,
  linkUrl="#"
}) => {
  return(
    <div className="mb-10">
        <div className="flex justify-center">
            <img 
                alt=""
                className="h-20"
                src={Logo}/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {heading}
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-white mt-5">
        {paragraph} {' '}
        <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
            {linkName}
        </Link>
        </p>
    </div>
)
}

export default Header