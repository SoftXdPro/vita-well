import React from 'react';
import { motion } from 'framer-motion';
import './SymptomInfo.css';

const SymptomInfo = ({ symptom }) => {
    return (
        <div className="symptom-info-container">
            <motion.div className="symptom-info bg-white p-6 rounded-lg"
                style={{ maxHeight: '400px' }} // Set the max height here
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <h2 className="text-2xl font-semibold mb-4 font">{symptom.name}</h2>
                <p className="text-gray-800 mb-6">{symptom.description}</p>
                <div className="symptom-details">
                    <h3 className="text-lg font-semibold mb-2">Causes:</h3>
                    <p className="text-gray-700 mb-4">{symptom.causes}</p>
                    <h3 className="text-lg font-semibold mb-2">Prevention and Management Tips:</h3>
                    <p className="text-gray-700 mb-4">{symptom.management}</p>
                </div>
                <div className="symptom-resources">
                    <h3 className="text-lg font-semibold mb-2">Related Resources:</h3>
                    <ul>
                        {symptom.resources.map((resource, index) => (
                            <li key={index} className="mb-2">
                                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{resource.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {symptom.medicines && (
                    <div className="symptom-medicines">
                        <h3 className="text-lg font-semibold mb-2">Medicines:</h3>
                        <ul>
                            {symptom.medicines.map((medicine, index) => (
                                <li key={index} className="mb-2">
                                    <a href={medicine.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{medicine.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default SymptomInfo;
