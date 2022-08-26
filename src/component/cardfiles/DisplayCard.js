import React from 'react'
import "./Card.css"
import Card from './Card'
import carddic from './carddic'


const showCard = (itr, id)=>{
   return <Card 
    id={id}
    key={itr.id}
    img={itr.img}
    name={itr.name}
    location={itr.location}
    tag={itr.tag}
    story={itr.story}
    />
 };

const DisplayCard = () => {
  return(
  <div className='card-content1'>
  {carddic.map(showCard)}

  </div>
  

 
  )
  
 }


export default DisplayCard