import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ConsultCard from '../consultCard/ConsultCard';

const ConsultSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotate: -45 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 1 // Stagger effect for animation
            }
        }
    };

    const cardItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className="p-10 mx-auto mt-10">
            <div ref={ref}>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                >
                    <motion.div variants={cardItemVariants}>
                        <ConsultCard
                            title="Therapist"
                            description="Book a session with a licensed therapist to discuss your mental health concerns."
                            buttonText="Book Now"
                            imageUrl='https://imgur.com/WR9QBzr.png'
                        />
                    </motion.div>
                    <motion.div variants={cardItemVariants}>
                        <ConsultCard
                            title="Doctor"
                            description="Schedule a telemedicine consultation with a qualified doctor for medical advice and prescriptions."
                            buttonText="Schedule Consultation"
                            imageUrl='https://imgur.com/tVNEajr.png'
                        />
                    </motion.div>
                    <motion.div variants={cardItemVariants}>
                        <ConsultCard
                            title="Psychologist"
                            description="Connect with a psychologist for professional support and therapy sessions."
                            buttonText="Start Therapy"
                            imageUrl='https://imgur.com/ZrMNP4B.png'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ConsultSection;
