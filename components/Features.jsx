import { useState, useEffect } from 'react'
import { featuresData } from '../data'
import Feature from './Feature'

const Features = () => {
    const { heading, subHeading, features } = featuresData
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)
    const [selectedFeature, setSelectedFeature] = useState({})

    const selectFeature = (index) => {
        console.log('Selected Index', index)

        let feature = features.filter((_, i) => i === index);
        setSelectedFeatureIndex(index)
        setSelectedFeature(feature[0])
    }

    useEffect(() => {
        let feature = features.filter((_, i) => i === 0);
        setSelectedFeature(feature[0])
    }, [features])

    return (
        <section className="py-20">
            <div className="w-96 sm:w-3/5 mx-auto px-2 flex flex-col justify-center items-center text-center">
                <h1 className="font-medium text-3xl text-center text-bm-blue">{heading}</h1>
                <p className="text-center text-bm-grey mt-4">{subHeading}</p>
            </div>
            <ul className='flex flex-col w-full mx-auto sm:w-1/2 sm:flex-row justify-center items-center mt-10'>
                {features.map((f, i) => (
                    <li 
                        key={i} 
                        onClick={() => selectFeature(i)}
                        className={`p-6 w-96 text-center border-b-2 text-bm-grey cursor-pointer ${i === selectedFeatureIndex && 'text-black border-bm-red border-b-4 active dark:text-blue-500 dark:border-blue-500'}`}>
                        {f.tabTitle}
                    </li>
                ))}
            </ul>
            {selectedFeature && <Feature feature={selectedFeature} />}
        </section>
    )
}

export default Features
