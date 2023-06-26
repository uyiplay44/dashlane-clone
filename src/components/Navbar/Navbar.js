import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav_main'>
      <div className='nav_log'>
        <Link to="/"><img src={logo} alt="log" /></Link>
      </div>
      <ul className='nav_title'>
        <Link to="/personal" className='Link'><li>Personal</li></Link>
        <Link to="/business" className='Link'><li>Business</li></Link>
        <Link to="/pricing" className='Link'><li>Pricing</li></Link>
        <Link to="/successstories" className='Link'><li>Success Storie</li></Link>
        <Link to="/resource" className='Link'><li>Resource</li></Link>
      </ul>
      <div className='nav_link'>
        <div className='nav_title_link'>
        <a href="/">Log In</a>
        </div>
        <div className='nav_title_welcom'>
        <a href="/">Get Dashlane</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
