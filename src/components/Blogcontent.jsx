import React from 'react'
import { useParams } from 'react-router-dom'

function Blogcontent() {
    const {id} = useParams()
     const blogs=[
        {
        "id":1,
        "blogTitle":"Blog Title 1",
        "CoverImg":"https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
        "BlogDesc":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "BlogContent":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "date": "20/01/2024"
    },
    {
        "id":2,
        "blogTitle":"Blog Title 2",
        "CoverImg":"https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
        "BlogDesc":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "BlogContent":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "date": "20/01/2024"
    },
    {
        "id":3,
        "blogTitle":"Blog Title 3",
        "CoverImg":"https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
        "BlogDesc":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "BlogContent":"With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube.",
        "date": "20/01/2024"
    }]
    let blog = blogs.filter(blog=> blog.id == id)
    blog = blog[0]
    console.log(blog)
    
  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-6 '>
                    <img className='h-56 w-full object-cover' src={blog.CoverImg} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.blogTitle}</h1>
                    <div className='pt-5'><p>{blog.BlogContent}</p></div>

                </div>

               


            </div>

        </div>
    </div>
  )
  
}

export default Blogcontent