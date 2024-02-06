import React from 'react'
import profile from '/profile.jpeg';
function Aboutme() {
  return (
    <div className='flex justify-center mt-10 px-4'>
    <div className='flex sm:flex-row flex-col justify-start items-start border-b-2'>
        <img className='rounded-full h-16 w-16 m-0 mr-5 mb-4' src={profile}></img>
        <div>
        <div>Hey, I am <strong>Abhishek Dasgupta</strong>. I am a passionate developer with a keen interest in machine learning and generative AI. I love coding and building tech communities.</div>
        <div>Machine Learning Intern, <a className='text-blue-500' href="https://www.linkedin.com/company/accioibis">Accioibis</a>   &  <a className='text-blue-500' href="https://gdsc.community.dev/dr-bc-roy-engineering-college-durgapur/">GDSC Lead</a> at Dr. B.C. Roy Engineering College</div>
        <div>Smart India Hackathon Finalist 2023</div>
        <div className='flex mt-2 mb-4'>
        <a className='mr-1 ml-1 font-bold text text-blue-500' href="https://www.linkedin.com/in/abhishekdg1">Linkedin ·</a>
        <a  className='mr-1 ml-1 font-bold text-blue-500' href="https://github.com/abhishekgit03">Github ·</a>
        <a  className='mr-1 ml-1 font-bold text-blue-500' href="https://www.instagram.com/heyabhi_">Instagram</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutme