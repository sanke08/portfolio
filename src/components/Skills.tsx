import React from 'react'
import { motion } from "framer-motion"
import { HtmlIcon, CssIcon, JavascriptIcon, TailwindIcon, ReactIcon, NodeIcon, NextIcon, PrismalIcon, MongodbIcon, ExpressIcon, TypeScriptlIcon, GitIcon } from '../assets/indes'


const Skills = () => {

    const backend = [

    ]
    const frontend = [
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "Javascript", icon: JavascriptIcon },
        { name: "React", icon: ReactIcon },
        { name: "Nextjs", icon: NextIcon },
        { name: "Express", icon: ExpressIcon },
        { name: "Typescript", icon: TypeScriptlIcon },
        { name: "Mongodb", icon: MongodbIcon },
        { name: "Node", icon: NodeIcon },
        { name: "git", icon: GitIcon },
        { name: "Tailwind", icon: TailwindIcon },
        { name: "Prisma", icon: PrismalIcon },
    ]

    const others = [
        { name: "Zod" }
    ]


    return (
        <div className=' w-full h-full'>
            <p id='skills' className=' py-5 w-max mx-auto text-2xl bg-gradient-to-r from-orange-700 to-neutral-500 bg-clip-text text-transparent'>My Skills</p>
            <div className='  grid-cols-7 gap-5 px-40 w-full pb-10 hidden xl:grid'>
                {
                    frontend.map((skill, i) => (
                        <motion.div initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: i * 0.2 }} key={skill.name} className='p-2 w-fit px-4 text-center'>
                            <skill.icon />
                        </motion.div>
                    ))
                }
            </div>
            <div className=' flex justify-evenly flex-wrap w-full h-full'>
            {
                    frontend.map((skill, i) => (
                        <motion.div  whileInView={{scale:1}} initial={{scale:0}} transition={{duration:0.2,delay:0.01*i}} key={skill.name} className='p-2 w-[8rem] h-[8rem] flex justify-center items-center px-4 text-center'>
                            <skill.icon />
                        </motion.div>
                    ))
                }
            </div>
        </div>

    )
}

export default Skills