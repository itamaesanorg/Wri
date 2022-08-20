/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  const { children, ...customMeta } = props
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className='flex flex-row items-center space-x-4'>
        <motion.button
          animate={{ scale: 0.75 }}
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              className='w-5 h-5 text-gray-800 dark:text-gray-200'
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          )}
        </motion.button>
      </div>
    </>
  )
}
