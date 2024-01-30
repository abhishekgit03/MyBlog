import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Blogs from './pages/Blogs'
import Blogdetails from './pages/blogdetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Blogs/>} />
      <Route path="/readblog/:id" element={<Blogdetails/>} />
      </Routes>
      </div>
  )
}

export default App
