import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';
export default function Footer() {
  return (
    <div className='bg-white py-4 sm:pt-10 sm:pb-6 sm:mt-10 mt-5'>
      <div className='container mx-auto grid gap-y-5'>
        <div className='grid gap-y-4 sm:grid-cols-2 lg:grid-cols-4 '>
          <nav>
            <h3 className='text-lg text-purple-700 mb-4'>Getir'i indirin!</h3>
            <ul className='grid gap-y-3'>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  <img
                    src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
                    alt='/'
                  />
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  <img
                    src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
                    alt='/'
                  />
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  <img
                    src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
                    alt='/'
                  />
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className='text-lg text-purple-600 mb-4'>Getir'i keşfedin</h3>
            <ul className='grid gap-y-3 text-sm'>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Hakkimizda
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Kariyer
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Teknoloji Kariyerleri
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  İletisim
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Sosyal Sorumluluk Projeleri
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className='text-lg text-purple-700 mb-4'>
              Yardimam mi ihtiyaciniz var?
            </h3>
            <ul className='grid gap-y-3 text-sm'>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Sikca Sorulan Sorular
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Kisisel Verilerin Korunmasi
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'></a>Gizlilik
                Politikasi
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'></a>Kullanim
                Kosullari
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'></a>Crez
                Politikasi
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className='text-lg text-purple-700 mb-4'>İs Ortagimiz Olun</h3>
            <ul className='grid gap-y-3 text-sm'>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Bayimiz Olun
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'></a>Deponuzu
                Kiralayin
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Getiryemek Restorani Olun
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  GetirCarci isletmesi olun
                </a>
              </li>
              <li>
                <a onClick={(e) => e.preventDefault()} href='!#'>
                  Zincir Restoranlar
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='h-[1px] bg-gray-100'></div>
        <div className='flex justify-between items-center flex-col sm:flex-row gap-y-3 sm:gap-y-0 text-sm pt-1 sm:pt-3'>
          <div className='flex gap-x-4 text-gray-700'>
            &copy; 2023 Getir
            <div>
              <a
                onClick={(e) => e.preventDefault()}
                href='!#'
                className=' relative text-purple-800 before:absolute before:inline-block before:bg-purple-800 before:top-1/2 before:-left-2  before:w-1 before:h-1 before:rounded-xl before:mr-3'
              >
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
          </div>
          <nav className='flex gap-x-4 items-center'>
            <a onClick={(e)=>e.preventDefault()} href="!#" className='transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700'><FaFacebook size={20} /></a>
            <a onClick={(e)=>e.preventDefault()} href="!#" className='transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700'><FaTwitter size={20} /></a>
            <a onClick={(e)=>e.preventDefault()} href="!#" className='transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700'><FaInstagram size={20} /></a>
            <a onClick={(e)=>e.preventDefault()} href="!#" className='flex items-center border border-gray-100 rounded-lg transition-colors h-8 gap-x-2 text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700'><FiGlobe size={18} />
							Türkçe (TR)</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
