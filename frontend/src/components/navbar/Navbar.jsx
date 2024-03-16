import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import { UserContext } from '../../contexts/Contexts';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const { user, logout } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(user)
    const links = ['Home', 'Consult Here', "Emergency"];
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.nav className={`navbar gradient flex justify-between items-center p-5 shadow-md top-0 w-full z-10 text-2xl ${isMenuOpen ? 'mobile-menu' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <NavLink to="/" className="flex items-center font text-3xl text-white">
                <img src="logo.png" alt="Logo" className="h-12 w-12 mr-2 " />
                VitaWell
            </NavLink>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </div>
            <ul className={`text-white flex items-center space-x-5 relative uppercase weight-bold font ${isMenuOpen ? 'nav-active' : ''}`}>
                {links.map((link, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setActiveLink(index)}
                        onHoverEnd={() => setActiveLink(null)}
                    >
                        <NavLink to={`/${link.replace(' ', '-').toLowerCase().replace('home', '')}`} activeClassName="active" className='nav-a'>{link}</NavLink>
                        {activeLink === index && (
                            <motion.div
                                className="marker"
                                initial={{ width: 0, x: 0 }}
                                animate={{ width: '100%', x: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                style={{
                                    left: `calc(${index} * (100% / ${links.length * 100}))`, // Updated calculation for left position
                                    width: `calc(100% / ${links.length})`
                                }}
                            ></motion.div>
                        )}
                    </motion.li>
                ))}
            </ul>
            {!user && <Link to="/login" className="font text-3xl text-teal-400 bg-white rounded-xl px-6 py-2 login">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Login
                </motion.span>
            </Link>}
            {user && <a onClick={() => logout()} className="font text-3xl text-teal-400 bg-white rounded-xl px-6 py-2 login">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Logout
                </motion.span>
            </a>}
        </motion.nav>
    );
};

export default Navbar;
