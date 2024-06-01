import React from 'react'
import { motion } from 'framer-motion';
import { currentUser } from '@/data';
import Heading from './custom/heading';
const About = () => {
    return (
        <section id='about'>
            <Heading first='About' second='Me' />
            <p className="text-start md:w-[60vw] mx-auto text-white-100 mt-3 font-semibold">
                {currentUser?.about}
            </p>
        </section>
    )
}

export default About