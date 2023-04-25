import { useState, useEffect } from 'react';
import Banners from 'api/banners.json';
import Slider from 'react-slick';
import Title from './ui/Title';

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto pt-2 px-2 md:px-0 md:pt-8'>
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
      <Slider className='-mx-2' {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className='block px-2'>
                <img src={banner.image} className='md:rounded-lg' />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
