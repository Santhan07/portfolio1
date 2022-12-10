import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Components/ExperienceBox/Experience'
import "./ExperienceContainer.css";
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <Experience number="3" title="months Course" />
            <Experience number="15+" title="Projects" style={{backgroundColor:"#f64c08"}} />
        </div>
    </Element>
  )
}

export default ExperienceContainer
