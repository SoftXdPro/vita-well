import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './Hero.css';
import { ReactTyped } from 'react-typed';

const Hero = ({ title, subtitle, buttonText, buttonLink, background }) => {
    const backgroundStyle = background ? { backgroundImage: `url(${background})` } : null;

    return (
        <div className="relative hero-main">
            <motion.div
                className="hero-background"
                style={backgroundStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            ></motion.div>
            <div className="hero-overlay"></div> {/* Semi-transparent overlay */}
            <motion.div
                className="font container mx-auto flex flex-col items-center justify-center h-full relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.h1
                    className="text-5xl font-bold mb-6 text-center text-white uppercase"
                    whileHover={{ scale: 1.05 }}
                >
                    <ReactTyped

                        strings={[title]}

                        typeSpeed={70}
                        backSpeed={50}
                        loop
                    />
                </motion.h1>


                <motion.p
                    className="text-lg mb-8 text-center text-white"
                    whileHover={{ scale: 1.05 }}
                >{subtitle}</motion.p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLink to={buttonLink} className="bg-yellow-400 text-blue-900 py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">{buttonText}</NavLink>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
