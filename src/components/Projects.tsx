import React from 'react'
import { motion } from "framer-motion"



const img1 = require("../3.jpg")
const img2 = require("../4.jpg")
const img3 = require("../5.jpg")
const img4 = require("../6.png")
const img5 = require("../assets/8.jpeg")




const Projects = () => {
    const items = [
        {
            name: "Music Player",
            tech: "Nextjs, MongoDB , TailwindCSS, Express, Node",
            href: "https://github.com/sanke08/player.git",
            img: img2,
            desc: ""
        },
        {
            name: "Discord Clone",
            tech: "Nextjs, Prisma, Socket-io, TailwindCSS, Express, Node",
            href: "https://github.com/sanke08",
            img: img1,
            desc: ""
        },
        {
            name: "Trollo Clone",
            tech: "Nextjs, Server action, Prisma, Socket-io, TailwindCSS, Express, Node",
            href: "https://github.com/sanke08/team-work-management/tree/master",
            img: img3,
            desc: ""
        },
    ]
    const oItems = [
        {
            name: "Crypto",
            tech: "React, HTML, CSS, javascript",
            href: " https://github.com/sanke08",
            img: img4,
            desc: ""
        },
        {
            name: "Movie api",
            tech: "React, HTML, CSS, javascript",
            href: " https://github.com/sanke08/movie-api.git",
            img: "",
            desc: "Movie app (backend)"
        },
        {
            name: "Movie ui",
            tech: "React, HTML, CSS, javascript",
            href: "https://github.com/sanke08/movie-frontend-2.0.git",
            desc: "Movie app (frontend)",
            img: "",
        },
        {
            name: "Social Media",
            tech: "React, HTML, CSS, javascript",
            href: "https://github.com/sanke08/movie-frontend-2.0.git",
            img: img5,
            desc: ""
        },
    ]

    return (
        <div className=' w-full bg-neutral-950 pb-20'>
            <p className='w-max mx-auto bg-gradient-to-r text-2xl pt-10 from-orange-700 to-neutral-500 bg-clip-text text-transparent'>My Projects</p>
            <p className='px-10 md:px-20 text-white text-xl'>Main</p>
            <div className=' w-full px-5 md:px-20 grid  md:grid-cols-5 gap-5 py-2 pb-10'>
                {
                    items.map((item, index) => (
                        <Card key={index} index={index} item={item} />
                    ))
                }
            </div>
            <p className=' text-white px-20 text-xl'>Basic</p>
            <div className=' w-full px-5 md:px-20 grid md:grid-cols-7 grid-cols-2 gap-5 py-3'>
                {
                    oItems.map((item, index) => (
                        <Card key={index} index={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

interface Props {
    item: {
        name: string
        tech: string
        href: string
        img: string
        desc: string
    }
    index: number
}

const Card = ({ item, index }: Props) => {
    return (
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.7, delay: (index + 0.2) * 0.5 }} className=' w-full flex flex-col justify-evenly text-white border border-neutral-700 p-2 rounded-xl'>
            {
                item.img ?
                    <img src={item.img} alt='' className=' rounded-xl' />
                    :
                    <p className=' h-[100px] flex justify-center items-center' >
                        {item.desc}
                    </p>
            }
            {item.name}
            <a href={`${item.href}`} target="_blank" className=' m-2 h-fit border w-fit p-1 rounded-lg'>
                <svg height="20" aria-hidden="true" fill='white' viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            </a>
        </motion.div>
    )
}