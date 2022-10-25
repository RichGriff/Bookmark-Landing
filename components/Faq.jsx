import React, { useEffect, useState } from 'react'
import { faqData } from '../data'

const Faq = () => {
  const { heading, subHeading, btnText } = faqData
  const [questions, setQuestions] = useState(faqData.questions)
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const handleFaqToggle = (index) => {
    // let selected = questions.filter((_, i) => i === index);
    // selected[0].expanded = !selected[0].expanded
    setSelectedQuestion(index)
  }

  useEffect(() => {
    let question = questions.filter((_, i) => i === 0);
    setSelectedQuestion(0)
  }, [questions])

  return (
    <section className="py-20">
      <div className="w-96 sm:w-3/5 mx-auto px-2 flex flex-col justify-center items-center text-center">
          <h1 className="font-medium text-3xl text-center text-bm-blue">{heading}</h1>
          <p className="text-center text-bm-grey mt-4">{subHeading}</p>
      </div>
      <ul className='flex flex-col w-full mx-auto sm:w-1/2 justify-center items-center mt-16'>
          {questions && questions.map((q, i) => (
            <li 
              key={i} 
              onClick={() => handleFaqToggle(i)}
              className={`border-t-2 border-gray-100 py-2 w-5/6 ${i === questions.length-1 && 'border-b-2'} hover:text-bm-red hover:cursor-pointer`}>
              <div className='flex justify-between items-center py-2'>
                <p>{q.question}</p>
                <span className='mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${i === selectedQuestion && 'rotate-180'} transition-all ease-out duration-300`} width="18" height="12"><path fill="none" stroke={q.expanded ? '#FA5959': '#5267DF'} strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                </span>
              </div>
              <div className={`mt-2 py-4 text-bm-grey ${i === selectedQuestion ? 'block opacity-100' : 'hidden opacity-0'} transition-all ease-out duration-600`}>
                {q.answer}
              </div>
            </li>
          ))}
      </ul>
      <div className='flex justify-center items-center py-8'>
        <button className='btn btn-purple'>{btnText}</button>
      </div>
    </section>
  )
}

export default Faq
