import React from 'react'
import heroMan from '../../../assest/hero-man.png'
import "../../../Common/DefaultCss/default.css"

const Banner = () => {
  return (
    <div>
   <div className="banner">
  <div className="flex items-center justify-between flex-col lg:flex-row-reverse container mx-auto text-center lg:text-left">
    <img className='w-3/6 py-5' src={heroMan} alt="..."/>
    <div className='pt-5 pb-10'>
      <p className="text-2xl md:text-4xl lg:text-5xl font-bold ">Searching for a job <br></br>Find the <span className='text-[#564dc0]'>best Startup</span> <br/> job that fit you.</p>
     <div className='my-10 shadow-md'>
        <input type="text"  className='focus:outline-none py-3 px-2'
        placeholder='Job Title'/>
        <input type="text"
        className=' border-l-2 focus:outline-none py-3 px-2' placeholder='Location'/>
        <button className='py-3 px-4 bg-[#564dc0] text-white '>Search</button>
     </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
