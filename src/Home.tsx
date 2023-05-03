const stackIcons = [
  '../public/html-5.png',
  '../public/css-3.png',
  '../public/typescript.png',
  '../public/physics.png',
  '../public/icons8-node-js-480.png',
  '../public/icons8-express-js-480.png',
  '../public/sql-server.png',
  '../public/icons8-redux-480.png',
  'public/icons8-tailwind-css-480.png',
]

const Home = () => {
  return (
    <div className="flex flex-col gap-32  justify-start items-center h-screen">
      <div className="flex flex-wrap border-4 justify-around flex-shrink-0 items-center border-gray-600 w-8/12 h-3/6 ">
        <h1 className=" text-6xl text-gray-600 w-1/2">Maycon Assis</h1>
        <a href="https://github.com/maycon-assis" target="_blank">
          <img className=" h-24" src="../public/github.png" alt="" />
        </a>
        <p className=" w-1/2">
          Heya/Ola👋<br></br> I'm an easygoing person who loves living life and seeing every experience as an opportunity to grow! Brazilian born but Kiwi raised. I was halfway through an engineering
          degree when I decided to pivot into tech, and I haven't looked back since. I have a knack for problem-solving and bringing the right approach to challenges. I have spent the last 4 months
          learning the craft and honing my skills, which I hope to use to positively impact people's lives. I have an undying passion for music and the guitar, two things which pretty much feel like
          an inseparable part of me now 🎵.
        </p>
        <a href="https://www.linkedin.com/in/maycon-assis-nz/" target="_blank">
          <img className="h-24" src="../public/linkedin.png"></img>
        </a>
      </div>
      <div className="flex justify-around items-center flex-shrink-0 bg-gray-300 l h-48 w-8/12 border-4 border-gray-600 ">
        {stackIcons.map((icon, i) => (
          <img className="h-24" key={i} src={icon} alt={`Icon-${i}`}></img>
        ))}
      </div>
      <div id="work" className="flex flex-wrap gap-y-40 justify-around w-full ">
        <div className="flex justify-center w-1/2">
          <img className="" src="../public/Todo.png" alt="Todo-image" />
        </div>
        <div className=" flex items-center w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat. Bibendum ut tristique et
            egestas quis ipsum suspendisse ultrices gravida. Ornare lectus sit amet est placerat in egestas erat imperdiet. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
            Libero justo laoreet sit amet cursus sit amet dictum sit. Accumsan in nisl nisi scelerisque. Et netus et malesuada fames. Risus nec feugiat in fermentum posuere urna nec tincidunt. Tempor
            id eu nisl nunc. Ut lectus arcu bibendum at. Et tortor consequat id porta nibh venenatis cras. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Ac auctor augue mauris
            augue neque gravida in fermentum et. Et netus et malesuada fames ac.
          </p>
        </div>
        <div className="flex justify-center w-1/2">
          <img className="" src="../public/Todo.png" alt="Todo-image" />
        </div>
        <div className=" flex items-center w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat. Bibendum ut tristique et
            egestas quis ipsum suspendisse ultrices gravida. Ornare lectus sit amet est placerat in egestas erat imperdiet. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
            Libero justo laoreet sit amet cursus sit amet dictum sit. Accumsan in nisl nisi scelerisque. Et netus et malesuada fames. Risus nec feugiat in fermentum posuere urna nec tincidunt. Tempor
            id eu nisl nunc. Ut lectus arcu bibendum at. Et tortor consequat id porta nibh venenatis cras. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Ac auctor augue mauris
            augue neque gravida in fermentum et. Et netus et malesuada fames ac.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
