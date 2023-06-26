import './contentstory.css';
import Photo2 from '../../assets/Photo2.jpg';
import Photo3 from '../../assets/Photo3.jpg';
import Photo4 from '../../assets/Photo4.jpg';
import Photo11 from '../../assets/Photo11.jpg';
import Photo9 from '../../assets/Photo9.jpg';
import Photo10 from '../../assets/Photo10.jpg';

import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';


function ContentStory() {
  return (
    <div className='content_story'>
      <div className='content_header'>
        <h1 className='content_1'>What do you get with Dashlane?</h1>
        <p className='content_2'>Included in every personal & business plan</p>
        <p className='content_3'>Simple password management across all devices.</p>
      </div>

      <div className='content_container'>
        <div className='content_title_1'>
          <img src={Photo2} alt="content" />
          <div className='content_blog'>
            <h2>Access & manage passwords everywhere</h2>
            <p>Use Dashlane Password Manager across any device or platform.</p>
          </div>
        </div>

        <div className='content_title_2'>
          <img src={Photo3} alt="content" />
          <div className='content_blog'>
            <h2>Unlimited Secure Password Sharing</h2>
            <p>Share Passwords without revealing them and revoke access at any time.</p>
          </div>
        </div>

        <div className='content_title_3'>
          <img src={Photo4} alt="content" />
          <div className='content_blog'>
            <h2>One-click passwords & forms</h2>
            <p>Dashlane fills all your passwords, payments, and personal details wherever you need them, on any device.</p>
          </div>
        </div>
      </div>



      <div className='content_container'>
      <div className='content_title_4'>
          <img src={Photo9} alt="content" />
          <div className='content_blog'>
            <h2>Access & manage passwords everywhere</h2>
            <p>Use Dashlane Password Manager across any device or platform.</p>
            <Link>Try it out <BsArrowRight /> </Link>
          </div>
        </div>

        <div className='content_title_5'>
          <img src={Photo11} alt="content" />
          <div className='content_blog'>
            <h2>Unlimited Secure Password Sharing</h2>
            <p>Share Passwords without revealing them and revoke access at any time.</p>
          </div>
        </div>

        <div className='content_title_6'>
          <img src={Photo10} alt="content" />
          <div className='content_blog'>
            <h2>One-click passwords & forms</h2>
            <p>Dashlane fills all your passwords, payments, and personal details wherever you need them, on any device.</p>
            <Link>Try it out <BsArrowRight /></Link>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content_btn'>
        <button className='content_btn'>Business Password Manager</button>
        </div>
        <div className='content_btn_btn'>
          <button className='content_btn_btn'>Personal Password Manager</button>
        </div>
      </div>
    </div>
  )
}

export default ContentStory
