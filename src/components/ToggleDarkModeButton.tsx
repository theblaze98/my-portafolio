import { useState, useEffect } from 'react'

function ToggleDarkModeButton() {
	const initialDarkModeStateValue = localStorage.getItem('dark-mode')
		? JSON.parse(localStorage.getItem('dark-mode') as string)
		: true

	const [isDarkMode, setIsDarkMode] = useState(initialDarkModeStateValue)

	const handleChange = () => {
		localStorage.setItem('dark-mode', `${!isDarkMode}`)
		setIsDarkMode(!isDarkMode)
	}

	useEffect(() => {
		document.body.classList.toggle('dark-mode', isDarkMode)
	}, [isDarkMode])

	return (
		<div>
			<label
				htmlFor='darkmode'
				className={`flex items-center w-10 h-5 rounded-full relative shadow-inner  ${
					isDarkMode
						? 'bg-slate-700 shadow-slate-400/25'
						: 'bg-slate-100 shadow-slate-800/50'
				}`}>
				<input
					type='checkbox'
					name='darkmode'
					id='darkmode'
					checked={isDarkMode}
					onChange={handleChange}
					className='peer hidden'
				/>
				<div className='w-4 h-4 bg-yellow-500 peer-checked:bg-slate- mx-[2px] rounded-full absolute left-0 peer-checked:left-5 transition-all duration-500 ease-in'></div>
			</label>
		</div>
	)
}

export default ToggleDarkModeButton
