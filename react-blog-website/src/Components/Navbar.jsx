import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    // navItems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/blogs", link: "Blogs" },
        { path: "/services", link: "Services" },
        { path: "/contact", link: "Contact" },
        { path: "/about", link: "About" }
    ]

    // modal details
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='p-4 flex items-center max-w-7xl mx-auto justify-between'>
                <a href="/"
                    className='text-white text-xl font-bold'>
                    Design<span className='text-orange-500'>DK</span>
                </a>

                {/* navItems for lg devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, link }) =>
                            <li className='text-white' key={path}>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    to={path}>{link}</NavLink>
                            </li>)
                    }
                </ul>

                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href='/' className='hover:text-orange-500'><FaFacebook /></a>
                    <a href='/' className='hover:text-orange-500'><FaDribbble /></a>
                    <a href='/' className='hover:text-orange-500'><FaTwitter /></a>
                    <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
                    transition-all duration-200 ease-in'>Login</button>
                </div>

                {/* our modal component is here */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* mobile menu btn, display mobile screen */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>
                </div>
            </nav>

            <div>
                {/* menu items only for mobile */}
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white
                ${isMenuOpen ? 'fixed left-0 top-0 right-0 w-full transition-all duration-150 ease-in-out' : 'hidden'}
                `}>
                    {
                        navItems.map(({ path, link }) =>
                            <li className='text-black' key={path}>
                                <NavLink
                                    onClick={toggleMenu}
                                    to={path}>{link}
                                </NavLink>
                            </li>)
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar