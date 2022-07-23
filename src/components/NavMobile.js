import React, { useState } from 'react';
import { navigation } from '../data';
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import Socials from './Socials';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const circleVariants = {
		hidden: {
			scale: 0
		},
		visible: {
			scale: 180,
			transition: {
				type: 'spring',
				stiffness: 160,
				damping: 60
			}
		}
	};

	const ulVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1
			}
		}
	};

	return (
		<nav className='relative'>
			{/* menu icon */}
			<div
				className='cursor-pointer text-white'
				onClick={() => setIsOpen(true)}
			>
				<MenuAlt3Icon className='w-8 h-8' />
				
				
				
			</div>

			{/* circle */}
			<motion.div
				variants={circleVariants}
				initial='hidden'
				animate={isOpen ? 'visible' : 'hidden'}
				className='w-4 h-4 rounded-full bg-secondary fixed top-0 right-0'
			></motion.div>

			{/* menu */}
			<motion.ul
				variants={ulVariants}
				initial='hidden'
				animate={isOpen ? 'visible' : 'hidden'}
				className={`${
					isOpen ? 'right-0' : '-right-full'
				} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
			>
				{/* close icon */}
				<div
					onClick={() => setIsOpen(false)}
					className='cursor-pointer absolute top-8 right-8'
				>
					<XIcon className='w-8 h-8' />
				</div>
				{navigation.map((item, index) => (
					<li key={index} className='mb-8'>
						<a
							href={item.href}
							smooth={true}
							duration={500}
							offset={-70}
							className='text-xl cursor-pointer capitalize'
						>
							{item.name}
						</a>
					</li>
					
				))}
				{<Socials />}
			</motion.ul>
			
		</nav>
	);
};

export default NavMobile;
