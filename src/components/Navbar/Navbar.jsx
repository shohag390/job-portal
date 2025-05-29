import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import logo from '../../assets/logo/whitelogo.png';
import profile from '../../assets/images/user.jpg';

const navItem = [
    { path: "/", display: "Home" },
    { path: "/services", display: "Services" },
    { path: "/jobs", display: "Jobs" },
    { path: "/pricing-plan", display: "Pricing" },
    { path: "/contacts", display: "Contacts" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarBgClass = isHomePage
        ? (scrolled ? "bg-[#3b82f6] shadow-sm" : "bg-transparent")
        : "bg-[#3b82f6] shadow-md";

    return (
        <nav className={`flex items-center justify-between container mx-auto lg:px-[90px] md:px-[50px] px-[20px] lg:h-[11vh] md:h-[10vh] md:py-0 py-[15px] z-50 fixed ${navbarBgClass} transition-all duration-300`}>
            <Link to={"/"}>
                <img className='h-[55px]' src={logo} alt="logo" />
            </Link>
            <div className='flex items-center gap-[30px]'>
                <ul className='lg:flex lg:items-center lg:gap-[30px] hidden'>
                    {navItem.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative group pb-[2px] transition-colors duration-300 ${isActive ? "text-[#fff]" : "text-[#ffffffa0] hover:text-[#fff]"
                                    }`
                                }
                            >
                                {link.display}
                                <span
                                    className={`absolute left-0 -bottom-[1px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? "w-full" : ""
                                        }`}
                                ></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div>
                    {user ? (
                        <Link to={"/login"}>
                            <button class="relative px-[40px] py-[10px] text-white bg-[#3b82f6] overflow-hidden group rounded-full border-[1px] border-[#ffffffa0] btn">
                                <span class="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-white opacity-10 rotate-45 group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
                                <span class="relative z-10">
                                    LOGIN
                                </span>
                            </button>
                        </Link>
                    ) : (
                        <Link className='h-[44px] w-[44px] border-[1px] border-[#fff] rounded-full flex items-center justify-center btn' to={"/profile"} >
                            <img className='h-full w-full rounded-full' src={profile} alt="" />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
