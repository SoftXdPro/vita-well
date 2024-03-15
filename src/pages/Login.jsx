import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'example' && password === 'password') {

            console.log('Login successful');

        } else {
            console.log('Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 mt-10">
            <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md w-full flex">
                <div className="w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                    <img src="your-image.jpg" alt="Image" className="w-full" />
                </div>
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <button className="mb-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg mr-2">Login</button>
                    <button className="mb-4 px-4 py-2 bg-gray-500 text-white font-bold rounded-lg">Signup</button>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-bold">Username</label>
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
