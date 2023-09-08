import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left 
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute xl:top-20 xs:top-16 xm:top-28 uppercase tracking-[20px] text-gray-500 text-2xl xs:text-base xm:text-lg'>
            Projects
        </h3>

        <div className='relaltive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {projects?.map((project,i)=>(
            <div 
              className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 md:p-44 h-screen'
              key={project._id}
            > 
              <motion.img
                className='xl:w-[25rem] xl:relative xl:top-5 xs:w-32 xs:relative xs:top-2 xm:w-80 '
                initial={{ y: -80, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt="" 
              />

              <div className='space-y-10 xl:space-y-5 xm:space-y-3 xs:space-y-1 px-0 relative top-[-5rem] xs:-top-1  md:px-10 max-w-6xl '>
                <h4 className='text-4xl font-semibold text-center xs:text-base xm:text-xl xl:text-2xl'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length}: 
                  </span>{" "}
                  {project.title}
                </h4>

                <div className='flex items-center space-x-2 justify-center'>
                  {project?.technologies.map((technology) => (
                    <img 
                      className='h-10 w-10 xs:w-5 xs:h-5 xm:h-8 xm:w-8 xl:h-9 xl:w-9 '
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </div>

                <p className='xl:text-lg xm:text-base xs:text-[14px] xs:w-[22rem] xl:w-full text-center md:text-left'>
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}