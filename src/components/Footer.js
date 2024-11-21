import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Email Handler
const ButtonMailto = ({ mailto, label }) => {
	return (
		<Link
			className='footer-contact-link'
			to='#'
			onClick={(e) => {
				window.location.href = mailto;
				e.preventDefault();
			}}>
			{label}
		</Link>
	);
};

export default function Footer() {
	return (
		<footer>
			<h3 className='footer-title'>Andrew Reed</h3>
			<div>
				<h4 className='footer-subhead'>Want to contact me?</h4>
				<p className='footer-info'>
					You can currently reach me via{' '}
					<ButtonMailto
						label='Email'
						mailto='mailto:andrewdavid.reed@gmail.com'
					/>{' '}
					or{' '}
					<Link
						to={{ pathname: 'https://www.linkedin.com/in/drewreed22/' }}
						target='_blank'
						className='footer-contact-link'>
						LinkedIn
					</Link>
					.
				</p>
				{/* CHANGE INTO A PROPER FORM */}
				{/* <ButtonMailto
					label='Contact'
					mailto='mailto:andrewdavid.reed@gmail.com'
				/> */}
			</div>
		</footer>
	);
}
