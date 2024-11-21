import React from 'react';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
// photos
import Image from '../../assets/projectImages/outdoor-adventures/outdoor-adv-main.png';

export default function OutdoorAdventures() {
	const goUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className='project-info'>
			<Link
				className='back-button'
				to='/projects/programming'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40px'
					viewBox='0 -960 960 960'
					width='40px'
					fill='#00000'>
					<path d='m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z' />
				</svg>
			</Link>

			<h2>Outdoor Adventures</h2>

			<div className='prog-button-container'>
				<Link
					to={{
						pathname: 'https://github.iu.edu/reedandr/i211_project',
					}}
					target='_blank'
					className='prog-button'>
					GitHub
				</Link>
				<Link
					to={{
						pathname:
							'https://cgi.luddy.indiana.edu/~reedandr/i211_project.cgi/',
					}}
					target='_blank'
					className='prog-button'>
					Demo
				</Link>
			</div>

			<img src={Image} />

			<p>
				A trip management application built with Python and Flask that allows
				users to add, delete, and edit trip information including trip details
				and member assignment.
			</p>
			<p>
				This was the first full web application I ever made and built my
				foundation of web development through this project. This involved
				learning and utilizing new frameworks, specifically Flask, learning how
				routing works, and working with databases using MySQL.
			</p>
			{/* <img src={Poster} /> */}
			<button
				onClick={goUp}
				className='up-button'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40px'
					viewBox='0 -960 960 960'
					width='40px'
					fill='#00000'>
					<path d='M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z' />
				</svg>
			</button>
		</div>
	);
}
