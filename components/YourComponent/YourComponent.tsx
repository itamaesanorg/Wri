/* eslint-disable prettier/prettier */
import React from 'react'

import { motion } from 'framer-motion'

export default function Sushiten() {
  return (
    <div className='hidden xl:inline'>
      <motion.div
        className='px-8 py-4 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-gray-800 top-10 md:top-20 rounded-md mx-auto flex justify-between items-center'
        animate={{ y: -10 }}
        transition={{ duration: 0.5 }}
      >
      
      <a>Place your ✒️ Component here</a>
      
      </motion.div>
    </div>
  )
}
