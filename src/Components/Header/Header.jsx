import React, { useState } from 'react' // 1. Import useState
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  // 2. Create state to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to close menu when a link is clicked on mobile
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Added relative positioning to the header so the mobile menu can align to it */}
      <header className={`${styles['header-bg']} header-bg dark:bg-gray-900 mt-5 ms-5 relative z-50`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="block text-teal-600 dark:text-teal-300">
            <span className="sr-only">Home</span>
            <img src={logo} alt="Logo" className='w-32' />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* 3. Dynamic Classes for the Navigation
                - On mobile (default): It checks `isMenuOpen`. If true, it shows as an absolute dropdown. If false, it's hidden.
                - On desktop (md:): We reset all those absolute positioning styles to be static and block again.
            */}
            <nav aria-label="Global" 
                 className={`
                   ${isMenuOpen ? 'block absolute top-[64px] left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg' : 'hidden'} 
                   md:block md:static md:w-auto md:shadow-none md:p-0 md:bg-transparent grow transition-all
                 `}>
              {/* Added flex-col for mobile dropdown view, md:flex-row for desktop */}
              <ul className="flex flex-col md:flex-row items-center gap-6 text-sm justify-center">
                <li>
                  <Link onClick={closeMenu} to="/home#why" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    Why
                  </Link>
                </li>

                <li>
                  <Link onClick={closeMenu} to="/home#how" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    How
                  </Link>
                </li>

                <li>
                   {/* FIX: Removed redundant redundant wrapping <a> tags. You cannot nest <a> inside <a> */}
                  <Link onClick={closeMenu} to="/cars" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    cars
                  </Link>
                </li>

                <li>
                  <Link onClick={closeMenu} to="/home#contact" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link onClick={closeMenu} to="/home#testmonial" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    Testmonial
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden"> {/* Added hidden to buttons on very small mobile, show on sm+ */}
                <a className="block rounded-md bg-transparent text-[#484848] px-5 py-2.5 text-sm font-medium transition dark:hover:bg-teal-500" >
                  SIGN IN
                </a>

                <a className="hidden rounded-md bg-[#0d6efd] hover:bg-[#0a5dda] px-5 py-2.5 text-sm font-medium text-white transition sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75" >
                  SIGN UP
                </a>
              </div>

              {/* 4. Add onClick handler to toggle state */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Toggle menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}