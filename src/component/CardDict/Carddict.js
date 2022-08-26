import React from 'react'
import { useNavigate } from "react-router-dom"


const Carddict = ({img, name, location, tag, id, story}) => {
    const navigate= useNavigate()
 
  return (
    <div className='CardpageCon2'>
    <div className='card-page2'>
        <div className="card2" onClick={()=>{navigate('/about/' +id)}}>
            <img src={img} alt='displaimage' width={300}/>
            <p className='name2'>{name}</p>
            <p className='location2'>{location}</p>
            <p className='tag2'>{tag}</p>
            
           
            <p className='story2'>{story}</p>

        </div>
    </div>
    </div>
  )
}

export default Carddict