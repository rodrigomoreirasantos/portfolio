import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

import me from '../assets/photo.png'
import Link from 'next/link'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, cont] = useTypewriter({
        words:[
            `Hi, My Name's ${pageInfo?.name}`,
            "Frontend Developer"
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden md:space-y-8'>
        <BackgroundCircles />
        <Image 
            className='relative rounded-full h-32 w-32 object-cover'
            src={me} 
            alt="Me" 
            width={500} 
            height={500}
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>
            <h1 className='text-md md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}