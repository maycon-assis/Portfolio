function Navbar() {
  return (
    <nav className="flex justify-center items-center w-8/12 mx-auto h-56 ">
      <ul className="flex gap-96 text-3xl">
        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 ease-in-out">Work</li>
        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 ease-in-out">Home</li>
        <li className="text-gray-600 hover:text-orange-500 font-bold duration-300 ease-in-out">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
