import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="flex py-10 mb-10 justify-center">
      <ul className="flex gap-12 sm:gap-28 md:gap-44 lg:gap-96 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
        <li>
          <Link
            className="text-gray-600 px-4 py-2 border-8 rounded-md  hover:text-orange-300 font-bold duration-300 font-lora ease-in-out cursor-pointer"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={700}
          >
            WORK
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 px-4 py-2 border-8 rounded-md  hover:text-blue-900 font-bold duration-300 font-lora ease-in-out cursor-pointer"
            activeClass="active"
            to="Maycon-Assis-2023-Resume.pdf "
            spy={true}
            smooth={true}
            duration={700}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
