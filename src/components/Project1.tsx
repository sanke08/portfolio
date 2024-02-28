import React from 'react'
import { motion } from "framer-motion"
const img2 = require("../3.jpg")
const img3 = require("../4.jpg")
const img4 = require("../5.jpg")
const img5 = require("../6.png")

const Project1 = () => {
  const items = [
    {
      name: "Music Player",
      tech: "Nextjs, MongoDB , TailwindCSS, Express, Node",
      href: "",
      img: img3
    },
    {
      name: "Discord Clone",
      tech: "Nextjs, Prisma, Socket-io, TailwindCSS, Express, Node",
      href: "",
      img: img2
    },
    {
      name: "Trollo Clone",
      tech: "Nextjs, Server action, Prisma, Socket-io, TailwindCSS, Express, Node",
      href: "",
      img: img4
    },
  ]

  const oItems = [
    {
      name: "Crypto",
      tech: "React, HTML, CSS, javascript",
      href: "",
      img: img5
    },
  ]


  return (
    <div className=' w-full'>
      <p className=' pt-10 text-white py-1 w-full'>Main Projects</p>
      <div id='project1' className=' w-full h-fit grid lg:grid-cols-5 grid-cols-2 gap-2 px-2 '>
        {
          items.map((item, i) => (
            <Comp key={i} name={item.name} img={item.img} tech={item.tech} href={item.href} i={i} />
          ))
        }
      </div>
      <p className=' mt-5 text-white py-1'>others </p>
      <div className=' w-full h-fit grid lg:grid-cols-5 grid-cols-2 p-2 gap-2'>
        {
          oItems.map((item, i) => (
            <Comp key={i} name={item.name} img={item.img} tech={item.tech} href={item.href} i={i} />
          ))
        }
      </div>
    </div>
  )
}

export default Project1



const Comp = ({ img, name, tech, href, i }: {
  img: string,
  name: string,
  tech: string,
  href: string
  i: number
}) => {
  return (
    <motion.div whileInView={{ scale: 1, }} initial={{ scale: 0 }} transition={{ duration: 0.5, delay: 0.3 * i }} className=' border border-neutral-800 rounded-lg w-full flex flex-col justify-evenly p-2'>
      <img src={img} alt="" className=' w-full bg-blend-overlay object-contain rounded-lg' />
      <p className=' mt-2 text-white'>{name}</p>
      <p className=' text-neutral-700 text-[0.7rem]'>{tech}</p>
      <p className='border border-neutral-800 p-1 px-3 w-max'>git</p>
    </motion.div>
  )
}