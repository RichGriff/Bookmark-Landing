import { navData } from '../data'
import { useState } from 'react'

const Header = () => {
    const { links, ctaText, logo } = navData
    const [showAside, setShowAside] = useState(false)

    const handleClick = () => {
        const body = document.getElementById("body")
        console.log(body)

        // setShowAside(!showAside)

        // body.classList.toggle("fixed_body")
    }

    return (
        <>
        <header>
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <img src={logo} alt="bookmark logo" />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bm-blue uppercase text-xs">
                    {links.map((link, index) => (
                        <li key={index} className="cursor-pointer">{link}</li>
                    ))}
                    <button type="button" className="bg-bm-red text-white rounded-md px-7 py-3 uppercase">{ctaText}</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                    <button onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
        {showAside && (<div className='absolute top-0 left-0 w-full h-full bg-bm-blue z-50'>
            Menu
            <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>
            </button>
        </div>)}
        </>
    )
}

export default Header