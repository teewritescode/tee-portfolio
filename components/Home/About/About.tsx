'use client'
import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
        {/** Section heading */}
        <SectionHeading 
            title_1="About" 
            title_2="Me" 
            description="A little more about me"
        />

        <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
            {/** Image */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden p-2">
                    <Image 
                        src={"/images/user.jpg"} 
                        alt="profile" 
                        width={700} 
                        height={700} 
                        className="w-full h-full object-center rounded-xl" 
                    />
                </div>
            </div>

            {/** Content */}
            <div data-aos="fade-left" data-aos-delay="150" data-aos- data-aos-anchor-placement="top-center" 
            className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    My career hasn't followed a straight line and I'm okay with that.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    I'm a Software Engineering graduate with a non-linear professional journey
                    that has taken me from programming into sales, marketing, and business operations.
                    This experience has taught me to look beyond codes; to understand users, business processes,
                    and the problems technology can solve.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Now, I;m bringing those perspectives together as I return to software development 
                    and continue building, learning and growing in tech.
                </p>

                {/** Highlight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {highlights.map((item)=>{
                        return (
                            <div 
                                key={item.text} 
                                className="flex items-center gap-3 text-sm"
                            >
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-muted-foreground"> {item.text} </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/** stats */}
        <div className="mt-16 w-[80%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {stats.map((stat, index) => {
                return (
                    <React.Fragment key={stat.label}>
                    
                    {/* Stat Box */}
                    <div data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-center"
                    className="w-full md:flex-1 bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                        {stat.value}
                        </div>

                        <div className="text-sm text-muted-foreground">
                        {stat.label}
                        </div>
                    </div>

                    </React.Fragment>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default About