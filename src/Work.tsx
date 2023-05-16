import { useState } from 'react'
import Project from './Project'

function Work() {
  const [isOpen, setIsOpen] = useState(false)
  const [img, setimg] = useState('')

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center fixed top-0 left-0 z-10 h-screen w-screen text-center  " style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <Project img={img} />
        </div>
      )}
      <div id="work" className="pt-24 sm:pt-28 md:pt-32 lg:pt-48 text text-center">
        <h2 className="font-lora text-lg sm:text-xl md:text-2xl lg:text-3xl">PORTFOLIO</h2>
        <p className="py-3 leading-7 text-gray-700 sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          On this journey, nothing has been more exciting than creating projects that not only solve problems for myself and others but also bring a sense of enjoyment in the development process.
          Below is a collection of project ideas that I have either developed myself or been involved in creating.
        </p>
      </div>
      <div>
        <div className="flex justify-center py-12">
          <button
            className="cursor-pointer"
            onClick={() => {
              setimg(() => 'Todo.png')
              setIsOpen(() => true)
            }}
          >
            <img src="Todo.png" className="shadow-2xl" />
          </button>
        </div>

        <div className="flex justify-center py-12">
          <a className=" cursor-pointer" href="https://github.com/harakeke-2023/sip" target="_blank">
            <img src="sipMain.png" className=" shadow-2xl" />
          </a>
        </div>
      </div>
    </>

    //       This is a brief description of a minimalist to-do list app that incorporates full-stack development and features like Redux and AsyncThunk. The app was built using React for the front-end,
    //       Express for the back-end, and Sqlite for the database. The project provided an opportunity to learn and work with new tools and frameworks while building a functional and practical
    //       application.

    //       In collaboration with a team of five, I developed a task manager app called SIP. It gamified self-improvement by allowing users to track progress and visualize goals with accurate time
    //       representations and intuitive charts. As the Product Owner, I proposed the concept and focused on backend development, setting up and maintaining the database, API, and server-side routes. I
    //       also contributed to frontend features like charts and a live countdown timer.
  )
}

export default Work
