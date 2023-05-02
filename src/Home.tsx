const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="flex flex-wrap border-4 justify-around items-center border-gray-600 w-8/12 h-4/6 ">
        <h1 className=" text-6xl text-gray-600 w-1/2">Maycon Assis</h1>
        <a href="https://github.com/maycon-assis" target="_blank">
          <img className=" h-24" src="../public/github.png" alt="" />
        </a>
        <p className=" w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank">
          <img className="h-24" src="../public/linkedin.png"></img>
        </a>
      </div>
    </div>
  )
}

export default Home
