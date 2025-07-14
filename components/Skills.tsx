import { skills } from '@/content/skills'
import Image from 'next/image'

export type Skill = {
  name: string
  img: string
  rank: string
}

const Skills = () => {
  const sortedSkills = skills.sort((a, b) => a.rank - b.rank).slice(0, 8)
  return (
    <div className='social-box'>
      <h2 className='social-title'>Trevor&apos;s Skills</h2>
      <p className='social-info'>
        Trevor has <span className='text-accent-info'>{skills.length}</span>{' '}
        skills.
      </p>
      <div className='flex flex-row flex-wrap justify-between gap-4'>
        {sortedSkills.map(skill => (
          <div
            key={skill.name}
            className='flex max-w-[20%] flex-col items-center gap-1'
          >
            <p className='text-xxs text-primary font-semibold'>{skill.name}</p>
            <Image
              src={`/images/skills/${skill.img}.png`}
              alt={skill.name}
              width={100}
              height={100}
              className='border-1'
            />
          </div>
        ))}
      </div>
      <p className='text-accent-info text-xxs mt-2 text-right font-semibold'>
        View All of Trevor&apos;s Skills
      </p>
    </div>
  )
}

export default Skills
