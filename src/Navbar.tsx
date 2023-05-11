import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: 'spring' }} className="flex py-10 mb-10 justify-center">
      <ul className="flex gap-12 sm:gap-28 md:gap-44 lg:gap-96 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
        <li>
          <Link activeClass="active" to="work" spy={true} smooth={true} duration={700}>
            <motion.button className="text-gray-600 px-4 py-2 border-8 rounded-md  hover:text-orange-300 font-bold duration-300 font-lora ease-in-out cursor-pointer" whileHover={{ scale: 1.1 }}>
              WORK
            </motion.button>
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="Maycon-Assis-2023-Resume.pdf " spy={true} smooth={true} duration={700}>
            <motion.button className="text-gray-600 px-4 py-2 border-8 rounded-md  hover:text-blue-900 font-bold duration-300 font-lora ease-in-out cursor-pointer" whileHover={{ scale: 1.1 }}>
              RESUME
            </motion.button>
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
