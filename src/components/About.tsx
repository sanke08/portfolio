import React from 'react'
import { motion } from "framer-motion"

const img = require("../assets/9.jpeg")


const About = () => {
    return (
        <div id='about' className=' w-full md:flex justify-center bg-neutral-950 gap-2 px-5 text-white h-full'>
            <motion.img src={img} initial={{ translateX: -50, opacity: 0 }} transition={{ duration: 0.7 }} whileInView={{ translateX: 0, opacity: 1 }} className=' w-[15rem] rounded-xl mx-auto md:mx-0' />
            <motion.div initial={{ translateX: 50, opacity: 0 }} transition={{ duration: 0.7 }} whileInView={{ translateX: 0, opacity: 1 }} className=' w-fit'>
                <p className=' text-2xl py-3'>About <span className='w-max bg-gradient-to-r from-green-500 to-neutral-700 bg-clip-text text-transparent'> Me</span></p>
                <p className=' md:max-w-[30rem]  text-justify'>"Hi there! I’m Sanket Gawande, a web developer with a curious mind. I may not have experience yet, but my passion for clean code and seamless user experiences drives me forward. Let’s turn ideas into functional web applications!”</p>
            </motion.div>
        </div>
    )
}

export default About