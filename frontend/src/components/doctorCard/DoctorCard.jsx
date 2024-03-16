import React, { useState } from 'react';

const DoctorCard = ({ name, specialty, image }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: ''
    });

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            date: '',
            time: ''
        });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 bg-white">
            <img className="w-full h-auto" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-blue-700">Doctor</div>
                <p className="text-gray-700 text-lg">
                    <strong>Name:</strong> {name}
                </p>
                <p className="text-gray-700 text-lg">
                    <strong>Specialty:</strong> {specialty}
                </p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-xl tracking-wider" onClick={togglePopup}>
                    Shedule Consultation
                </button>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96"> {/* Increase width here */}
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Schedule Consultation</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="time">
                                    Time
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="time"
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded tracking-wider"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-5 rounded ml-2 tracking-wider"
                                onClick={togglePopup}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorCard;
