import Slider from 'react-slick';

import banner from '../../assets/banner-1.png';
import './styles.css'

export function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src={banner} alt="" />
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </Slider>
    </div>
  );
}
