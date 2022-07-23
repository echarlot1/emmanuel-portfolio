import React from 'react';
import SkillsData from "./../../data";

// skills images
import SkillImg1 from './../../assets/img/skills/html5.png';
import SkillImg2 from './../../assets/img/skills/css3.png';
import SkillImg3 from './../../assets/img/skills/js.png';
import SkillImg4 from './../../assets/img/skills/reactjs.png';
import SkillImg5 from './../../assets/img/skills/nodejs.png';
import SkillImg6 from './../../assets/img/skills/git.png';
import SkillImg7 from './../../assets/img/skills/jajva-skills.png';
// import SkillImg8 from './../../assets/img/skills/figma.png';

export default function Skills() {
  return (
    <section id='skill' className='bg-secondary' >
      <h1 className='mb-5' >Skills</h1>
      <div className='columns-3' >
        <img src={SkillImg1} alt="skill1" />
        <img src={SkillImg2} alt="skill2" />
        <img src={SkillImg3} alt="skill3" />
        <img src={SkillImg4} alt="skill4" />
        <img src={SkillImg5} alt="skill5" />
        <img src={SkillImg6} alt="skill6" />
        {/* <img src={SkillImg7} alt="skill7" width={45} /> */}
      </div>
      
      
    </section>
  )
}
