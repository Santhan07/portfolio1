import React from 'react'
import { Element } from 'react-scroll'
import skillImg from "../assets/skills.jpg";
import { LinearProgress } from '@mui/material';
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
      <div className='skillContainer__image'>
        <img src={skillImg} alt="" />
      </div>
      <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillset'>
          <h5>HTML</h5>
          <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>JAVASCRIPT</h5>
          <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>CSS</h5>
          <div className='skillContainer__slider skillContainer__slider3'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>REACT</h5>
          <div className='skillContainer__slider skillContainer__slider4'>
            <LinearProgress variant='determinate' value={85} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>MYSQL</h5>
          <div className='skillContainer__slider skillContainer__slider5'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>MONGO DB</h5>
          <div className='skillContainer__slider skillContainer__slider6'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>NODEJS</h5>
          <div className='skillContainer__slider skillContainer__slider7'>
            <LinearProgress variant='determinate' value={80} />
          </div>
        </div>
        <div className='skillContainer__skillset'>
          <h5>BOOTSTRAP</h5>
          <div className='skillContainer__slider skillContainer__slider8'>
            <LinearProgress variant='determinate' value={85} />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default SkillContainer
