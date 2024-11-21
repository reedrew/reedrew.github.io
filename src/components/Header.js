import React from 'react';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
	return (
		<div className='header'>
			<h1>Andrew Reed</h1>
			<nav>
				<NavLink to='/about'>about</NavLink>
				<NavLink to='/projects/design'>projects</NavLink>
				{/* <NavLink to='/contact'>Contact</NavLink> */}
			</nav>
		</div>
	);
}
