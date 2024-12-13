import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink,
	Redirect,
} from 'react-router-dom/cjs/react-router-dom.min';
// project pages
import CCSalsaPage from './project-pages/CCSalsa';
import CosmicCur from './project-pages/CosmicCur';
import PAbstractPage from './project-pages/P';
import EZMeals from './project-pages/EZMeals';
import OutdoorAdventures from './project-pages/OutdoorAdventures';
import Grenadine from './project-pages/Grenadine';
// project images
import CCSalsa from '../assets/projectImages/cc-salsa/CCSalsaThumb.jpg';
import CosCur from '../assets/projectImages/cosmic-curiosities/cc-thumb.jpg';
import PAbstract from '../assets/projectImages/p/p-thumb.jpg';
import EZMealsThumb from '../assets/projectImages/ez-meals/ezmeals-thumb.jpg';
import OutdoorThumb from '../assets/projectImages/outdoor-adventures/outdoor-adv-thumb.png';
import TypeSpecThumb from '../assets/projectImages/grenadine/type-spec-cover.jpg';

export default function Projects() {
	// <Redirect to='/projects/design' />;

	return (
		<Router>
			<div className='projects-page'>
				<div className='project-nav'>
					<NavLink to='/projects/design'>design</NavLink>
					<NavLink to='/projects/programming'>programming</NavLink>
				</div>
				<main>
					<Switch>
						{/* design component routes */}
						<Route path='/projects/design/crazy-charlies-salsa'>
							<CCSalsaPage />
						</Route>
						<Route
							exact
							path='/projects/design/cosmic-curiosities'>
							<CosmicCur />
						</Route>
						<Route
							exact
							path='/projects/design/p'>
							<PAbstractPage />
						</Route>
						<Route
							exact
							path='/projects/design/type-specimen'>
							<Grenadine />
						</Route>
						{/* programming component routes */}
						<Route
							exact
							path='/projects/programming/ez-meals'>
							<EZMeals />
						</Route>
						<Route
							exact
							path='/projects/programming/outdoor-adventures'>
							<OutdoorAdventures />
						</Route>
						{/* design projects list route */}
						<Route
							exact
							path='/projects/design'>
							<div className='project-list'>
								<Link
									className='project-list-item'
									to='/projects/design/crazy-charlies-salsa'>
									<img
										src={CCSalsa}
										alt='three jars of salsa with custom branding on a plain light blue background.'
									/>
								</Link>
								<Link
									className='project-list-item'
									to='/projects/design/cosmic-curiosities'>
									<img
										src={CosCur}
										alt='custom logo mark for Cosmic Curiosities.'
									/>
								</Link>
								<Link
									className='project-list-item'
									to='/projects/design/p'>
									<img
										src={PAbstract}
										alt='an abstracted form of the letter P.'
									/>
								</Link>
								<Link
									className='project-list-item'
									to='/projects/design/type-specimen'>
									<img src={TypeSpecThumb} />
								</Link>
							</div>
						</Route>
						{/* programming projects list route */}
						<Route
							exact
							path='/projects/programming'>
							<div className='project-list'>
								<Link
									className='project-list-item'
									to='/projects/programming/ez-meals'>
									<img src={EZMealsThumb} />
									<h3>EZ Meals</h3>
								</Link>
								<Link
									className='project-list-item'
									to='/projects/programming/outdoor-adventures'>
									<img src={OutdoorThumb} />
									<h3>Outdoor Adventures</h3>
								</Link>
							</div>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
