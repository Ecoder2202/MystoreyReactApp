import React from 'react'
import woman from '../image/woman-shoppingbag.png'
import bdi from '../image/borderimg.png'
import './Joshiah.css'

const JoshiahPage = () => {
  return (
    <>
<div className='vendorCon'>

<div className='myCon'>
<h2>Josiah’s Experience</h2>

<button className='ven-btn'>Vendor</button>
<p>I had the best experience shopping
with vasiti. Usability of the website 
was great, very good customer 
service, an all round great experience. 
I would definately be coming back! I 
had the best experience shopping 
with vasiti. Usability of the website 
was great, very good customer 
service, an all round great experience. 
I would definately be coming back!</p>
<div className='myStry'>
<p >Share your own story! </p>
<img className='mybdimg' src ={bdi} alt=''/>
</div>

</div>

<div className='imgBg'>
<img src={woman} alt=''/>
</div>

</div>
    
   

    
    </>
  )
}

export default JoshiahPage