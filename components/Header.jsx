import { navData } from '../data'

const Header = () => {
    const { links, ctaText, logo } = navData
    return (
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            </nav>
        </header>
    )
}

export default Header