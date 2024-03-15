import React from 'react';
import { motion } from 'framer-motion';
import TherapistCard from '../components/therapistCard/TherapistCard';
import DoctorCard from '../components/doctorCard/DoctorCard';
import PsychologistCard from '../components/psychologistCard/PsychologistCard';

const ConsultHere = () => {
    return (
        <div className="font mt-20 flex items-center flex-col consult-here-page min-h-screen py-8 px-4 bg-gray-100">

            <motion.h1
                className="bg-yellow-300 text-4xl font-bold font text-center mb-6 py-5 px-10 text-white wegiht-bold rounded-xl min-w-96 mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Therapists
            </motion.h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <TherapistCard name="Aryan Walia" specialty="Cognitive Behavioral Therapy" image="https://imgur.com/H4Mzw6p.png" />
                    <TherapistCard name="Sara Johnson" specialty="Family Therapy" image="https://imgur.com/q1lds6t.png" />
                    <TherapistCard name="John Doe" specialty="Addiction Counseling" image="https://imgur.com/JHI99H3.png" />
                </div>
            </div>
            <motion.h1
                className="bg-yellow-300 text-4xl font-bold font text-center mb-6 py-5 px-10 text-white wegiht-bold rounded-xl min-w-96 mt-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Doctors
            </motion.h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DoctorCard name="Aryan Walia" specialty="Cognitive Behavioral Therapy" image="https://imgur.com/H4Mzw6p.png" />
                    <DoctorCard name="Sara Johnson" specialty="Family Therapy" image="https://imgur.com/q1lds6t.png" />
                    <DoctorCard name="John Doe" specialty="Addiction Counseling" image="https://imgur.com/JHI99H3.png" />
                </div>
            </div>
            <motion.h1
                className="bg-yellow-300 text-4xl font-bold font text-center mb-6 py-5 px-10 text-white wegiht-bold rounded-xl min-w-96 mt-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Psychologist
            </motion.h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PsychologistCard name="Aryan Walia" specialty="Cognitive Behavioral Therapy" image="https://imgur.com/H4Mzw6p.png" />
                    <PsychologistCard name="Sara Johnson" specialty="Family Therapy" image="https://imgur.com/q1lds6t.png" />
                    <PsychologistCard name="John Doe" specialty="Addiction Counseling" image="https://imgur.com/JHI99H3.png" />
                </div>
            </div>
        </div>
    );
};

export default ConsultHere;
