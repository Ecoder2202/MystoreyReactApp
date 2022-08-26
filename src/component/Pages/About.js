import React from 'react'
import abtimg from '../image/Testimonial image 1 (1).png'
import secImg from '../image/black-beautiful-ladies-smiling 1.png'
import borderImg from '../image/borderimg.png'
import DisplayCard from '../cardfiles/DisplayCard'
import JoshiahPage from '../JosiahExp/JoshiahPage'
import LiveCard from '../CardDict/LiveCard'
import Footer from '../Footer/Footer'
import './About.css'

const About = () => {
  return (
    <>
    <div className='aboucontainer'>
      <div className='Abouttxt'><h1>Amazing </h1>
<h1>Experiences from </h1><h1>Our Wonderful</h1> <h1>Customers</h1>
<div className='pcon'>
 <p className='contxt'>Here is what customers and vendors
are saying about</p> <p className='contxt'>us, you can share 
your stories with us too</p>
</div>

</div>
    <div className='AbtImg'> 
    <img src={abtimg} alt='' />
    </div>
    </div>


    {/* SECOND LINE CODE */}

    <div className='secondcon'>
    <div className='secImg'>
      <img src={secImg} alt='' />
    </div>
    <div className='sectxt'>
      <h3>Oby’s Experience</h3>
      <button className='btn-customer'>customer</button>

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
<div className='ptxtconl'>
<div><p className='strtxt'>Share your own story! </p></div>
<div className='borderimg'><img src={borderImg} alt=''/></div>
</div>
    </div>

    </div>
<DisplayCard  className='CardCon'/>
<JoshiahPage />
<LiveCard/>
<Footer />
    </>
  )
}

export default About