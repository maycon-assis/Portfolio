import { AiFillLinkedin, AiFillGithub, AiOutlineHtml5 } from 'react-icons/ai'
import { SiTailwindcss, SiRedux, SiExpress, SiTypescript } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { TbSql } from 'react-icons/tb'

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 lg:py-24">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.0, type: 'tween' }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-500 font-lora ">
          Maycon Assis
        </motion.h1>
        <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 1 }} className="font-lora py-4 sm:text-xl md:text-2xl lg:text-3xl">
          SOFTWARE DEVELOPER
        </motion.h2>
        <img className="my-6 border-8 rounded-full h-32 md:h-48 lg:h-56 w-32 md:w-48 lg:w-56 " src="Maycon (3).jpg" alt="" />
        <p className="text-center font-serif leading-7 text-gray-700 sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
          Heya/Ola 👋 An easygoing person who loves living life and seeing every experience as an opportunity to grow! Enough chitchat, lets get to it!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-6  text-gray-500 py-10 sm:py-14 md:py-16 lg:py-24">
        <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/maycon-assis" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>

      <div className="lg:flex gap-10 justify-center ">
        <div className=" py-12 sm:py-14 md:py-16 lg:py-24 shadow-2xl text-center p-10 ">
          <h3 className="pb-3 font-lora text-lg text-blue-900 sm:text-xl md:text-2xl lg:text-3xl">FRONT-END TOOLS</h3>
          <p className="py-3 sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto  leading-7 text-gray-700">
            Used to create web applications that are interactive, accessible, and engaging. These technologies have worked for me like a dream.
          </p>
          <div className="py-3 text-5xl flex justify-center gap-6 text-blue-900 ">
            <AiOutlineHtml5 />
            <SiTailwindcss />
            <FaReact />
            <SiRedux />
          </div>
        </div>
        <div className="py-12  sm:py-14 md:py-16 lg:py-24 shadow-2xl text-center p-10 ">
          <h3 className="pb-3 font-lora text-lg text-orange-300 sm:text-xl md:text-2xl lg:text-3xl">BACK-END TOOLS</h3>
          <p className="py-3 leading-7 sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700">
            Great for building REST APIs that enable efficient communication between the front end and server-side components.
          </p>
          <div className="py-3 text-5xl flex justify-center gap-6 text-orange-300 ">
            <FaNodeJs />
            <SiExpress />
            <TbSql />
            <SiTypescript />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
