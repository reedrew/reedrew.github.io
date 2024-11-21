import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import hello from '../assets/Hello.png';

export default function Home() {
	return (
		<div className='home'>
			<Redirect to='/about' />
			{/* <div>
				<h2>
					Hi, I'm <span>Andrew.</span>
				</h2>
				<p>
					I'm an aspiring <span>Graphic and Web Designer</span> with a
					passion for building <span>accessible</span> and{' '}
					<span>memorable</span> user experiences both on and off the
					web.
				</p>
			</div>
			<div>
				<img src={hello} />
			</div> */}
		</div>
	);
}
