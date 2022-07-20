import Toggle from './ThemeToggle'
import UserProfileDropdown from './UserProfileDropdown'

const Navbar = () => {
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
