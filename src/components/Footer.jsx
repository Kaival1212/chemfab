import React from 'react'

function Footer() {
    return (
        <>
            <hr />
            <div className='mx-10 pt-10'>
                <div className='flex flex-row justify-around'>

                    <ul className='flex flex-col'>
                        <h1 className=' text-gray-600 text-lg'>Features</h1>
                        <li><a href="http://" className="text-md font-thin">High Quality</a></li>
                        <li><a href="http://" className="text-md font-thin">Reliable</a></li>
                        <li><a href="http://" className="text-md font-thin">Custom Solutions</a></li>
                        <li><a href="http://" className="text-md font-thin">On-Time Delivery</a></li>
                        <li><a href="http://" className="text-md font-thin">Innovative</a></li>
                    </ul>

                    <ul className='flex flex-col'>
                        <h1 className=' text-gray-600 text-lg'>Products</h1>
                        <li><a href="http://" className="text-md font-thin">Tanks</a></li>
                        <li><a href="http://" className="text-md font-thin">Vessels</a></li>
                        <li><a href="http://" className="text-md font-thin">Reactors</a></li>
                        <li><a href="http://" className="text-md font-thin">Exchangers</a></li>
                        <li><a href="http://" className="text-md font-thin">Blenders</a></li>
                    </ul>

                    <ul className='flex flex-col'>
                        <h1 className=' text-gray-600 text-lg'>About Us</h1>
                        <li><a href="http://" className="text-md font-thin">History</a></li>
                        <li><a href="http://" className="text-md font-thin">Mission</a></li>
                        <li><a href="http://" className="text-md font-thin">Vison</a></li>
                        <li><a href="http://" className="text-md font-thin">Values</a></li>
                        <li><a href="http://" className="text-md font-thin">Team</a></li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <img src="/cover.svg" className=" w-16  h-14 bg-contain" alt="Logo" />
                    <h1 className='text-lg font-bold'>Chemfab Engineers</h1>
                </div>
                <h1 className='text-md font-thin text-gray-500'>
                    © 2024 Chemfab Engineers. All Rights Reserved.
                </h1>
            </div>
        </>
    )
}

export default Footer