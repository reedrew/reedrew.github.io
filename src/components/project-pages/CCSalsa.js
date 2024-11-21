import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// project images
import Image from '../../assets/projectImages/cc-salsa/CCSalsaThumb.jpg';
import Image2 from '../../assets/projectImages/cc-salsa/ccsalsa-redesign.jpg';
import Image3 from '../../assets/projectImages/cc-salsa/ccsalsa-process-02.jpg';
import Image4 from '../../assets/projectImages/cc-salsa/ccsalsa-process-03.jpg';
import Image5 from '../../assets/projectImages/cc-salsa/ccsalsa-process-12.jpg';
import Image6 from '../../assets/projectImages/cc-salsa/ccsalsa-process-20.jpg';
import Image7 from '../../assets/projectImages/cc-salsa/ccsalsa-process-21.jpg';
import Image8 from '../../assets/projectImages/cc-salsa/ccsalsa-process-24.jpg';
import Image9 from '../../assets/projectImages/cc-salsa/ccsalsa-process-46.jpg';

export default function CCSalsa() {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	const goUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className='project-info'>
			<button
				className='back-button'
				onClick={goBack}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40px'
					viewBox='0 -960 960 960'
					width='40px'
					fill='#00000'>
					<path d='m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z' />
				</svg>
			</button>
			<h2>Crazy Charlie's Salsa</h2>
			<img
				src={Image}
				alt='three jars of salsa with custom branding on a plain light blue background.'
			/>
			<p>
				For this project, I was assigned to find a packaged good in my local
				grocery store that had some design flaws, identify them, and then make a
				design of my own with those particular elements in mind.
			</p>
			<p>
				Crazy Charlie's Salsa is a local brand made in Indiana and is some of my
				favorite salsa around. So it was important to me that I kept that
				'homemade' feeling in my design as I feel that's a big part of its
				charm.
			</p>
			<img
				src={Image2}
				alt='TEMP'
			/>
			<p>
				After identifying these issues, I began exploring some basic designs by
				experimenting with space, hierarchy, and different typefaces.
			</p>
			<div className='dualImage'>
				<img
					src={Image3}
					alt='TEMP'
				/>
				<img
					src={Image4}
					alt='TEMP'
				/>
			</div>
			<p>
				I settled on the typeface and also began playing with color before I
				made any commitments in my layout. Some of my experiments were...
				interesting. But I wanted to ensure I tried a large swath of options
				before settling. Though you can tell I had a good idea of how I wanted
				it to look already.
			</p>
			<div className='dualImage'>
				<img
					src={Image5}
					alt='TEMP'
				/>
				<img
					src={Image6}
					alt='TEMP'
				/>
			</div>
			<div className='dualImage'>
				<img
					src={Image7}
					alt='TEMP'
				/>
				<img
					src={Image8}
					alt='TEMP'
				/>
			</div>
			<p>
				I ended up deciding I wanted to go for a more classic look with the
				colors while keeping the desired modern elements for the update. Bold,
				but not too bright colors with a strong outline and shadow hearkened
				back to simple and classic jar designs I found in my research.
			</p>
			<img
				src={Image9}
				alt='TEMP'
			/>
			<p>
				Some slight adjustments were made, particularly in how the info below
				the logo mark was positioned, and the redesign was finished.
			</p>
			<img
				src={Image}
				alt='TEMP'
			/>
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
