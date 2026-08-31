'use client'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type ProjectCardProps = {
    title:string
    description:string
    image:string
    techStack:string[]
    detailsUrl:string
}

const ProjectCard = ({description, image, techStack, title, detailsUrl}:ProjectCardProps) => {

    const router = useRouter()

  return (
    <div className='group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden'>
        {/** image container */}
        <div className='relative h-48 overflow-hidden'>
            <Image src={image} alt={title} width={400} height={400} className='w-full h-full object-cover' />
        </div>

        {/** main content */}
        <div className='p-5 h-max'>
            <h3 className='text-xl text-black dark:text-white font-semibold mb-2
            group-hover:text-blue-500 transition-colors'>
                {title}
            </h3>
            <p className='text-muted-foreground text-sm mb-6 line-clamp-5'>
                {description}
            </p>

            {/** tech stacks */}
            <div className='flex flex-wrap gap-2 mb-2 justify-center'>
                {techStack.map((tech)=>{ 
                    return (
                        <span key={tech} className='text-xs px-3 py-1 rounded-full bg-indigo-600 text-white
                        font-medium'>
                            {tech}
                        </span>
                    )
                })}
            </div>

            {/** button */}
            {/*<div className='flex gap-3'>
                {/**{detailsUrl}*
                <Button 
                size={"sm"} 
                className='flex-1'
                onClick={() => router.push(detailsUrl)}>
                    View Details
                    <ExternalLink className='w-4 h-4 mr-2'/>
                </Button>
            </div> */}
        </div>
    </div>
  )
}

export default ProjectCard