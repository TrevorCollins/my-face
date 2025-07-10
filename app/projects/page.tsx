import Projects from '@/components/Projects'
import { getFiles } from '@/lib/fetch'

export default async function ProjectsPage() {
  const projects = await getFiles('projects')

  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
