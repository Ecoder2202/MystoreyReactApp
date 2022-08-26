import React from 'react'
import "./CardDict.css"
import Card from './Carddict'
import carddic from './Dictionary'


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

const LiveCard = () => {
  return(
  <div className='card-content1'>
  {carddic.map(showCard)}

  </div>
  

 
  )
  
 }


export default LiveCard