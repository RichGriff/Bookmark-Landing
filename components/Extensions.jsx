import React from 'react'
import { extensionData } from '../data'
import Card from './Card'

const Extensions = () => {
    const { heading, subHeading, browsers } = extensionData
    return (
        <section className="py-20">
            <div className="w-96 sm:w-3/5 mx-auto px-2">
                <h1 className="font-medium text-3xl text-center text-bm-blue">{heading}</h1>
                <p className="text-center text-bm-grey mt-4">{subHeading}</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-8 w-80 sm:w-3/4 mx-auto mt-4'>
            {browsers.map((b, index) => (
                <Card key={index} browser={b} index={index} />
            ))}
            </div>
        </section>
    )
}

export default Extensions
