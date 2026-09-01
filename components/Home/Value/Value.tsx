'use client'
import SectionHeading from '@/components/Helper/SectionHeading'
import { personalValues, values } from '@/data'
import React from 'react'
import ValueCard from './ValueCard'
import { Lightbulb, Puzzle, Rocket, UserRound } from 'lucide-react'

const Value = () => {
  return (
    <div id='value' className='scroll-mt-24 py-20 bg-gray-100 dark:bg-gray-900'>
        <SectionHeading
        title_1='What Makes'
        title_2='Me Different'
        description='More Than Skills. A perspective shaped by technology and business'
        />
        <div className='relative px-6 w-[80%] mx-auto'>

            {/* ================= TECHNICAL + BUSINESS ================= */}
            <div className='relative mx-auto mt-12 w-full max-w-10xl sm:mt-14 lg:mt-16'>
                <div data-aos="zoom-in" data-aos-delay="100" data-aos-anchor-placement="top-center"
                className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-24'>
                    {values.map((value) => {
                        return (
                            <ValueCard 
                            key={value.title}
                            title={value.title}
                            icon={value.icon}
                            items={value.items}
                            variant={
                                value.type === "technical" ? "technical" : "business"
                            }
                            />
                        )
                    })}
                </div>

                {/* ================= CENTER CIRCLE ================= */}
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                className='absolute left-1/2 top-1/2 hidden h-36 w-36 -translate-x-1/2 -translate-y-1/2
                items-center justify-center rounded-full bg-gray-950 text-center shadow-xl dark:bg-white
                lg:flex'>
                    <div className='flex flex-col items-center gap-2 px-5'>
                        <span className='text-[10px] font-bold uppercase leading-4 text-white 
                        lg:text-lg lg:leading-5 dark:text-gray-950'>
                            WHEN 
                            <br/> 
                            TWO WORLD 
                            <br/>
                            COLLIDES
                        </span>
                    </div>
                </div>
            </div>

                {/* ================= PERSONAL VALUES ================= */}
                <div className='relative mx-auto w-full max-w-6xl pt-12 sm:pt-16 lg:pt-28'>

                    <div className='absolute left-1/2 top-0 hidden h-12 -translate-x-1/2 border-l-2
                    border-gray-700 lg:block dark:border-gray-700'
                    />

                    <div data-aos="zoom-in" data-aos-delay="100" data-aos-anchor-placement="top-center"
                     className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 mx-auto'>
                        {personalValues.map((value) => (
                            <ValueCard
                                key={value.title}
                                title={value.title}
                                icon={value.icon}
                                description={value.description}
                                variant="personal"
                            />
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Value