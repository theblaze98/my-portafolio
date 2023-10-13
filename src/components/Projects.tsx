import { useState } from 'react'
import projects from '@/projects.json'
import ProjectCard from '@/components/ProjectCard'

function Projects() {
	const [page, setPage] = useState<number>(1)

	const maxPages = Math.ceil(projects.length / 4)

	const nextPage = () => {
		setPage(page + 1)
	}

	const previusPage = () => {
		setPage(page - 1)
	}

	const projectsShow = projects.slice((page - 1) * 4, (page - 1) * 4 + 4 )

  return (
		<section className='w-full p-5 flex gap-5 flex-wrap'>
			{projectsShow.map(
				({ name, description, languages, repositoryUrl, demoUrl }) => (
					<ProjectCard
						key={name}
						nameProject={name}
						description={description}
						languages={languages}
						githubUrl={repositoryUrl}
						demoUrl={demoUrl}
					/>
				)
			)}
			<div className='flex gap-4 justify-center items-center basis-full'>
				<button
					onClick={previusPage}
					disabled={page <= 1}
					className='bg-blue-600 text-white px-3 py-2 rounded-md disabled:bg-blue-400/75'>
					Anterior
				</button>
				<p className='text-xl font-medium text-center'>
					{page}
				</p>
				<button
					onClick={nextPage}
					disabled={page >= maxPages}
					className='bg-blue-600 text-white px-3 py-2 rounded-md disabled:bg-blue-400/75'>
					Siguiente
				</button>
			</div>
		</section>
	)
}

export default Projects;
