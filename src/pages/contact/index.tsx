import React from 'react'
import ContactPage from './form'
import Heading from '../../shared/heading'

export default function Contact() {
  return (
    <div data-theme="black" className='bg-[#080808] pt-7'>
              <Heading title="Contact us"/>
              <br />

      <ContactPage/>
 
    </div>
  )
}
