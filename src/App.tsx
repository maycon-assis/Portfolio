import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'

function App() {
  return (
    <div>
      <div className=" bg-gradient-to-l from-gray-200 to-gray-300">
        <Navbar />
        <Home />
      </div>
      <div className=" bg-gradient-to-l from-gray-200 to-gray-300">
        <Work />
      </div>
    </div>
  )
}

export default App
