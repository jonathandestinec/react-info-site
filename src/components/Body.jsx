import React from 'react'

function Body() {
    return (
        <div>
            {/* Create a list of reasons why React is cool */}
            <ul className=' text-lg text-center font-bold font-mono mt-5 transition ease-in-out'>
                <li className=' hover:text-sky-500'>Component-based architecture</li>
                <li className=' hover:text-sky-500'>Virtual DOM</li>
                <li className=' hover:text-sky-500'>State management</li>
                <li className=' hover:text-sky-500'>Server-side rendering</li>
                <li className=' hover:text-sky-500'>Community support</li>
                <li className=' hover:text-sky-500'>Ecosystem of libraries and tools</li>
                <li className=' hover:text-sky-500'>Performance optimizations</li>
                <li className=' hover:text-sky-500'>Learning curve</li>
                <li className=' hover:text-sky-500'>Many more...</li>
            </ul>
        </div>
    )
}

export default Body