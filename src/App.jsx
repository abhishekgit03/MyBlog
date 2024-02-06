import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Blogs from './pages/Blogs'
import Blogdetails from './pages/Blogdetails'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const url="https://blog-strapibackend.onrender.com/api/blogs?populate=*"
  let {loading,data,error}= useFetch(url)

  if(loading)
    return(
    <div className="flex justify-center items-center h-screen">
    <div
  class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
<div
  class="inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
  </div>
  )
  if(error)
    return <p>Error</p>
  // console.log("Data:",data)

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Blogs blogs={data?data:""} />} />
      <Route path="/readblog/:id" element={<Blogdetails blogs={data?data:""} />} />
      </Routes>
      </div>
  )
}

export default App
