import React from 'react'
import { useParams } from 'react-router-dom'
import carddic from './carddic'

const ShowItems = () => {

    const {id}= useParams()
    const lemmula = carddic[id]
    
  return (
    <div>
<img src={lemmula.img} alt = "lemmula" width={400} />
<h6>{lemmula.desc}</h6>
<h6>{lemmula.price}</h6>
<h6>{lemmula.story}</h6>

    </div>
  )
}

export default ShowItems