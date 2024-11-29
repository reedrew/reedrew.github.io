import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
// project pages
import CCSalsa from '../components/project-pages/CCSalsa';
import CosmicCur from '../components/project-pages/CosmicCur';
import Letterform from '../components/project-pages/P';
import EZMeals from '../components/project-pages/EZMeals';
import OutdoorAdventures from '../components/project-pages/OutdoorAdventures';
function App() {
	return (
		<Router>
			<div className='container'>
				<Header />
				<main>
					<Switch>
						<Route
							exact
							path='/projects/design/crazy-charlies-salsa'>
							<CCSalsa />
						</Route>
						<Route
							exact
							path='/projects/design/cosmic-curiosities'>
							<CosmicCur />
						</Route>
						<Route
							exact
							path='/projects/design/p'>
							<Letterform />
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
						<Route
							exact
							path='/projects/design'>
							<Projects />
						</Route>
						<Route
							exact
							path='/projects/programming'>
							<Projects />
						</Route>
						<Route
							exact
							path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route
							exact
							path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
