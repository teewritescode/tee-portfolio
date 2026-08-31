import { Sparkles } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-6'>
        <div className='w-[80%] mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <p className='text-sm text-muted-foreground flex items-center'>
                    Copyright © {new Date().getFullYear()} Izzati Murijin
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer