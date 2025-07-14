import Link from 'next/link'
import Image from 'next/image'
import sendMessage from '@/public/images/myspace/send_message.gif'
import addFiend from '@/public/images/myspace/add_friend.gif'

const ContactBox = () => {
  return (
    <section className='bio-box'>
      <h2 className='bio-title'>Contact</h2>
      <div className='card-body contact-links'>
        <div className='contact-links__item'>
          <Link href='/contact'>
            <Image
              src={sendMessage}
              width={125}
              height={40}
              alt='Send Message'
            />
          </Link>
        </div>
        <div className='contact-links__item'>
          <a
            href='www.linkedin.com/in/trevor50d'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              src={addFiend}
              width={125}
              height={40}
              alt='Add to Friends'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactBox
