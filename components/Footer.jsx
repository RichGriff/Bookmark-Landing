import React from 'react'

const Footer = () => {
  return (
    <section className='bg-bm-blue text-white font-thin'>
      <div className="container mx-auto flex justify-between items-center py-6">
        <div className='flex justify-start items-center'>
          <img className='mr-16' src='/images/logo-bookmark-white.svg' alt="bookmark logo" />
          <ul className='flex justify-start items-center'>
            <li className='mr-4 uppercase text-sm'>Features</li>
            <li className='mr-4 uppercase text-sm'>Pricing</li>
            <li className='mr-4 uppercase text-sm'>Contact</li>
          </ul>
        </div>
        <ul className='flex justify-end items-center'>
          <li className='mr-8'><img src='/images/icon-facebook.svg' alt='facebook' /></li>
          <li><img src='/images/icon-twitter.svg' alt='twittet' /></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
