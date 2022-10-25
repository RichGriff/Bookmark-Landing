import React, { useEffect, useState } from 'react'
import { faqData } from '../data'

const Faq = () => {
  const { heading, subHeading, btnText } = faqData
  const [questions, setQuestions] = useState(faqData.questions)

  const handleFaqToggle = (index) => {
    let selected = questions.filter((_, i) => i === index);
    selected[0].expanded = !selected[0].expanded
  }

  useEffect(() => {
    setQuestions([...questions])
  }, [questions])

  return (
    <section className="py-20">
      <div className="w-96 sm:w-3/5 mx-auto px-2 flex flex-col justify-center items-center text-center">
          <h1 className="font-medium text-3xl text-center text-bm-blue">{heading}</h1>
          <p className="text-center text-bm-grey mt-4">{subHeading}</p>
      </div>
      <ul className='flex flex-col w-full mx-auto sm:w-1/2 justify-center items-center mt-16'>
          {questions.map((q, i) => (
            <li 
              key={i} 
              onClick={() => handleFaqToggle(i)}
              className={`border-t-2 border-gray-100 py-2 w-5/6 ${i === questions.length-1 && 'border-b-2'} hover:text-bm-red hover:cursor-pointer`}>
              <div className='flex justify-between items-center py-2'>
                <p>{q.question}</p>
                <span className='mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${q.expanded && 'rotate-180'} transition-all ease-out duration-300`} width="18" height="12"><path fill="none" stroke={q.expanded ? '#FA5959': '#5267DF'} stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </span>
              </div>
              <div className={`mt-2 py-4 text-bm-grey ${q.expanded ? 'block opacity-100' : 'hidden opacity-0'} transition-all ease-out duration-600`}>
                {q.answer}
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}
// <li 
              //     key={i} 
              //     onClick={() => selectFeature(i)}
              //     className={`p-6 w-96 text-center border-b-2 text-bm-grey cursor-pointer ${i === selectedFeatureIndex && 'text-black border-bm-red border-b-4 active dark:text-blue-500 dark:border-blue-500'}`}>
              //     {f.tabTitle}
              // </li>

export default Faq
