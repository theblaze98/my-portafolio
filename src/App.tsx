import { FaFilePdf, FaGithub } from 'react-icons/fa'
import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiReact,
	DiNodejs,
	DiMongodb,
} from 'react-icons/di'
import { SiTailwindcss, SiTypescript, SiExpress } from 'react-icons/si'
import ToggleDarkModeButton from './components/ToggleDarkModeButton'
import photo from './assets/photo.jpg'
import Projects from './components/Projects'
import curriculum from './assets/curriculum.pdf'

function App() {
	return (
		<>
			<header className='flex justify-end p-5 h-16'>
				<ToggleDarkModeButton />
			</header>
			<main>
				<article className='hero'>
					<figure className='about-me-photo'>
						<img
							src={photo}
							alt='ProfilePhoto'
							className='w-36 h-36 rounded-full absolute'
						/>
					</figure>
					<h2 className='text-4xl font-bold my-2'>Dionicio Vargas</h2>
					<section className='w-11/12 mt-8'>
						<h3 className='text-2xl text-center font-medium mb-4'>
							Sobre M&iacute;
						</h3>
						<p className='text-center text-md'>
							Soy Dionicio Vargas, un apasionado desarrollador web en
							entrenamiento con una dedicación constante a la programación y a
							las diversas áreas de la tecnología. Durante los últimos dos años,
							he estado inmerso en el aprendizaje de diferentes aspectos de la
							programación.
							<br />
							Mi enfoque principal ha sido en el desarrollo web, donde he
							adquirido conocimientos básicos en el stack MERN, que incluye
							MongoDB, Express, React y Node.js. A través de proyectos
							prácticos, he tenido la oportunidad de aplicar estas tecnologías y
							mejorar mis habilidades en el diseño y desarrollo de aplicaciones
							web.
							<br />
							Estoy entusiasmado por tener la oportunidad de aplicar mis
							conocimientos y habilidades en un entorno laboral desafiante,
							contribuyendo de manera significativa al desarrollo de soluciones
							tecnológicas innovadoras.
						</p>
					</section>
					<section className='flex gap-4 p-4 text-lg'>
						<a
							href={curriculum}
							target='_blank'
							className='py-2 px-3 rounded bg-blue-600 text-white flex items-center gap-2 mt-4 hover:bg-blue-500 transition-colors'>
							<FaFilePdf /> Mi Curriculum
						</a>
						<a
							href='https://github.com/theblaze98'
							target='_blank'
							className='py-2 px-3 rounded bg-blue-600 text-white flex items-center gap-2 mt-4 hover:bg-blue-500 transition-colors'>
							<FaGithub /> Github
						</a>
					</section>
				</article>
				<article>
					<h3 className='my-5 text-center text-3xl font-medium'>Proyectos</h3>
					<Projects />
				</article>
				<article>
					<h3 className='text-center text-3xl font-medium'>Habilidades</h3>
					<section className='flex text-4xl justify-between gap-2 p-6 flex-wrap'>
						<DiHtml5 className='basis-1/6' />
						<DiCss3 className='basis-1/6' />
						<DiJsBadge className='basis-1/6' />
						<DiNodejs className='basis-1/6' />
						<SiTypescript className='basis-1/6' />
						<SiExpress className='basis-1/6' />
						<SiTailwindcss className='basis-1/6' />
						<DiReact className='basis-1/6' />
						<DiMongodb className='basis-1/6' />
					</section>
				</article>
			</main>
			<footer className='w-full mt-4 p-4'>
				<h4 className='text-center text-lg'>Creado por Dionicio Vargas</h4>
			</footer>
		</>
	)
}

export default App
