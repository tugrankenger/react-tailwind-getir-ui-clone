import { useState } from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebook } from 'react-icons/fa';
export default function HeroSection() {
  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    TR: '+90',
    IN: '+44',
    DE: '+28',
    IT: '+7',
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };
  return (
    <div className='relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before: inset-0 before:w-full before:h-full before:z-10'>
      <Slider {...settings}>
        <div>
          <img
            className='w-full h-[500px] object-cover'
            src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg'
            alt='slide-1'
          />
        </div>
        <div>
          <img
            className='w-full h-[500px] object-cover'
            src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg'
            alt='slide-2'
          />
        </div>
      </Slider>
      <div className='container flex justify-between items-center absolute top-0 z-20 left-1/2 -translate-x-1/2 h-full'>
        <div className='flex flex-col gap-y-8'>
          <img
            src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'
            alt='getirB'
          />
          <h3 className='text-4xl font-semibold text-white'>
            Dakikalar icinde <br /> kapinizda
          </h3>
        </div>
        <div className='w-[400px] rounded-lg bg-gray-50 p-6'>
          <h4 className='text-center text-primary-brand-color font-semibold mb-4'>
            Giris yap veya kayit ol
          </h4>
          <div className='grid gap-y-4'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder='Select Language'
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className='flag-select'
              />
              <label className='flex-1 relative block'>
                <input
                  required
                  type='text'
                  className='w-full h-14 text-sm px-4 pt-2 border-2 border-gray-200 rounded transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer'
                />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs peer-focus:pt-2 peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs peer-valid:pt-2'>
                  Telefon Numarasi
                </span>
              </label>
            </div>
            <button className='bg-brand-yellow h-12 w-full text-primary-brand-color text-sm font-semibold flex items-center justify-center rounded-md transition-all hover:bg-primary-brand-color hover:text-brand-yellow'>
              Telefon numarasi ile devam et
            </button>
            <hr className='h-[1px] bg-gray-300 my-2' />
            <button className='bg-blue-700 bg-opacity-10 px-4 h-12 w-full text-blue-700 text-opacity-70 text-sm font-semibold flex items-center rounded-md transition-all hover:bg-blue-700 hover:text-white'>
              <FaFacebook size={24} />
              <span className='mx-auto'>Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
