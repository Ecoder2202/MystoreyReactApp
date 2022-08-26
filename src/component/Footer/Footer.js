import React from 'react'
import './Footer.css'
import footerImg from '../image/subscribe.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
 <div className='footer-con'>
 <div className='FootFcon'>
 <div className='sub-imgCon'> <img src={footerImg} alt='' /></div>
 <div className='inputCon'>
<h2>Be a  member of our community 🎉 </h2>
<p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
<div className='btn-cn'>
<input className='Sub-Int' type='text' placeholder='Enter your email address'/>
<button className='sub-btn'>SUBSCRIBE</button>
</div>
 </div>
 </div>
 {/* FOOTER SECOND PAGE  */}



 <div className='footerlinkcon'>
<div className='firstfoot'>
<h4>Company</h4>
<p>About us</p>
<p>Term of Use</p>
<p>Privacy Policy</p>
<p>Press & Media</p>
</div>
<div className='secondfoot'>
<h4>Products</h4>
<p>Marketplace</p>
<p>Magazine</p>
<p>Seller</p>
<p>Wholesale</p>
<p>Services</p>
</div>

<div className='thirdfoot'>
<h4>Careers</h4>
<p>Become a Campus Rep</p>
<p>Become a Vasiti Influencer</p>
<p>Become a Campus writer</p>
<p>Become an Affiliate</p>
</div>
<div className='forthfoot'>
<h4>Get in touch</h4>
<p>Contact us</p>
<p>Partner with us</p>
<p>Advertise with us</p>
<p>Help/FAQs</p>
</div>
<div className='icon-con'>
<h4>Join our community</h4>
<div className='iconClass'>
<p><FaFacebookF /></p>
<p><AiOutlineInstagram /></p>
<p><BsTwitter /></p>
<p><FaLinkedinIn /></p>
</div>
<p className='iconP'>Email Newsletter</p>

</div>


 </div>
        
        </div>
    </>
  )
}

export default Footer