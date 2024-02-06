import React from 'react'

function Navbar() {
  return (
    <nav style={{"backgroundColor":"#f2efef"}} class="sticky top-0 z-10 py-4 block w-full max-w-full px-4 text-regal-blue border-b rounded-none  h-max border-stone-500  lg:px-8 lg:py-4">
    <div class="flex items-center justify-between text-blue-gray-900">
      <a href="#"
        class="mr-4 block cursor-pointer font-poppins font-semibold text-xl text-regal-blue leading-relaxed text-inherit antialiased">
        Abhishek's Blog 👨‍💻🚀
      </a>
      <div class="flex items-center gap-4">
        <div class="hidden mr-4 lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="block p-1 font-sans text-md antialiased font-normal leading-normal text-blue-500">
              <a href="/" class="flex items-center font-semibold">
                Home
              </a>
            </li>
            
          </ul>
        </div>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar