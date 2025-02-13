import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-11 shadow-3xl'>
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="icon" width={24} />
      </div>
      <h3 className='mt-5 font-palanquin font-bold text-2xl leading-normal'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-md text-slate-gray '>{subtext}</p>
    </div>
  )
}

export default ServiceCard