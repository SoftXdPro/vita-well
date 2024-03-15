import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderMedicine = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: 1,
        additionalNotes: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add further logic here, such as sending the form data to a backend server
    };

    const searchParams = new URLSearchParams(window.location.search);
    const medicine = JSON.parse(decodeURIComponent(searchParams.get('medicine')));

    return (
        <div className="font min-h-screen flex justify-center items-center mt-24 py-10 bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white rounded-lg shadow-md p-8"
            >
                <h2 className="text-3xl font-semibold mb-4 text-center">Order Medicine</h2>
                <div className="mb-4">
                    <label htmlFor="medicine" className="block text-lg font-medium text-gray-700">Medicine</label>
                    <input type="text" id="medicine" name="medicine" value={medicine.name} disabled
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-lg font-medium text-gray-700">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" value={formData.quantity} onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="additionalNotes" className="block text-lg font-medium text-gray-700">Additional Notes</label>
                        <textarea id="additionalNotes" name="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border-2"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-xl tracking-wider font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default OrderMedicine;
