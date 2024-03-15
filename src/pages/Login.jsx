import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const [email, setEmail] = useState('');
    const [rePassword, setRePassword] = useState(''); // Additional fields for signup

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            if (username === 'example' && password === 'password') {
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        } else {
            if (password !== rePassword) {
                console.log('Passwords do not match');
                return;
            }
            // Logic for signup
            console.log('Signup form submitted');
        }
    };

    const toggleForm = () => {
        // Toggle between login and signup forms
        setIsLogin(!isLogin);
    };

    return (
        <div className="font flex justify-center items-center min-h-screen bg-gray-200 mt-10 w-full h-full">
            <div className=" bg-white rounded-lg overflow-hidden shadow-md w-1/2 flex" style={{ height: '500px' }}> {/* Fixed height applied here */}
                <div className="w-1/2 bg-gray-100 flex items-center justify-center">
                    <img src="https://imgur.com/ujg8prO.jpeg" alt="Image" className="w-full h-full" />
                </div>
                <div className="w-1/2 p-8">
                    <div className="mb-4">
                        <ul className="flex space-x-5 relative">
                            <li className={`z-50 uppercase text-xl py-3 cursor-pointer  w-1/2 text-center ${isLogin ? 'text-teal-500' : 'text-gray-500 '}`} onClick={() => setIsLogin(true)}>Login</li>
                            <li className={`z-50 uppercase text-xl py-3 cursor-pointer w-1/2 text-center ${!isLogin ? 'text-teal-500' : 'text-gray-500 '}`} onClick={() => setIsLogin(false)}>Signup</li>
                            <motion.div
                                className="marker bg-teal-400 h-2 absolute bottom-0 rounded-lg"
                                style={{ left: isLogin ? '-4%' : '50%', width: '40%' }}
                                animate={{ left: isLogin ? '-4%' : '50%' }}
                                transition={{ duration: 0.5 }}
                            ></motion.div>
                        </ul>
                    </div>
                    <div className="w-full max-w-md mx-auto">
                        <form onSubmit={handleSubmit} className="w-full max-w-md">
                            {!isLogin && (
                                <div className="mb-3">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" required />
                                </div>
                            )}
                            <div className="mb-3">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" required />
                            </div>
                            {!isLogin && (
                                <div className="mb-3">
                                    <label htmlFor="rePassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                                    <input type="password" id="rePassword" value={rePassword} onChange={(e) => setRePassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" required />
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <button type="submit" className="tracking-wider bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    {isLogin ? 'Login' : 'Signup'}
                                </button>
                                <button type="button" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 tracking-wide" onClick={toggleForm}>
                                    {isLogin ? 'Create an account' : 'Already have an account?'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
