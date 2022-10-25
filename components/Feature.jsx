import React from 'react'

const Feature = ({ feature }) => {
    return (
        <div className="relative mt-20 lg:mt-24">
            <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full text-center" src={feature.img} alt="" />
                </div>
                <div className='flex flex-1 flex-col text-center justify-center items-center lg:items-start'>
                    <h1 className='text-2xl sm:text-3xl text-bm-blue font-medium'>{feature.title}</h1>
                    <p className='text-bm-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-2/3'>{feature.description}</p>
                    <button type="button" className="btn btn-purple hover:bg-bm-white hover:text-black">More Info</button>
                </div>
                <div className="hidden lg:block overflow-hidden bg-bm-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
            </div>
        </div>
    )
}

export default Feature
