import React from 'react'

function NavBar() {
    return (
        <>
            <img src="/vite.svg" className="bg-cover h-full w-10" />
            <ul className="flex gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Products</li>
                <li>Contact</li>
                
                <li className=' text-blue-400'>Get a Quote</li>
            </ul>
        </>
    )
}

export default NavBar