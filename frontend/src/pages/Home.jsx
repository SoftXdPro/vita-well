import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/hero/Hero';
import SymptomSearch from '../components/symptomSearch/SymptomSearch';
import ConsultSection from '../components/consultSection/ConsultSection';
import ContactUs from './ContactUs';

const Home = () => {
    const symptomSearchControls = useAnimation();
    const consultControls = useAnimation();
    const contactUsControls = useAnimation();

    const { ref: symptomSearchRef, inView: symptomSearchInView } = useInView();
    const { ref: consultRef, inView: consultInView } = useInView();
    const { ref: contactUsRef, inView: contactUsInView } = useInView();

    useEffect(() => {
        if (symptomSearchInView) {
            symptomSearchControls.start({ opacity: 1, y: 0 });
        }
        if (consultInView) {
            consultControls.start({ opacity: 1, y: 0 });
        }
        if (contactUsInView) {
            contactUsControls.start({ opacity: 1, y: 0 });
        }
    }, [symptomSearchControls, symptomSearchInView, consultControls, consultInView, contactUsControls, contactUsInView]);

    return (
        <div className='bg-gray-100'>
            <Hero
                title="Welcome to VitaWell"
                subtitle="Nurturing Body and Mind for Balanced Living"
                buttonText="Get Started"
                buttonLink="/consult-here"
                background="https://imgur.com/h4FoxhV.png"
            />
            <div className="mx-auto flex flex-col items-center mt-10 p-10">
                <motion.h2
                    ref={symptomSearchRef}
                    className="bg-yellow-300 text-4xl font-bold font text-center mb-6 px-10 py-5 text-white wegiht-bold rounded-xl max-w-96 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={symptomSearchControls}
                    transition={{ duration: 0.5 }}
                >
                    Symptom Search
                </motion.h2>
                <SymptomSearch />
            </div>
            <div className="mx-auto flex flex-col items-center mt-10 p-10 ">
                <motion.h2
                    ref={consultRef}
                    className="bg-yellow-300 text-4xl font-bold font text-center mb-6 px-10 py-5 text-white wegiht-bold rounded-xl max-w-96"
                    initial={{ opacity: 0, y: 20 }}
                    animate={consultControls}
                    transition={{ duration: 0.5 }}
                >
                    Consult Section
                </motion.h2>
                <ConsultSection />
            </div>
            <div className="mx-auto flex flex-col items-center mt-10 p-10 ">
                <motion.h2
                    ref={contactUsRef}
                    className="bg-yellow-300 text-4xl font-bold font text-center mb-6 px-10 py-5 text-white wegiht-bold rounded-xl max-w-96"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactUsControls}
                    transition={{ duration: 0.5 }}
                >
                    Contact Us
                </motion.h2>
                <ContactUs />
            </div>

        </div>
    );
};

export default Home;
