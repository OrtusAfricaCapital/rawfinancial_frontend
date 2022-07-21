import ThemeToggle from './ThemeToggle'
import UserProfileDropdown from './UserProfileDropdown'

const Navbar = () => {
    return (
        <nav className='sticky top-0 ml-24 md:ml-80 backdrop-blur-sm bg-white/30 border-gray-200 mx-2 px-2 py-2.5 dark:bg-gray-800/30'>
            <div className='flex justify-end pr-4 pt-4'>
                <ThemeToggle />
                <UserProfileDropdown  />
            </div>
        </nav>
    )
}

export default Navbar
