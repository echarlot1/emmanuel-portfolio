import React from 'react';
import mySelfie from '../assets/img/mySelfie.png';
import myResume from "./../assets/img/myResume.docx";
import { FiMail } from 'react-icons/fi';

const About = () => {
	
	return (
		<section className='section bg-secondary'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row gap-12 lg:gap-18'>
					{/*  */}
					<img
						className='object-cover h-small w-[300px] md:mx-auto xl:mx-0 rounded-2xl p-8 my-8 '
						src={mySelfie}
						alt=''
						
					/>
					<div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
						<div className='flex flex-col'>
							<h2
								className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3
                            before:content-about relative before:absolute
                            before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'
							>
								Emmanuel
							</h2>
							<p className='mb-4 text-red-900'>
								FrontEnd Developer
							</p>
							<hr className='mb-8 opacity-5' />
							<p className='mb-8'>
								I am a software Developer 
								<br /> I am results-driven professional with strong expertise in systems analysis, Web site design, and front-end using JavaScript, React, Node, Html, Css.
							</p>
						</div>
						
						<button className='btn btn-md bg-red-900 hover:bg-red-900-hover transition-all'
						onClick={() => window.location = "mailto:charlotemm7694@gmail.com"}
						>
							Email Me
							<FiMail />
						</button>
					</div>
					<div className="rows download">
								<p>
									<a href={myResume} className="button">
										<button Download className="btn btn-md bg-red-900 hover:bg-red-900-hover transition-all fa fa-download" >
											See My Resume
										</button>
									</a>
								</p>
							</div>
				</div>
			</div>
		</section>
	);
};

export default About;
