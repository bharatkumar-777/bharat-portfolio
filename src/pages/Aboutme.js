import React from 'react'
import Aboutsection from '../components/Aboutsection'
import ServiceSection from '../components/ServiceSection'
import FaqSection from '../components/FaqSection'
import {motion} from 'framer-motion';
import {pageAnimation} from "../animate";
const Aboutme = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">

            <Aboutsection/>
            <ServiceSection/>
            <FaqSection/>
        </motion.div>
    )
}

export default Aboutme
