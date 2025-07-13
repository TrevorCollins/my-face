import Image from 'next/image'
import profilePic from '@/public/images/profile.jpeg'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey! I am Trevor</h1>
        <p className='text-muted-foreground mt-3 font-light'>
          I am a software engineer based in Kansas City, MO. I am passionate
          about learning new technologies and sharing knowledge with others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={profilePic}
          alt='Trevor Collins'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

export default Intro
