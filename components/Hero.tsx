import Image from 'next/image'
import profilePic from '@/public/images/dark-profile.jpeg'

const Hero = () => {
  return (
    <section className=''>
      <h1 className='title text-nowrap'>Trevor Collins</h1>
      <div className='flex flex-row items-start gap-x-2 md:items-center'>
        <div className='flex flex-1 flex-col items-center'>
          <Image
            className='flex-1'
            src={profilePic}
            alt='Trevor Collins'
            width={160}
            height={200}
            priority
          />
          <p className='text-dark-blue text-xs font-semibold'>View more pics</p>
        </div>
        <div className='text-xxs flex flex-1 flex-col items-start gap-3 font-light'>
          <p>
            {`"I am passionate about learning new technologies and sharing
            knowledge."`}
          </p>
          <ul className='list-none'>
            <li>Male</li>
            <li>32</li>
            <li>Kansas City,</li>
            <li>Missouri</li>
            <li>United States</li>
          </ul>
          <p>Last Login: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
