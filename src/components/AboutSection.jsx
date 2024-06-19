import React from 'react'

function AboutSection() {
  return (
    <section id='about' className="p-4 md:p-10 h-auto flex flex-col md:flex-row gap-7">
        <div className='flex flex-col md:w-1/2'>
            <div className='p-3 border border-[#B3B3B3] rounded-3xl w-full md:w-2/3 mb-10'>
                <h1 className=' font-semibold text-lg'>Excellence in Engineering & Fabrication</h1>
            </div>
            <h1 className=' font-bold text-2xl md:text-4xl mb-4 md:mb-12'>Leading the Way in Chemical, Pharmaceutical, and Dyes Equipment</h1>
            <h2 className=' font-normal text-base md:text-xl mb-4 md:mb-10'>At Chemfab Engineers, we specialize in the design and fabrication of high-quality process equipment tailored to your needs.</h2>
            <form className='flex flex-col md:flex-row gap-4 md:gap-10 w-full md:w-2/3 justify-around'>
                <input type='email' required placeholder='Contact Us for More Info' className='p-3 w-full border border-[#B3B3B3] rounded-3xl'></input>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">submit</button>
            </form>
        </div>
        <div className='md:w-1/2'>
            <img src='/about.jpg' className='h-full w-full object-cover'/>
        </div>
    </section>
  )
}

export default AboutSection