import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <header className={`${styles['header-bg']}header-bg dark:bg-gray-900 mt-5 ms-5`}>
        <div className="mx-auto flex  h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600 dark:text-teal-300" >
            <span className="sr-only">Home</span>
            <img src={logo} alt="" srcSet="" className='w-32' />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between  ">
            <nav aria-label="Global" className="hidden md:block grow">
              <ul className="flex items-center gap-6 text-sm justify-center">
                <li>
                  <Link to="/home#why" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    Why
                  </Link>
                </li>

                <li>
                  <Link to="/home#how" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    How
                  </Link>
                </li>

                <li>
                  <a className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    <Link to="/cars" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                      cars
                    </Link>
                  </a>
                </li>

                <li>
                  <a className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    <Link to="/home#contact" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                      Contact
                    </Link>
                  </a>
                </li>

                <li>
                  <a className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                    <Link to="/home#testmonial" className="text-[#484848] transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" >
                      Testmonial
                    </Link>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a className="block rounded-md bg-transparent text-[#484848] px-5 py-2.5 text-sm font-medium transition dark:hover:bg-teal-500" >
                  SIGN IN
                </a>

                <a className="hidden rounded-md bg-[#0d6efd] hover:bg-[#0a5dda] px-5 py-2.5 text-sm font-medium text-white transition sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75" >
                  SIGN UP
                </a>
              </div>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden  dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span className="sr-only">Toggle menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
