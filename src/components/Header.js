import React, { useEffect, useState } from 'react';

import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
	const [bg, setBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	}, []);

	return (
		<header
			className={`${
				bg ? 'bg-tertiary h-20' : 'h-24'
			} flex items-center fixed top-0 w-full text-white z-10 transition-all duretion-300`}
		>
			<div className='container mx-auto h-full flex items-center justify-between'>
				
				<button className='btn btn-md bg-amber-600 hover:bg-red-900-hover transition-all' >
				<a href='https://allseasonstech-blog.netlify.app/' target="_blank" rel="noreferrer" >
					Create your Blog
				</a>
			</button>

				{/* nav */}
				<div className='hidden lg:block'>
					<Nav />
				</div>

				{/* socials */}
				<div className='hidden lg:block'>
					<Socials />
				</div>

				{/* nav mobile */}
				<div className='lg:hidden'>
					<NavMobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
