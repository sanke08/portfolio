import React from 'react'
import { motion, } from "framer-motion"




const Navbar = () => {

    const routes = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Contact", href: "/#contact" },
    ]



    return (
        <div className=' flex w-full items-center justify-between py-2 md:px-20 px-5'>
            <a href="/">

                <h1 className=' bg-gradient-to-r text-3xl from-green-600 to-neutral-700  bg-clip-text text-transparent'>
                    S.Gawande
                </h1>
            </a>
            <div className='gap-5 hidden md:flex'>
                {
                    routes.map((route, index) => (
                        <motion.button whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1, duration: 0.5 }} initial={{ opacity: 0, }} key={index} className=' text-lg bg-gradient-to-b text-transparent text-neutral-500 from-green-500 bg-clip-text  transition-all duration-500'>
                            <a href={route.href} >
                                {route.name}
                            </a>
                        </motion.button>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar