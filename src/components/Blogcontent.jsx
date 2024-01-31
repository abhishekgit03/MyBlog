import React from 'react'
import { useParams } from 'react-router-dom'
import reactMarkdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'

function Blogcontent({blogs}) {
    const {id} = useParams()
   

    let blog={}
    if(blog)
    {
        let arr = blogs.data.filter(blog=> blog.id == id)
        blog=arr[0]
    }
    else
    {
        blog={}
    }
    console.log("Blog content object:",blog)
   

    
  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-6 '>
                    <img className=' h-72 w-full object-cover'  src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    <div className='pt-5'><ReactMarkdown className='whitespace-pre-wrap'>{blog.attributes.blogContent}</ReactMarkdown></div>

                </div>

               


            </div>

        </div>
    </div>
  )
  
}

export default Blogcontent