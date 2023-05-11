import { AiFillLinkedin, AiFillGithub, AiOutlineHtml5 } from 'react-icons/ai'
import { SiTailwindcss, SiRedux, SiExpress, SiTypescript } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { motion, spring } from 'framer-motion'
import { TbSql } from 'react-icons/tb'

const stackIcons = [
  'html-5.png',
  'css-3.png',
  'typescript.png',
  'physics.png',
  'icons8-node-js-480.png',
  'icons8-express-js-480.png',
  'sql-server.png',
  'icons8-redux-480.png',
  'icons8-tailwind-css-480.png',
]

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-5">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.0, type: 'tween' }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-500 font-lora ">
          Maycon Assis
        </motion.h1>
        <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 1 }} className="font-lora py-3">
          SOFTWARE DEVELOPER
        </motion.h2>
        <img className="my-3 border-8 rounded-full h-32 md:h-48 lg:h-56 w-32 md:w-48 lg:w-56 " src="Maycon (3).jpg" alt="" />
        <p className="text-center font-serif leading-7 text-gray-700">
          Heya/Ola 👋 An easygoing person who loves living life and seeing every experience as an opportunity to grow! Enough chitchat, lets get to it!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-6  text-gray-500 pb-12">
        <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/maycon-assis" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <hr />
      <div className="py-12">
        <div className=" flex flex-col justify-center text-center gap">
          <h3 className="pb-3 font-lora text-lg text-blue-900">FRONT-END TOOLS</h3>
          <p className="py-3  leading-7 text-gray-700">Used to create web applications that are interactive, accessible, and engaging. These technologies have worked for me like a dream.</p>
        </div>
        <div className="py-3 text-5xl flex justify-center gap-6 text-blue-900 ">
          <AiOutlineHtml5 />
          <SiTailwindcss />
          <FaReact />
          <SiRedux />
        </div>
      </div>
      <div className="py-12">
        <div className=" flex flex-col justify-center text-center gap">
          <h3 className="pb-3 font-lora text-lg text-orange-300">BACK-END TOOLS</h3>
          <p className="py-3 leading-7 text-gray-700">
            These tool combined, to me have been like a well-oiled machine, allowing for functionality as well as building REST APIs that enable efficient communication between the front end and
            server-side components
          </p>
        </div>
        <div className="py-3 text-5xl flex justify-center gap-6 text-orange-300 ">
          <FaNodeJs />
          <SiExpress />
          <TbSql />
          <SiTypescript />
        </div>
      </div>
    </>
  )
}

export default Home
