import './banner.css';
import Star from '../../assets/Star.png';
import star from '../../assets/star4.png'
import Star2 from '../../assets/Star2.png';
import Apple from '../../assets/Apple.png';

function Banner() {
  return (
    <div className='banner_main'>
      <div className='banner_tag'>
        <h5>We’ve secured</h5>
        <h2>2.5 B+ credentials & 20,000+ companies</h2>
      </div>
      <div className='banner_container'>
        <img src={Star} alt="star" />
        <div className='banner_review'>
        <p>4,182 Reviews</p>
        <span className='star_title'><img src={star} alt="star" />Trustpilot</span>
        </div>
      </div>
      <div className='banner-title'>
        <img src={Star2} alt="" />
        <div className='title_tag'>
          <span>175K Reviews</span>
          <span>Google Play</span>
        </div>
      </div>
      <div className='banner_icon'>
        <img src={Apple} alt="apple" />
        <p>App of the Day</p>
      </div>
    </div>
  )
}

export default Banner
