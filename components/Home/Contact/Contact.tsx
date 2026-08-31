'use client'
import SectionHeading from '@/components/Helper/SectionHeading'
import { contactInfo, socialLinks } from '@/data'
import React from 'react'

const Contact = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-950'>
        <SectionHeading
        title_1="Get In"
        title_2="Touch"
        description="I'm open to new opportunities where technology meets real-world needs" />

        <div className='w-[50%] mx-auto'>
            <div className='grid lg:grid-cols-1 max-w-5xl mx-auto'>

                {/** contact info */}
                <div data-aos="zoom-in-up" data-aos-delay="150" data-aos-anchor-placement="top-center">
                    <div className='space-y-4'>
                        {contactInfo.map((item) => {
                            return (
                                <a href={item.href} key={item.label} target='_blank'
                                className='flex items-center gap-4 p-4 bg-white dark:bg-purple-950 shadow-md
                                rounded-xl hover:scale-105 transition-all duration-300 group'>
                                    <div className='w-12 h-12 rounded-lg bg-linear-to-br from-purple-400
                                    to-blue-600 flex items-center justify-center group-hover:from-purple-300 
                                    group-hover:to-blue-800 transition-all duration-300'>
                                        <item.icon className='w-5 h-5 text-white' />
                                    </div>

                                    <div>
                                        <p className='text-sm text-muted-foreground'>
                                            {item.label}
                                        </p>
                                        <p className='font-medium'>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>

                    {/** social links */}
                    <div className='p-6 justify-items-center'>
                        <h4 className='text-lg font-medium mb-4'> Follow Me </h4>
                        <div className='flex gap-3'>
                            {socialLinks.map((link) => {
                                return (
                                    <a href={link.href} key={link.label} target='_blank'
                                    className='w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center
                                    justify-center text-muted-foreground hover:text-blue-500 transition-colors'>
                                        <link.icon className='w-5 h-5'/>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact