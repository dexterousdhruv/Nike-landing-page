import React from 'react'
import { footerLogo } from '../assets/images/index'
import {footerLinks, socialMedia} from '../constants/index'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container '>
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col max-lg:gap-16">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center bg-white rounded-full w-12 h-12 hover:bg-white-400 duration-150">
                <img src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between lg:gap-10 gap-14 flex-wrap ">
          {footerLinks.map((section) => (
            <div key={section} className="">
              <h4 className=' font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col
       max-sm:items-center">
        <div className="flex flex-1 js items-center gap-2  cursor-pointer">
          <img src={copyrightSign}
            alt="copyright-sign"
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p className='font-palanquin'>Copyrights. &nbsp;All Rights Reserved 2024.</p>
        </div>
          <p>Terms & Conditions</p>
       </div>
    </footer>
  )
}

export default Footer