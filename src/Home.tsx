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
    <div className="flex flex-col gap-32  justify-start items-center h-screen">
      <div className="flex flex-wrap border-4 justify-around flex-shrink-0 items-center border-gray-600 w-8/12 h-3/6 shadow-lg ">
        <h1 className=" text-8xl text-gray-600 w-1/2">Maycon Assis</h1>
        <a href="https://github.com/maycon-assis" target="_blank">
          <img className=" h-24" src="github.png" alt="" />
        </a>
        <p className="  text-gray-600 text-2xl w-1/2">
          After stumbling upon a programming paper during my engineering degree, I was immediately drawn to the world of software engineering. Fully immersing myself in the art of building software, I
          have constantly honed my problem-solving and algorithmic thinking skills. I am most enthusiastic and driven when I work collaboratively with others to take on new and complex challenges, as
          it fuels my curiosity and expands my knowledge. When I'm not at my keyboard, you can find me jamming away on my guitar, as music is an undying passion that is an inseparable part of who I
          am. 🎵
        </p>
        <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank">
          <img className="h-24" src="linkedin.png"></img>
        </a>
      </div>
      <div className="flex justify-around items-center shadow-lg flex-shrink-0 bg-gray-300 l h-48 w-8/12 border-4 border-gray-600 ">
        {stackIcons.map((icon, i) => (
          <img className="h-24" key={i} src={icon} alt={`Icon-${i}`}></img>
        ))}
      </div>
      <div id="work" className="flex flex-wrap gap-y-40 justify-around w-full ">
        <div className="flex justify-center w-1/2">
          <img className="border-4 border-gray-500 shadow-2xl" src="Todo.png" alt="Todo-image" />
        </div>
        <div className=" flex flex-col justify-around flex-wrap items-center w-1/2">
          <h2 className=" text-6xl text-gray-500">TODO</h2>
          <p className="text-3xl text-gray-600 w-3/4 ">
            This is a brief description of a minimalist to-do list app that incorporates full-stack development and features like Redux and AsyncThunk. The app was built using React for the front-end,
            Express for the back-end, and Sqlite for the database. The project provided an opportunity to learn and work with new tools and frameworks while building a functional and practical
            application.
          </p>
          <div className="flex gap-10">
            <a className=" cursor-pointer" href=" https://maycons-todo-23.devacademy.nz/" target="_blank">
              <img className="h-14" src="live.png" alt="" />
            </a>
            <a className=" cursor-pointer" href="https://github.com/harakeke-2023/todo-full-stack/tree/maycon" target="_blank">
              <img className="h-14" src="sourcecode.png" alt="" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img className="border-4 border-gray-500 h-4/5 shadow-2xl" src="sipMain.png" alt="Todo-image" />
        </div>
        <div className=" flex flex-col justify-evenly flex-wrap items-center w-1/2">
          <h2 className=" text-6xl text-gray-500">SIP(SELF-IMPROVEMENT)</h2>
          <p className="text-3xl text-gray-600 w-3/4">
            In collaboration with a team of five, I developed a task manager app called SIP. It gamified self-improvement by allowing users to track progress and visualize goals with accurate time
            representations and intuitive charts. As the Product Owner, I proposed the concept and focused on backend development, setting up and maintaining the database, API, and server-side routes.
            I also contributed to frontend features like charts and a live countdown timer.
          </p>
          <div className="flex gap-10">
            <a className=" cursor-pointer" href="https://github.com/harakeke-2023/sip" target="_blank">
              <img className="h-14" src="sourcecode.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
