/* eslint-disable prettier/prettier */

import { motion } from 'framer-motion'

export default function YourComponent() {
  return (
    <motion.div
    animate={{ y: 20 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}>
    Place your ✒️ Component here
    </motion.div>
  )
}
