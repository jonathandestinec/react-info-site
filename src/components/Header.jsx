import React from 'react'
import reactLogo from "../assets/react.svg"

function Header() {
    return (
        <div className=' flex items-center justify-center w-screen gap-10 pt-5'>
            <img src={reactLogo} alt="React Logo" className=' w-14 h-14' />
            <h1 className=' text-5xl font-bold'>React Info Page</h1>
        </div>
    )
}

export default Header