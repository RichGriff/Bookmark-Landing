import React, { useState } from 'react'
import { ctaData } from '../data'

const Cta = () => {
  const { heading, subHeading, btnText, placeholderText } = ctaData
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = () => {
    if (email === '' || email === null) {
      setError('Please enter an email')
      return
    }
    
    let valid = ValidateEmail(email)

    if (!valid) {
      setError('Please enter a valid email')
    } else {
      setError(null)
      setEmail('')
      setSuccessMessage('Amazing thank you for signing up! We\'ll be in touch.')
    }
    
  }

  const ValidateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    } else {
      return (false)
    }
  }

  return (
    <section className="py-20 bg-bm-purple text-white">
      <div className="w-96 sm:w-3/5 mx-auto px-2 flex flex-col justify-center items-center text-center">
          <p className="text-center mb-4 uppercase text-sm tracking-widest">{subHeading}</p>
          <h1 className="font-medium text-3xl text-center">{heading}</h1>
      </div>
      <form className='flex flex-col sm:flex-row gap-6 items-center justify-center mt-10'>
        <div className='relative'>
          <input type="email" id="email" placeholder={placeholderText} value={email} onChange={(e) => setEmail(e.target.value)}
            className={`relative py-3 px-4 rounded-md w-96 sm:w-[400px] text-gray-900 ${error && 'border-bm-red border-2'} z-20 block`}
            required
          />
          <span className={`${!error && 'hidden' } absolute right-0 top-2 z-30 py-2 px-3`}><img src='/images/icon-error.svg' alt='error icon'/></span>
          <p className={`${!error && 'hidden' } absolute z-0 top-0 w-full text-xs px-4 pt-14 pb-2 bg-bm-red rounded-md italic`}>{error}</p>
        </div>
        {/* pt-4 pb-2  -mt-3  */}
        <button onClick={handleSubmit} type='button' className='btn btn-red w-96 sm:w-36 hover:bg-bm-white hover:text-bm-red'>{btnText}</button>
      </form>
      {successMessage && <p className='flex justify-center items-center mt-8'>{successMessage}</p>}
    </section>
  )
}

export default Cta
