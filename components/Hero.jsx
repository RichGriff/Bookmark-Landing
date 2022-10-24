import React from 'react'
import { heroData } from '../data'

const Hero = () => {
    const { ctaText, ctaText2, img, content } = heroData
    return (
        <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-medium text-bm-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                {content.heading}
            </h2>
            <p className="text-bm-grey text-lg text-center lg:text-left mb-6">
                {content.subHeading}
            </p>
            <div className="flex justify-center flex-wrap gap-6">
                <button type="button" className="btn btn-purple hover:bg-bm-white hover:text-black">
                    {ctaText}
                </button>
                <button type="button" className="btn btn-white hover:bg-bm-purple hover:text-white">
                    {ctaText2}
                </button>
            </div>
            </div>
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={img} alt="" />
            </div>
        </div>
        <div className="hidden md:block overflow-hidden bg-bm-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg: -bottom-28 lg:-right-36"></div>
        </section>
    )
}

export default Hero
