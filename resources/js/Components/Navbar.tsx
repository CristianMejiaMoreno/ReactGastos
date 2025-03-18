import React from 'react'
import Flag from 'react-world-flags'
import Button from './Button'

const Navbar = () => {
  return (
    <>

    <nav className="bg-indigo border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UrBudgets📱</span>
            </a>
            <div className="flex items-center space-x-14 rtl:space-x-reverse">
            <a href="https://wa.me/+573017750621" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-500 dark:text-white hover:underline">
                  <span>Contactanos</span>
                  <Flag width={16} height={16} code="col" />
              </a>
              <a href="https://wa.me/+573017750621" target="_blank" rel="noopener noreferrer" className="text-sm  text-gray-500 dark:text-white hover:underline">+573017750621</a>
              <a href={route('login')} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
            </div>
        </div>
    </nav>
    <nav className="bg-indigo">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-2 rtl:space-x-reverse text-sm">
                    <li>
                        <Button text='Home'/>
                    </li>
                    <li>
                        <Button text='Company'/>
                    </li>
                    <li>
                        <Button text='Team'/>
                    </li>
                    <li>
                        <Button text='Features'/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar;