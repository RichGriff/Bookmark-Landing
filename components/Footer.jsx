import React from 'react'

const Footer = () => {
  return (
    <section className='bg-bm-blue text-white p-8'>
      <div className="container items-center sm:flex sm:justify-between sm:items-center">

        <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center text-center gap-8'>
          <img className='sm:mr-6' src='/images/logo-bookmark-white.svg' alt="bookmark logo" />
          <ul className='flex flex-col sm:flex-row justify-start items-center uppercase sm:gap-8'>
            <li className='mb-8 cursor-pointer sm:m-2'>Features</li>
            <li className='mb-8 cursor-pointer sm:m-2'>Pricing</li>
            <li className='mb-8 cursor-pointer sm:m-2'>Contact</li>
          </ul>
        </div>

        <ul className='flex flex-row justify-center items-center gap-8 mt-4 sm:mt-0'>
          <li className=''><img src='/images/icon-facebook.svg' alt='facebook' /></li>
          <li><img src='/images/icon-twitter.svg' alt='twitter' /></li>
        </ul>

      </div>
    </section>
  )
}

export default Footer
