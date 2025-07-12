import Link from 'next/link'
import React from 'react'

const ContactMe = () => {
  return (
    <Link href='/contact' className='mb-4 flex border-2 border-black'>
      <h1 className='title mx-auto my-4'>Send Trevor a message</h1>
    </Link>
  )
}

export default ContactMe
