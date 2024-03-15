import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const links = ['Home', 'Consult Here',];

    return (
        <motion.nav className="navbar fixed gradient  flex justify-between items-center p-5 shadow-md top-0 w-full z-10 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <NavLink to="/" className="flex items-center font text-3xl text-white">
                <img src="logo.png" alt="Logo" className="h-12 w-12 mr-2 " />
                VitaWell
            </NavLink>
            <ul className="text-white flex items-center space-x-5 relative uppercase weight-bold font">
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
            <Link to="/login" className="font text-3xl text-teal-400 bg-white rounded-xl px-6 py-2 login">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}

                >
                    Login
                </motion.span>
            </Link>
        </motion.nav>
    );
};

export default Navbar;
