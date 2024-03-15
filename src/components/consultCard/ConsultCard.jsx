import React from 'react';

const ConsultCard = ({ title, description, buttonText, imageUrl }) => {
    return (
        <div className="font bg-white rounded-lg p-6 flex flex-col justify-between shadow-md" style={{ height: '420px' }}>
            <div>
                <h3 className="text-3xl font-semibold mb-4 text-gray-800 ">{title}</h3>
                <p className="text-gray-400 mb-4 text-xl">{description}</p>
            </div>
            <div className="flex justify-center">
                {imageUrl && (
                    <img src={imageUrl} alt={title} className="w-32 h-32 object-cover rounded-full" />
                )}
            </div>
            <button className=" text-xl bg-red-400 text-white py-3 px-8 rounded-md hover:bg-red-600 transition duration-300 ease-in-out w-45">
                {buttonText}
            </button>
        </div>
    );
};

export default ConsultCard;
