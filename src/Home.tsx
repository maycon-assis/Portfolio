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
    <div className="flex flex-col gap-12 md:gap-24 lg:gap-48 justify-start items-center h-screen">
      <div className="flex flex-col md:flex-row flex-wrap border-4 justify-around items-center border-gray-600 w-11/12 md:w-8/12 h-3/6 shadow-lg">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-gray-600 w-full md:w-1/2 font-lora text-center">Maycon Assis</h1>
        <a href="https://github.com/maycon-assis" target="_blank" rel="noopener noreferrer">
          <img className="border-4 border-gray-600 rounded-full h-32 md:h-48 lg:h-56 w-32 md:w-48 lg:w-56 mx-auto my-4 md:my-0" src="Maycon (3).jpg" alt="" />
        </a>
        <p className="text-gray-600 text-base md:text-xl lg:text-2xl w-full md:w-1/2 font-robo text-center md:text-left">
          After stumbling upon a programming paper during my engineering degree, I was immediately drawn to the world of software engineering. Fully immersing myself in the art of building software, I
          have constantly honed my problem-solving and algorithmic thinking skills. I am most enthusiastic and driven when I work collaboratively with others to take on new and complex challenges, as
          it fuels my curiosity and expands my knowledge. When I'm not at my keyboard, you can find me jamming away on my guitar, as music is an undying passion that is an inseparable part of who I
          am. 🎵
        </p>
        <div className="flex gap-6 md:gap-10 justify-center md:justify-start w-full md:w-1/2">
          <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank" rel="noopener noreferrer">
            <img className="h-8 md:h-12" src="linkedin.png" alt="LinkedIn"></img>
          </a>
          <a href="https://github.com/maycon-assis" target="_blank" rel="noopener noreferrer">
            <img className="h-8 md:h-12" src="github.png" alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center shadow-lg flex-shrink-0 bg-gray-300 l h-48 w-11/12 md:w-8/12 border-4 border-gray-600 ">
        {stackIcons.map((icon, i) => (
          <img className="h-16 md:h-24" key={i} src={icon} alt={`Icon-${i}`}></img>
        ))}
      </div>
    </div>
  )
}

export default Home
