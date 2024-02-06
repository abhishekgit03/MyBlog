import React from 'react'
import {Link} from "react-router-dom"

function Blogcomponent({blogs}) {
    console.log("Blogs=",blogs)
    const allblogs=[
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
    }
    
    ]
  return (
    <div>
        {blogs.data.map((blog)=>
        {
            return (
            <div key={blog.id} class=" px-4 py-8">
            <article class="mx-auto my-2 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-6xl md:flex-row md:items-center">
              
              <div class="shrink-0 my-4 md:mr-8 md:max-w-sm">
                <img class="rounded-1xl h-48 w-72" src={blog.attributes.coverImg.data.attributes.url} alt="" />
              </div>
              <div class="py-4 sm:py-8">
                <a href={`/readblog/${blog.id}`} class="mb-1 block text-2xl font-medium text-blue-500">{blog.attributes.blogTitle}</a>
                <p class="mb-6 text-gray-500">{blog.attributes.blogDesc}</p>
                <div class="flex items-center">
                  <p class="w-56">
                    <span class="text-sm text-gray-400">Posted on: {blog.attributes.date}</span>
                  </p>
                </div>
              </div>
              

            </article>
          </div>
          )
          
        })}

    </div>
  )
}

export default Blogcomponent