import React from 'react'

const Card = ({ browser, index }) => {
  return (
    <div className={`flex flex-col shadow-lg w-96 sm:w-1/4 rounded-lg ${index === 1 ? 'sm:mt-16' : (index === 2) ? 'sm:mt-32' : ''}`}>
        <div className='border-b-4 border-gray-100 border-dotted'>
            <div className='flex flex-col justify-center items-center px-4 py-8'>
                <img className='' src={browser.img} alt={browser.title} />
                <h3 className='text-lg font-medium mt-4'>{browser.title}</h3>
                <p className='text-sm text-bm-grey mt-2'>{browser.description}</p>
            </div>
        </div>
        <div className='p-6 flex flex-col justify-center items-center'>
            <button type="button" className="btn btn-purple hover:bg-bm-white hover:text-black">
                Add & Install Extension
            </button>
        </div>
    </div>
  )
}

export default Card
