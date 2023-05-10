import React from 'react'

import { motion } from 'framer-motion'
import { SiJavascript } from 'react-icons/si'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'
import Image from 'next/image'

type Props = {
    experience: Experience
}

export default function ExperienceCards({experience}: Props) {
    const dateStarted = new Date(experience.dateStarted)
    const dateEnded = new Date(experience.dateEnded)

    return (
    <article 
        className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] 
        snap-center bg-[#292929] p-10 xs:p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-300 overflow-hidden'
    >
        <motion.img
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            className='md:w-20 md:h-20 rounded-full xs:w-16 xs:h-16 lg:w-24 lg:h-24 xl:w-[100px] xl:h-[100px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt={experience.company}
        />

        <div className='px-0 md:px-1'>
            <h4 className='text-base md:text-2xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-base md:text-xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map(technology => (
                    <img 
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                       className="h-10 w-10 md:h-6 md:w-6 xs:h-5 xs:w-5 rounded-full"
                    />
                ))}
            </div>

            <p className='uppercase py-5 text-gray-300 xs:py-1 xs:text-xs lg:text-base'>
                {new Intl.DateTimeFormat('en-US', {year: "numeric", month: "long"}).format(dateStarted)} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present" : new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long'}).format(dateEnded)}
            </p>

            <ul className='list-disc space-y-4 ml-5 lg:text-base overflow-y-hidden xs:space-y-1 xs:text-xs'>
                {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

        </div>
    </article>
  )
}