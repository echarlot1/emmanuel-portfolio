import React from 'react';
import { navigation } from '../data';
import  Scroll, { ScrollElement }  from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;



const Nav = () => {
	return (
		<nav>
			<ul className='flex space-x-8 capitalize text=[15px]'>
				{navigation.map((item, index) => {
					return (
						<div  >
								<li
								key={index}
								className='text-white hover:text-red-900 cursor-pointer'
								// {...document.getElementById({...item.href}).scrollIntoView({behavior: "smooth", block: "center"})}
								
							>
								<a
									href={item.href}
									activeClass='active'
									spy={true}
									smooth={true}
									duration={500}
									offset={-70}
									
									className='transition-all duration-300'
									
									
								>
									{item.name}
								</a>
								
								
							</li>
							
						</div>

						
						
						
					);
				})}
			</ul>
			
			
		</nav>
	);
};

export default Nav;
