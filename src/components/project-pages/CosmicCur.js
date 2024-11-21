import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// project images
import Image from '../../assets/projectImages/cosmic-curiosities/cc-thumb.jpg';
import CreativeBrief from '../../assets/projectImages/cosmic-curiosities/cc-creative-brief.jpg';
import Sketches from '../../assets/projectImages/cosmic-curiosities/cc-sketches.jpg';
import Process1 from '../../assets/projectImages/cosmic-curiosities/cc-process1.jpg';
import Process2 from '../../assets/projectImages/cosmic-curiosities/cc-process2.jpg';
import Process3 from '../../assets/projectImages/cosmic-curiosities/cc-process3.jpg';
import Process4 from '../../assets/projectImages/cosmic-curiosities/cc-process4.jpg';
import Process5 from '../../assets/projectImages/cosmic-curiosities/cc-process5.jpg';
import Process6 from '../../assets/projectImages/cosmic-curiosities/cc-process6.png';

export default function CosmicCur() {
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
			<h2>Cosmic Curiosities</h2>
			<img
				src={Image}
				alt='custom logo mark for Cosmic Curiosities.'
			/>
			<p>
				This was a project I did for a typography class. I was tasked with
				making a creative brief for a fake show, then designing a wordmark for
				that show.
			</p>
			<img
				src={CreativeBrief}
				alt='creative brief detailing a description and a mood board for the fake show Cosmic Curiosities.'
			/>
			<p>
				I was really into Bob's Burgers and Futurama at the time, which were
				both clearly big inspirations for this idea.
			</p>
			<p>
				I then began sketching out ideas for the show's word mark, testing out a
				variety of typefaces and combinations as well as some simple graphical
				ideas
			</p>
			<img
				src={Sketches}
				alt='A long list of art boards consisting of early versions of the logo for Cosmic Curiosities.'
			/>
			<img src={Process1} />
			<img src={Process2} />
			<img src={Process3} />
			<img src={Process4} />
			<img src={Process5} />
			<p>
				After some final adjustments focusing on spacing and balance, the final
				design was finished.
			</p>
			<img src={Process6} />
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
