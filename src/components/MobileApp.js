export default function MobileApp() {
  return (
    <div className='bg-primary-brand-color bg-mobile-app flex justify-between items-center text-white  rounded-lg'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='font-bold text-2xl tracking-tight'>Getir'i indirin!</h3>
        <p className='font-semibold'>
          İstediğiniz ürünleri dakikalar içinde kapiniza <br /> getirelim
        </p>
        <nav className='flex gap-x-2 mt-5'>
          <a onClick={(e) => e.preventDefault()} href='!#' className='transition-all transform hover:scale-105'>
            <img
              src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
              alt='appStore'
            />
          </a>
          <a onClick={(e) => e.preventDefault()} href='!#' className='transition-all transform hover:scale-105'>
            <img
              src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
              alt='googlePlay'
            />
          </a>
          <a onClick={(e) => e.preventDefault()} href='!#' className='transition-all transform hover:scale-105'>
            <img
              src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
              alt='appGallery'
            />
          </a>
        </nav>
      </div>
      <picture className='pt-6'>
        <img
          src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'
          alt='phoneLanding'
        />
      </picture>
    </div>
  );
}
