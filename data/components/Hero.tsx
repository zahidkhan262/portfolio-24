import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import HireButton from './ui/hire-button';
import { currentUser } from '@/src/data';

const Hero: React.FC = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vh]'
          fill='purple'
        />
        <Spotlight
          className='top-28 left-80 h-[80vh] w-[50vh]'
          fill='blue'
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            Hi, I'm {currentUser?.name}
          </p>
          <TextGenerateEffect
            words="I am Fullstack developer [MERN STACK]"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="sm:py-10 py-5 flex justify-center items-center flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a href='mailto:priyanshigupta1706@gmail.com' className='mr-4'>
              <HireButton
                label="Hire Me"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses='hero-btn'
              />
            </a>
            <a href={currentUser?.resume} download>
              <MagicButton
                label="Download My Resume"
                icon={<FaDownload />}
                position="right"
                otherClasses='hero-btn'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero