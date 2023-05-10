import React from 'react'

function Work() {
  return (
    <div id="work" className="flex flex-wrap gap-y-40 justify-around w-full ">
      <div className="flex justify-center w-1/2">
        <img className="border-4 border-gray-500 shadow-2xl" src="Todo.png" alt="Todo-image" />
      </div>
      <div className=" flex flex-col justify-around flex-wrap items-center w-1/2">
        <h2 className=" text-6xl text-gray-500 font-lora">TODO</h2>
        <p className="text-3xl text-gray-600 w-3/4 font-robo">
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
        <h2 className=" text-6xl text-gray-500 font-lora">SIP(SELF-IMPROVEMENT)</h2>
        <p className="text-3xl text-gray-600 w-3/4 font-robo">
          In collaboration with a team of five, I developed a task manager app called SIP. It gamified self-improvement by allowing users to track progress and visualize goals with accurate time
          representations and intuitive charts. As the Product Owner, I proposed the concept and focused on backend development, setting up and maintaining the database, API, and server-side routes. I
          also contributed to frontend features like charts and a live countdown timer.
        </p>
        <div className="flex gap-10">
          <a className=" cursor-pointer" href="https://github.com/harakeke-2023/sip" target="_blank">
            <img className="h-14" src="sourcecode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work
