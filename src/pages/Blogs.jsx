import React from 'react'
import Blogcomponent from '../components/Blogcomponent'

function Blogs({blogs}) {
  // console.log("Homepage data:",blogs)
  return (
    <Blogcomponent blogs={blogs?blogs:""}/>
  )
}

export default Blogs