import React from 'react';
import ProfilePic from '../assets/profile.png';

export default function About() {
	return (
		<section className='about-page'>
			<h2>
				Hey, I'm <span>Andrew</span>.
			</h2>
			<div className='about-info'>
				<div>
					<p>
						I'm a fresh graduate from{' '}
						<span>Indiana University Bloomington</span> where I studied{' '}
						<span>Informatics</span> with a cognate in{' '}
						<span>Graphic Design</span>. I was also an active officer of the
						AIGA student group on campus where I designed promotional materials
						for our design-oriented workshops and assisted in student outreach.
					</p>
					<p>
						In my spare time, you can find me gaming with my friends, baking
						bread, going the movies on Tuesdays, or reading some fantasy novel.
					</p>
				</div>

				<img
					src={ProfilePic}
					alt='A young man wearing a brown coat standing in a pumpkin patch.'></img>
			</div>
		</section>
	);
}
