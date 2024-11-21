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
import CCSalsa from '../components/project-pages/CCSalsa';

function App() {
	return (
		<Router>
			<div className='container'>
				<Header />
				<main>
					<Switch>
						<Route
							exact
							path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route exact path='/projects/design'>
							<Projects />
						</Route>
						<Route exact path='/projects/programming'>
							<Projects />
						</Route>
						<Route exact path='/contact'>
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
