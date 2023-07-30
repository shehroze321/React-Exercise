import React from 'react'
import "./Program.css"
import {programsData , programData} from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"

const Program = () => {
  return (
   
        
    
    <div className="programs" id="program">
        {/* header programs */}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Program</span>
              <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-catogories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>join Now</span><img src={rightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
      
  )
}

export default Program
