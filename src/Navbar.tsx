import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="container mx-auto px-4 h-56 flex items-center justify-center">
      <ul className="flex gap-96 lg:text-5xl ">
        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 font-lora ease-in-out cursor-pointer">
          <Link activeClass="active" to="work" spy={true} smooth={true} duration={700}>
            WORK
          </Link>
        </li>

        <li className="l text-gray-600 hover:text-orange-500 font-bold duration-300 font-lora ease-in-out cursor-pointer">
          <a href="Maycon-Assis-2023-Resume.pdf " target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
