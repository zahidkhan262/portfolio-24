import React from 'react'
import { motion } from 'framer-motion';
import { skillData } from '@/data';
import Heading from './custom/heading';

const Skills = () => {
    return (
        <section id='skills'>
            <Heading first='My' second='Skills' />
            <div className="mt-10 md:max-w-3xl text-center mx-auto">
                {
                    skillData && skillData?.map((skill, id) => (
                        <span className='m-2 inline-block bg-sky-800 hover:bg-blue-400 py-2 px-4 rounded-xl'>{skill}</span>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills