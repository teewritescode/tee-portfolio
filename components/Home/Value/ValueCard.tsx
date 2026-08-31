'use client'
import { ChevronsRightIcon, LucideIcon } from 'lucide-react'
import React from 'react'

type ValueCardProps = {
    title: string;
    description?: string;
    items?: string[];
    icon: LucideIcon;
    variant?: "technical" | "business" | "personal";
}

const ValueCard = ({title, description, items, icon:Icon, variant='personal'}:ValueCardProps) => {
    
    const isTechnical = variant === "technical"
    const isBusiness =variant === "business"

  return (
    <div className='group relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 
    hover:shadow-xl sm:p-7 lg:p-8
    ${isTechnical? `
              bg-white
              dark:bg-gray-800
            ` : ""
    }
    ${isBusiness? `
              bg-white
              dark:bg-gray-800
            ` : ""
    }
    ${!isTechnical && !isBusiness? `
              bg-white
              dark:bg-gray-800
            ` : ""
    }'
    >
        
        {/** icon */}
        <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-center sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full sm:h-20 sm:w-20
            bg-linear-to-br
            ${isTechnical? `
                  from-purple-400 to-blue-600
                  group-hover:from-purple-300 group-hover:to-blue-800
                ` : ""
            }
            ${isBusiness? `
                  from-purple-400 to-blue-600
                  group-hover:from-purple-300 group-hover:to-blue-800
                ` : ""
            }
            ${!isTechnical && !isBusiness? `
                  from-purple-400 to-blue-600
                  group-hover:from-purple-300 group-hover:to-blue-800
                ` : ""
            }'
            >
                <Icon className='h-8 w-8 sm:h-10 sm:w-10'/>
            </div>
        </div>

        {/** title */}
        <div>
            <h3 className='text-xl font-bold uppercase tracking-wide text-gray-900 sm:text-xl dark:text-white'>
                {title}
            </h3>
            <div className='mt-3 h-0.5 w-10 transition-all duration-300 group-hover:w-16
              ${isTechnical ? "bg-blue-600" : isBusiness ? "bg-purple-600" : "bg-blue-600"}'
            />
        </div>

        {/* List */}
        {items && (
            <ul className='space-y-3 text-sm leading-6 text-gray-700 sm:text-[15px] dark:text-gray-300'>
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                <ChevronsRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full
                ${isTechnical ? "bg-blue-600" : "bg-purple-600"}' />
                <span>{item}</span>
                </li>
            ))}
            </ul>
        )}
        
        {/* Description */}
        {description && (
            <p className='text-sm leading-7 text-gray-700 sm:text-[15px] dark:text-gray-300'>
            {description}
            </p>
        )}
    </div>
  )
}

export default ValueCard