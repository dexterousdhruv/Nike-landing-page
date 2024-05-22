import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container items-center lg:flex-col gap-10'

      id='contact-us'
    >
      <h3 className='text-4xl leading-[68px] text-center  font-palanquin font-bold'>
        Sign Up For Updates & Newsletters
       
      </h3>
    
      <div className=' flex items-center max-sm:flex-col mt-10 gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full '>
        <input type="text"
          placeholder='subscribe@nike.com'
          className="input max-[320px]:text-center"
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe