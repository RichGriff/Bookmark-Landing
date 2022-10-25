import React from 'react'
import { ctaData } from '../data'

const Cta = () => {
  const { heading, subHeading, btnText, placeholderText } = ctaData
  return (
    <section className="py-20 bg-bm-purple text-white">
      <div className="w-96 sm:w-3/5 mx-auto px-2 flex flex-col justify-center items-center text-center">
          <p className="text-center mb-4 uppercase text-sm tracking-widest">{subHeading}</p>
          <h1 className="font-medium text-3xl text-center">{heading}</h1>
      </div>
      <form className='flex flex-col sm:flex-row gap-6 items-center justify-center mt-10'>
        <div className=''>
          <input type="email" id="email" placeholder={placeholderText} 
            className='py-3 px-4 rounded-md w-96 sm:w-[400px] border border-gray-300 text-gray-900'
            required
          />
        </div>
        {/* class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required> */}
        <button type='submit' className='btn btn-red w-96 sm:w-36'>{btnText}</button>
      </form>
    </section>
  )
}

export default Cta
