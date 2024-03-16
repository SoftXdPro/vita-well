import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="mx-auto px-5 py-5 font w-2/5">


            <form>
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <label htmlFor="name" className="block font-bold mb-2 text-xl">Name</label>
                    <input type="text" id="name" name="name" className="border-2 border-gray-400 rounded-md py-2 px-3 w-full" />
                </motion.div>
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <label htmlFor="email" className="block font-bold mb-2 text-xl">Email</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-400 rounded-md py-2 px-3 w-full" />
                </motion.div>
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <label htmlFor="message" className="block font-bold mb-2 text-xl">Message</label>
                    <textarea id="message" name="message" rows="4" className="border-2 border-gray-400 rounded-md py-2 px-3 w-full"></textarea>
                </motion.div>
                <motion.button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out text-xl tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    Send Message
                </motion.button>
            </form>
        </div>
    );
};

export default ContactUs;
