import React, {useState, useEffect} from 'react'
import logo from '../image/vasitilogo.svg'
import './Navbar.css'
import { NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }

  useEffect(()=>{
const changeWidth = ()=>{
  setScreenWidth(window.innerWidth);
}
window.addEventListener('resize', changeWidth)

return ()=>{
  window.removeEventListener('resize', changeWidth)
}
  },[])

  return (
    <>
    <div className='navContainer'>
    <div className='logoCon'>
<img className='imgwgitelogo1' src={logo} alt='' />
    </div>
   {(toggleMenu || screenWidth > 500) &&(
    <div className='navlink'>
    <NavLink className='items' to='/'>About</NavLink>
    <NavLink className='items' to='stories'>Stories</NavLink>
    <NavLink className='items' to='contacts'>Contact</NavLink>
    <NavLink className='items' to='login'>Log in</NavLink>
    <NavLink className='items' to='signup'>Sign Up</NavLink>
    <NavLink className='items' to='register'>Register</NavLink>
    </div>
   )}
    

</div>
<div className='linkscon'>
<Link to ='/'>MARKETPLACE</Link>
<Link to ='/'>WHOLESALE CENTER</Link>
<Link to ='/'>SELLER CENTER</Link>
<Link to ='/'>SERVICES</Link>
<Link to ='/'>INTERNSHIPS</Link>
<Link to ='/'>INTERNSHIPS</Link>
<Link to ='/'>EVENTS</Link>


</div>


<div onClick={toggleNav} className='MobileNav'>
<div className='mobile-key'></div>
<div className='mobile-key'></div>
<div className='mobile-key'></div>
</div>

    </>
  )
}

export default Navbar