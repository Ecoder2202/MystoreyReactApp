import React from 'react'
import { useNavigate } from "react-router-dom"


const Card = ({img, name, location, tag, id, story}) => {
  const navigate= useNavigate()
 
  return (
<div className='mainCardCon'>
    <div className='CardContainer'>
        <div className="card1" onClick={()=>{navigate('/about/' +id)}}>
            <img src={img} alt='displaimage' />
            <p className='name'>{name}</p>
            <div className='cus-con'>
            <p className='location'>{location}</p>
            <p className='tag'>{tag}</p>
            </div>
            <p className='story'>{story}</p>

        </div>
    </div>
    </div>
  )
}

export default Card