import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// project images
import Image from '../../assets/projectImages/p/p-thumb.jpg';
import Image2 from '../../assets/projectImages/p/p-process-1.jpg';
import Image3 from '../../assets/projectImages/p/p-process-2.jpg';
import Image4 from '../../assets/projectImages/p/p-process-3.jpg';
import Image5 from '../../assets/projectImages/p/p-process-4.jpg';
import Image6 from '../../assets/projectImages/p/p-process-5.jpg';
import Image7 from '../../assets/projectImages/p/p-refine-1.jpg';

export default function Letterform() {
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
			<h2>"P" - Letterform Abstraction</h2>
			<img
				src={Image}
				alt='custom logo mark for Cosmic Curiosities.'
			/>
			<p>
				For this project, we were challenged with taking a letter of the
				alphabet, randomly assigned, and identify the most base characteristics
				in its anatomy so that it was still recognizable after a major
				abstraction.
			</p>
			<img src={Image2} />
			<img src={Image3} />
			<p>
				Some initial sketching that helped me identify which parts could be
				abstracted and to what extent.
			</p>
			<img src={Image4} />
			<p>
				Based on some critique feedback, I picked the above two approaches to
				iterate on.
			</p>
			<img src={Image5} />
			<img
				src={Image6}
				alt='I decided on these two designs to bring to last crit with overwhelming support for the design on the left. However, it was not finished. It needed more balance for it to feel complete.'
			/>
			<img src={Image7} />
			<p>After some measuring, the shape was balanced finished.</p>
			<img src={Image} />
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
