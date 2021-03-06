import React from 'react'
import {motion} from "framer-motion";
function Animation({children}) {
    const animate={
        initial:{opacity:0,x:-100},
        animate:{opacity:1,x:0},
        exit:{opacity:0,x:-100}
    }
  return (
    <motion.div
     variants={animate}
     initial="initial"
     animate="animate"
     exit="exit"
     transition={{duration:0.5}}
    >
        {children}
    </motion.div>
  )
}

export default Animation