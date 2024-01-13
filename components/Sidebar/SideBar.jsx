import React, { useState } from 'react'
import "./sidebar.scss"
import Links from "./Links/Links"
import ToggleButton from "./Togglebuton/ToggleButton"
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transiton: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(25px at 50px 50px)",
        transiton: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const SideBar = () => {
    const [open, setOpen] = useState(false)


    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"} >
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default SideBar