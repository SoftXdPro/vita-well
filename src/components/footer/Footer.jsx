import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    const routePaths = ['/', '/consult-here', '/mood-tracking', '/emergency-support', '/about-us', '/contact-us'];

    const isPageNotFound = routePaths.includes(location.pathname) || location.pathname === '/' || location.pathname === '/order-medicine';
    if (location.pathname === '/login') {
        return null;
    }


    return (
        <footer className={`gradient font text-white py-6 ${isPageNotFound ? '' : 'fixed'} bottom-0 w-full`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-10">
                <div className="md:order-2">
                    <p className="text-sm">&copy; 2024 VitaWell. All rights reserved.</p>
                    <div className="mt-2 flex flex-wrap">
                        <a href="#" className="text-teal-800 hover:text-teal-600 mr-4">Terms of Service</a>
                        <a href="#" className="text-teal-800 hover:text-teal-600 mr-4">Privacy Policy</a>
                        <a href="#" className="text-teal-800 hover:text-teal-600 mr-4">Cookie Policy</a>
                        <a href="#" className="text-teal-800 hover:text-teal-600 mr-4">FAQs</a>
                    </div>
                </div>
                <div className="md:order-1 mt-4 md:mt-0">
                    <ul className="flex">
                        <li>
                            <a href="#" className="text-teal-800 hover:text-blue-500 mr-4">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-teal-800 hover:text-blue-500 mr-4">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-teal-800 hover:text-blue-500 mr-4">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );


};

export default Footer;
