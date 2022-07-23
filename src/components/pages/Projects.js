import React from 'react';
import ProjectsData from "./../../data";

// Projects images
import Project1 from './../../assets/img/projects/blog1.jpeg';
import Project2 from './../../assets/img/projects/blog2.jpeg';
// import SkillImg3 from './../../assets/img/Projects/js.png';
// import SkillImg4 from './../../assets/img/Projects/reactjs.png';

// import SkillImg8 from './../../assets/img/Projects/figma.png';

export default function Projects() {
  return (
    <section id='skill' className='bg-secondary' >
      <h1 className='mb-5' >Projects</h1>
      <div className='gap-12 columns-2 bg-gradient-to-l hover:bg-gradient-to-r ' >
        <button>
          <a href='https://allseasonstech-blog.netlify.app/' target="_blank" rel="noreferrer">
            <img src={Project1} alt="project1" className=' w-0.4  ' />
            
          </a>
          
          
        </button>
        <img src={Project2} alt="project1-1" className='w-small' />
        
        
        
        {/* <img src={SkillImg3} alt="skill3" />
        <img src={SkillImg4} alt="skill4" /> */}
       
      
      </div>
      
      
    </section>
  )
}
