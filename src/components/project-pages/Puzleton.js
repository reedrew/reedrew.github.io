import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// Carousel imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// images
import Cover from '../../assets/projectImages/puzleton/P3_Zine.jpg';
import Spread1 from '../../assets/projectImages/puzleton/P3_Zine2.jpg';
import Spread2 from '../../assets/projectImages/puzleton/P3_Zine3.jpg';
import Spread3 from '../../assets/projectImages/puzleton/P3_Zine4.jpg';
import Spread4 from '../../assets/projectImages/puzleton/P3_Zine5.jpg';
import Spread5 from '../../assets/projectImages/puzleton/P3_Zine6.jpg';
import Spread6 from '../../assets/projectImages/puzleton/P3_Zine7.jpg';
import Spread7 from '../../assets/projectImages/puzleton/P3_Zine8.jpg';
import Spread8 from '../../assets/projectImages/puzleton/P3_Zine9.jpg';
import Spread9 from '../../assets/projectImages/puzleton/P3_Zine10.jpg';
import Spread10 from '../../assets/projectImages/puzleton/P3_Zine11.jpg';
import Spread11 from '../../assets/projectImages/puzleton/P3_Zine12.jpg';
// import Spread12 from '../../assets/projectImages/puzleton/P3_Zine13.jpg';

function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				<div>
					<img src={Cover} />
				</div>
				<div>
					<img src={Spread1} />
				</div>
				<div>
					<img src={Spread2} />
				</div>
				<div>
					<img src={Spread3} />
				</div>
				<div>
					<img src={Spread4} />
				</div>
				<div>
					<img src={Spread5} />
				</div>
				<div>
					<img src={Spread6} />
				</div>
				<div>
					<img src={Spread7} />
				</div>
				<div>
					<img src={Spread8} />
				</div>
				<div>
					<img src={Spread9} />
				</div>
				<div>
					<img src={Spread10} />
				</div>
				<div>
					<img src={Spread11} />
				</div>
				{/* <div>
					<img src={Spread12} />
				</div> */}
			</Slider>
		</div>
	);
}

export default function Puzleton() {
	const goUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className='project-info'>
			<Link
				className='back-button'
				to='/projects/design'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40px'
					viewBox='0 -960 960 960'
					width='40px'
					fill='#00000'>
					<path d='m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z' />
				</svg>
			</Link>

			<h2>"Puzleton" Zine</h2>

			<SimpleSlider />
		</div>
	);
}
