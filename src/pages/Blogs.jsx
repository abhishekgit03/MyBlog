import React from 'react'
import Blogcomponent from '../components/Blogcomponent'
import Aboutme from '../components/Aboutme'
function Blogs({blogs}) {
  // console.log("Homepage data:",blogs)
  return (
    <div>
    <Aboutme />
    <Blogcomponent blogs={blogs?blogs:""}/>
    </div>
  )
}

export default Blogs