import { useState, useEffect } from 'react'
import Banners from 'api/banners.json'
import Slider from 'react-slick';
import Title from './ui/Title';

export default function Campaigns(){
  const [banners, setBanners] = useState([])

  useEffect(()=>{
    setBanners(Banners)
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };

  return(
    <div className='container mx-auto py-8'>
      <Title>Kampanyalar</Title>
      <Slider className='-mx-2' {...settings}>
      {banners.length && banners.map((banner,index)=>(
        <div key={banner.id}>
          <picture className='block px-2'>
            <img src={banner.image} className='rounded-lg' />
          </picture>
        </div>
      ))}
      </Slider>
    </div>
  )
}