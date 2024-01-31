import React from 'react'
import Blogcontent from '../components/Blogcontent'

function Blogdetails({blogs}) {
  return (
    <Blogcontent  blogs={blogs?blogs:""}/>
  )
}

export default Blogdetails