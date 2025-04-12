import React from 'react';
import { motion } from 'framer-motion';

function Button({btnText, className}) {
  return (
    <motion.button
      className={`${className} py-2 min-w-28 px-4 hover:cursor-pointer`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'tween', duration: 0.2 }}
      whileTap={{scale: 1}}
    >
        {btnText}
    </motion.button>
  )
}

export default Button