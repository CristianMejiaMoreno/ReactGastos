import { useState } from 'react';
import { usePage } from '@inertiajs/react';  
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

const NavBarAuthMobile = () => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const user = usePage().props.auth.user;  

    return (
        <div className="fixed z-50 w-full h-16 max-w-lg bg-indigo-100 border border-gray-200 rounded-full bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
            <div className="grid h-full grid-cols-5 mx-auto">
                {/* Home Button */}
                <button type="button" className="flex items-center justify-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link href={route('dashboard')}>
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414z" />
                        </svg>
                        <span className="sr-only">Home</span>
                    </Link>
                </button>

                {/* Wallet Button */}
                <button type="button" className="flex items-center justify-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.074 4 8.442.408A.95.95 0 007.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 014-4h6V6a1 1 0 00-1-1H1a1 1 0 00-1 1v13a1 1 0 001 1h17a1 1 0 001-1v-2h-6a4 4 0 01-4-4z" />
                    </svg>
                    <span className="sr-only">Wallet</span>
                </button>

                {/* New Item Button */}
                <div className="flex items-center justify-center">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-10 h-10 font-medium bg-indigo-400 rounded-full hover:bg-indigo-500 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                            >
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 1v16M1 9h16"
                                    />
                                </svg>
                                <span className="sr-only">New item</span>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content align="top" width="48" contentClasses="py-2 bg-white">
                            <Dropdown.Link href={route('profile.edit')}>Option 1</Dropdown.Link>
                            <Dropdown.Link href="#">Option 2</Dropdown.Link>
                            <Dropdown.Link href={route('dashboard')}>Option 3</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>

                {/* Settings Button */}
                <button type="button" className="flex items-center justify-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link href={route('profile.edit')}>
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 000 4.5m0-4.5a2.25 2.25 0 000 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 000 4.5m0-4.5a2.25 2.25 0 000 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 010 4.5 2.25 2.25 0 010-4.5ZM16 19v-2"/>
                    </svg>
                    <span className="sr-only">Settings</span>
                    </Link>
                </button>

                {/* Profile Button */}
                <div className="flex items-center justify-center">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button
                            type="button"
                            data-tooltip-target="tooltip-profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <span className="sr-only">Profile</span>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content align="top" width="48" contentClasses="py-2 bg-white">
                        <Dropdown.Link href={route('profile.edit')}>Option 1</Dropdown.Link>
                        <Dropdown.Link href="#">Option 2</Dropdown.Link>
                        <Dropdown.Link href={route('dashboard')}>Option 3</Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default NavBarAuthMobile;
