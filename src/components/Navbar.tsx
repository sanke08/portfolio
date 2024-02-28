import React from 'react'
import { motion, } from "framer-motion"




const Navbar = () => {

    const routes = [
        { name: "Home",href:"/" },
        { name: "About" ,href:"#about"},
        { name: "Skills" ,href:"/#skills"},
        { name: "Contact" ,href:"/#contact"},
    ]



    return (
        <div className=' flex w-full items-center justify-between py-2 md:px-20 px-5'>
            <h1 className=' bg-gradient-to-r text-3xl from-orange-600 to-neutral-300/50  bg-clip-text text-transparent'>
                S.Gawande
            </h1>
            <div className='gap-5 hidden md:flex'>
                {
                    routes.map((route, index) => (
                        <motion.button whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2, duration: 0.5 }} initial={{ opacity: 0, }} key={index} className=' text-neutral-500 hover:text-orange-500 transition-all duration-200'>
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