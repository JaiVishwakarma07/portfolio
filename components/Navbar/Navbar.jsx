import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import SideBar from '../Sidebar/SideBar'

const Navbar = () => {
    return (
        <div className="navbar" >
            <SideBar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Jai Vishwakarma</motion.span>
                <div className="social">
                    <a href="https://github.com/JaiVishwakarma07"> <img src="/github.png" alt="" /></a>
                    <a href="https://www.instagram.com/_jai_vishwakarma_/"> <img src="/instagram.png" alt="" /> </a>
                    <a href="https://www.linkedin.com/in/jai-vishwakarma-22778b228/"> <img src="/linkedin.png" alt="" /> </a>
                    {/* <a href="#"> <img src="/dribbble.png" alt="" /> </a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar