import Link from 'next/link'
const ContactMe = () => {
  return (
    <Link href='/contact' className='border-foreground mb-4 flex border-2'>
      <h1 className='title mx-auto my-4'>Send Trevor a message</h1>
    </Link>
  )
}

export default ContactMe
