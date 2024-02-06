import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Blogs from './pages/Blogs'
import Blogdetails from './pages/Blogdetails'
import useFetch from './hooks/useFetch'
import Aboutme from './components/Aboutme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const url="https://blog-strapibackend.onrender.com/api/blogs?populate=*"
  let {loading,data,error}= useFetch(url)

  if(loading)
    return <p>Loading...</p>
  if(error)
    return <p>Error</p>
  // console.log("Data:",data)

  return (
    <div>
      <Navbar/>
      <Aboutme/>
      <Routes>
      <Route path="/" element={<Blogs blogs={data?data:""} />} />
      <Route path="/readblog/:id" element={<Blogdetails blogs={data?data:""} />} />
      </Routes>
      </div>
  )
}

export default App
