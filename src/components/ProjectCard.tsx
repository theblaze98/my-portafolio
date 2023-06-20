import { DiGithubBadge } from 'react-icons/di'
import { CgWebsite } from 'react-icons/cg'

type Props = {
	nameProject: string
	description: string
	languages: string
	githubUrl: string
	demoUrl?: string
}

function ProjectCard({
	nameProject,
	description,
	languages,
	githubUrl,
	demoUrl,
}: Props) {
	return (
		<div className='card project-card flex flex-col gap-3'>
			<h4 className='text-xl font-semibold'>{nameProject}</h4>
			<p className='text-sm'>{description}</p>
			<span>Lenguajes: {languages}</span>
			<div className='flex gap-5 mt-2'>
				<a
					href={githubUrl}
					target='_blank'
					className='px-2 py-1 text-lg gap-2 flex items-center border-2 border-solid border-blue-600 rounded text-blue-600'>
					<DiGithubBadge className='w-6 h-6' />
					Github
				</a>
				{demoUrl ? (
					<a
						href={demoUrl}
						target='_blank'
						className='px-2 py-1 text-lg gap-2 flex items-center border-2 border-solid border-blue-600 rounded text-blue-600'>
						<CgWebsite />
						Demo
					</a>
				) : (
					<span className='px-2 py-1 text-lg gap-2 flex items-center border-2 border-solid border-blue-600 rounded text-blue-600'>
						En desarrollo
					</span>
				)}
			</div>
		</div>
	)
}
export default ProjectCard
