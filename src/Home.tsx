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
    <div className="flex flex-col gap-48 justify-start items-center h-screen">
      <div className="flex flex-wrap border-4 justify-around flex-shrink-0 items-center border-gray-600 w-8/12 h-3/6 shadow-lg ">
        <h1 className=" text-8xl text-gray-600 w-1/2 font-lora">Maycon Assis</h1>
        <a href="https://github.com/maycon-assis" target="_blank">
          <img className=" h-24" src="github.png" alt="" />
        </a>
        <p className="  text-gray-600 text-2xl w-1/2 font-robo">
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
    </div>
  )
}

export default Home
