import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="flex justify-center items-center w-8/12 mx-auto h-56 ">
      <ul className="flex gap-96 text-3xl">
        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 ease-in-out cursor-pointer">
          <Link activeClass="active" to="work" spy={true} smooth={true} duration={700}>
            WORK
          </Link>
        </li>

        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 ease-in-out cursor-pointer">
          <a href="src/cv/Maycon-Assis-2023-Resume.pdf " target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
