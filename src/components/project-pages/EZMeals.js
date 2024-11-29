import React from 'react';
import {
	useHistory,
	Link,
	Redirect,
} from 'react-router-dom/cjs/react-router-dom.min';
// photos
import Poster from '../../assets/projectImages/ez-meals/ezmeals-poster.jpg';
import Image from '../../assets/projectImages/ez-meals/EZMealsThumb.png';

export default function EZMeals() {
	const history = useHistory();

	const goUp = () => {
		window.scrollTo(0, 0);
	};
	try {
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

				<h2>EZ Meals</h2>

				<div className='prog-button-container'>
					<Link
						to={{
							pathname: 'https://github.iu.edu/info-capstone-2024/team-19',
						}}
						target='_blank'
						className='prog-button'>
						GitHub
					</Link>
					<Link
						to={{
							pathname:
								'https://zion.luddy.indiana.edu/info-capstone-2024/ez-meals',
						}}
						target='_blank'
						className='prog-button'>
						More Info
					</Link>
				</div>

				<img src={Image} />

				<p>
					My senior capstone project required the building of an information
					system from scratch in order to solve a sustainability issue.
				</p>
				<p>
					As a team, we settled on the issue of food waste by creating a
					meal-planning tool to encourage college students to effectively plan
					and shop for home cooking. This application allows users to search
					through hundreds of recipes, save and add them to their Google
					calendar, and generate grocery lists based on their saved recipes. It
					also allows users to save a dietary preference to their profile, such
					as 'vegetarian,' and the application would only show recipes that fit
					that preference.
				</p>
				<p>
					This project was the first of its scale that I had faced both
					individually and in a team-setting. It required effective project
					management via SCRUM methedologies and peer evaluations. This project
					was built with PHP and Javascript, utilizing API calls to fetch and
					store recipe data as well as database management to store and fetch
					user info.
				</p>

				<p></p>
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
	} catch {
		return <Redirect to='/projects/programming' />;
	}
}
