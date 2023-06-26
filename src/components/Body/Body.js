import React from 'react';
import './body.css';
import Photo from '../../assets/Phot.png';

const handleClick = () => {
  alert ('login your account')
}

function Body() {
  return (
    <div className='main_body'>
      <div className='body_container'>
        <div className='body_title'>
          <h3 className='body_tag'>THE SECURITY-FIRST PASSWORD MANAGER</h3>
          <p className='body_title_tag'>Dashlane Password Manager has never been breached. And our zero-knowledge patented encryption means not even we can see your passwords.</p>
        </div>
        <div className='body_btn'>
          <button  onClick={handleClick}
          className='btn_btn'>For your business</button>
          <button className='btn_btn_btn'>For you</button>
        </div>
        <p className='credit'>No credit card required.</p>
      </div>
      <div className='body_photo'>
          <img src={Photo} alt="logo" />
        </div>
    </div>
  )
}

export default Body
